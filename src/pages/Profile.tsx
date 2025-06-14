
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TrendingUp, Handshake, Target, Zap, MessageCircle, Share2, TwitterIcon, ArrowRight, Brain, BarChart, ExternalLink, Building, GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);

  const keyWins = [
    { metric: "$12M", label: "Revenue Impact Generated", icon: TrendingUp },
    { metric: "67%", label: "Cost Reduction Achieved", icon: Target },
    { metric: "5x", label: "Model Performance Gains", icon: Zap },
    { metric: "3", label: "AI Products Launched", icon: Brain }
  ];

  const recentWins = [
    "Built fraud detection system that prevented $8M in losses while reducing false positives by 85%",
    "Created customer lifetime value model that increased marketing ROI by 340% across 3 business units",
    "Led AI transformation initiative that automated 60% of manual processes, saving 2,000 hours monthly"
  ];

  const testimonials = [
    {
      quote: "Alex delivered a recommendation engine that increased our revenue by 45% in just 3 months. His ability to translate complex ML concepts into business value is unmatched.",
      author: "Sarah Mitchell",
      title: "VP of Product, TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The fraud detection system Alex built saved us $2.3M in the first quarter alone. He doesn't just build models—he builds business solutions.",
      author: "Michael Rodriguez",
      title: "CTO, FinanceCore",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Working with Alex was a game-changer. His customer segmentation model helped us optimize our marketing spend and achieve 3x ROI improvement.",
      author: "Emily Chen",
      title: "Head of Marketing, GrowthLabs",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const workExperience = [
    { company: "TechFlow Inc.", role: "Senior Data Scientist", tenure: "2022-Present" },
    { company: "DataCorp", role: "ML Engineer", tenure: "2020-2022" },
    { company: "StartupXYZ", role: "Data Analyst", tenure: "2018-2020" }
  ];

  const education = [
    { school: "Stanford University", degree: "MS Computer Science" },
    { school: "UC Berkeley", degree: "BS Mathematics" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8 pt-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <Card className="shadow-lg border-0 mb-6 bg-gradient-to-br from-momentum-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Avatar className="w-20 h-20 ring-4 ring-momentum-200">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
                    <AvatarFallback className="text-xl bg-momentum-100 text-momentum-600">AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Chen</h1>
                    <div className="text-lg text-momentum-700 font-semibold mb-4">
                      I turn messy data into millions in revenue for tech companies
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      <span className="font-semibold text-momentum-600">In the past 18 months:</span> My AI models have directly generated $12M+ in revenue 
                      and prevented $8M in losses across 4 companies. While most data scientists build models that sit on shelves, 
                      I build systems that CEOs actually care about—the ones that show up on quarterly earnings calls.
                    </p>
                    <div className="flex space-x-3">
                      <Button size="lg" className="bg-momentum-600 hover:bg-momentum-700">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Let's Talk Business
                      </Button>
                      <Button variant="outline" size="lg">
                        <Share2 className="h-5 w-5 mr-2" />
                        Share Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {keyWins.map((win, index) => {
                const Icon = win.icon;
                return (
                  <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <Icon className="h-8 w-8 text-momentum-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-momentum-600 mb-1">{win.metric}</div>
                      <div className="text-sm text-gray-600 font-medium">{win.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Business Wins */}
            <Card className="shadow-lg border-0 mb-6">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <BarChart className="h-6 w-6 text-momentum-600 mr-2" />
                  Recent Business Wins
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWins.map((win, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-momentum-50 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-momentum-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{win}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card className="shadow-lg border-0 mb-6">
              <Collapsible open={isTestimonialsOpen} onOpenChange={setIsTestimonialsOpen}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-900 flex items-center">
                        <Handshake className="h-6 w-6 text-momentum-600 mr-2" />
                        Voices of Trust
                      </h2>
                      <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isTestimonialsOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                {!isTestimonialsOpen && (
                  <CardContent>
                    <div className="p-4 bg-momentum-50 rounded-lg border-l-4 border-momentum-600">
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "{testimonials[0].quote}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonials[0].avatar} />
                          <AvatarFallback className="bg-momentum-100 text-momentum-600">
                            {testimonials[0].author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonials[0].author}</div>
                          <div className="text-sm text-gray-600">{testimonials[0].title}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}

                <CollapsibleContent>
                  <CardContent>
                    <div className="grid md:grid-cols-1 gap-6">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 bg-momentum-50 rounded-lg border-l-4 border-momentum-600">
                          <p className="text-gray-700 italic mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={testimonial.avatar} />
                              <AvatarFallback className="bg-momentum-100 text-momentum-600">
                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-gray-900">{testimonial.author}</div>
                              <div className="text-sm text-gray-600">{testimonial.title}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Call to Action */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-momentum-600 to-momentum-700 text-white">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">What I'm Looking For Right Now</h2>
                <p className="text-momentum-50 leading-relaxed mb-4">
                  I'm connecting with <span className="font-semibold">CTOs, VPs of Engineering, and Founders</span> who are 
                  sitting on valuable data but struggling to monetize it. If you're tired of "insights" that don't move the needle 
                  and want AI that actually impacts your bottom line, let's discuss how I can help.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-momentum-700 hover:bg-momentum-50">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Discuss Your Data Challenge
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 mb-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Connect</h3>
                <div className="space-y-3 mb-4">
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Based in:</span> Toronto, ON
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Open to:</span> Consulting, Leadership, Advisory
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2 text-momentum-600" />
                    Experience
                  </h4>
                  <div className="space-y-2">
                    {workExperience.map((work, index) => (
                      <div key={index} className="text-sm">
                        <div className="font-medium text-gray-900">{work.company}</div>
                        <div className="text-gray-600">{work.role} • {work.tenure}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-momentum-600" />
                    Education
                  </h4>
                  <div className="space-y-2">
                    {education.map((edu, index) => (
                      <div key={index} className="text-sm">
                        <div className="font-medium text-gray-900">{edu.school}</div>
                        <div className="text-gray-600">{edu.degree}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <TwitterIcon className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>

                <div className="text-center pt-4 border-t">
                  <div className="text-2xl font-bold text-momentum-600 mb-1">94%</div>
                  <div className="text-sm text-gray-600">Project Success Rate</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="font-bold text-gray-900">What I Actually Do</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Revenue-Generating ML Models",
                    "Real-time Fraud Detection", 
                    "Customer Behavior Prediction",
                    "AI Strategy & Implementation",
                    "Data Team Leadership"
                  ].map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="w-full justify-start bg-momentum-100 text-momentum-700 hover:bg-momentum-200 px-3 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
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
