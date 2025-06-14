import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MapPin, Clock, DollarSign, Building, TrendingUp, Users, Coffee, Zap, Heart, Star } from "lucide-react";
import { TechStackVisualization } from "@/components/jobs/TechStackVisualization";

const Jobs = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      description: "We're looking for a senior data scientist to lead our ML initiatives and drive business insights.",
      complexity: "Medium",
      problemType: "Business Analytics",
      teamSize: "8-12 people",
      techStack: [
        { category: "ML", technologies: ["TensorFlow", "PyTorch", "Scikit-learn"], color: "#3b82f6" },
        { category: "Data", technologies: ["Python", "SQL", "Spark"], color: "#10b981" },
        { category: "Cloud", technologies: ["AWS", "Docker", "Kubernetes"], color: "#f59e0b" }
      ],
      companyStats: {
        totalPosted: 24,
        totalFilled: 18,
        confidenceScore: 75
      },
      companyProfile: {
        culture: {
          workStyle: "Hybrid - 3 days in office",
          vibe: "Fast-paced, collaborative",
          values: ["Innovation", "Work-life balance", "Growth mindset"]
        },
        perks: [
          { icon: "Coffee", label: "Free meals & snacks" },
          { icon: "Heart", label: "Comprehensive health coverage" },
          { icon: "Zap", label: "Learning stipend $2k/year" }
        ],
        teamInsights: {
          avgTenure: "2.5 years",
          satisfactionScore: 4.2,
          diversityScore: "High",
          mentorshipProgram: true
        },
        recentFeedback: [
          { text: "Great mentorship and learning opportunities", rating: 5 },
          { text: "Good work-life balance, flexible hours", rating: 4 }
        ]
      }
    },
    {
      id: 2,
      title: "AI Engineer",
      company: "Innovation Labs",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120/hr",
      posted: "1 week ago",
      description: "Join our team to build cutting-edge AI solutions for enterprise clients.",
      complexity: "Very High",
      problemType: "Computer Vision",
      teamSize: "4-6 people",
      techStack: [
        { category: "AI", technologies: ["PyTorch", "OpenCV", "Transformers"], color: "#8b5cf6" },
        { category: "Backend", technologies: ["FastAPI", "Docker", "Redis"], color: "#ef4444" },
        { category: "Cloud", technologies: ["GCP", "TPU", "Vertex AI"], color: "#f59e0b" }
      ],
      companyStats: {
        totalPosted: 12,
        totalFilled: 11,
        confidenceScore: 92
      },
      companyProfile: {
        culture: {
          workStyle: "Fully remote",
          vibe: "Cutting-edge, research-focused",
          values: ["Innovation", "Technical excellence", "Autonomy"]
        },
        perks: [
          { icon: "Zap", label: "Top-tier equipment provided" },
          { icon: "Users", label: "Conference budget $5k/year" },
          { icon: "Heart", label: "Flexible PTO policy" }
        ],
        teamInsights: {
          avgTenure: "3.2 years",
          satisfactionScore: 4.6,
          diversityScore: "Medium",
          mentorshipProgram: false
        },
        recentFeedback: [
          { text: "Incredible technical challenges and growth", rating: 5 },
          { text: "Very autonomous, great for self-starters", rating: 4 }
        ]
      }
    },
    {
      id: 3,
      title: "Data Analytics Manager",
      company: "GrowthCorp",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "3 days ago",
      description: "Lead a team of data analysts and drive strategic decision-making through data insights.",
      complexity: "Medium",
      problemType: "Business Analytics",
      teamSize: "12-15 people",
      techStack: [
        { category: "BI", technologies: ["Tableau", "PowerBI", "Looker"], color: "#06b6d4" },
        { category: "Data", technologies: ["SQL", "Python", "dbt"], color: "#10b981" },
        { category: "Platform", technologies: ["Snowflake", "Airflow", "Git"], color: "#6366f1" }
      ],
      companyStats: {
        totalPosted: 8,
        totalFilled: 4,
        confidenceScore: 50
      },
      companyProfile: {
        culture: {
          workStyle: "In-office focused",
          vibe: "Traditional, structured",
          values: ["Reliability", "Teamwork", "Results-driven"]
        },
        perks: [
          { icon: "Heart", label: "401k matching 6%" },
          { icon: "Coffee", label: "On-site gym & cafe" },
          { icon: "Users", label: "Team building events" }
        ],
        teamInsights: {
          avgTenure: "4.1 years",
          satisfactionScore: 3.8,
          diversityScore: "Medium",
          mentorshipProgram: true
        },
        recentFeedback: [
          { text: "Stable environment, good for families", rating: 4 },
          { text: "Process-heavy, slower pace of innovation", rating: 3 }
        ]
      }
    }
  ];

  const getComplexityIcon = (complexity: string) => {
    switch (complexity) {
      case "Very High": return <Brain className="h-4 w-4 text-purple-600" />;
      case "Medium": return <Code className="h-4 w-4 text-blue-600" />;
      default: return <Code className="h-4 w-4 text-gray-600" />;
    }
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getConfidenceBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  const getPerkIcon = (iconName: string) => {
    switch (iconName) {
      case "Coffee": return <Coffee className="h-4 w-4" />;
      case "Heart": return <Heart className="h-4 w-4" />;
      case "Zap": return <Zap className="h-4 w-4" />;
      case "Users": return <Users className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Visual Job Matching
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover AI roles through interactive visualizations and smart matching
            </p>
          </div>

          <div className="grid gap-8">
            {jobListings.map((job) => (
              <Card key={job.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {job.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200">
                          {job.problemType}
                        </Badge>
                        <span className="text-sm text-gray-500">{job.teamSize} team</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge variant="outline" className={getConfidenceBadgeColor(job.companyStats.confidenceScore)}>
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {job.companyStats.confidenceScore}% Confidence
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Likelihood of a ghost job based on past hiring.</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {job.type}
                      </Badge>
                      <div className="flex items-center text-momentum-600 font-semibold">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Tech Stack</h4>
                      <TechStackVisualization techStack={job.techStack} />
                    </div>

                    {/* Company Culture Snapshot */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Working Here</h4>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700">Work Style</span>
                          <span className="text-sm text-blue-700 font-medium">{job.companyProfile.culture.workStyle}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 mb-3">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">
                            <span className="font-medium">{job.companyProfile.teamInsights.satisfactionScore}/5</span> employee satisfaction
                          </span>
                        </div>

                        <div className="text-xs text-gray-600 italic mb-3">
                          "{job.companyProfile.recentFeedback[0].text}"
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {job.companyProfile.perks.slice(0, 2).map((perk, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-white/50 border-blue-200 text-blue-700">
                              {getPerkIcon(perk.icon)}
                              <span className="ml-1">{perk.label.split(' ')[0]}</span>
                            </Badge>
                          ))}
                          {job.companyProfile.perks.length > 2 && (
                            <Badge variant="outline" className="text-xs bg-white/50 border-blue-200 text-blue-700">
                              +{job.companyProfile.perks.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <div className="flex gap-3">
                    <Button className="bg-momentum-600 hover:bg-momentum-700">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      Save Job
                    </Button>
                    <Button variant="outline">
                      View Company Culture
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Jobs;
