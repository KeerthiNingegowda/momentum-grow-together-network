
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface CustomSectionProps {
  content: any;
  title?: string;
}

const CustomSection = ({ content, title = "Custom Section" }: CustomSectionProps) => {
  const text = content?.text || "Add your custom content here...";

  return (
    <Card className="shadow-lg border-0 mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 flex items-center">
          <FileText className="h-6 w-6 text-momentum-600 mr-2" />
          {title}
        </h2>
      </CardHeader>
      <CardContent>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomSection;
