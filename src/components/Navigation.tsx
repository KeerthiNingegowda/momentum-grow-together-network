import { Button } from "@/components/ui/button";
import { Sprout, User, Bell, MessageCircle, Search, Briefcase } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "Home", icon: Sprout },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-momentum-100 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-momentum-600" />
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">Momentum</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center space-x-2 ${
                    isActive 
                      ? "bg-momentum-600 hover:bg-momentum-700 text-white" 
                      : "text-gray-700 hover:text-momentum-600 hover:bg-momentum-50"
                  }`}
                  onClick={() => window.location.href = item.href}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-momentum-600">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-gray-700 hover:text-momentum-600 hover:bg-momentum-50"
              onClick={() => window.location.href = "/profile"}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
