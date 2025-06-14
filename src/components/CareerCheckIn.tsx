
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield } from "lucide-react";
import { useState } from "react";

const CareerCheckIn = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [responses, setResponses] = useState<string[]>(["", "", ""]);

  const prompts = [
    {
      question: "What's on your mind about work this week?",
      placeholder: "Use this space to reflect on whatever feels important to you...",
      icon: "💭"
    },
    {
      question: "How are you feeling about your professional journey?",
      placeholder: "Share your thoughts, feelings, or observations about your career path...", 
      icon: "🌟"
    },
    {
      question: "What would you like to capture or remember?",
      placeholder: "Document anything meaningful from your work experience...",
      icon: "📝"
    }
  ];

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses];
    newResponses[currentPrompt] = value;
    setResponses(newResponses);
  };

  return (
    <div>
      {/* Important Disclaimer */}
      <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-900 mb-1">
              Keep it general and confidential
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Please avoid sharing specific company names, proprietary information, client details, or any confidential business information in your reflections.
            </p>
          </div>
        </div>
      </div>

      {/* Work Journal Section */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">
              📝 Your Work Journal
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your blank canvas for professional reflection. Use these spaces however feels right to you - there's no wrong way to journal.
            </p>
          </div>

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
                Entry {index + 1}
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

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <Badge className="text-xs px-3 py-1 bg-gray-100 text-gray-600">
                  Private reflection
                </Badge>
              </div>
              
              <Button size="sm" className="text-xs">
                Save entry
              </Button>
            </div>
          </div>

          {/* Gentle encouragement */}
          {responses[currentPrompt].length === 0 && (
            <div className="mt-6 p-4 bg-gray-50/50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Heart className="h-4 w-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This is your space. Write whatever comes to mind - there's no pressure to fill everything out.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Your journal is completely private and yours to use however feels most helpful.
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
