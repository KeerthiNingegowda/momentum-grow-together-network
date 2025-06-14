
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Youtube, Loader2, Plus, X } from "lucide-react";
import { useUserYouTubeChannels, useAddYouTubeChannel, useRemoveYouTubeChannel } from "@/hooks/useUserYouTubeChannels";

const YouTubeChannelManager = () => {
  const { data: userChannels, isLoading } = useUserYouTubeChannels();
  const addChannelMutation = useAddYouTubeChannel();
  const removeChannelMutation = useRemoveYouTubeChannel();

  // Recommended channels to add
  const recommendedChannels = [
    "@aiDotEngineer",
    "@3blue1brown", 
    "@statquest"
  ];

  const handleAddChannel = (channelName: string) => {
    addChannelMutation.mutate(channelName);
  };

  const handleRemoveChannel = (channelId: string) => {
    removeChannelMutation.mutate(channelId);
  };

  const isChannelAdded = (channelName: string) => {
    return userChannels?.some(channel => channel.channel_name === channelName);
  };

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
        {/* Recommended channels */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Recommended Channels</h4>
          <div className="space-y-2">
            {recommendedChannels.map((channelName) => (
              <div key={channelName} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{channelName}</span>
                {isChannelAdded(channelName) ? (
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                    Added
                  </Badge>
                ) : (
                  <Button
                    size="sm"
                    onClick={() => handleAddChannel(channelName)}
                    disabled={addChannelMutation.isPending}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current channels */}
        {userChannels && userChannels.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Your Channels</h4>
            <div className="flex flex-wrap gap-2">
              {userChannels.map((channel) => (
                <Badge 
                  key={channel.id} 
                  variant="secondary" 
                  className="bg-red-100 text-red-700 border-red-200 px-3 py-1 flex items-center group"
                >
                  <span>{channel.channel_name}</span>
                  <button
                    onClick={() => handleRemoveChannel(channel.id)}
                    disabled={removeChannelMutation.isPending}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-900"
                  >
                    <X className="h-3 w-3" />
                  </button>
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
