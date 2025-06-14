
import { MoreHorizontal, Send, Check, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
  avatar?: string;
  conversationId?: string;
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

interface ChatWindowProps {
  currentConversation: Conversation | undefined;
  messages: Message[];
  onAcceptConversation: () => void;
  onDeclineConversation: () => void;
  onSendMessage?: (content: string) => void;
}

const ChatWindow = ({ 
  currentConversation, 
  messages, 
  onAcceptConversation, 
  onDeclineConversation,
  onSendMessage 
}: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() && onSendMessage) {
      onSendMessage(newMessage.trim());
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!currentConversation) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-momentum-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <MessageCircle className="h-16 w-16 text-momentum-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a conversation</h3>
          <p className="text-gray-600">Choose a conversation from the list to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Chat Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-white to-momentum-25 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <Avatar className="w-12 h-12 flex-shrink-0 ring-2 ring-momentum-200">
            <AvatarFallback className="bg-momentum-200 text-momentum-700 font-semibold">
              {currentConversation.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-6 truncate">
              {currentConversation.name}
            </h3>
            <p className="text-sm text-momentum-600 leading-5 truncate mt-1 font-medium">
              {currentConversation.title}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="flex-shrink-0 hover:bg-momentum-100">
          <MoreHorizontal className="h-5 w-5 text-gray-600" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-25 to-momentum-25">
        {messages.map((message, index) => (
          <div key={message.id}>
            <div 
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-md px-4 py-3 rounded-lg shadow-sm ${
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
              <div className="flex justify-center mt-6">
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-white border border-gray-200 rounded-xl p-5 shadow-md max-w-sm">
                  <p className="text-sm text-gray-700 text-center font-medium">Accept this conversation?</p>
                  <div className="flex space-x-3">
                    <Button
                      onClick={onAcceptConversation}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white shadow-sm"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button
                      onClick={onDeclineConversation}
                      size="sm"
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50 shadow-sm"
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
      <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-white to-momentum-25 flex-shrink-0">
        <div className="flex space-x-3">
          <Input 
            placeholder="Discuss AI research, share insights..." 
            className="flex-1 border-gray-300 focus:border-momentum-500 focus:ring-momentum-500 bg-white"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-momentum-600 hover:bg-momentum-700 text-white px-6 shadow-sm"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
