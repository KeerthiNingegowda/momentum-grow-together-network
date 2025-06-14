
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
    <div className="mb-8 p-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search jobs, companies, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 h-12 text-base bg-white border border-gray-300 shadow-sm"
        />
      </div>
      
      {/* Filter Controls */}
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
  );
};
