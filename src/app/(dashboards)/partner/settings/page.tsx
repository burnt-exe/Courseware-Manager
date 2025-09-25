
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";


export default function PartnerSettingsPage() {
    const { setTheme } = useTheme()

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6 font-headline">Settings</h1>
            <div className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Account Information</CardTitle>
                        <CardDescription>Update your personal and company details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue="Partner User" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="user@example.com" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" defaultValue="Partner Company Inc." />
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
                        <CardTitle>API Access</CardTitle>
                        <CardDescription>Manage API keys for integrations.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <p className="text-sm text-muted-foreground">No API keys have been generated.</p>
                       <Button variant="outline">Generate New API Key</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
