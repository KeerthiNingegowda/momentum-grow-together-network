import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, UserPlus, Briefcase } from "lucide-react";

const Network = () => {
  const profiles = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Senior AI Research Scientist",
      company: "Google DeepMind",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      initials: "SC",
      skills: ["Machine Learning", "Computer Vision", "PyTorch"],
      mutualConnections: 12,
      isConnected: false
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Principal ML Engineer",
      company: "Tesla",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      initials: "MR",
      skills: ["Autonomous Systems", "Deep Learning", "Python"],
      mutualConnections: 8,
      isConnected: false
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      title: "Head of AI Ethics",
      company: "Microsoft",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      initials: "AP",
      skills: ["AI Ethics", "Policy", "Research"],
      mutualConnections: 15,
      isConnected: true
    },
    {
      id: 4,
      name: "James Liu",
      title: "Staff Software Engineer",
      company: "OpenAI",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      initials: "JL",
      skills: ["LLMs", "Distributed Systems", "Rust"],
      mutualConnections: 6,
      isConnected: false
    },
    {
      id: 5,
      name: "Dr. Elena Kowalski",
      title: "Robotics Research Lead",
      company: "Boston Dynamics",
      location: "Boston, MA",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      initials: "EK",
      skills: ["Robotics", "Control Systems", "C++"],
      mutualConnections: 4,
      isConnected: false
    },
    {
      id: 6,
      name: "David Kim",
      title: "VP of Engineering",
      company: "Anthropic",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      initials: "DK",
      skills: ["Leadership", "AI Safety", "Scaling"],
      mutualConnections: 22,
      isConnected: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Network Now</h1>
          <p className="text-gray-600">Grow your career one real connection at a time</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search professionals..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <Card key={profile.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback className="bg-momentum-100 text-momentum-600 text-lg">
                      {profile.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{profile.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{profile.title}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Briefcase className="h-3 w-3 mr-1" />
                      <span>{profile.company}</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Mutual Connections */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    {profile.mutualConnections} mutual connections
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {profile.isConnected ? (
                    <Button 
                      variant="outline" 
                      className="flex-1 text-sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  ) : (
                    <Button 
                      className="flex-1 bg-momentum-600 hover:bg-momentum-700 text-white text-sm"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  )}
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;
