
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { Slack, BotMessageSquare, MessageSquare, Briefcase, Plus } from 'lucide-react';


const integrationApps = [
    { name: 'Slack', icon: <Slack /> },
    { name: 'Microsoft Teams', icon: <UsersIcon /> },
    { name: 'Google Chat', icon: <BotMessageSquare /> },
    { name: 'Monday.com', icon: <Briefcase /> },
    { name: 'WhatsApp', icon: <MessageSquare /> },
    { name: 'Discord', icon: <svg className="size-6" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.484a12.674 12.674 0 0 0-3.013-1.638A13.456 13.456 0 0 0 12 2a13.456 13.456 0 0 0-5.304.846A12.674 12.674 0 0 0 3.683 4.484A13.447 13.447 0 0 0 2.25 8.767c0 4.24 2.59 7.892 6.438 9.375a10.437 10.437 0 0 0 2.98.542a10.22 10.22 0 0 0 .346-.015a10.437 10.437 0 0 0 2.634-.527C18.448 16.66 21 13.008 21 8.767a13.447 13.447 0 0 0-1.433-4.283M9.015 14.11c-.91 0-1.646-.82-1.646-1.828s.736-1.828 1.646-1.828c.92 0 1.656.82 1.646 1.828s-.726 1.828-1.646 1.828m5.287 0c-.91 0-1.646-.82-1.646-1.828s.736-1.828 1.646-1.828c.92 0 1.656.82 1.646 1.828s-.726 1.828-1.646 1.828" /></svg> },
];

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export default function ApproverSettingsPage() {
    const { setTheme } = useTheme()

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6 font-headline">Settings</h1>
            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Account Information</CardTitle>
                        <CardDescription>Update your personal details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue="Approver User" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="user@example.com" />
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>Change your password.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                        </div>
                        <Button>Update Password</Button>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Theme</CardTitle>
                        <CardDescription>Select your preferred color scheme.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4">
                        <Button variant="outline" onClick={() => setTheme("light")}>Light</Button>
                        <Button variant="outline" onClick={() => setTheme("dark")}>Dark</Button>
                        <Button variant="outline" onClick={() => setTheme("system")}>System</Button>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>Chat & Collaboration Integrations</CardTitle>
                        <CardDescription>Connect your favorite apps to streamline communication and workflow.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {integrationApps.map((app) => (
                           <div key={app.name} className="flex items-center justify-between p-2 rounded-lg border">
                                <div className="flex items-center gap-4">
                                    <div className="text-foreground">{app.icon}</div>
                                    <span className="font-medium">{app.name}</span>
                                </div>
                                <Button variant="outline"><Plus className="mr-2 h-4 w-4" /> Connect</Button>
                           </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Manage your notification preferences.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <p className="text-sm text-muted-foreground">No notification settings available for this role yet.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
