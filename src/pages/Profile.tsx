
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mail, Phone, Globe, LinkedinIcon, TwitterIcon, Edit, Share2, MessageCircle } from "lucide-react";

const Profile = () => {
  const skills = [
    "Strategic Leadership", "Digital Transformation", "Team Management", 
    "Product Strategy", "Innovation", "Business Development"
  ];

  const experiences = [
    {
      title: "Senior Product Manager",
      company: "TechCorp Inc.",
      duration: "2022 - Present",
      description: "Leading product strategy and development for enterprise solutions, managing cross-functional teams."
    },
    {
      title: "Product Manager",
      company: "StartupXYZ",
      duration: "2020 - 2022",
      description: "Drove product roadmap and feature development, increased user engagement by 40%."
    },
    {
      title: "Business Analyst",
      company: "ConsultingPro",
      duration: "2018 - 2020",
      description: "Analyzed business processes and provided strategic recommendations to Fortune 500 clients."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-momentum-100">
                    <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face" />
                    <AvatarFallback className="text-2xl bg-momentum-100 text-momentum-600">JS</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Jordan Smith</h1>
                  <p className="text-momentum-600 font-medium mb-1">Senior Product Manager</p>
                  <p className="text-gray-600 mb-4">TechCorp Inc.</p>
                  
                  <div className="flex justify-center space-x-2 mb-6">
                    <Button size="sm" className="bg-momentum-600 hover:bg-momentum-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-3 text-momentum-600" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-3 text-momentum-600" />
                    <span>jordan.smith@email.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-3 text-momentum-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-4 w-4 mr-3 text-momentum-600" />
                    <span>jordansmith.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                  <Button variant="outline" size="sm" className="p-2">
                    <LinkedinIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <TwitterIcon className="h-4 w-4" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-momentum-600">156</div>
                    <div className="text-sm text-gray-600">Connections</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-momentum-600">42</div>
                    <div className="text-sm text-gray-600">Endorsements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-momentum-600">89</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900">About</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Passionate product manager with 6+ years of experience driving digital transformation 
                  and building user-centric products. Skilled in strategic planning, cross-functional 
                  team leadership, and turning complex challenges into innovative solutions. 
                  Currently focused on enterprise SaaS products and scaling high-performance teams.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900">Skills</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-momentum-100 text-momentum-700 hover:bg-momentum-200 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900">Experience</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-momentum-200 pl-4 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-momentum-600 font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-momentum-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-700">Shared an article about "The Future of Product Management"</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-momentum-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-700">Connected with Sarah Johnson, VP of Engineering</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-momentum-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-700">Updated profile with new certification</p>
                      <p className="text-sm text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
