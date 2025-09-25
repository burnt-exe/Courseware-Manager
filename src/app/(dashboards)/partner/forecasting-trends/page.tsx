import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

export default function ForecastingTrendsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <BarChart className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Forecasting & Trends</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will offer predictive sales analytics and AI-based revenue forecasting.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
