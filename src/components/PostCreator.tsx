
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Pen, Camera, Link, Send } from "lucide-react";
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
    <Card className="border-0 shadow-sm bg-white">
      <CardContent className="p-4">
        <div className="relative">
          <div className="flex items-center space-x-2 mb-2">
            <Pen size={16} className="text-gray-500" />
            <span className="text-gray-500 text-sm">Share your thoughts...</span>
          </div>
          <Textarea
            placeholder=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={handleFocus}
            className="min-h-[40px] resize-none border-gray-200 focus:border-momentum-300"
          />
          
          {isExpanded && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleAttachPhoto}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Camera size={16} className="mr-1" />
                  Photo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleAddLink}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Link size={16} className="mr-1" />
                  Link
                </Button>
              </div>
              <Button
                onClick={handlePost}
                size="sm"
                disabled={!content.trim()}
                className="bg-momentum-600 hover:bg-momentum-700 text-white"
              >
                <Send size={16} className="mr-1" />
                Post
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCreator;
