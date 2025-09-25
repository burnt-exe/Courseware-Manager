import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function PerformanceMetricsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <TrendingUp className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Performance Metrics</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will display course enrollment stats, completion rates, and partner leaderboards.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
