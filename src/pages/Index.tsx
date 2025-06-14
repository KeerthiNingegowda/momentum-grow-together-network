
import Navigation from "@/components/Navigation";
import RealCareerMoments from "@/components/RealCareerMoments";
import CareerCheckIn from "@/components/CareerCheckIn";
import WelcomeSection from "@/components/WelcomeSection";
import TrendingActivities from "@/components/TrendingActivities";
import CollapsibleSection from "@/components/CollapsibleSection";
import { Card, CardContent } from "@/components/ui/card";
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

  const momentsPreview = (
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
  );

  const checkinPreview = (
    <div className="mb-4">
      <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-lg">💭</span>
            <div>
              <h3 className="font-medium text-gray-900 text-sm">Personal Reflection</h3>
              <p className="text-xs text-gray-600">What's on your mind about work? Journal whenever you feel like it.</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-momentum-200 rounded-full"></div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12 pt-28">
        <WelcomeSection 
          firstName={firstName}
          roles={userProfile.roles}
          onScrollToSection={scrollToSection}
        />

        <TrendingActivities
          isOpen={openSections.trending}
          onToggle={() => toggleSection('trending')}
          activities={trendingActivities}
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
