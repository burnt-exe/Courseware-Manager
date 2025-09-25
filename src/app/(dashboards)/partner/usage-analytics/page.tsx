import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

export default function UsageAnalyticsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <BarChart2 className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Usage Analytics</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will feature customer usage dashboards, license utilization reports, and predictive churn indicators.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
