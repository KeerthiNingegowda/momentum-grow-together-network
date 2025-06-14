
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
      name: "Dr. Emily Zhang",
      title: "Research Scientist at DeepMind",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      initials: "EZ",
      lastMessage: "The multimodal approach you described sounds promising. Would love to collaborate on the vision-language model.",
      timestamp: "1 hour ago",
      unread: true,
      unreadCount: 3
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
      unreadCount: 0
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
      unreadCount: 1
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
      unreadCount: 0
    }
  ];

  const currentMessages = [
    {
      id: 1,
      sender: "Dr. Emily Zhang",
      content: "Hi! I read your recent paper on few-shot learning techniques. Really impressive work on improving sample efficiency.",
      timestamp: "2:30 PM",
      isOwn: false
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
                      <AvatarFallback className="bg-momentum-100 text-momentum-600">EZ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">Dr. Emily Zhang</h3>
                      <p className="text-sm text-gray-600">Research Scientist at DeepMind</p>
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
                      placeholder="Discuss AI research, share insights..." 
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
