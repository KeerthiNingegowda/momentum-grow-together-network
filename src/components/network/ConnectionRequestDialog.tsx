
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Profile {
  id: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  image_url: string | null;
}

interface ConnectionRequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile | null;
  onSendRequest: (message: string) => void;
}

const ConnectionRequestDialog = ({ 
  isOpen, 
  onClose, 
  profile, 
  onSendRequest 
}: ConnectionRequestDialogProps) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendRequest = async () => {
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please write a message explaining why you'd like to connect.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await onSendRequest(message.trim());
      toast({
        title: "Connection request sent!",
        description: `Your connection request has been sent to ${profile?.name}. They will be notified and can accept or decline your request.`,
      });
      setMessage("");
      onClose();
    } catch (error) {
      toast({
        title: "Failed to send request",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setMessage("");
    onClose();
  };

  if (!profile) return null;

  const firstName = profile.name.split(' ')[0];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Send Connection Request</span>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Profile Preview */}
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Avatar className="w-12 h-12">
              {profile.image_url && (
                <AvatarImage src={profile.image_url} alt={profile.name} />
              )}
              <AvatarFallback className="bg-momentum-100 text-momentum-600">
                {profile.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{profile.name}</h3>
              <p className="text-sm text-gray-600">{profile.title}</p>
              <p className="text-sm text-gray-500">{profile.company}</p>
            </div>
          </div>

          {/* Connection Request Message */}
          <div className="space-y-2">
            <label htmlFor="connection-message" className="text-sm font-medium text-gray-700">
              Why would you like to connect with {firstName}?
            </label>
            <Textarea
              id="connection-message"
              placeholder={`Hi ${firstName}, I'd love to connect with you because...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] resize-none"
              maxLength={500}
            />
            <div className="text-xs text-gray-500 text-right">
              {message.length}/500 characters
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {profile.name} will receive your connection request and can choose to accept or decline it.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendRequest}
              disabled={isLoading || !message.trim()}
              className="flex-1 bg-momentum-600 hover:bg-momentum-700 text-white"
            >
              {isLoading ? (
                "Sending Request..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Request
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectionRequestDialog;
