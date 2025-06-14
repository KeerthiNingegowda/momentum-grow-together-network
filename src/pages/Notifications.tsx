
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, UserPlus, Briefcase, Users, Calendar, MoreHorizontal } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "like",
      icon: Heart,
      user: {
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        initials: "MC"
      },
      action: "liked your post about networking strategies",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "connection",
      icon: UserPlus,
      user: {
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        initials: "ER"
      },
      action: "accepted your connection request",
      time: "4 hours ago",
      unread: true
    },
    {
      id: 3,
      type: "comment",
      icon: MessageCircle,
      user: {
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        initials: "DP"
      },
      action: "commented on your post: 'Great insights! I'd love to discuss this further.'",
      time: "6 hours ago",
      unread: false
    },
    {
      id: 4,
      type: "job",
      icon: Briefcase,
      user: {
        name: "Lisa Wong",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
        initials: "LW"
      },
      action: "shared a job opportunity that might interest you",
      time: "1 day ago",
      unread: false
    },
    {
      id: 5,
      type: "event",
      icon: Calendar,
      user: {
        name: "Tech Professionals Group",
        avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
        initials: "TP"
      },
      action: "invited you to 'Monthly Networking Meetup'",
      time: "1 day ago",
      unread: false
    },
    {
      id: 6,
      type: "connection",
      icon: UserPlus,
      user: {
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        initials: "AT"
      },
      action: "wants to connect with you",
      time: "2 days ago",
      unread: false
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "like": return "text-red-500";
      case "connection": return "text-momentum-600";
      case "comment": return "text-blue-500";
      case "job": return "text-purple-500";
      case "event": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "like": return "bg-red-50";
      case "connection": return "bg-momentum-50";
      case "comment": return "bg-blue-50";
      case "job": return "bg-purple-50";
      case "event": return "bg-orange-50";
      default: return "bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated with your professional network</p>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {notifications.filter(n => n.unread).length} unread notifications
              </p>
              <Button variant="ghost" size="sm" className="text-momentum-600 hover:text-momentum-700">
                Mark all as read
              </Button>
            </div>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                {notifications.map((notification, index) => (
                  <div 
                    key={notification.id}
                    className={`p-4 flex items-start space-x-4 hover:bg-gray-50 cursor-pointer ${
                      index !== notifications.length - 1 ? 'border-b border-gray-100' : ''
                    } ${notification.unread ? 'bg-momentum-25' : ''}`}
                  >
                    <div className={`p-2 rounded-full ${getIconBg(notification.type)}`}>
                      <notification.icon className={`h-4 w-4 ${getIconColor(notification.type)}`} />
                    </div>

                    <Avatar className="w-10 h-10">
                      <AvatarImage src={notification.user.avatar} />
                      <AvatarFallback className="bg-momentum-100 text-momentum-600">
                        {notification.user.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{notification.user.name}</span>{' '}
                        {notification.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {notification.unread && (
                        <div className="w-2 h-2 bg-momentum-600 rounded-full"></div>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                {notifications.filter(n => n.type === 'connection').map((notification, index, filtered) => (
                  <div 
                    key={notification.id}
                    className={`p-4 flex items-start space-x-4 hover:bg-gray-50 cursor-pointer ${
                      index !== filtered.length - 1 ? 'border-b border-gray-100' : ''
                    } ${notification.unread ? 'bg-momentum-25' : ''}`}
                  >
                    <div className={`p-2 rounded-full ${getIconBg(notification.type)}`}>
                      <notification.icon className={`h-4 w-4 ${getIconColor(notification.type)}`} />
                    </div>

                    <Avatar className="w-10 h-10">
                      <AvatarImage src={notification.user.avatar} />
                      <AvatarFallback className="bg-momentum-100 text-momentum-600">
                        {notification.user.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{notification.user.name}</span>{' '}
                        {notification.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {notification.unread && (
                        <div className="w-2 h-2 bg-momentum-600 rounded-full"></div>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                {notifications.filter(n => n.type === 'like' || n.type === 'comment').map((notification, index, filtered) => (
                  <div 
                    key={notification.id}
                    className={`p-4 flex items-start space-x-4 hover:bg-gray-50 cursor-pointer ${
                      index !== filtered.length - 1 ? 'border-b border-gray-100' : ''
                    } ${notification.unread ? 'bg-momentum-25' : ''}`}
                  >
                    <div className={`p-2 rounded-full ${getIconBg(notification.type)}`}>
                      <notification.icon className={`h-4 w-4 ${getIconColor(notification.type)}`} />
                    </div>

                    <Avatar className="w-10 h-10">
                      <AvatarImage src={notification.user.avatar} />
                      <AvatarFallback className="bg-momentum-100 text-momentum-600">
                        {notification.user.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{notification.user.name}</span>{' '}
                        {notification.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {notification.unread && (
                        <div className="w-2 h-2 bg-momentum-600 rounded-full"></div>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                {notifications.filter(n => n.type === 'job' || n.type === 'event').map((notification, index, filtered) => (
                  <div 
                    key={notification.id}
                    className={`p-4 flex items-start space-x-4 hover:bg-gray-50 cursor-pointer ${
                      index !== filtered.length - 1 ? 'border-b border-gray-100' : ''
                    } ${notification.unread ? 'bg-momentum-25' : ''}`}
                  >
                    <div className={`p-2 rounded-full ${getIconBg(notification.type)}`}>
                      <notification.icon className={`h-4 w-4 ${getIconColor(notification.type)}`} />
                    </div>

                    <Avatar className="w-10 h-10">
                      <AvatarImage src={notification.user.avatar} />
                      <AvatarFallback className="bg-momentum-100 text-momentum-600">
                        {notification.user.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{notification.user.name}</span>{' '}
                        {notification.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {notification.unread && (
                        <div className="w-2 h-2 bg-momentum-600 rounded-full"></div>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
