import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function FinancialReportingPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Briefcase className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Financial Reporting</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will provide reports on recurring revenue, commission calculations, and integration with financial systems.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
