import { useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function ProjectItem() {
  const params = useParams();

  const surveys = [
    {
      id: 1,
      title: "Post Purchase Survey",
      status: "ACTIVE",
      responses: 450,
    },

    {
      id: 2,
      title: "Onboarding Feedback",
      status: "ACTIVE",
      responses: 120,
    },

    {
      id: 3,
      title: "Churn Reason Survey",
      status: "DRAFT",
      responses: 85,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">
        Project {params.projectId}
      </h1>

      <p className="text-gray-500 mb-8">
        Survey Management Page
      </p>

      <div className="flex gap-6 flex-wrap">
        {surveys.map((survey) => {
          return (
            <Card
              key={survey.id}
              className="w-[320px] hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{survey.title}</CardTitle>

                  <Badge>{survey.status}</Badge>
                </div>

                <CardDescription>
                  Customer feedback survey
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-lg font-semibold">
                  {survey.responses} Responses
                </p>
              </CardContent>

              <CardFooter>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  Edit in Builder
                </button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectItem;