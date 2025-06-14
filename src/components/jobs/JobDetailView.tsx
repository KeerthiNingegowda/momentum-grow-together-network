
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Building, MapPin, Clock, DollarSign, TrendingUp, Star, ArrowLeft } from "lucide-react";
import { TechStackVisualization } from "./TechStackVisualization";

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  problemType?: string;
  teamSize?: string;
  techStack: any[];
  companyStats: {
    confidenceScore: number;
  };
  companyProfile: {
    teamInsights: {
      satisfactionScore: number;
    };
    companyInsights: any[];
  };
}

interface JobDetailViewProps {
  job: JobListing;
  onBackClick: () => void;
}

export const JobDetailView = ({ job, onBackClick }: JobDetailViewProps) => {
  const getConfidenceBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  const getSatisfactionBadgeColor = (score: number) => {
    if (score >= 4.5) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 4.0) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Fixed Back Button */}
      <div className="mb-6 sticky top-20 z-10 bg-white/90 backdrop-blur-sm py-2 -mx-4 px-4">
        <Button 
          variant="outline" 
          onClick={onBackClick}
          className="flex items-center space-x-2 hover:bg-momentum-50 border-momentum-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Jobs</span>
        </Button>
      </div>

      <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow overflow-hidden">
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
                {job.problemType && (
                  <Badge variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200">
                    {job.problemType}
                  </Badge>
                )}
                {job.teamSize && (
                  <span className="text-sm text-gray-500">{job.teamSize} team</span>
                )}
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
                <Badge variant="outline" className={getSatisfactionBadgeColor(job.companyProfile.teamInsights.satisfactionScore)}>
                  <Star className="h-3 w-3 mr-1" />
                  {job.companyProfile.teamInsights.satisfactionScore}/5 Satisfaction
                </Badge>
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
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">About This Role</h4>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Technical Requirements</h4>
              <TechStackVisualization techStack={job.techStack} />
            </div>

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
    </div>
  );
};
