
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
        name: "Sarah Johnson",
        title: "Product Manager at TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        initials: "SJ"
      },
      content: "Excited to share that our team just launched a new feature that helps professionals connect more meaningfully. Building authentic relationships in the digital age is more important than ever! 🌱",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      likes: 24,
      comments: 8,
      shares: 3,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: {
        name: "Michael Chen",
        title: "Senior Developer at StartupXYZ",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        initials: "MC"
      },
      content: "Just finished an amazing networking session at the local tech meetup. The key to successful networking isn't collecting business cards - it's about building genuine connections and helping others succeed. What's your best networking tip?",
      likes: 18,
      comments: 12,
      shares: 5,
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      author: {
        name: "Emma Rodriguez",
        title: "Marketing Director at GrowthCo",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        initials: "ER"
      },
      content: "Mentorship Monday: Looking for 3 junior marketers who want to learn about growth strategies. I'll be hosting a virtual coffee chat next week. Building the next generation of professionals is what momentum is all about! 💪",
      likes: 42,
      comments: 16,
      shares: 8,
      timestamp: "6 hours ago"
    }
  ];

  const trendingTopics = [
    { name: "Professional Development", count: "2.1k posts" },
    { name: "Remote Work", count: "1.8k posts" },
    { name: "Leadership Tips", count: "1.2k posts" },
    { name: "Career Growth", count: "987 posts" },
    { name: "Networking", count: "756 posts" }
  ];

  const suggestedConnections = [
    {
      name: "David Park",
      title: "UX Designer",
      mutualConnections: 12,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      initials: "DP"
    },
    {
      name: "Lisa Wong",
      title: "Data Scientist",
      mutualConnections: 8,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      initials: "LW"
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
                  <p className="text-sm text-gray-600 mb-3">Build your professional momentum</p>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-momentum-600">156</div>
                      <div className="text-xs text-gray-600">Connections</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-momentum-600">42</div>
                      <div className="text-xs text-gray-600">Posts</div>
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
                  Trending Topics
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
                    Share your professional insights...
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
                  Suggested Connections
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
                <h3 className="font-semibold text-gray-900">Quick Actions</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Create Event
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Find Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Join Groups
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
