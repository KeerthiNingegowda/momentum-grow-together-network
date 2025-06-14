
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Users, TrendingUp, Shield, MessageCircle, Network } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Professional Networking",
      description: "Connect with industry professionals and expand your network meaningfully."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Track your professional journey and showcase your achievements."
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "Build trust with verified professional credentials and endorsements."
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Communicate securely with your professional connections."
    },
    {
      icon: Network,
      title: "Relationship Building",
      description: "Foster long-term professional relationships that drive success."
    },
    {
      icon: Sprout,
      title: "Growth Tracking",
      description: "Monitor your networking progress and relationship development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-momentum-100 rounded-full mb-6">
              <Sprout className="h-12 w-12 text-momentum-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Professional
              <span className="gradient-text block">Momentum</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with professionals who matter. Foster meaningful relationships that drive your career forward. 
              Your digital business card for the modern professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-momentum-600 hover:bg-momentum-700 text-white px-8 py-3 text-lg"
              >
                Start Building Connections
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-momentum-300 text-momentum-700 hover:bg-momentum-50 px-8 py-3 text-lg"
              >
                View Demo Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Momentum?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional networking reimagined for meaningful, long-term relationship building
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-slide-up border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="bg-momentum-100 p-3 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-momentum-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-momentum-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Professional Momentum?
          </h2>
          <p className="text-xl text-momentum-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are building meaningful connections and advancing their careers.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-momentum-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Create Your Profile Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="bg-momentum-600 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">Momentum</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Momentum. Building professional relationships for the future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
