
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  previewContent?: ReactNode;
  children: ReactNode;
  className?: string;
}

const CollapsibleSection = ({ 
  id, 
  title, 
  description, 
  isOpen, 
  onToggle, 
  previewContent, 
  children,
  className = "mb-16"
}: CollapsibleSectionProps) => {
  return (
    <div id={id} className={className}>
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between mb-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-left">
              <h2 className="text-xl font-medium text-gray-800 mb-1">
                {title}
              </h2>
              <p className="text-gray-600 text-sm">
                {description}
              </p>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </CollapsibleTrigger>
        
        {/* Preview when collapsed */}
        {!isOpen && previewContent}

        <CollapsibleContent>
          {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleSection;
