
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

export default function CustomerCourseRequestsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <ClipboardList className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Customer Course Requests</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will allow approvers to view and manage course requests submitted by customers.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
