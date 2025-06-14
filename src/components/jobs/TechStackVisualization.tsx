
import { Badge } from "@/components/ui/badge";

interface TechStackVisualizationProps {
  techStack: {
    category: string;
    technologies: string[];
    color: string;
  }[];
}

export const TechStackVisualization = ({ techStack }: TechStackVisualizationProps) => {
  return (
    <div className="space-y-3">
      {techStack.map((category, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-xs font-medium text-gray-600 min-w-[60px]">
            {category.category}
          </span>
          <div className="flex flex-wrap gap-1">
            {category.technologies.map((tech, techIdx) => (
              <Badge 
                key={techIdx}
                variant="outline" 
                className="text-xs py-0 px-2 h-5"
                style={{ 
                  borderColor: category.color,
                  color: category.color,
                  backgroundColor: `${category.color}10`
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
