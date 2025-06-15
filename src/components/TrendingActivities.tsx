
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { BookOpen, Users, ChevronDown } from "lucide-react";
import { useTrendingActivities } from "@/hooks/useTrendingActivities";
import { formatDistanceToNow } from "date-fns";

interface TrendingActivitiesProps {
  isOpen: boolean;
  onToggle: () => void;
}

// Mock data for trending activities
const mockTrendingActivities = [
  {
    id: '1',
    activity: 'Exploring prompt engineering techniques',
    context: 'Learning advanced strategies for getting better results from AI models like GPT-4, Claude, and local LLMs',
    participant_count: 342,
    created_at: '2025-06-13T10:30:00Z',
    is_active: true
  },
  {
    id: '2',
    activity: 'Building full-stack applications with Next.js 14',
    context: 'Diving deep into App Router, Server Components, and modern React patterns for production apps',
    participant_count: 287,
    created_at: '2025-06-12T15:45:00Z',
    is_active: true
  },
  {
    id: '3',
    activity: 'Mastering data visualization with D3.js',
    context: 'Creating interactive charts and dashboards that tell compelling stories with complex datasets',
    participant_count: 156,
    created_at: '2025-06-12T09:20:00Z',
    is_active: true
  },
  {
    id: '4',
    activity: 'Understanding microservices architecture patterns',
    context: 'Breaking down monoliths and designing scalable distributed systems with proper service boundaries',
    participant_count: 423,
    created_at: '2025-06-11T14:15:00Z',
    is_active: true
  },
  {
    id: '5',
    activity: 'Learning Rust for systems programming',
    context: 'Exploring memory safety, performance optimization, and building high-performance applications',
    participant_count: 198,
    created_at: '2025-06-11T11:30:00Z',
    is_active: true
  },
  {
    id: '6',
    activity: 'Implementing OAuth 2.0 and JWT authentication',
    context: 'Securing modern web applications with proper token-based authentication and authorization flows',
    participant_count: 234,
    created_at: '2025-06-10T16:00:00Z',
    is_active: true
  }
];

const TrendingActivities = ({ isOpen, onToggle }: TrendingActivitiesProps) => {
  const { data: dbTrendingActivities = [], isLoading, error } = useTrendingActivities();

  // Use database data if available, otherwise use mock data
  const trendingActivities = dbTrendingActivities.length > 0 ? dbTrendingActivities : mockTrendingActivities;

  console.log('TrendingActivities component rendered');
  console.log('isLoading:', isLoading);
  console.log('dbTrendingActivities:', dbTrendingActivities);
  console.log('using mock data:', dbTrendingActivities.length === 0);
  console.log('final trendingActivities:', trendingActivities);

  if (isLoading) {
    return (
      <div id="trending-activities" className="mb-16">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading trending activities...</p>
        </div>
      </div>
    );
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
                What professionals like you are exploring ({trendingActivities.length} active)
              </p>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </CollapsibleTrigger>
        
        {/* Preview when collapsed */}
        {!isOpen && (
          <div className="grid gap-4 mb-4">
            {trendingActivities.slice(0, 2).map((item, index) => (
              <Card key={item.id || index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm opacity-75">
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
              <Card key={item.id || index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/80 backdrop-blur-sm">
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
