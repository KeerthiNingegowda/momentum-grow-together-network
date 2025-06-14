import { MoreHorizontal, Send, Check, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface Conversation {
  id: number;
  name: string;
  title: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  unreadCount: number;
  archived: boolean;
  avatar?: string; // Made optional since we're using initials
}

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  needsResponse?: boolean;
}

interface ChatWindowProps {
  currentConversation: Conversation | undefined;
  messages: Message[];
  onAcceptConversation: () => void;
  onDeclineConversation: () => void;
}

const ChatWindow = ({ 
  currentConversation, 
  messages, 
  onAcceptConversation, 
  onDeclineConversation 
}: ChatWindowProps) => {
  if (!currentConversation) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
          <p className="text-gray-500">Choose a conversation from the list to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Chat Header - Fixed and visible */}
      <div className="p-8 border-b border-gray-200 bg-white flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-6 min-w-0 flex-1">
          <Avatar className="w-14 h-14 flex-shrink-0">
            <AvatarFallback className="bg-momentum-100 text-momentum-600 font-semibold">
              {currentConversation.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-6 truncate">
              {currentConversation.name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 truncate mt-2">
              {currentConversation.title}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={message.id}>
            <div 
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-md px-4 py-3 rounded-lg ${
                message.isOwn 
                  ? 'bg-momentum-600 text-white' 
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${
                  message.isOwn ? 'text-momentum-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
            
            {/* Accept/Decline buttons after first message */}
            {index === 0 && message.needsResponse && (
              <div className="flex justify-center mt-4">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm max-w-sm">
                  <p className="text-sm text-gray-600 text-center font-medium">Accept this conversation?</p>
                  <div className="flex space-x-2">
                    <Button
                      onClick={onAcceptConversation}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button
                      onClick={onDeclineConversation}
                      size="sm"
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
        <div className="flex space-x-3">
          <Input 
            placeholder="Discuss AI research, share insights..." 
            className="flex-1"
          />
          <Button className="bg-momentum-600 hover:bg-momentum-700 text-white px-6">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
