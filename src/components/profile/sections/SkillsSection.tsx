
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

interface SkillsSectionProps {
  content: any;
}

const SkillsSection = ({ content }: SkillsSectionProps) => {
  const skills = content?.skills || [
    "Machine Learning", "Python", "React", "Data Analysis", "AI Strategy"
  ];

  return (
    <Card className="shadow-lg border-0 mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <Zap className="h-6 w-6 text-momentum-600 mr-2" />
          Skills & Expertise
        </h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: string, index: number) => (
            <Badge 
              key={index}
              variant="secondary" 
              className="bg-momentum-100 text-momentum-700 hover:bg-momentum-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
