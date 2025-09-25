
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SummarizationTool } from './summarization-tool';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText, Edit } from 'lucide-react';
import { DocumentationGuide } from './documentation-guide';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: '1',
    title: 'Advanced Kubernetes',
    description: 'Master advanced concepts of Kubernetes including networking, security, and scaling.',
    status: 'In Development',
    imageId: 'course-1',
  },
  {
    id: '2',
    title: 'Developing on Google Cloud',
    description: 'Learn to build and deploy applications on Google Cloud Platform using various services.',
    status: 'In Review',
    imageId: 'course-2',
  },
  {
    id: '3',
    title: 'Data Engineering on GCP',
    description: 'A deep dive into building data pipelines and processing big data on GCP.',
    status: 'Published',
    imageId: 'course-3',
  },
  {
    id: '4',
    title: 'Cloud Architecture Design',
    description: 'Design and plan a cloud solution architecture. Learn about best practices and patterns.',
    status: 'Draft',
    imageId: 'course-4',
  },
];


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

  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Development':
        return <Badge variant="secondary">{status}</Badge>;
      case 'In Review':
        return <Badge variant="warning">{status}</Badge>;
      case 'Published':
        return <Badge variant="success">{status}</Badge>;
      case 'Draft':
        return <Badge variant="outline">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">Instructor Dashboard</h1>
      <Tabs defaultValue="courses">
        <TabsList className="grid w-full grid-cols-3 max-w-lg">
          <TabsTrigger value="summarizer">AI Summarizer</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
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
        <TabsContent value="documentation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookText /> Courseware Guide
              </CardTitle>
              <CardDescription>
                A complete guide to developing courseware on this platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentationGuide />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="mt-6">
           <Card>
             <CardHeader>
               <CardTitle>My Courses</CardTitle>
                <CardDescription>
                  A list of courses you are developing.
                </CardDescription>
             </CardHeader>
             <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course) => {
                    const image = getImage(course.imageId);
                    return (
                      <Card key={course.id} className="flex flex-col">
                        {image && (
                          <div className="overflow-hidden rounded-t-lg">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={600}
                              height={400}
                              className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{course.title}</CardTitle>
                            {getStatusBadge(course.status)}
                          </div>
                          <CardDescription>{course.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button className="w-full">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Course
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
             </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
