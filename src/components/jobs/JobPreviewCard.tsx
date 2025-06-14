
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, DollarSign, Clock, Star } from "lucide-react";

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
  companyStats: {
    confidenceScore: number;
  };
  companyProfile: {
    teamInsights: {
      satisfactionScore: number;
    };
  };
}

interface JobPreviewCardProps {
  job: JobListing;
  onJobClick: (jobId: string) => void;
}

export const JobPreviewCard = ({ job, onJobClick }: JobPreviewCardProps) => {
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

  // Safe data access with fallbacks
  const safeJob = {
    ...job,
    title: job.title || "N/A",
    company: job.company || "N/A",
    location: job.location || "N/A",
    type: job.type || "N/A",
    salary: job.salary || "N/A",
    posted: job.posted || "N/A",
    description: job.description || "No description available",
    problemType: job.problemType || null,
    companyStats: {
      confidenceScore: job.companyStats?.confidenceScore ?? 0
    },
    companyProfile: {
      teamInsights: {
        satisfactionScore: job.companyProfile?.teamInsights?.satisfactionScore ?? 0
      }
    }
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-momentum-500"
      onClick={() => onJobClick(job.id)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{safeJob.title}</h3>
            <div className="flex items-center text-gray-600 text-sm space-x-3">
              <span className="flex items-center"><Building className="h-3 w-3 mr-1" />{safeJob.company}</span>
              <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" />{safeJob.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-momentum-600 font-semibold text-sm">
              <DollarSign className="h-3 w-3 mr-1" />
              {safeJob.salary}
            </div>
            <Badge variant="secondary" className="text-xs mt-1">{safeJob.type}</Badge>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm line-clamp-2 mb-3">{safeJob.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 flex-wrap">
            {safeJob.problemType && (
              <Badge variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200 text-xs">
                {safeJob.problemType}
              </Badge>
            )}
            <Badge variant="outline" className={`${getConfidenceBadgeColor(safeJob.companyStats.confidenceScore)} text-xs`}>
              {safeJob.companyStats.confidenceScore || 0}% Confidence
            </Badge>
            <Badge variant="outline" className={`${getSatisfactionBadgeColor(safeJob.companyProfile.teamInsights.satisfactionScore)} text-xs`}>
              <Star className="h-3 w-3 mr-1" />
              {safeJob.companyProfile.teamInsights.satisfactionScore || 0}/5 Satisfaction
            </Badge>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {safeJob.posted}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
