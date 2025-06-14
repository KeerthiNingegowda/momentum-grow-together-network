
import { Button } from "@/components/ui/button";
import { Sprout, User, Bell, MessageCircle, Briefcase, Users } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/network", label: "Network Now", icon: Users },
    { href: "/messages", label: "Messages", icon: MessageCircle },
    { href: "/notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <nav className="nav-gradient shadow-lg border-b border-momentum-200/50 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/")}
          >
            <div className="bg-gradient-to-br from-momentum-200 to-momentum-300 p-2.5 rounded-xl shadow-md">
              <Sprout className="h-6 w-6 text-momentum-700" />
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">Momentum</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center space-x-2 transition-all duration-300 ${
                    isActive 
                      ? "button-gradient text-white shadow-md hover:shadow-lg" 
                      : "text-gray-700 hover:text-momentum-600 hover:bg-momentum-50 hover:shadow-sm"
                  }`}
                  onClick={() => navigate(item.href)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-gray-700 hover:text-momentum-600 hover:bg-momentum-50 transition-all duration-300 hover:shadow-sm"
              onClick={() => navigate("/profile")}
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

