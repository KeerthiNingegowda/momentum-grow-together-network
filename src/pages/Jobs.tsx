import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MapPin, Clock, DollarSign, Building, TrendingUp } from "lucide-react";

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
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
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
      skills: ["PyTorch", "Deep Learning", "Computer Vision", "AWS"],
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
      skills: ["SQL", "Tableau", "Python", "Leadership"],
      companyStats: {
        totalPosted: 8,
        totalFilled: 4,
        confidenceScore: 50
      }
    }
  ];

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
        
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Find Your Next Opportunity
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover data science and AI roles that match your expertise and career goals
            </p>
          </div>

          <div className="grid gap-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
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
                      <div className="flex items-center space-x-3">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge variant="outline" className={getConfidenceBadgeColor(job.companyStats.confidenceScore)}>
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {job.companyStats.confidenceScore}% Confidence
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Shows the likelihood of a ghost job posting based on past recruitment activities</p>
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
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200">
                        {skill}
                      </Badge>
                    ))}
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
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Jobs;
