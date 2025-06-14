import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Share } from "lucide-react";

const RealCareerMoments = () => {
  const careerMoments = [
    {
      author: "Sarah Chen",
      role: "ML Engineer",
      timeAgo: "2 days ago",
      whySharing: "Want to help others avoid the same mistake I made",
      intent: "Sharing a learning",
      content: "I led my first stakeholder alignment workshop. Took 3 tries, but I finally figured out how to frame trade-offs in plain language. Sharing the 3-slide structure that worked best.",
      reactions: {
        helpful: 12,
        respect: 8,
        useful: 15
      },
      comments: [
        "Can I reuse this structure?",
        "What pushback did you get?"
      ]
    },
    {
      author: "Marcus Johnson",
      role: "Data Scientist",
      timeAgo: "5 days ago",
      whySharing: "Looking for different perspectives on this approach",
      intent: "Looking for advice",
      content: "Been experimenting with explaining model predictions to non-technical users. Found that analogies work better than charts, but struggling with complex ensemble models. How do you handle this?",
      reactions: {
        helpful: 7,
        respect: 4,
        useful: 9
      },
      comments: [
        "Have you tried LIME for explanations?",
        "I use the 'committee of experts' analogy for ensembles"
      ]
    },
    {
      author: "Alex Rivera",
      role: "UX Research Lead",
      timeAgo: "6 days ago",
      whySharing: "Hoping this helps someone currently struggling with similar challenges",
      intent: "Open to mentor",
      content: "Just wrapped up a 6-month project integrating AI insights into our user research process. Happy to share lessons learned with anyone tackling similar challenges in their org.",
      reactions: {
        helpful: 23,
        respect: 18,
        useful: 31
      },
      comments: [
        "Would love to chat about implementation challenges",
        "How did you handle data privacy concerns?"
      ]
    }
  ];

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case "Looking for advice":
        return "bg-blue-100 text-blue-800";
      case "Open to mentor":
        return "bg-green-100 text-green-800";
      case "Sharing a learning":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {careerMoments.map((moment, index) => (
        <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            {/* Author info */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-medium text-gray-900">{moment.author}</h3>
                <p className="text-sm text-gray-600">{moment.role}</p>
              </div>
              <span className="text-xs text-gray-500">{moment.timeAgo}</span>
            </div>

            {/* Intent and context */}
            <div className="mb-4 space-y-2">
              <Badge className={`text-xs px-2 py-1 ${getIntentColor(moment.intent)}`}>
                {moment.intent}
              </Badge>
              <p className="text-xs text-gray-600 italic">
                Why I'm sharing this: {moment.whySharing}
              </p>
            </div>

            {/* Main content */}
            <p className="text-gray-800 leading-relaxed mb-4">
              {moment.content}
            </p>

            {/* Reactions */}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-6 text-sm">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-momentum-600 transition-colors">
                  <span>💡</span>
                  <span>{moment.reactions.helpful} Helpful</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-momentum-600 transition-colors">
                  <span>👏</span>
                  <span>{moment.reactions.respect} Respect</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-momentum-600 transition-colors">
                  <span>🎯</span>
                  <span>{moment.reactions.useful} Useful</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-momentum-600 transition-colors text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>{moment.comments.length}</span>
                </button>
                <button className="text-gray-600 hover:text-momentum-600 transition-colors">
                  <Share className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sample comments preview */}
            {moment.comments.length > 0 && (
              <div className="mt-4 pt-3 border-t bg-gray-50/50 rounded-lg p-3">
                <div className="space-y-2">
                  {moment.comments.slice(0, 2).map((comment, commentIndex) => (
                    <p key={commentIndex} className="text-sm text-gray-700">
                      "{comment}"
                    </p>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RealCareerMoments;
