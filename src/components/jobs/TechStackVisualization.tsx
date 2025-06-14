
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechStackVisualizationProps {
  techStack: {
    category: string;
    technologies: string[];
    color: string;
    description?: string;
  }[];
}

export const TechStackVisualization = ({ techStack }: TechStackVisualizationProps) => {
  return (
    <div className="space-y-4">
      {techStack.map((category, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: category.color }}
            />
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium text-gray-900 cursor-help">
                  {category.category}
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
            {category.technologies.map((tech, techIdx) => (
              <Badge 
                key={techIdx}
                variant="outline" 
                className="text-xs py-1 px-2 h-6 font-medium"
                style={{ 
                  borderColor: category.color,
                  color: category.color,
                  backgroundColor: `${category.color}15`
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
