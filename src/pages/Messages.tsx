
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import ConversationsList from "@/components/messages/ConversationsList";
import ChatWindow from "@/components/messages/ChatWindow";
import MobileLayout from "@/components/messages/MobileLayout";

const Messages = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Dr. Emily Zhang",
      title: "Research Scientist at DeepMind",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      initials: "EZ",
      lastMessage: "The multimodal approach you described sounds promising. Would love to collaborate on the vision-language model.",
      timestamp: "1 hour ago",
      unread: true,
      unreadCount: 3,
      archived: false
    },
    {
      id: 2,
      name: "Alex Thompson",
      title: "ML Engineering Lead at Hugging Face",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      initials: "AT",
      lastMessage: "Great insights on model optimization! Our team is facing similar inference latency challenges.",
      timestamp: "3 hours ago",
      unread: false,
      unreadCount: 0,
      archived: false
    },
    {
      id: 3,
      name: "Priya Sharma",
      title: "Principal Data Scientist at Microsoft",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      initials: "PS",
      lastMessage: "The reinforcement learning paper you shared was exactly what I needed for our recommendation system.",
      timestamp: "5 hours ago",
      unread: true,
      unreadCount: 1,
      archived: false
    },
    {
      id: 4,
      name: "Jordan Kim",
      title: "AI Ethics Researcher at Anthropic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      initials: "JK",
      lastMessage: "Your thoughts on bias mitigation in large language models would be valuable for our upcoming panel.",
      timestamp: "1 day ago",
      unread: false,
      unreadCount: 0,
      archived: false
    }
  ]);

  // Handle navigation from Network page
  useEffect(() => {
    const userParam = searchParams.get('user');
    const selectedUser = location.state?.selectedUser;
    
    if (userParam && selectedUser) {
      const userId = parseInt(userParam);
      
      // Check if conversation already exists
      const existingConversation = conversations.find(conv => conv.id === userId);
      
      if (!existingConversation) {
        // Create new conversation for the selected user
        const newConversation = {
          id: userId,
          name: selectedUser.name,
          title: selectedUser.title,
          avatar: selectedUser.avatar,
          initials: selectedUser.initials,
          lastMessage: "Start a conversation...",
          timestamp: "now",
          unread: false,
          unreadCount: 0,
          archived: false
        };
        
        setConversations(prev => [newConversation, ...prev]);
      }
      
      setSelectedConversation(userId);
    }
  }, [searchParams, location.state]);

  const currentMessages = [
    {
      id: 1,
      sender: "Dr. Emily Zhang",
      content: "Hi! I read your recent paper on few-shot learning techniques. Really impressive work on improving sample efficiency.",
      timestamp: "2:30 PM",
      isOwn: false,
      needsResponse: true
    },
    {
      id: 2,
      sender: "You",
      content: "Thank you! We were inspired by your work on meta-learning. The gradient-based adaptation approach was a game-changer for our experiments.",
      timestamp: "2:35 PM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Dr. Emily Zhang",
      content: "The multimodal approach you described sounds promising. Our team is working on vision-language models and could benefit from your domain adaptation techniques.",
      timestamp: "2:40 PM",
      isOwn: false
    },
    {
      id: 4,
      sender: "Dr. Emily Zhang",
      content: "Would love to collaborate on this! We have some interesting benchmark datasets that might be perfect for testing your approach.",
      timestamp: "2:41 PM",
      isOwn: false
    }
  ];

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  const handleAcceptConversation = () => {
    toast({
      title: "Connection accepted",
      description: "You can now continue the conversation freely.",
    });
  };

  const handleDeclineConversation = () => {
    setConversations(prev => 
      prev.map(conv => 
        conv.id === selectedConversation 
          ? { ...conv, archived: true }
          : conv
      )
    );
    
    toast({
      title: "Conversation declined and archived",
      description: "This conversation has been archived and will be permanently deleted after 7 days.",
      variant: "destructive",
    });
  };

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
                  conversations={conversations}
                  selectedConversation={selectedConversation}
                  onSelectConversation={setSelectedConversation}
                />
              </CardContent>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm h-full">
              <CardContent className="p-0 h-full">
                <ChatWindow 
                  currentConversation={currentConversation}
                  messages={currentMessages}
                  onAcceptConversation={handleAcceptConversation}
                  onDeclineConversation={handleDeclineConversation}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Layout */}
        <MobileLayout 
          conversations={conversations}
          selectedConversation={selectedConversation}
          currentConversation={currentConversation}
          messages={currentMessages}
          onSelectConversation={setSelectedConversation}
          onAcceptConversation={handleAcceptConversation}
          onDeclineConversation={handleDeclineConversation}
        />
      </div>
    </div>
  );
};

export default Messages;
