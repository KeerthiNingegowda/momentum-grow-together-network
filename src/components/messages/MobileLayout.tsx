
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ConversationsList from "./ConversationsList";
import ChatWindow from "./ChatWindow";

interface Conversation {
  id: number;
  name: string;
  title: string;
  avatar?: string;
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

interface MobileLayoutProps {
  conversations: Conversation[];
  selectedConversation: number;
  currentConversation: Conversation | undefined;
  messages: Message[];
  onSelectConversation: (id: number) => void;
  onAcceptConversation: () => void;
  onDeclineConversation: () => void;
  onSendMessage?: (content: string) => void;
}

const MobileLayout = ({
  conversations,
  selectedConversation,
  currentConversation,
  messages,
  onSelectConversation,
  onAcceptConversation,
  onDeclineConversation,
  onSendMessage
}: MobileLayoutProps) => {
  return (
    <div className="lg:hidden h-screen flex flex-col">
      <Card className="border-0 shadow-sm flex-1 flex flex-col overflow-hidden">
        <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header with Sheet for Conversations */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Conversations</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 h-full">
                <div className="h-full overflow-hidden">
                  <ConversationsList 
                    conversations={conversations}
                    selectedConversation={selectedConversation}
                    onSelectConversation={onSelectConversation}
                  />
                </div>
              </SheetContent>
            </Sheet>
            
            {currentConversation && (
              <div className="flex items-center space-x-2 min-w-0 flex-1 ml-4">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={currentConversation.avatar} />
                  <AvatarFallback className="bg-momentum-100 text-momentum-600 text-xs">
                    {currentConversation.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">
                    {currentConversation.name}
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Chat Window */}
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <ChatWindow 
              currentConversation={currentConversation}
              messages={messages}
              onAcceptConversation={onAcceptConversation}
              onDeclineConversation={onDeclineConversation}
              onSendMessage={onSendMessage}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileLayout;
