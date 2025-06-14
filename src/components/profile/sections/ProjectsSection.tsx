
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  content: any;
}

const ProjectsSection = ({ content }: ProjectsSectionProps) => {
  const projects = content?.projects || [
    {
      name: "Featured Project",
      description: "Add your project description here...",
      technologies: ["React", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <Card className="shadow-lg border-0 mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <FolderOpen className="h-6 w-6 text-momentum-600 mr-2" />
          Featured Projects
        </h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project: any, index: number) => (
            <div key={index} className="p-4 bg-momentum-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies?.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-momentum-100 text-momentum-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
