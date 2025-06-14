
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MoreHorizontal, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        title: "ML Engineer at OpenAI",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        initials: "SC"
      },
      content: "Just shipped our new RAG system that reduced hallucinations by 73% while maintaining response quality. The key was implementing a hybrid retrieval approach combining dense embeddings with keyword matching. Sometimes the best AI solutions combine old-school techniques with cutting-edge models! 🚀",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      likes: 156,
      comments: 34,
      shares: 18,
      timestamp: "3 hours ago"
    },
    {
      id: 2,
      author: {
        name: "Marcus Rodriguez",
        title: "Principal Data Scientist at Anthropic",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        initials: "MR"
      },
      content: "Hot take: Most companies don't need GPT-4 for their use cases. We saved $2M annually by fine-tuning smaller models for specific tasks. Before jumping to the latest LLM, ask: 'What's the minimum viable model that solves this problem?' Your CFO will thank you. What's been your experience with model right-sizing?",
      likes: 243,
      comments: 67,
      shares: 41,
      timestamp: "6 hours ago"
    },
    {
      id: 3,
      author: {
        name: "Dr. Priya Patel",
        title: "Head of AI Research at Scale AI",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        initials: "PP"
      },
      content: "Mentorship Monday: Looking for 5 mid-level data scientists who want to level up their MLOps game. I'll be hosting virtual office hours next week covering model monitoring, A/B testing ML systems, and production debugging. Building the next generation of AI practitioners is what drives me! Apply in comments 👇",
      likes: 89,
      comments: 28,
      shares: 15,
      timestamp: "8 hours ago"
    }
  ];

  const trendingTopics = [
    { name: "Large Language Models", count: "3.2k posts" },
    { name: "MLOps & Production AI", count: "2.8k posts" },
    { name: "RAG Systems", count: "1.9k posts" },
    { name: "AI Ethics & Safety", count: "1.4k posts" },
    { name: "Computer Vision", count: "1.1k posts" }
  ];

  const suggestedConnections = [
    {
      name: "Alex Kim",
      title: "Staff ML Engineer",
      mutualConnections: 15,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      initials: "AK"
    },
    {
      name: "Jamie Liu",
      title: "Research Scientist",
      mutualConnections: 11,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      initials: "JL"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* User Quick Stats */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-3">
                    <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face" />
                    <AvatarFallback className="bg-momentum-100 text-momentum-600">You</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-gray-900">Welcome back!</h3>
                  <p className="text-sm text-gray-600 mb-3">Build your AI career momentum</p>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-momentum-600">234</div>
                      <div className="text-xs text-gray-600">AI Connections</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-momentum-600">67</div>
                      <div className="text-xs text-gray-600">ML Posts</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-momentum-600" />
                  Trending in AI
                </h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                      <div className="font-medium text-sm text-gray-900">{topic.name}</div>
                      <div className="text-xs text-gray-500">{topic.count}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face" />
                    <AvatarFallback className="bg-momentum-100 text-momentum-600">You</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="flex-1 justify-start text-gray-500 hover:bg-gray-50">
                    Share your latest AI breakthrough...
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            {posts.map((post) => (
              <Card key={post.id} className="border-0 shadow-sm">
                <CardContent className="p-0">
                  {/* Post Header */}
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback className="bg-momentum-100 text-momentum-600">
                          {post.author.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                        <p className="text-sm text-gray-600">{post.author.title}</p>
                        <p className="text-xs text-gray-500">{post.timestamp}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-3">
                    <p className="text-gray-700 leading-relaxed">{post.content}</p>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="px-4 pb-3">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full rounded-lg object-cover h-64"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="px-4 py-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-momentum-600">
                          <Heart className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-momentum-600">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-momentum-600">
                          <Share2 className="h-4 w-4 mr-2" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Suggested Connections */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-momentum-600" />
                  AI Professionals
                </h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  {suggestedConnections.map((person, index) => (
                    <div key={index} className="px-4 py-3 hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={person.avatar} />
                          <AvatarFallback className="bg-momentum-100 text-momentum-600">
                            {person.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-gray-900">{person.name}</h4>
                          <p className="text-xs text-gray-600">{person.title}</p>
                          <p className="text-xs text-gray-500">{person.mutualConnections} mutual connections</p>
                        </div>
                      </div>
                      <Button size="sm" className="w-full mt-2 bg-momentum-600 hover:bg-momentum-700 text-white">
                        Connect
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-gray-900">AI Community</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Join ML Study Groups
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Find AI Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Attend Tech Talks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
