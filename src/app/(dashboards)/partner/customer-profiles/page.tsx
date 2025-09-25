import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function CustomerProfilesPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Users className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Customer Profiles</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will provide centralized customer profiles, segmentation tools, and the ability to add custom attributes.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
