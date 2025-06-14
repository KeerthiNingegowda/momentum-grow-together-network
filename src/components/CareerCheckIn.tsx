import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Lock, Heart, MessageCircle, Users } from "lucide-react";
import { useState } from "react";

const CareerCheckIn = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [responses, setResponses] = useState<string[]>(["", "", ""]);
  const [isPublic, setIsPublic] = useState([false, false, false]);

  const prompts = [
    {
      question: "What's one thing you want more of in your work this week?",
      placeholder: "Share what would make your work more fulfilling...",
      icon: "🎯"
    },
    {
      question: "When did you feel most useful in the past month?",
      placeholder: "Reflect on a moment when you made a real impact...", 
      icon: "💡"
    },
    {
      question: "Any person you'd like to thank or reconnect with?",
      placeholder: "Think of someone who helped or inspired you...",
      icon: "🤝"
    }
  ];

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses];
    newResponses[currentPrompt] = value;
    setResponses(newResponses);
  };

  const togglePublic = () => {
    const newPublic = [...isPublic];
    newPublic[currentPrompt] = !newPublic[currentPrompt];
    setIsPublic(newPublic);
  };

  return (
    <div>
      {/* Career buddy suggestion */}
      <Card className="border-momentum-200 bg-momentum-50/30 mb-6">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="bg-momentum-100 p-2 rounded-full">
              <Users className="h-4 w-4 text-momentum-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                Want a career buddy?
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-2">
                Get paired with someone at a similar career stage for monthly check-ins and workplace navigation support.
              </p>
              <Button variant="outline" size="sm" className="text-xs">
                Find a career buddy
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          {/* Prompt navigation */}
          <div className="flex space-x-2 mb-6">
            {prompts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPrompt(index)}
                className={`flex-1 p-3 rounded-lg text-sm transition-colors ${
                  currentPrompt === index
                    ? 'bg-momentum-100 text-momentum-700 border border-momentum-200'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="block text-lg mb-1">{prompts[index].icon}</span>
                Week {index + 1}
              </button>
            ))}
          </div>

          {/* Current prompt */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-3 leading-relaxed">
                {prompts[currentPrompt].question}
              </h3>
              
              <Textarea
                placeholder={prompts[currentPrompt].placeholder}
                value={responses[currentPrompt]}
                onChange={(e) => handleResponseChange(e.target.value)}
                className="min-h-[120px] resize-none border-gray-200 focus:border-momentum-300 focus:ring-momentum-200"
              />
            </div>

            {/* Privacy and sharing options */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <Badge 
                  className={`text-xs px-3 py-1 ${
                    isPublic[currentPrompt] 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Lock className="h-3 w-3 mr-1" />
                  {isPublic[currentPrompt] ? 'Public' : 'Private'}
                </Badge>
                
                {isPublic[currentPrompt] && (
                  <span className="text-xs text-gray-500">
                    Will appear in your public reflections
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePublic}
                  className="text-xs"
                >
                  {isPublic[currentPrompt] ? 'Make private' : 'Share publicly'}
                </Button>
                
                <Button size="sm" className="text-xs">
                  Save reflection
                </Button>
              </div>
            </div>
          </div>

          {/* Gentle encouragement */}
          {responses[currentPrompt].length === 0 && (
            <div className="mt-6 p-4 bg-gray-50/50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Heart className="h-4 w-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Take your time. This is your space to think without judgment.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Your reflections stay private unless you choose to share them.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerCheckIn;
