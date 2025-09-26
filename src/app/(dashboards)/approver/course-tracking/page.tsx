
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "lucide-react";

export default function CourseTrackingPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <LineChart className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Course Tracking</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will provide tools for tracking the progress and status of courses in development and review.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
