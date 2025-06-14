import Navigation from "@/components/Navigation";
import RealCareerMoments from "@/components/RealCareerMoments";
import CareerCheckIn from "@/components/CareerCheckIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { BookOpen, Users, MessageCircle, PenTool, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [openSections, setOpenSections] = useState({
    trending: false,
    moments: false,
    checkin: false
  });

  const userProfile = {
    name: "Alex Chen",
    roles: ["Data Science", "CX Strategy"]
  };

  const firstName = userProfile.name.split(' ')[0];

  const trendingActivities = [
    {
      activity: "Deep-diving into Transformer architectures",
      context: "Understanding attention mechanisms for NLP projects",
      participants: "127 professionals",
      timeframe: "2 days ago"
    },
    {
      activity: "Exploring ethical AI frameworks", 
      context: "Building responsible AI systems in production",
      participants: "89 professionals",
      timeframe: "3 days ago"
    },
    {
      activity: "Mastering MLOps best practices",
      context: "Streamlining model deployment and monitoring",
      participants: "156 professionals", 
      timeframe: "1 day ago"
    },
    {
      activity: "Customer journey mapping with AI insights",
      context: "Leveraging ML to understand user behavior patterns",
      participants: "73 professionals",
      timeframe: "4 days ago"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleSection = (section: 'trending' | 'moments' | 'checkin') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      {/* Add padding-top to account for fixed navigation */}
      <div className="max-w-4xl mx-auto px-4 py-12 pt-28">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-light text-gray-800 mb-2">
            Welcome back, {firstName}
          </h1>
          <p className="text-gray-600 text-lg font-light mb-6">
            Here's what professionals in {userProfile.roles.join(" & ")} are exploring recently
          </p>
          
          {/* Section Navigation Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              variant="outline"
              onClick={() => scrollToSection('trending-activities')}
              className="flex items-center space-x-2 text-momentum-600 border-momentum-200 hover:bg-momentum-50"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Trending Activities</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('career-moments')}
              className="flex items-center space-x-2 text-momentum-600 border-momentum-200 hover:bg-momentum-50"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Career Moments</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('career-checkin')}
              className="flex items-center space-x-2 text-momentum-600 border-momentum-200 hover:bg-momentum-50"
            >
              <PenTool className="h-4 w-4" />
              <span>Career Check-In</span>
            </Button>
          </div>
        </div>

        {/* Section 1: Trending Activities */}
        <div id="trending-activities" className="mb-16">
          <Collapsible open={openSections.trending} onOpenChange={() => toggleSection('trending')}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <h2 className="text-xl font-medium text-gray-800 mb-1">
                    Trending Activities
                  </h2>
                  <p className="text-gray-600 text-sm">
                    What professionals like you are exploring
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSections.trending ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            
            {/* Preview when collapsed */}
            {!openSections.trending && (
              <div className="grid gap-4 mb-4">
                {trendingActivities.slice(0, 2).map((item, index) => (
                  <Card key={index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-momentum-100 p-2 rounded-full">
                          <BookOpen className="h-4 w-4 text-momentum-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm mb-1">
                            {item.activity}
                          </h3>
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {item.participants}
                            </span>
                            <span>{item.timeframe}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <CollapsibleContent>
              <div className="grid gap-6">
                {trendingActivities.map((item, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-momentum-100 p-3 rounded-full">
                          <BookOpen className="h-5 w-5 text-momentum-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-2">
                            {item.activity}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {item.context}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {item.participants}
                            </span>
                            <span>{item.timeframe}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Section 2: Real Career Moments */}
        <div id="career-moments" className="mb-16">
          <Collapsible open={openSections.moments} onOpenChange={() => toggleSection('moments')}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <h2 className="text-xl font-medium text-gray-800 mb-1">
                    Real Career Moments
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Authentic stories and insights from your professional community
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSections.moments ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            
            {/* Preview when collapsed */}
            {!openSections.moments && (
              <div className="space-y-4 mb-4">
                <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm">Sarah Chen</h3>
                        <p className="text-xs text-gray-600">ML Engineer</p>
                      </div>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed truncate">
                      I led my first stakeholder alignment workshop. Took 3 tries, but I finally figured out how to frame trade-offs...
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm">Marcus Johnson</h3>
                        <p className="text-xs text-gray-600">Data Scientist</p>
                      </div>
                      <span className="text-xs text-gray-500">5 days ago</span>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed truncate">
                      Been experimenting with explaining model predictions to non-technical users...
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            <CollapsibleContent>
              <RealCareerMoments />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Section 3: Career Check-In */}
        <div id="career-checkin" className="mb-16">
          <Collapsible open={openSections.checkin} onOpenChange={() => toggleSection('checkin')}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <h2 className="text-xl font-medium text-gray-800 mb-1">
                    Career Check-In
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Your private space for reflection and growth
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openSections.checkin ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            
            {/* Preview when collapsed */}
            {!openSections.checkin && (
              <div className="mb-4">
                <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-lg">🎯</span>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm">Week 1 Reflection</h3>
                        <p className="text-xs text-gray-600">What's one thing you want more of in your work this week?</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-momentum-200 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">Click to start your reflection</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <CollapsibleContent>
              <CareerCheckIn />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Placeholder for other sections */}
        <div className="space-y-16">
          <div className="text-center py-12 border-t border-gray-100">
            <p className="text-gray-400 text-sm">More sections coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
