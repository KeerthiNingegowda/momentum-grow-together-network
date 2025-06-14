
import Navigation from "@/components/Navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { JobPreviewCard } from "@/components/jobs/JobPreviewCard";
import { JobFilters } from "@/components/jobs/JobFilters";
import { JobDetailView } from "@/components/jobs/JobDetailView";
import { useJobs } from "@/hooks/useJobs";
import { Loader2 } from "lucide-react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [salaryFilter, setSalaryFilter] = useState("all");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const { data: jobListings = [], isLoading, error } = useJobs();

  // Filter jobs based on search criteria
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleJobClick = (jobId: string) => {
    setSelectedJobId(jobId);
  };

  const handleBackToPreview = () => {
    setSelectedJobId(null);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setLocationFilter("all");
    setTypeFilter("all");
    setSalaryFilter("all");
  };

  const hasActiveFilters = Boolean(searchTerm) || locationFilter !== "all" || typeFilter !== "all" || salaryFilter !== "all";

  // Show loading state
  if (isLoading) {
    return (
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
          <Navigation />
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-momentum-600" />
              <p className="text-gray-600">Loading jobs...</p>
            </div>
          </div>
        </div>
      </TooltipProvider>
    );
  }

  // Show error state
  if (error) {
    return (
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
          <Navigation />
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <p className="text-red-600 mb-2">Error loading jobs</p>
              <p className="text-gray-600 text-sm">{error.message}</p>
            </div>
          </div>
        </div>
      </TooltipProvider>
    );
  }

  // Show detailed view for selected job
  if (selectedJobId) {
    const selectedJob = jobListings.find(job => job.id === selectedJobId);
    if (!selectedJob) return null;

    return (
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
          <Navigation />
          <JobDetailView job={selectedJob} onBackClick={handleBackToPreview} />
        </div>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <JobFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            salaryFilter={salaryFilter}
            setSalaryFilter={setSalaryFilter}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {jobListings.length} jobs
            </p>
          </div>

          <div className="grid gap-4">
            {filteredJobs.map((job) => (
              <JobPreviewCard key={job.id} job={job} onJobClick={handleJobClick} />
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Jobs;
