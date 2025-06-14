
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Users, Target, Zap, MessageCircle, Share2, LinkedinIcon, TwitterIcon, ArrowRight } from "lucide-react";

const Profile = () => {
  const keyWins = [
    { metric: "40%", label: "User Retention Increase", icon: TrendingUp },
    { metric: "3", label: "SaaS Scale-ups", icon: Target },
    { metric: "$2M+", label: "Revenue Generated", icon: Zap },
    { metric: "50+", label: "Teams Led", icon: Users }
  ];

  const recentWins = [
    "Launched AI-powered feature that reduced churn by 35% in 6 months",
    "Built and scaled product team from 5 to 25 people at TechCorp",
    "Led digital transformation saving $500K annually"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hero Elevator Pitch */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 mb-6 bg-gradient-to-br from-momentum-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Avatar className="w-20 h-20 ring-4 ring-momentum-200">
                    <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face" />
                    <AvatarFallback className="text-xl bg-momentum-100 text-momentum-600">JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Jordan Smith</h1>
                    <div className="text-lg text-momentum-700 font-semibold mb-4">
                      I help SaaS companies turn struggling products into market leaders
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      <span className="font-semibold text-momentum-600">In the last 3 years:</span> I've transformed underperforming products at 3 different SaaS companies, 
                      increasing user retention by an average of 40% and generating over $2M in additional revenue. 
                      My secret? I combine data-driven strategy with human psychology to build products people actually love using.
                    </p>
                    <div className="flex space-x-3">
                      <Button size="lg" className="bg-momentum-600 hover:bg-momentum-700">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Let's Connect
                      </Button>
                      <Button variant="outline" size="lg">
                        <Share2 className="h-5 w-5 mr-2" />
                        Share Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {keyWins.map((win, index) => {
                const Icon = win.icon;
                return (
                  <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <Icon className="h-8 w-8 text-momentum-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-momentum-600 mb-1">{win.metric}</div>
                      <div className="text-sm text-gray-600 font-medium">{win.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Wins */}
            <Card className="shadow-lg border-0 mb-6">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Zap className="h-6 w-6 text-momentum-600 mr-2" />
                  Recent Game-Changers
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWins.map((win, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-momentum-50 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-momentum-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{win}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What I'm Looking For */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-momentum-600 to-momentum-700 text-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">What I'm Looking For Right Now</h2>
                <p className="text-momentum-50 leading-relaxed mb-4">
                  I'm connecting with <span className="font-semibold">VPs of Product, CTOs, and Founders</span> who are 
                  frustrated with slow product growth or high churn rates. If you're scaling a B2B SaaS and need someone 
                  who can diagnose problems fast and execute solutions faster, let's talk.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-momentum-700 hover:bg-momentum-50">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Contact */}
            <Card className="shadow-lg border-0 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Connect</h3>
                <div className="space-y-3 mb-4">
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Based in:</span> San Francisco, CA
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Response time:</span> Usually within 2 hours
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Open to:</span> Consulting, Full-time, Advisory
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <LinkedinIcon className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <TwitterIcon className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>

                <div className="text-center pt-4 border-t">
                  <div className="text-2xl font-bold text-momentum-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Connection Response Rate</div>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="font-bold text-gray-900">My Superpowers</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "0→1 Product Strategy",
                    "User Retention Optimization", 
                    "Cross-functional Leadership",
                    "Growth Product Management",
                    "Data-Driven Decision Making"
                  ].map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="w-full justify-start bg-momentum-100 text-momentum-700 hover:bg-momentum-200 px-3 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
