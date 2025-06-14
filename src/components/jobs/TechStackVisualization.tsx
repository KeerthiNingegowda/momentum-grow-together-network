
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechStackVisualizationProps {
  techStack: {
    category: string;
    technologies?: string[];
    details?: string[];
    color: string;
    description?: string;
  }[];
}

export const TechStackVisualization = ({ techStack }: TechStackVisualizationProps) => {
  // Handle empty or invalid data
  if (!techStack || techStack.length === 0) {
    return (
      <p className="text-gray-500 text-sm">No information available</p>
    );
  }

  return (
    <div className="space-y-4">
      {techStack.map((category, idx) => {
        // Use either technologies or details array, with fallback
        const items = category.technologies || category.details || [];
        const categoryName = category.category || "N/A";
        const categoryColor = category.color || "#gray";
        
        return (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: categoryColor }}
              />
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-sm font-medium text-gray-900 cursor-help">
                    {categoryName}
                  </span>
                </TooltipTrigger>
                {category.description && (
                  <TooltipContent>
                    <p className="max-w-xs">{category.description}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-1 ml-5">
              {items.length > 0 ? (
                items.map((item, itemIdx) => (
                  <Badge 
                    key={itemIdx}
                    variant="outline" 
                    className="text-xs py-1 px-2 h-6 font-medium"
                    style={{ 
                      borderColor: categoryColor,
                      color: categoryColor,
                      backgroundColor: `${categoryColor}15`
                    }}
                  >
                    {item || "N/A"}
                  </Badge>
                ))
              ) : (
                <span className="text-xs text-gray-500 ml-1">No items specified</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
