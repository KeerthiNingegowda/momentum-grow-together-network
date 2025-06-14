import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MapPin, Clock, DollarSign, Building, TrendingUp, Users, Coffee, Zap, Heart, Star, Search, Filter } from "lucide-react";
import { TechStackVisualization } from "@/components/jobs/TechStackVisualization";
import { useState } from "react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [salaryFilter, setSalaryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"detailed" | "preview">("detailed");

  const jobListings = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      description: "We're looking for a senior data scientist to lead our ML initiatives and drive business insights. You'll work with cross-functional teams to develop predictive models, analyze large datasets, and translate complex findings into actionable business strategies. Experience with deep learning, statistical modeling, and data visualization is essential.",
      complexity: "Medium",
      problemType: "Business Analytics",
      teamSize: "8-12 people",
      techStack: [
        { 
          category: "Machine Learning", 
          technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"], 
          color: "#3b82f6",
          description: "Advanced ML frameworks for model development and training"
        },
        { 
          category: "Data Processing", 
          technologies: ["Python", "SQL", "Apache Spark", "Pandas", "NumPy"], 
          color: "#10b981",
          description: "Core data manipulation and analysis tools"
        },
        { 
          category: "Cloud & Infrastructure", 
          technologies: ["AWS SageMaker", "Docker", "Kubernetes", "MLflow"], 
          color: "#f59e0b",
          description: "Scalable deployment and model management platforms"
        },
        { 
          category: "Visualization", 
          technologies: ["Tableau", "PowerBI", "Matplotlib", "D3.js"], 
          color: "#8b5cf6",
          description: "Data visualization and business intelligence tools"
        }
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
        companyInsights: [
          {
            category: "Employee Satisfaction",
            details: ["4.2/5 Glassdoor rating", "92% would recommend to friend", "Strong career growth opportunities"],
            color: "#10b981",
            description: "Overall employee satisfaction and workplace ratings"
          },
          {
            category: "Culture & Management",
            details: ["Flat hierarchy", "Quarterly 1:1s", "Transparent communication", "Results-focused"],
            color: "#3b82f6", 
            description: "Management style and company culture characteristics"
          },
          {
            category: "Company Health",
            details: ["Series C funded ($50M)", "200% revenue growth YoY", "Expanding to 3 new markets"],
            color: "#f59e0b",
            description: "Recent funding, growth metrics, and business trajectory"
          },
          {
            category: "Benefits & Perks",
            details: ["Equity package included", "Free meals & snacks", "$2k learning budget", "4 weeks PTO"],
            color: "#8b5cf6",
            description: "Compensation benefits and workplace perks"
          }
        ],
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
      description: "Join our team to build cutting-edge AI solutions for enterprise clients. You'll architect and implement computer vision systems, work with large language models, and optimize AI pipelines for production environments. Strong experience in deep learning research and practical AI deployment required.",
      complexity: "Very High",
      problemType: "Computer Vision",
      teamSize: "4-6 people",
      techStack: [
        { 
          category: "AI/ML Frameworks", 
          technologies: ["PyTorch", "OpenCV", "Transformers", "CUDA", "TensorRT"], 
          color: "#8b5cf6",
          description: "Advanced AI frameworks for computer vision and NLP"
        },
        { 
          category: "Backend Systems", 
          technologies: ["FastAPI", "Docker", "Redis", "PostgreSQL"], 
          color: "#ef4444",
          description: "High-performance backend infrastructure"
        },
        { 
          category: "Cloud AI Services", 
          technologies: ["GCP Vertex AI", "TPU", "Cloud Storage", "BigQuery"], 
          color: "#f59e0b",
          description: "Google Cloud AI and data processing services"
        },
        { 
          category: "Development Tools", 
          technologies: ["Git", "Jupyter", "Weights & Biases", "DVC"], 
          color: "#06b6d4",
          description: "Version control and experiment tracking tools"
        }
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
        companyInsights: [
          {
            category: "Employee Satisfaction",
            details: ["4.6/5 internal rating", "High technical autonomy", "Challenging projects"],
            color: "#10b981",
            description: "Employee satisfaction and work environment quality"
          },
          {
            category: "Culture & Management",
            details: ["Self-managing teams", "Quarterly reviews only", "Research-first mindset", "Remote-native"],
            color: "#3b82f6",
            description: "Management approach and cultural characteristics"
          },
          {
            category: "Company Health", 
            details: ["Bootstrap profitable", "40+ enterprise clients", "AI consulting leader"],
            color: "#f59e0b",
            description: "Financial stability and market position"
          },
          {
            category: "Benefits & Perks",
            details: ["Top-tier equipment", "$5k conference budget", "Flexible PTO", "Performance bonuses"],
            color: "#8b5cf6",
            description: "Compensation and professional development benefits"
          }
        ],
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
      description: "Lead a team of data analysts and drive strategic decision-making through data insights. You'll oversee dashboard development, establish data governance practices, and collaborate with executive leadership to identify growth opportunities. Strong leadership and business acumen required alongside technical expertise.",
      complexity: "Medium",
      problemType: "Business Analytics",
      teamSize: "12-15 people",
      techStack: [
        { 
          category: "Business Intelligence", 
          technologies: ["Tableau", "PowerBI", "Looker", "Google Analytics"], 
          color: "#06b6d4",
          description: "Enterprise BI and analytics platforms"
        },
        { 
          category: "Data Engineering", 
          technologies: ["SQL", "Python", "dbt", "Apache Airflow"], 
          color: "#10b981",
          description: "Data transformation and pipeline orchestration"
        },
        { 
          category: "Data Warehouse", 
          technologies: ["Snowflake", "BigQuery", "Redshift", "S3"], 
          color: "#6366f1",
          description: "Cloud data warehousing and storage solutions"
        },
        { 
          category: "Collaboration", 
          technologies: ["Git", "Slack", "Jira", "Confluence"], 
          color: "#84cc16",
          description: "Team collaboration and project management tools"
        }
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
        companyInsights: [
          {
            category: "Employee Satisfaction",
            details: ["3.8/5 Glassdoor rating", "Stable work environment", "Good for work-life balance"],
            color: "#10b981",
            description: "Employee satisfaction and workplace stability"
          },
          {
            category: "Culture & Management",
            details: ["Traditional hierarchy", "Monthly team meetings", "Process-oriented", "Structured reviews"],
            color: "#3b82f6",
            description: "Management structure and organizational culture"
          },
          {
            category: "Company Health",
            details: ["Public company (NYSE: GROW)", "Stock: $45.20 (+2.1%)", "Dividend paying", "Fortune 500"],
            color: "#f59e0b",
            description: "Public company status and financial performance"
          },
          {
            category: "Benefits & Perks",
            details: ["401k matching 6%", "On-site gym & cafe", "Health insurance", "Team events"],
            color: "#8b5cf6",
            description: "Traditional corporate benefits package"
          }
        ],
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

  // Filter jobs based on search criteria
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

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

  const JobPreviewCard = ({ job }: { job: typeof jobListings[0] }) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-momentum-500">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
            <div className="flex items-center text-gray-600 text-sm space-x-3">
              <span className="flex items-center"><Building className="h-3 w-3 mr-1" />{job.company}</span>
              <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" />{job.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-momentum-600 font-semibold text-sm">
              <DollarSign className="h-3 w-3 mr-1" />
              {job.salary}
            </div>
            <Badge variant="secondary" className="text-xs mt-1">{job.type}</Badge>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm line-clamp-2 mb-3">{job.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Badge variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200 text-xs">
              {job.problemType}
            </Badge>
            <Badge variant="outline" className={`${getConfidenceBadgeColor(job.companyStats.confidenceScore)} text-xs`}>
              {job.companyStats.confidenceScore}% Confidence
            </Badge>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {job.posted}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search and Filters Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant={viewMode === "preview" ? "default" : "outline"}
                onClick={() => setViewMode(viewMode === "preview" ? "detailed" : "preview")}
                className="whitespace-nowrap"
              >
                {viewMode === "preview" ? "Detailed View" : "Quick Preview"}
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={salaryFilter} onValueChange={setSalaryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ranges</SelectItem>
                  <SelectItem value="0-100k">$0 - $100k</SelectItem>
                  <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                  <SelectItem value="150k+">$150k+</SelectItem>
                </SelectContent>
              </Select>
              
              {(searchTerm || locationFilter !== "all" || typeFilter !== "all" || salaryFilter !== "all") && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchTerm("");
                    setLocationFilter("all");
                    setTypeFilter("all");
                    setSalaryFilter("all");
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {jobListings.length} jobs
            </p>
          </div>

          {/* Job Listings */}
          <div className={`grid gap-${viewMode === "preview" ? "4" : "8"}`}>
            {filteredJobs.map((job) => (
              viewMode === "preview" ? (
                <JobPreviewCard key={job.id} job={job} />
              ) : (
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
                    {/* Job Description - Now prioritized */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">About This Role</h4>
                      <p className="text-gray-700 leading-relaxed">{job.description}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* Enhanced Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Technical Requirements</h4>
                        <TechStackVisualization techStack={job.techStack} />
                      </div>

                      {/* Company Insights - Similar format to Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Company Insights</h4>
                        <TechStackVisualization techStack={job.companyProfile.companyInsights} />
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="bg-momentum-600 hover:bg-momentum-700">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        Save Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Jobs;
