
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Clock, Eye, RefreshCw } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useYouTubeInsights, useFetchFreshYouTubeInsights } from "@/hooks/useYouTubeInsights";

const YouTubeInsightsSection = () => {
  const { data: insights = [], isLoading } = useYouTubeInsights();
  const fetchFreshMutation = useFetchFreshYouTubeInsights();

  const handleVideoClick = (videoUrl: string | null) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  const handleRefresh = () => {
    console.log("Refreshing insights...");
    fetchFreshMutation.mutate();
  };

  if (isLoading) {
    return (
      <div className="mb-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
        <div className="flex items-center space-x-2 mb-2">
          <Youtube className="h-4 w-4 text-red-600" />
          <h3 className="text-sm font-semibold text-gray-800">Loading Learning Channels...</h3>
        </div>
        <p className="text-xs text-gray-600">
          Fetching your latest learning content...
        </p>
      </div>
    );
  }

  if (insights.length === 0) {
    return (
      <div className="mb-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
        <div className="flex items-center space-x-2 mb-2">
          <Youtube className="h-4 w-4 text-red-600" />
          <h3 className="text-sm font-semibold text-gray-800">Your Learning Channels</h3>
        </div>
        <p className="text-xs text-gray-600">
          Discover new learning content tailored to your interests.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Youtube className="h-4 w-4 text-red-600" />
          <h3 className="text-sm font-semibold text-gray-800">New from Your Learning Channels</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 text-xs">
            {insights.length} new
          </Badge>
          <button 
            onClick={handleRefresh}
            disabled={fetchFreshMutation.isPending}
            className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center"
          >
            <RefreshCw className={`h-3 w-3 mr-1 ${fetchFreshMutation.isPending ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        {insights.slice(0, 3).map((video) => (
          <div 
            key={video.id} 
            className="flex items-center justify-between p-2 bg-white/60 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
            onClick={() => handleVideoClick(video.video_url)}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {video.video_title}
              </p>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-xs text-red-600 font-medium">{video.channel_name}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(video.upload_time), { addSuffix: true })}
                </span>
                {video.duration && (
                  <>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </span>
                  </>
                )}
                {video.view_count && (
                  <>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {video.view_count}
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="flex space-x-1 ml-2">
              {video.topics.slice(0, 2).map((topic, topicIndex) => (
                <Badge key={topicIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-1 py-0">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-2 pt-2 border-t border-red-100 flex justify-between items-center">
        <button className="text-xs text-red-600 hover:text-red-700 font-medium">
          View all updates ({insights.length})
        </button>
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          AI summary from transcripts →
        </button>
      </div>
    </div>
  );
};

export default YouTubeInsightsSection;
