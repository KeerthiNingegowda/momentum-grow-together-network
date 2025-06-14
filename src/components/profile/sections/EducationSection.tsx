
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationSectionProps {
  content: any;
}

const EducationSection = ({ content }: EducationSectionProps) => {
  const schools = content?.schools || [
    {
      school: "University Name",
      degree: "Degree Program",
      year: "Year",
      description: "Add your education details here..."
    }
  ];

  return (
    <Card className="shadow-lg border-0 mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <GraduationCap className="h-6 w-6 text-momentum-600 mr-2" />
          Education
        </h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schools.map((edu: any, index: number) => (
            <div key={index} className="border-l-4 border-momentum-600 pl-4">
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-momentum-600 font-medium">{edu.school}</p>
              <p className="text-sm text-gray-600 mb-2">{edu.year}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
