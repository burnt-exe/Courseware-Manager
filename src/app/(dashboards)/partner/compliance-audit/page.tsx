import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function ComplianceAuditPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Shield className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Compliance & Audit</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will contain Tax/VAT reports, audit logs, and tools for GDPR/POPIA compliance.
          </CardDescription>
        </CardHeader>
      </card>
    </div>
  );
}
