import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users, Lightbulb } from "lucide-react";

const Index = () => {
  const userProfile = {
    name: "Jessica",
    roles: ["Data Science", "CX Strategy"]
  };

  const trendingActivities = [
    {
      activity: "Deep-diving into Transformer architectures",
      context: "Understanding attention mechanisms for NLP projects",
      participants: "127 professionals",
      timeframe: "this week"
    },
    {
      activity: "Exploring ethical AI frameworks", 
      context: "Building responsible AI systems in production",
      participants: "89 professionals",
      timeframe: "this week"
    },
    {
      activity: "Mastering MLOps best practices",
      context: "Streamlining model deployment and monitoring",
      participants: "156 professionals", 
      timeframe: "this week"
    },
    {
      activity: "Customer journey mapping with AI insights",
      context: "Leveraging ML to understand user behavior patterns",
      participants: "73 professionals",
      timeframe: "this week"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Section 1: People Like You Are Doing */}
        <div className="mb-16">
          <div className="mb-8">
            <h1 className="text-2xl font-light text-gray-800 mb-2">
              Welcome back, {userProfile.name}
            </h1>
            <p className="text-gray-600 text-lg font-light">
              Here's what professionals in {userProfile.roles.join(" & ")} are exploring this week
            </p>
          </div>

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
