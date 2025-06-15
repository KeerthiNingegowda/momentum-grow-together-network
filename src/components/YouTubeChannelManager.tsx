
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Loader2 } from "lucide-react";
import { useYouTubeChannels } from "@/hooks/useYouTubeChannels";

const YouTubeChannelManager = () => {
  const { data: channels, isLoading } = useYouTubeChannels();

  // Recommended channels from our global list
  const recommendedChannels = [
    "@aiDotEngineer",
    "@3blue1brown", 
    "@statquest"
  ];

  if (isLoading) {
    return (
      <Card className="shadow-lg border-0">
        <CardContent className="p-6 text-center">
          <Loader2 className="h-6 w-6 animate-spin mx-auto" />
          <p className="text-gray-600 mt-2">Loading learning channels...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <Youtube className="h-6 w-6 text-red-600 mr-2" />
          Learning Channels
        </h3>
        <p className="text-gray-600">Curated YouTube channels for professional development</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Available channels */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Available Learning Channels</h4>
          <div className="space-y-2">
            {recommendedChannels.map((channelName) => (
              <div key={channelName} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{channelName}</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  Available
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Current channels */}
        {channels && channels.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Active Channels</h4>
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
