
import Navigation from "@/components/Navigation";
import YouTubeChannelManager from "@/components/YouTubeChannelManager";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings } from "lucide-react";

const Preferences = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center mb-2">
            <Settings className="h-8 w-8 text-momentum-600 mr-3" />
            Preferences
          </h1>
          <p className="text-gray-600 text-lg">
            Customize your experience and manage your learning preferences
          </p>
        </div>

        <div className="space-y-6">
          <YouTubeChannelManager />
          
          {/* Placeholder for future preference sections */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">More Preferences Coming Soon</h3>
              <p className="text-gray-600">We're working on additional customization options for your experience.</p>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500">
                Future preferences might include notification settings, content filtering, and personalization options.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
