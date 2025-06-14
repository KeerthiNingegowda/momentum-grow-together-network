
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Users, Bot, Calendar, Target, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";
import { useState } from "react";

const CareerCheckIn = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [responses, setResponses] = useState<string[]>(["", "", ""]);
  const [showAIBuddy, setShowAIBuddy] = useState(false);

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
      {/* AI Buddy Interface */}
      {showAIBuddy && (
        <Card className="border-blue-200 bg-blue-50/30 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-2">Your AI Career Insights Assistant</h4>
                <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    I've analyzed your journal reflections and noticed you're focused on {userProfile.roles.join(" & ")}. 
                    Based on your entries, here are personalized insights and recommended next steps for your career growth:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">Career Insight</p>
                        <p className="text-xs text-gray-600">Your reflections show strong analytical thinking - consider leading more cross-functional projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">Next Best Action</p>
                        <p className="text-xs text-gray-600">Schedule a 1:1 with your manager to discuss taking on a strategic initiative this quarter</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="text-xs justify-start">
                    <Lightbulb className="h-3 w-3 mr-2" />
                    Get more career insights
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs justify-start">
                    <ArrowRight className="h-3 w-3 mr-2" />
                    View action plan
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs justify-start">
                    <Target className="h-3 w-3 mr-2" />
                    Set growth goals
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs justify-start">
                    <TrendingUp className="h-3 w-3 mr-2" />
                    Track progress
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowAIBuddy(!showAIBuddy)}
                  className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-purple-100"
                >
                  <Bot className="h-3 w-3 mr-1" />
                  {showAIBuddy ? 'Hide AI insights' : 'Get AI career insights & next steps'}
                </Button>
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

// Add userProfile for AI buddy context
const userProfile = {
  name: "Alex Chen",
  roles: ["Data Science", "CX Strategy"]
};

export default CareerCheckIn;
