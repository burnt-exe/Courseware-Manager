import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";

export default function CustomerOnboardingPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <UploadCloud className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Customer Onboarding</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will contain a guided setup wizard for new customers, tools for bulk importing users, and settings for CRM integration.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
