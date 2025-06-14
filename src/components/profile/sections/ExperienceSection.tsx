
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceSectionProps {
  content: any;
}

const ExperienceSection = ({ content }: ExperienceSectionProps) => {
  const jobs = content?.jobs || [
    {
      company: "New Company",
      position: "New Position",
      duration: "Present",
      description: "Add your experience details here..."
    }
  ];

  return (
    <Card className="shadow-lg border-0 mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <Briefcase className="h-6 w-6 text-momentum-600 mr-2" />
          Work Experience
        </h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job: any, index: number) => (
            <div key={index} className="border-l-4 border-momentum-600 pl-4">
              <h3 className="font-semibold text-gray-900">{job.position}</h3>
              <p className="text-momentum-600 font-medium">{job.company}</p>
              <p className="text-sm text-gray-600 mb-2">{job.duration}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
