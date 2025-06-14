
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Loader2 } from "lucide-react";

const YouTubeChannelManager = () => {
  const [isLoading] = useState(false);

  // Static channels list - you can tell me which channels to add here
  const channels = [
    { id: "1", channel_name: "freeCodeCamp.org" },
    { id: "2", channel_name: "Traversy Media" },
    { id: "3", channel_name: "Programming with Mosh" },
    { id: "4", channel_name: "The Net Ninja" },
    { id: "5", channel_name: "Fireship" },
  ];

  if (isLoading) {
    return (
      <Card className="shadow-lg border-0">
        <CardContent className="p-6 text-center">
          <Loader2 className="h-6 w-6 animate-spin mx-auto" />
          <p className="text-gray-600 mt-2">Loading preferences...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <Youtube className="h-6 w-6 text-red-600 mr-2" />
          Learning Preferences
        </h3>
        <p className="text-gray-600">Curated YouTube channels for professional development</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current channels */}
        {channels.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Featured Channels</h4>
            <div className="flex flex-wrap gap-2">
              {channels.map((channel) => (
                <Badge 
                  key={channel.id} 
                  variant="secondary" 
                  className="bg-red-100 text-red-700 border-red-200 px-3 py-1 flex items-center"
                >
                  <span>{channel.channel_name}</span>
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2 text-xs text-gray-500">
          💡 These carefully selected channels provide high-quality professional development content
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeChannelManager;
