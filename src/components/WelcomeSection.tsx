
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageCircle, PenTool } from "lucide-react";

interface WelcomeSectionProps {
  firstName: string;
  roles: string[];
  onScrollToSection: (sectionId: string) => void;
}

const WelcomeSection = ({ firstName, roles, onScrollToSection }: WelcomeSectionProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-light text-gray-800 mb-2">
        Welcome back, {firstName}
      </h1>
      <p className="text-gray-600 text-lg font-light mb-6">
        Here's what professionals in {roles.join(" & ")} are exploring recently
      </p>
      
      {/* Section Navigation Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Button
          variant="outline"
          onClick={() => onScrollToSection('trending-activities')}
          className="flex items-center space-x-2 text-momentum-600 border-momentum-200 hover:bg-momentum-50"
        >
          <TrendingUp className="h-4 w-4" />
          <span>Trending Activities</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => onScrollToSection('career-moments')}
          className="flex items-center space-x-2 text-momentum-600 border-momentum-200 hover:bg-momentum-50"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Career Moments</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => onScrollToSection('career-checkin')}
          className="flex items-center space-x-2 text-momentum-600 border-momentum-200 hover:bg-momentum-50"
        >
          <PenTool className="h-4 w-4" />
          <span>Career Check-In</span>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
