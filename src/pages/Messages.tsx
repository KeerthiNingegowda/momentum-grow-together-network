
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
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

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  needsResponse?: boolean;
}

const Messages = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedConversationId, setSelectedConversationId] = useState<number>(1);

  // Mock conversations data
  const mockConversations: FormattedConversation[] = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "AI Research Scientist at DeepMind",
      initials: "SC",
      lastMessage: "I'd love to connect and discuss AI ethics research.",
      timestamp: "4 hours ago",
      unread: true,
      unreadCount: 1,
      archived: false,
      isPendingRequest: true,
      connectionRequestId: "request-1"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Machine Learning Engineer at OpenAI",
      initials: "MJ",
      lastMessage: "Thanks for reaching out! I'd be happy to discuss our research.",
      timestamp: "30 minutes ago",
      unread: false,
      unreadCount: 0,
      archived: false,
      conversationId: "conv-2"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Data Science Lead at Meta",
      initials: "ER",
      lastMessage: "Hello! I'm interested in collaborating on machine learning projects.",
      timestamp: "3 hours ago",
      unread: false,
      unreadCount: 0,
      archived: false,
      conversationId: "conv-3"
    },
    {
      id: 4,
      name: "David Kim",
      title: "AI Product Manager at Google",
      initials: "DK",
      lastMessage: "We've been experimenting with gradient compression and asynchronous updates.",
      timestamp: "2 days ago",
      unread: false,
      unreadCount: 0,
      archived: false,
      conversationId: "conv-4"
    }
  ];

  // Mock messages for each conversation
  const mockMessages: { [key: number]: Message[] } = {
    1: [
      {
        id: 1,
        sender: "Sarah Chen",
        content: "I'd love to connect and discuss AI ethics research. Your work on responsible AI development really resonates with my current projects.",
        timestamp: "4 hours ago",
        isOwn: false,
        needsResponse: true
      }
    ],
    2: [
      {
        id: 1,
        sender: "Marcus Johnson",
        content: "Hi! I saw your work on neural architecture search. Really impressive results on the CIFAR-10 benchmarks!",
        timestamp: "2 hours ago",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Thank you! Your research on transformer efficiency caught my attention too. Would love to discuss potential collaboration opportunities.",
        timestamp: "1 hour ago",
        isOwn: true
      },
      {
        id: 3,
        sender: "Marcus Johnson",
        content: "Thanks for reaching out! I'd be happy to discuss our research.",
        timestamp: "30 minutes ago",
        isOwn: false
      }
    ],
    3: [
      {
        id: 1,
        sender: "You",
        content: "Elena, I noticed we both worked on similar problems with recommendation systems. Would you be interested in comparing approaches?",
        timestamp: "1 week ago",
        isOwn: true
      },
      {
        id: 2,
        sender: "Elena Rodriguez",
        content: "Hello! I'm interested in collaborating on machine learning projects.",
        timestamp: "3 hours ago",
        isOwn: false
      }
    ],
    4: [
      {
        id: 1,
        sender: "David Kim",
        content: "Hey! Loved your presentation at NeurIPS. The section on distributed training was especially insightful.",
        timestamp: "5 days ago",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Thanks David! Your work on model parallelization is groundbreaking. How are you handling the communication overhead?",
        timestamp: "3 days ago",
        isOwn: true
      },
      {
        id: 3,
        sender: "David Kim",
        content: "We've been experimenting with gradient compression and asynchronous updates. Happy to share our findings!",
        timestamp: "2 days ago",
        isOwn: false
      }
    ]
  };

  const selectedConversation = mockConversations.find(conv => conv.id === selectedConversationId);
  const currentMessages = mockMessages[selectedConversationId] || [];

  const handleSelectConversation = (id: number) => {
    setSelectedConversationId(id);
  };

  const handleSendMessage = (content: string) => {
    // Mock message sending
    const newMessage: Message = {
      id: currentMessages.length + 1,
      sender: "You",
      content,
      timestamp: "now",
      isOwn: true
    };

    // Add the message to our mock data
    mockMessages[selectedConversationId] = [...currentMessages, newMessage];

    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });

    // Force re-render by updating state
    setSelectedConversationId(selectedConversationId);
  };

  const handleAcceptConversation = () => {
    if (!selectedConversation?.isPendingRequest) return;

    toast({
      title: "Connection accepted",
      description: "You can now continue the conversation freely.",
    });

    // Convert pending request to regular conversation
    const updatedConversation = { ...selectedConversation };
    updatedConversation.isPendingRequest = false;
    updatedConversation.conversationId = `conv-${selectedConversation.id}`;
    delete updatedConversation.connectionRequestId;
  };

  const handleDeclineConversation = () => {
    if (!selectedConversation?.isPendingRequest) return;

    toast({
      title: "Connection declined",
      description: "This conversation request has been declined.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-momentum-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-6 pt-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="border border-gray-200 shadow-lg bg-white h-full">
              <CardContent className="p-0 h-full">
                <ConversationsList 
                  conversations={mockConversations}
                  selectedConversation={selectedConversationId}
                  onSelectConversation={handleSelectConversation}
                />
              </CardContent>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-lg bg-white h-full">
              <CardContent className="p-0 h-full">
                <ChatWindow 
                  currentConversation={selectedConversation}
                  messages={currentMessages}
                  onAcceptConversation={handleAcceptConversation}
                  onDeclineConversation={handleDeclineConversation}
                  onSendMessage={handleSendMessage}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Layout */}
        <MobileLayout 
          conversations={mockConversations}
          selectedConversation={selectedConversationId}
          currentConversation={selectedConversation}
          messages={currentMessages}
          onSelectConversation={handleSelectConversation}
          onAcceptConversation={handleAcceptConversation}
          onDeclineConversation={handleDeclineConversation}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Messages;
