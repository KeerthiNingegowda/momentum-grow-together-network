
import { MoreHorizontal, Send, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      {currentConversation && (
        <div className="p-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <AvatarImage src={currentConversation.avatar} />
              <AvatarFallback className="bg-momentum-100 text-momentum-600">
                {currentConversation.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-sm md:text-lg leading-6 truncate">
                {currentConversation.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-5 truncate">
                {currentConversation.title}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={message.id}>
            <div 
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[280px] md:max-w-xs lg:max-w-md px-3 md:px-4 py-2 rounded-lg ${
                message.isOwn 
                  ? 'bg-momentum-600 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.isOwn ? 'text-momentum-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
            
            {/* Accept/Decline buttons after first message */}
            {index === 0 && message.needsResponse && (
              <div className="flex justify-center mt-4">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm max-w-sm">
                  <p className="text-sm text-gray-600 text-center">Accept this conversation?</p>
                  <div className="flex space-x-2">
                    <Button
                      onClick={onAcceptConversation}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs"
                    >
                      <Check className="h-3 w-3 mr-1" />
                      Accept
                    </Button>
                    <Button
                      onClick={onDeclineConversation}
                      size="sm"
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50 text-xs"
                    >
                      <X className="h-3 w-3 mr-1" />
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
      <div className="p-3 md:p-4 border-t border-gray-100 flex-shrink-0">
        <div className="flex space-x-2">
          <Input 
            placeholder="Discuss AI research, share insights..." 
            className="flex-1 text-sm"
          />
          <Button className="bg-momentum-600 hover:bg-momentum-700 text-white flex-shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
