
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Briefcase, Loader2 } from "lucide-react";
import { useProfiles, Profile } from "@/hooks/useProfiles";
import { useSendConnectionRequest } from "@/hooks/useConnectionRequests";
import { useState, useMemo } from "react";
import ConnectionRequestDialog from "@/components/network/ConnectionRequestDialog";

const Network = () => {
  const { data: profiles, isLoading, error } = useProfiles();
  const sendConnectionRequest = useSendConnectionRequest();
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter profiles based on search query
  const filteredProfiles = useMemo(() => {
    if (!profiles || !searchQuery.trim()) {
      return profiles || [];
    }

    const query = searchQuery.toLowerCase().trim();
    
    return profiles.filter(profile => 
      profile.name.toLowerCase().includes(query) ||
      profile.title.toLowerCase().includes(query) ||
      profile.company.toLowerCase().includes(query) ||
      profile.location.toLowerCase().includes(query) ||
      profile.skills.some(skill => skill.toLowerCase().includes(query)) ||
      profile.pastCompanies.some(company => company.toLowerCase().includes(query))
    );
  }, [profiles, searchQuery]);

  const handleConnectRequest = (profile: Profile) => {
    setSelectedProfile(profile);
    setIsDialogOpen(true);
  };

  const handleSendConnectionRequest = async (message: string) => {
    if (!selectedProfile) return;
    
    try {
      // For now, we'll use a mock sender profile ID
      // In a real app, this would come from the authenticated user's profile
      const mockSenderProfileId = "00000000-0000-0000-0000-000000000001";
      
      await sendConnectionRequest.mutateAsync({
        receiver_profile_id: selectedProfile.id,
        message,
        sender_profile_id: mockSenderProfileId,
      });
      
      console.log('Connection request sent successfully to:', selectedProfile.name);
    } catch (error) {
      console.error('Failed to send connection request:', error);
      throw error;
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProfile(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-momentum-600" />
            <span className="ml-2 text-gray-600">Loading network profiles...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-red-600 mb-2">Error loading profiles</p>
              <p className="text-gray-500 text-sm">{error.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Network Now</h1>
          <p className="text-gray-600">Grow your career one real connection at a time</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search professionals..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2">
              Found {filteredProfiles.length} professional{filteredProfiles.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </p>
          )}
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.length === 0 && searchQuery ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg mb-2">No professionals found</p>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          ) : (
            filteredProfiles.map((profile) => (
              <Card key={profile.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      {profile.image_url && (
                        <AvatarImage src={profile.image_url} alt={profile.name} />
                      )}
                      <AvatarFallback className="bg-momentum-100 text-momentum-600 text-lg">
                        {profile.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{profile.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{profile.title}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Briefcase className="h-3 w-3 mr-1" />
                        <span>{profile.company}</span>
                      </div>
                      {/* Past Companies */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {profile.pastCompanies.map((pastCompany, index) => (
                          <span key={index} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                            {pastCompany}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Mutual Connections */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      {profile.mutual_connections} mutual connections
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handleConnectRequest(profile)}
                      className="flex-1 text-sm bg-momentum-600 hover:bg-momentum-700 text-white"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Connection Request Dialog */}
      <ConnectionRequestDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        profile={selectedProfile}
        onSendRequest={handleSendConnectionRequest}
      />
    </div>
  );
};

export default Network;
