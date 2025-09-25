import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function StudentProfilePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">My Profile</h1>
      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@student" />
                    <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-4xl">Student User</CardTitle>
                    <CardDescription className="text-lg">user@example.com</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <Separator />
            <div className="space-y-2">
                <h3 className="font-semibold text-lg">My Learning Progress</h3>
                <div className="grid gap-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="font-medium">Advanced Kubernetes</p>
                            <span className="text-sm text-muted-foreground">65% Complete</span>
                        </div>
                        <Progress value={65} />
                    </div>
                     <div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="font-medium">Developing on Google Cloud</p>
                            <span className="text-sm text-muted-foreground">30% Complete</span>
                        </div>
                        <Progress value={30} />
                    </div>
                </div>
            </div>
             <Button>Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  )
}
