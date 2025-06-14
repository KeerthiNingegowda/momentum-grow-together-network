import Navigation from "@/components/Navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { JobPreviewCard } from "@/components/jobs/JobPreviewCard";
import { JobFilters } from "@/components/jobs/JobFilters";
import { JobDetailView } from "@/components/jobs/JobDetailView";
import { jobListings } from "@/data/jobListings";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [salaryFilter, setSalaryFilter] = useState("all");
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  // Filter jobs based on search criteria
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleJobClick = (jobId: number) => {
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
