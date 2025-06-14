
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, UserPlus, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Network = () => {
  const navigate = useNavigate();
  
  const profiles = [
    {
      id: 5,
      name: "Dr. Sarah Chen",
      title: "Senior AI Research Scientist",
      company: "Google DeepMind",
      location: "London, UK",
      initials: "SC",
      skills: ["Machine Learning", "Computer Vision", "PyTorch"],
      mutualConnections: 12,
      isConnected: false,
      pastCompanies: ["ex-OpenAI", "ex-Stanford"]
    },
    {
      id: 6,
      name: "Marcus Rodriguez",
      title: "Principal ML Engineer",
      company: "Tesla",
      location: "Austin, TX",
      initials: "MR",
      skills: ["Autonomous Systems", "Deep Learning", "Python"],
      mutualConnections: 8,
      isConnected: false,
      pastCompanies: ["ex-Waymo", "ex-Uber"]
    },
    {
      id: 7,
      name: "Dr. Aisha Patel",
      title: "Head of AI Ethics",
      company: "Microsoft",
      location: "Seattle, WA",
      initials: "AP",
      skills: ["AI Ethics", "Policy", "Research"],
      mutualConnections: 15,
      isConnected: true,
      pastCompanies: ["ex-Google", "ex-MIT"]
    },
    {
      id: 8,
      name: "James Liu",
      title: "Staff Software Engineer",
      company: "OpenAI",
      location: "San Francisco, CA",
      initials: "JL",
      skills: ["LLMs", "Distributed Systems", "Rust"],
      mutualConnections: 6,
      isConnected: false,
      pastCompanies: ["ex-Anthropic"]
    },
    {
      id: 9,
      name: "Dr. Elena Kowalski",
      title: "Robotics Research Lead",
      company: "Boston Dynamics",
      location: "Boston, MA",
      initials: "EK",
      skills: ["Robotics", "Control Systems", "C++"],
      mutualConnections: 4,
      isConnected: false,
      pastCompanies: ["ex-iRobot", "ex-NASA"]
    },
    {
      id: 10,
      name: "David Kim",
      title: "VP of Engineering",
      company: "Anthropic",
      location: "San Francisco, CA",
      initials: "DK",
      skills: ["Leadership", "AI Safety", "Scaling"],
      mutualConnections: 22,
      isConnected: false,
      pastCompanies: ["ex-Lovable", "ex-Meta"]
    }
  ];

  const handleStartConversation = (profile: typeof profiles[0]) => {
    // Navigate to messages page with the selected user's ID
    navigate(`/messages?user=${profile.id}`, { 
      state: { 
        selectedUser: {
          id: profile.id,
          name: profile.name,
          title: profile.title,
          initials: profile.initials
        }
      }
    });
  };

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
                    {/* Past Companies */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {profile.pastCompanies.map((pastCompany, index) => (
                        <span key={index} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                          {pastCompany}
                        </span>
                      ))}
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
                  <Button 
                    onClick={() => handleStartConversation(profile)}
                    className={`flex-1 text-sm ${
                      profile.isConnected 
                        ? "variant-outline" 
                        : "bg-momentum-600 hover:bg-momentum-700 text-white"
                    }`}
                    variant={profile.isConnected ? "outline" : "default"}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Start conversation
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
