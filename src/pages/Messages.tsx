
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useConversations, useCreateConversation, useArchiveConversation } from "@/hooks/useConversations";
import { useConnectionRequests, useUpdateConnectionRequest } from "@/hooks/useConnectionRequests";
import { useMessages } from "@/hooks/useMessages";
import { supabase } from "@/integrations/supabase/client";
import ConversationsList from "@/components/messages/ConversationsList";
import ChatWindow from "@/components/messages/ChatWindow";
import MobileLayout from "@/components/messages/MobileLayout";

interface FormattedConversation {
  id: number;
  name: string;
  title: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  unreadCount: number;
  archived: boolean;
  conversationId?: string;
  connectionRequestId?: string;
  isPendingRequest?: boolean;
}

const Messages = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
  const { data: conversations = [], isLoading: conversationsLoading } = useConversations();
  const { data: connectionRequests = [] } = useConnectionRequests();
  const { data: messages = [] } = useMessages(selectedConversationId);
  
  const updateConnectionRequest = useUpdateConnectionRequest();
  const createConversation = useCreateConversation();
  const archiveConversation = useArchiveConversation();

  // Get current user ID on component mount
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          // Get the user's profile ID
          const { data: profile } = await supabase
            .from('profiles')
            .select('id')
            .eq('user_id', user.id)
            .single();
          
          if (profile) {
            setCurrentUserId(profile.id);
          } else {
            // If no profile exists, use the first profile as fallback for demo
            const { data: firstProfile } = await supabase
              .from('profiles')
              .select('id')
              .limit(1)
              .single();
            if (firstProfile) {
              setCurrentUserId(firstProfile.id);
            }
          }
        }
      } catch (error) {
        console.error('Error getting current user:', error);
        // Fallback: use first profile for demo purposes
        try {
          const { data: firstProfile } = await supabase
            .from('profiles')
            .select('id')
            .limit(1)
            .single();
          if (firstProfile) {
            setCurrentUserId(firstProfile.id);
          }
        } catch (fallbackError) {
          console.error('Error getting fallback profile:', fallbackError);
        }
      }
    };

    getCurrentUser();
  }, []);

  // Convert data to format expected by existing components
  const formattedConversations: FormattedConversation[] = conversations.map(conv => ({
    id: parseInt(conv.id.split('-')[0], 16), // Convert UUID to number for compatibility
    name: conv.other_profile?.name || 'Unknown',
    title: conv.other_profile?.title || '',
    initials: conv.other_profile?.initials || '',
    lastMessage: conv.last_message?.content || 'Start a conversation...',
    timestamp: formatTimestamp(conv.last_message?.created_at || conv.created_at),
    unread: false, // TODO: Calculate based on unread messages
    unreadCount: 0, // TODO: Calculate based on unread messages
    archived: false, // TODO: Check if archived by current user
    conversationId: conv.id, // Keep original UUID for API calls
  }));

  // Add pending connection requests as "conversations"
  const requestConversations: FormattedConversation[] = connectionRequests.map(req => ({
    id: parseInt(req.id.split('-')[0], 16),
    name: req.sender_profile?.name || 'Unknown',
    title: req.sender_profile?.title || '',
    initials: req.sender_profile?.initials || '',
    lastMessage: req.message,
    timestamp: formatTimestamp(req.created_at),
    unread: true,
    unreadCount: 1,
    archived: false,
    connectionRequestId: req.id,
    isPendingRequest: true,
  }));

  const allConversations = [...requestConversations, ...formattedConversations];
  const selectedConversation = allConversations.find(conv => 
    conv.conversationId === selectedConversationId
  );

  // Convert messages to expected format
  const formattedMessages = messages.map((msg, index) => ({
    id: index + 1,
    sender: msg.sender_profile?.name || 'Unknown',
    content: msg.content,
    timestamp: formatTimestamp(msg.created_at),
    isOwn: msg.sender_profile_id === currentUserId, // Check if message is from current user
    needsResponse: index === 0 && selectedConversation?.isPendingRequest,
  }));

  const handleSelectConversation = (id: number) => {
    const conv = allConversations.find(c => c.id === id);
    if (conv?.conversationId) {
      setSelectedConversationId(conv.conversationId);
    }
  };

  const handleAcceptConversation = async () => {
    if (!selectedConversation?.connectionRequestId) return;

    try {
      await updateConnectionRequest.mutateAsync({
        id: selectedConversation.connectionRequestId,
        status: 'accepted'
      });

      toast({
        title: "Connection accepted",
        description: "You can now continue the conversation freely.",
      });
    } catch (error) {
      toast({
        title: "Error accepting connection",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeclineConversation = async () => {
    if (!selectedConversation?.connectionRequestId) return;

    try {
      await updateConnectionRequest.mutateAsync({
        id: selectedConversation.connectionRequestId,
        status: 'declined'
      });

      toast({
        title: "Connection declined",
        description: "This conversation request has been declined.",
        variant: "destructive",
      });
    } catch (error) {
      toast({
        title: "Error declining connection",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle navigation from Network page
  useEffect(() => {
    const userParam = searchParams.get('user');
    const selectedUser = location.state?.selectedUser;
    
    if (userParam && selectedUser) {
      const userId = parseInt(userParam);
      
      // Check if conversation already exists
      const existingConversation = allConversations.find(conv => conv.id === userId);
      
      if (existingConversation?.conversationId) {
        setSelectedConversationId(existingConversation.conversationId);
      }
    }
  }, [searchParams, location.state, allConversations]);

  if (conversationsLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-momentum-600" />
            <span className="ml-2 text-gray-600">Loading conversations...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-6 pt-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm h-full">
              <CardContent className="p-0 h-full">
                <ConversationsList 
                  conversations={allConversations}
                  selectedConversation={selectedConversation?.id || 0}
                  onSelectConversation={handleSelectConversation}
                />
              </CardContent>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm h-full">
              <CardContent className="p-0 h-full">
                <ChatWindow 
                  currentConversation={selectedConversation}
                  messages={formattedMessages}
                  onAcceptConversation={handleAcceptConversation}
                  onDeclineConversation={handleDeclineConversation}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Layout */}
        <MobileLayout 
          conversations={allConversations}
          selectedConversation={selectedConversation?.id || 0}
          currentConversation={selectedConversation}
          messages={formattedMessages}
          onSelectConversation={handleSelectConversation}
          onAcceptConversation={handleAcceptConversation}
          onDeclineConversation={handleDeclineConversation}
        />
      </div>
    </div>
  );
};

// Helper function to format timestamps
function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);

  if (diffInHours < 1) {
    return "now";
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hour${Math.floor(diffInHours) !== 1 ? 's' : ''} ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
}

export default Messages;
