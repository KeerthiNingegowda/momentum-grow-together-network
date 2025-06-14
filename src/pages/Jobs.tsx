import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MapPin, Clock, DollarSign, Building, TrendingUp, Zap, Brain, Code } from "lucide-react";
import { TechStackVisualization } from "@/components/jobs/TechStackVisualization";
import { MatchScore } from "@/components/jobs/MatchScore";

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
      matchScore: {
        score: 78,
        factors: [
          { name: "Skills Match", score: 85, weight: 40 },
          { name: "Experience Level", score: 75, weight: 30 },
          { name: "Tech Stack", score: 70, weight: 20 },
          { name: "Location Pref", score: 80, weight: 10 }
        ]
      },
      companyStats: {
        totalPosted: 24,
        totalFilled: 18,
        confidenceScore: 75
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
      matchScore: {
        score: 65,
        factors: [
          { name: "Skills Match", score: 70, weight: 40 },
          { name: "Experience Level", score: 60, weight: 30 },
          { name: "Tech Stack", score: 75, weight: 20 },
          { name: "Location Pref", score: 90, weight: 10 }
        ]
      },
      companyStats: {
        totalPosted: 12,
        totalFilled: 11,
        confidenceScore: 92
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
      matchScore: {
        score: 82,
        factors: [
          { name: "Skills Match", score: 75, weight: 40 },
          { name: "Experience Level", score: 90, weight: 30 },
          { name: "Tech Stack", score: 85, weight: 20 },
          { name: "Location Pref", score: 70, weight: 10 }
        ]
      },
      companyStats: {
        totalPosted: 8,
        totalFilled: 4,
        confidenceScore: 50
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
                        <div className="flex items-center space-x-1">
                          {getComplexityIcon(job.complexity)}
                          <span className="text-sm font-medium">{job.complexity}</span>
                        </div>
                        <Badge variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200">
                          {job.problemType}
                        </Badge>
                        <span className="text-sm text-gray-500">{job.teamSize} team</span>
                      </div>

                      <div className="flex items-center space-x-3">
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
                        <span className="text-sm text-gray-500">
                          {job.companyStats.totalFilled}/{job.companyStats.totalPosted} roles filled
                        </span>
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

                    {/* Match Score */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Compatibility</h4>
                      <MatchScore score={job.matchScore.score} factors={job.matchScore.factors} />
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
                      View Analysis
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
