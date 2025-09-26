
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function InstructorChatPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <MessageSquare className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Instructor Chat</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Feature Coming Soon</CardTitle>
          <CardDescription>
            This section will contain a chat interface for approvers to communicate with instructors.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
