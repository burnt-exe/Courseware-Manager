import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function CustomReportsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <FileText className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Custom Reports</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will include an interactive dashboard and a custom report builder with scheduling capabilities.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
