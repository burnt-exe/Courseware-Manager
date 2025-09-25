import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PartnerProfilePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">Partner Profile</h1>
      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@partner" />
                    <AvatarFallback>PA</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-4xl">Partner User</CardTitle>
                    <CardDescription className="text-lg">user@example.com</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <Separator />
            <div className="space-y-2">
                <h3 className="font-semibold text-lg">Your Role</h3>
                <p className="text-muted-foreground">You are a Partner/Reseller. Your primary responsibility is to manage customer accounts, track sales, and access partner-specific resources.</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-lg">Company Information</h3>
                <p className="text-muted-foreground">Partner Company Inc.</p>
            </div>
             <Button>Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  )
}
