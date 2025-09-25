import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SummarizationTool } from './summarization-tool';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { List } from 'lucide-react';

export default function InstructorPage() {
  const exampleYml = `
title: "Advanced Kubernetes"
description: "Master advanced concepts of Kubernetes including networking, security, and scaling."
chapters:
  - title: "Introduction to Advanced Concepts"
    slug: "intro"
  - title: "Advanced Networking with CNI"
    slug: "networking"
  - title: "Securing Kubernetes Clusters"
    slug: "security"
labs:
  - title: "Setting up Calico"
    slug: "lab-calico"
  - title: "Implementing Network Policies"
    slug: "lab-netpol"
`.trim();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">Instructor Dashboard</h1>
      <Tabs defaultValue="summarizer">
        <TabsList className="grid w-full grid-cols-2 max-w-lg">
          <TabsTrigger value="summarizer">AI Summarizer</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="summarizer" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Documentation Summarization Tool</CardTitle>
                  <CardDescription>
                    Paste your course materials below to get an AI-generated summary for quality assurance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SummarizationTool />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Example Course.yml</CardTitle>
                  <CardDescription>
                    You can copy and paste content from your YAML files or other documentation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="p-4 rounded-md bg-muted text-sm text-muted-foreground overflow-x-auto">
                    <code className="font-code">{exampleYml}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="courses" className="mt-6">
           <Card>
             <CardHeader>
               <CardTitle>My Courses</CardTitle>
                <CardDescription>
                  A list of courses you are developing. This feature is coming soon.
                </CardDescription>
             </CardHeader>
             <CardContent className="flex flex-col items-center justify-center text-center h-64">
                <List className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">No courses available yet.</p>
             </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
