import Navigation from "@/components/Navigation";
import RealCareerMoments from "@/components/RealCareerMoments";
import CareerCheckIn from "@/components/CareerCheckIn";
import WelcomeSection from "@/components/WelcomeSection";
import TrendingActivities from "@/components/TrendingActivities";
import CollapsibleSection from "@/components/CollapsibleSection";
import PostCreator from "@/components/PostCreator";
import YouTubeInsightsSection from "@/components/YouTubeInsightsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import { useTrendingActivities } from "@/hooks/useTrendingActivities";

const Index = () => {
  const [openSections, setOpenSections] = useState({
    trending: false,
    moments: false,
    checkin: false
  });

  const { data: trendingActivities = [] } = useTrendingActivities();

  const userProfile = {
    name: "Alex Chen",
    roles: ["Data Science", "CX Strategy"]
  };

  const firstName = userProfile.name.split(' ')[0];

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

  const momentsPreview = (
    <div className="space-y-4 mb-4">
      <Card className="border-0 shadow-sm card-gradient backdrop-blur-sm opacity-75 hover-lift">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-medium text-gray-900 text-sm">Sarah Chen</h3>
              <p className="text-xs text-momentum-600 font-medium">ML Engineer</p>
            </div>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
          <p className="text-gray-800 text-sm leading-relaxed truncate">
            I led my first stakeholder alignment workshop. Took 3 tries, but I finally figured out how to frame trade-offs...
          </p>
          <div className="mt-2 flex space-x-2">
            <Badge variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200 text-xs">
              Leadership
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="border-0 shadow-sm card-gradient backdrop-blur-sm opacity-75 hover-lift">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-medium text-gray-900 text-sm">Marcus Johnson</h3>
              <p className="text-xs text-momentum-600 font-medium">Data Scientist</p>
            </div>
            <span className="text-xs text-gray-500">5 days ago</span>
          </div>
          <p className="text-gray-800 text-sm leading-relaxed truncate">
            Been experimenting with explaining model predictions to non-technical users...
          </p>
          <div className="mt-2 flex space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
              Communication
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const checkinPreview = (
    <div className="mb-4">
      <Card className="border-0 shadow-sm card-gradient backdrop-blur-sm opacity-75 hover-lift">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-lg">💭</span>
            <div>
              <h3 className="font-medium text-gray-900 text-sm">Personal Reflection</h3>
              <p className="text-xs text-momentum-600">What's on your mind about work? Journal whenever you feel like it.</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-momentum-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-500">Click to start journaling</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic">
              💡 Keep it general - avoid sharing specific company details or confidential information
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-momentum-25 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-12 pt-28">
          {/* Welcome Banner */}
          <div className="mb-6 p-4 card-gradient rounded-2xl shadow-lg border-l-4 border-l-momentum-500">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-gradient-to-br from-momentum-400 to-momentum-600 p-2 rounded-xl">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">
                  Welcome back, {firstName}
                </h1>
                <p className="text-momentum-600 font-medium">
                  Here's what professionals in {userProfile.roles.join(" & ")} are exploring recently
                </p>
              </div>
            </div>

            {/* YouTube Insights Section */}
            <YouTubeInsightsSection />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-momentum-100">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-momentum-600" />
                  <span className="text-xs font-medium text-gray-700">Trending Topics</span>
                </div>
                <p className="text-lg font-bold text-momentum-700 mt-1">{trendingActivities.length}</p>
                <p className="text-xs text-gray-500">Active discussions</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-momentum-100">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-medium text-gray-700">Network</span>
                </div>
                <p className="text-lg font-bold text-blue-700 mt-1">247</p>
                <p className="text-xs text-gray-500">Professional connections</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-momentum-100">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span className="text-xs font-medium text-gray-700">Growth</span>
                </div>
                <p className="text-lg font-bold text-purple-700 mt-1">89%</p>
                <p className="text-xs text-gray-500">Weekly progress</p>
              </div>
            </div>
          </div>

          {/* Post Creator */}
          <div className="mb-8">
            <PostCreator />
          </div>

          {/* Main Content Sections */}
          <div className="space-y-6">
            <TrendingActivities
              isOpen={openSections.trending}
              onToggle={() => toggleSection('trending')}
            />

            <CollapsibleSection
              id="career-moments"
              title="Real Career Moments"
              description="Authentic stories and insights from your professional community"
              isOpen={openSections.moments}
              onToggle={() => toggleSection('moments')}
              previewContent={momentsPreview}
            >
              <RealCareerMoments />
            </CollapsibleSection>

            <CollapsibleSection
              id="career-checkin"
              title="Career Check-In"
              description="Your private space for reflection and growth"
              isOpen={openSections.checkin}
              onToggle={() => toggleSection('checkin')}
              previewContent={checkinPreview}
            >
              <CareerCheckIn />
            </CollapsibleSection>
          </div>

          {/* Footer Section */}
          <div className="text-center py-12 border-t border-gray-200 mt-16">
            <div className="section-accent rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                More features coming soon...
              </h3>
              <p className="text-gray-600">
                We're constantly adding new tools to help you grow your career and connect with like-minded professionals.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Built with ❤️ for the professional community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
