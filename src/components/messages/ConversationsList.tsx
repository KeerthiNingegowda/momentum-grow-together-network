
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Conversation {
  id: number;
  name: string;
  title: string;
  avatar: string;
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
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex-shrink-0">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">AI Conversations</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search AI professionals..." 
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {activeConversations.map((conversation) => (
          <div 
            key={conversation.id} 
            onClick={() => onSelectConversation(conversation.id)}
            className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
              conversation.id === selectedConversation ? 'bg-momentum-50 border-l-4 border-l-momentum-600' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              <Avatar className="w-12 h-12 flex-shrink-0">
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback className="bg-momentum-100 text-momentum-600">
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
                      <Badge className="bg-momentum-600 text-white text-xs">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-1 truncate">{conversation.title}</p>
                <p className={`text-sm truncate ${
                  conversation.unread ? 'text-gray-900 font-medium' : 'text-gray-500'
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
