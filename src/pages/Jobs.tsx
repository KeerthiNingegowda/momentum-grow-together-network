
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building } from "lucide-react";

const Jobs = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Data Scientist",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      description: "We're looking for a senior data scientist to lead our ML initiatives and drive business insights.",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"]
    },
    {
      id: 2,
      title: "AI Engineer",
      company: "Innovation Labs",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120/hr",
      posted: "1 week ago",
      description: "Join our team to build cutting-edge AI solutions for enterprise clients.",
      skills: ["PyTorch", "Deep Learning", "Computer Vision", "AWS"]
    },
    {
      id: 3,
      title: "Data Analytics Manager",
      company: "GrowthCorp",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "3 days ago",
      description: "Lead a team of data analysts and drive strategic decision-making through data insights.",
      skills: ["SQL", "Tableau", "Python", "Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-momentum-50 to-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Find Your Next Opportunity
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover data science and AI roles that match your expertise and career goals
          </p>
        </div>

        <div className="grid gap-6">
          {jobListings.map((job) => (
            <Card key={job.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {job.type}
                    </Badge>
                    <div className="flex items-center text-momentum-600 font-semibold">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-momentum-50 text-momentum-700 border-momentum-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button className="bg-momentum-600 hover:bg-momentum-700">
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    Save Job
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
