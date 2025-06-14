
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Link, Send, Sparkles, Heart } from "lucide-react";
import { useState } from "react";

const PostCreator = () => {
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handlePost = () => {
    console.log("Posting:", content);
    // Reset after posting
    setContent("");
    setIsExpanded(false);
  };

  const handleAttachPhoto = () => {
    console.log("Attach photo clicked");
  };

  const handleAddLink = () => {
    console.log("Add link clicked");
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white via-momentum-25 to-momentum-50 hover-lift">
      <CardContent className="p-4">
        {/* Header with inspiring message */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-gradient-to-br from-momentum-400 to-momentum-600 p-2 rounded-xl">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">Share your professional journey</h3>
            <p className="text-xs text-momentum-600">What's inspiring you today?</p>
          </div>
        </div>

        <div className="relative">
          <Textarea
            placeholder="Share an insight, ask a question, or tell your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleFocus}
            className="min-h-[60px] resize-none border-momentum-200 focus:border-momentum-400 focus:ring-momentum-300 bg-white/60 backdrop-blur-sm placeholder:text-momentum-500 text-gray-800"
          />
          
          {isExpanded && (
            <div className="mt-3">
              {/* Suggestion pills */}
              <div className="flex flex-wrap gap-2 mb-3">
                <button
                  onClick={() => setContent("Today I learned that ")}
                  className="px-3 py-1 bg-momentum-100 text-momentum-700 rounded-full text-xs hover:bg-momentum-200 transition-colors"
                >
                  💡 Share a learning
                </button>
                <button
                  onClick={() => setContent("I'm excited about ")}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors"
                >
                  🚀 Share excitement
                </button>
                <button
                  onClick={() => setContent("Looking for advice on ")}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs hover:bg-purple-200 transition-colors"
                >
                  🤝 Ask for help
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-momentum-100">
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleAttachPhoto}
                    className="text-momentum-600 hover:text-momentum-800 hover:bg-momentum-50"
                  >
                    <Camera size={14} className="mr-2" />
                    Photo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleAddLink}
                    className="text-momentum-600 hover:text-momentum-800 hover:bg-momentum-50"
                  >
                    <Link size={14} className="mr-2" />
                    Link
                  </Button>
                </div>
                <Button
                  onClick={handlePost}
                  size="sm"
                  disabled={!content.trim()}
                  className={`transition-all duration-300 ${
                    content.trim() 
                      ? "bg-gradient-to-r from-momentum-600 to-momentum-700 hover:from-momentum-700 hover:to-momentum-800 text-white shadow-lg hover:shadow-xl" 
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <Send size={14} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Inspiration footer */}
        {!isExpanded && (
          <div className="mt-3 pt-3 border-t border-momentum-100">
            <div className="flex items-center justify-between text-xs text-momentum-600">
              <div className="flex items-center space-x-1">
                <Heart size={12} className="text-red-400" />
                <span>Join the conversation with 247 professionals</span>
              </div>
              <span className="italic">Your voice matters</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCreator;
