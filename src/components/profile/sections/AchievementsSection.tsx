
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award } from "lucide-react";

interface AchievementsSectionProps {
  content: any;
}

const AchievementsSection = ({ content }: AchievementsSectionProps) => {
  const achievements = content?.achievements || [
    {
      title: "Achievement Title",
      description: "Add your achievement details here...",
      date: "2024"
    }
  ];

  return (
    <Card className="shadow-lg border-0 mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <Award className="h-6 w-6 text-momentum-600 mr-2" />
          Achievements
        </h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement: any, index: number) => (
            <div key={index} className="flex items-start space-x-3">
              <Award className="h-5 w-5 text-momentum-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                <p className="text-gray-700 mb-1">{achievement.description}</p>
                <p className="text-sm text-gray-600">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsSection;
