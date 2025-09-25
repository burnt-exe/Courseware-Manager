import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ApproverProfilePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">Approver Profile</h1>
      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@approver" />
                    <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-4xl">Approver User</CardTitle>
                    <CardDescription className="text-lg">user@example.com</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <Separator />
            <div className="space-y-2">
                <h3 className="font-semibold text-lg">Your Role</h3>
                <p className="text-muted-foreground">You are a courseware approver. Your primary responsibility is to review courseware release builds, ensure quality standards are met, and approve or reject submissions.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg">Permissions</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                    <li>View pending release builds</li>
                    <li>Approve or reject builds</li>
                    <li>View build history and approval status</li>
                    <li>Access quality control checklists</li>
                </ul>
            </div>
             <Button>Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  )
}
