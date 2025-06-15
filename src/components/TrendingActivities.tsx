
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { BookOpen, Users, ChevronDown } from "lucide-react";
import { useTrendingActivities } from "@/hooks/useTrendingActivities";
import { formatDistanceToNow } from "date-fns";

interface TrendingActivitiesProps {
  isOpen: boolean;
  onToggle: () => void;
}

const TrendingActivities = ({ isOpen, onToggle }: TrendingActivitiesProps) => {
  const { data: trendingActivities = [], isLoading } = useTrendingActivities();

  if (isLoading) {
    return <div className="text-center py-4">Loading trending activities...</div>;
  }

  return (
    <div id="trending-activities" className="mb-16">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-left">
              <h2 className="text-xl font-medium text-gray-800 mb-1">
                Trending Activities
              </h2>
              <p className="text-gray-600 text-sm">
                What professionals like you are exploring
              </p>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </CollapsibleTrigger>
        
        {/* Preview when collapsed */}
        {!isOpen && (
          <div className="grid gap-4 mb-4">
            {trendingActivities.slice(0, 2).map((item, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm mb-1">
                        {item.activity}
                      </h3>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {item.participant_count} professionals
                        </span>
                        <span>{formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <CollapsibleContent>
          <div className="grid gap-6">
            {trendingActivities.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {item.activity}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {item.context}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {item.participant_count} professionals
                        </span>
                        <span>{formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default TrendingActivities;
