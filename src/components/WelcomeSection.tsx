
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
    </div>
  );
};

export default WelcomeSection;
