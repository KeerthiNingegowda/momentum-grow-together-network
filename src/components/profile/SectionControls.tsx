
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  GripVertical, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff 
} from "lucide-react";
import { useProfileEdit } from "@/contexts/ProfileEditContext";

interface SectionControlsProps {
  sectionId: string;
  isVisible: boolean;
  onEdit?: () => void;
}

const SectionControls = ({ sectionId, isVisible, onEdit }: SectionControlsProps) => {
  const { isEditMode, removeSection, updateSection } = useProfileEdit();

  if (!isEditMode) {
    return null;
  }

  const handleToggleVisibility = () => {
    updateSection(sectionId, { isVisible: !isVisible });
  };

  const handleRemove = () => {
    if (confirm('Are you sure you want to remove this section?')) {
      removeSection(sectionId);
    }
  };

  return (
    <Card className="absolute -top-2 -right-2 z-10 bg-white shadow-lg border-momentum-200">
      <div className="flex items-center p-2 space-x-1">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-grab">
          <GripVertical className="h-4 w-4 text-gray-400" />
        </Button>
        
        {onEdit && (
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onEdit}>
            <Edit className="h-4 w-4 text-momentum-600" />
          </Button>
        )}
        
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleToggleVisibility}>
          {isVisible ? (
            <Eye className="h-4 w-4 text-green-600" />
          ) : (
            <EyeOff className="h-4 w-4 text-gray-400" />
          )}
        </Button>
        
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleRemove}>
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </Card>
  );
};

export default SectionControls;
