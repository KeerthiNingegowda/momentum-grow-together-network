
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Youtube, Plus, X, Loader2 } from "lucide-react";
import { useUserYouTubeChannels, useAddYouTubeChannel, useRemoveYouTubeChannel } from "@/hooks/useUserYouTubeChannels";

const YouTubeChannelManager = () => {
  const [newChannelName, setNewChannelName] = useState("");
  const { data: channels = [], isLoading } = useUserYouTubeChannels();
  const addChannel = useAddYouTubeChannel();
  const removeChannel = useRemoveYouTubeChannel();

  const handleAddChannel = () => {
    if (newChannelName.trim()) {
      addChannel.mutate(newChannelName.trim());
      setNewChannelName("");
    }
  };

  const handleRemoveChannel = (channelId: string) => {
    removeChannel.mutate(channelId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddChannel();
    }
  };

  const suggestedChannels = [
    "freeCodeCamp.org",
    "Traversy Media",
    "Programming with Mosh",
    "The Net Ninja",
    "Fireship",
    "TechWorld with Nana",
    "MIT OpenCourseWare"
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
        <p className="text-gray-600">Choose YouTube channels you'd like to follow for professional development</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add new channel */}
        <div className="flex space-x-2">
          <Input
            placeholder="Enter YouTube channel name (e.g., freeCodeCamp.org)"
            value={newChannelName}
            onChange={(e) => setNewChannelName(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            onClick={handleAddChannel}
            disabled={!newChannelName.trim() || addChannel.isPending}
            size="sm"
          >
            {addChannel.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Current channels */}
        {channels.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Your Channels</h4>
            <div className="flex flex-wrap gap-2">
              {channels.map((channel) => (
                <Badge 
                  key={channel.id} 
                  variant="secondary" 
                  className="bg-red-100 text-red-700 border-red-200 px-3 py-1 flex items-center space-x-2"
                >
                  <span>{channel.channel_name}</span>
                  <button
                    onClick={() => handleRemoveChannel(channel.id)}
                    disabled={removeChannel.isPending}
                    className="hover:bg-red-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Suggested channels */}
        {channels.length < 5 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Suggestions</h4>
            <div className="flex flex-wrap gap-2">
              {suggestedChannels
                .filter(suggestion => !channels.some(channel => 
                  channel.channel_name.toLowerCase() === suggestion.toLowerCase()
                ))
                .slice(0, 4)
                .map((suggestion) => (
                  <Badge 
                    key={suggestion}
                    variant="outline" 
                    className="cursor-pointer hover:bg-momentum-50 border-momentum-200 text-momentum-700"
                    onClick={() => setNewChannelName(suggestion)}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    {suggestion}
                  </Badge>
                ))}
            </div>
          </div>
        )}

        <div className="pt-2 text-xs text-gray-500">
          💡 We'll fetch the latest videos from these channels to keep you updated on professional development content
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeChannelManager;
