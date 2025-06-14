
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Edit, 
  Plus, 
  Save, 
  X,
  Eye,
  EyeOff,
  Briefcase,
  GraduationCap,
  Zap,
  FolderOpen,
  Award,
  FileText
} from "lucide-react";
import { useProfileEdit } from "@/contexts/ProfileEditContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const EditToolbar = () => {
  const { isEditMode, setIsEditMode, addSection } = useProfileEdit();

  const sectionTypes = [
    { type: 'experience', label: 'Work Experience', icon: Briefcase },
    { type: 'education', label: 'Education', icon: GraduationCap },
    { type: 'skills', label: 'Skills & Expertise', icon: Zap },
    { type: 'projects', label: 'Featured Projects', icon: FolderOpen },
    { type: 'achievements', label: 'Achievements', icon: Award },
    { type: 'custom', label: 'Custom Section', icon: FileText }
  ];

  const handleAddSection = (type: string) => {
    console.log('Adding section:', type);
    addSection(type);
  };

  if (!isEditMode) {
    return (
      <div className="fixed top-32 left-4 z-40">
        <Button 
          onClick={() => setIsEditMode(true)}
          className="bg-momentum-600 hover:bg-momentum-700 shadow-lg"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-32 left-4 z-40">
      <Card className="shadow-lg border-momentum-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Badge variant="secondary" className="bg-momentum-100 text-momentum-700">
              Edit Mode
            </Badge>
          </div>
          
          <div className="space-y-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Add New Section</SheetTitle>
                  <SheetDescription>
                    Choose a section type to add to your profile
                  </SheetDescription>
                </SheetHeader>
                
                <div className="mt-6 space-y-3">
                  {sectionTypes.map((sectionType) => {
                    const Icon = sectionType.icon;
                    return (
                      <SheetTrigger key={sectionType.type} asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start h-auto p-4"
                          onClick={() => handleAddSection(sectionType.type)}
                        >
                          <Icon className="h-5 w-5 mr-3 text-momentum-600" />
                          <div className="text-left">
                            <div className="font-medium">{sectionType.label}</div>
                          </div>
                        </Button>
                      </SheetTrigger>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsEditMode(false)}
              className="w-full justify-start"
            >
              <Save className="h-4 w-4 mr-2" />
              Save & Exit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditToolbar;
