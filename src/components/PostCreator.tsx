
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const PostCreator = () => {
  const [content, setContent] = useState("");

  return (
    <Card className="border-0 shadow-sm bg-white">
      <CardContent className="p-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[60px] resize-none border-gray-200 focus:border-momentum-300"
        />
      </CardContent>
    </Card>
  );
};

export default PostCreator;
