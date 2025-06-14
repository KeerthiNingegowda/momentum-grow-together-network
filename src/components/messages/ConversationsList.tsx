
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Conversation {
  id: number;
  name: string;
  title: string;
  avatar?: string; // Made optional since we're using initials
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  unreadCount: number;
  archived: boolean;
}

interface ConversationsListProps {
  conversations: Conversation[];
  selectedConversation: number;
  onSelectConversation: (id: number) => void;
}

const ConversationsList = ({ 
  conversations, 
  selectedConversation, 
  onSelectConversation 
}: ConversationsListProps) => {
  const activeConversations = conversations.filter(conv => !conv.archived);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0 bg-momentum-25">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search conversations..." 
            className="pl-10 bg-white border-gray-300 focus:border-momentum-500 focus:ring-momentum-500"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto bg-gray-25">
        {activeConversations.map((conversation) => (
          <div 
            key={conversation.id} 
            onClick={() => onSelectConversation(conversation.id)}
            className={`p-4 border-b border-gray-100 hover:bg-momentum-25 cursor-pointer transition-all duration-200 ${
              conversation.id === selectedConversation 
                ? 'bg-momentum-100 border-l-4 border-l-momentum-600 shadow-sm' 
                : 'bg-white hover:shadow-sm'
            }`}
          >
            <div className="flex items-start space-x-3">
              <Avatar className="w-12 h-12 flex-shrink-0 ring-2 ring-gray-100">
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback className="bg-momentum-200 text-momentum-700 font-semibold">
                  {conversation.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate text-sm">
                    {conversation.name}
                  </h3>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    {conversation.unread && (
                      <Badge className="bg-momentum-600 hover:bg-momentum-700 text-white text-xs">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-xs text-momentum-600 mb-1 truncate font-medium">{conversation.title}</p>
                <p className={`text-sm truncate ${
                  conversation.unread ? 'text-gray-900 font-medium' : 'text-gray-600'
                }`}>
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;
