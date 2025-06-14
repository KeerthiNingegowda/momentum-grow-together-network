
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PenTool, FileText, Share2, Image, Link } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PostCreator = () => {
  const [postType, setPostType] = useState("update");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handlePost = () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please add some content to your post.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Post shared!",
      description: `Your ${postType} has been shared with your network.`
    });

    // Reset form
    setContent("");
    setTitle("");
    setIsExpanded(false);
  };

  return (
    <Card className="border-0 shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
          <PenTool className="h-5 w-5 text-momentum-600 mr-2" />
          Share an Update
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isExpanded ? (
          <Textarea
            placeholder="What's on your mind? Share an update or start writing an article..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="min-h-[60px] resize-none border-gray-200 focus:border-momentum-300"
          />
        ) : (
          <div className="space-y-4">
            <RadioGroup value={postType} onValueChange={setPostType} className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="update" id="update" />
                <Label htmlFor="update" className="flex items-center cursor-pointer">
                  <Share2 className="h-4 w-4 mr-1" />
                  Quick Update
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="article" id="article" />
                <Label htmlFor="article" className="flex items-center cursor-pointer">
                  <FileText className="h-4 w-4 mr-1" />
                  Write Article
                </Label>
              </div>
            </RadioGroup>

            {postType === "article" && (
              <Input
                placeholder="Article title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-gray-200 focus:border-momentum-300"
              />
            )}

            <Textarea
              placeholder={
                postType === "update" 
                  ? "Share your thoughts, insights, or recent experiences..."
                  : "Start writing your article... Share your expertise and insights with the community."
              }
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] resize-none border-gray-200 focus:border-momentum-300"
            />

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-momentum-600">
                  <Image className="h-4 w-4 mr-1" />
                  Photo
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-momentum-600">
                  <Link className="h-4 w-4 mr-1" />
                  Link
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setIsExpanded(false);
                    setContent("");
                    setTitle("");
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  size="sm"
                  onClick={handlePost}
                  className="bg-momentum-600 hover:bg-momentum-700"
                >
                  {postType === "update" ? "Share Update" : "Publish Article"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCreator;
