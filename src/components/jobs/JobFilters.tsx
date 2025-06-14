
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface JobFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  salaryFilter: string;
  setSalaryFilter: (salary: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export const JobFilters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  salaryFilter,
  setSalaryFilter,
  onClearFilters,
  hasActiveFilters
}: JobFiltersProps) => {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Prominent Search Section */}
      <div className="bg-gradient-to-r from-momentum-500 to-momentum-600 p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Find Your Next Opportunity</h2>
        <div className="relative max-w-3xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 z-10" />
          <Input
            placeholder="Search jobs, companies, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-14 h-14 text-lg bg-white border-0 shadow-md focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-momentum-500"
          />
        </div>
      </div>
      
      {/* Filter Controls */}
      <div className="p-6 bg-gray-50">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-48 bg-white">
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
            <SelectTrigger className="w-40 bg-white">
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
            <SelectTrigger className="w-40 bg-white">
              <SelectValue placeholder="Salary Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ranges</SelectItem>
              <SelectItem value="0-100k">$0 - $100k</SelectItem>
              <SelectItem value="100k-150k">$100k - $150k</SelectItem>
              <SelectItem value="150k+">$150k+</SelectItem>
            </SelectContent>
          </Select>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={onClearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear all
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
