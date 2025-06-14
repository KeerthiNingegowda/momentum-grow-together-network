
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal, Send } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Product Manager at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      initials: "SJ",
      lastMessage: "Thanks for connecting! I'd love to discuss potential collaboration opportunities.",
      timestamp: "2 hours ago",
      unread: true,
      unreadCount: 2
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Senior Developer at StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      initials: "MC",
      lastMessage: "Great meeting you at the networking event yesterday!",
      timestamp: "5 hours ago",
      unread: false,
      unreadCount: 0
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Marketing Director at GrowthCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      initials: "ER",
      lastMessage: "I have some insights about the marketing strategies we discussed.",
      timestamp: "1 day ago",
      unread: true,
      unreadCount: 1
    },
    {
      id: 4,
      name: "David Park",
      title: "UX Designer at DesignStudio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      initials: "DP",
      lastMessage: "The portfolio you shared is impressive. Let's schedule a call.",
      timestamp: "2 days ago",
      unread: false,
      unreadCount: 0
    }
  ];

  const currentMessages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hi! Thanks for accepting my connection request.",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      content: "Hi Sarah! Great to connect with you. I saw your post about the new product launch.",
      timestamp: "10:35 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content: "Thanks! It's been an exciting project. I'd love to discuss potential collaboration opportunities with your team.",
      timestamp: "10:40 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "Sarah Johnson",
      content: "Are you available for a quick call this week?",
      timestamp: "10:41 AM",
      isOwn: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm h-full">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Messages</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search conversations..." 
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Conversations */}
                <div className="flex-1 overflow-y-auto">
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id} 
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${
                        conversation.id === 1 ? 'bg-momentum-50 border-l-4 border-l-momentum-600' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback className="bg-momentum-100 text-momentum-600">
                            {conversation.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900 truncate">
                              {conversation.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                              {conversation.unread && (
                                <Badge className="bg-momentum-600 text-white text-xs">
                                  {conversation.unreadCount}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{conversation.title}</p>
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
              </CardContent>
            </Card>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm h-full">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" />
                      <AvatarFallback className="bg-momentum-100 text-momentum-600">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                      <p className="text-sm text-gray-600">Product Manager at TechCorp</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentMessages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
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
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Type your message..." 
                      className="flex-1"
                    />
                    <Button className="bg-momentum-600 hover:bg-momentum-700 text-white">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
