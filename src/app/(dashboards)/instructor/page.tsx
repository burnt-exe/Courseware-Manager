
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SummarizationTool } from './summarization-tool';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText, Edit, ArrowRight, Video, Users, HelpCircle, BarChart2 } from 'lucide-react';
import { DocumentationGuide } from './documentation-guide';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DevelopmentTab } from './development-tab';

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
];

const resources = [
    {
        title: "Create an Engaging Course",
        description: "Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.",
        href: "#"
    },
    {
        title: "Get Started with Video",
        description: "Quality video lectures can set your course apart. Use our resources to learn the basics.",
        href: "#"
    },
    {
        title: "Build Your Audience",
        description: "Set your course up for success by building your audience.",
        href: "#"
    }
];

const popularResources = [
    {
        icon: <Video className="h-5 w-5 text-primary" />,
        title: "Test Video",
        description: "Send us a sample video and get expert feedback.",
        href: "#"
    },
    {
        icon: <Users className="h-5 w-5 text-primary" />,
        title: "Instructor Community",
        description: "Connect with experienced instructors. Ask questions, browse discussions, and more.",
        href: "#"
    },
    {
        icon: <BookText className="h-5 w-5 text-primary" />,
        title: "Teaching Center",
        description: "Learn about best practices for teaching on our platform.",
        href: "#"
    },
    {
        icon: <BarChart2 className="h-5 w-5 text-primary" />,
        title: "Marketplace Insights",
        description: "Validate your course topic by exploring our marketplace supply and demand.",
        href: "#"
    },
    {
        icon: <HelpCircle className="h-5 w-5 text-primary" />,
        title: "Help and Support",
        description: "Browse our Help Center or contact our support team.",
        href: "#"
    }
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
        <TabsList className="grid w-full grid-cols-4 max-w-xl">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="summarizer">AI Summarizer</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="mt-6">
           <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {courses.map((course) => {
                  const image = getImage(course.imageId);
                  return (
                    <Card key={course.id} className="flex flex-col sm:flex-row">
                      {image && (
                        <div className="sm:w-1/3">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            width={300}
                            height={200}
                            className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none object-cover h-full w-full aspect-[3/2] sm:aspect-auto"
                          />
                        </div>
                      )}
                      <div className="flex flex-col flex-1">
                        <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                {getStatusBadge(course.status)}
                                <Badge variant="outline">Public</Badge>
                            </div>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                          <Button className="w-full">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit / manage course
                          </Button>
                        </CardFooter>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 font-headline">Based on your experience, we think these resources will be helpful.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map(resource => (
                        <Card key={resource.title} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl">{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{resource.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild>
                                    <Link href={resource.href}>Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 font-headline">Have questions? Here are our most popular instructor resources.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularResources.map(resource => (
                         <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                {resource.icon}
                                <CardTitle className="text-lg">{resource.title}</CardTitle>
                            </CardHeader>
                             <CardContent>
                                 <p className="text-sm text-muted-foreground">{resource.description}</p>
                             </CardContent>
                         </Card>
                    ))}
                </div>
              </div>
           </div>
        </TabsContent>
        <TabsContent value="development" className="mt-6">
          <DevelopmentTab />
        </TabsContent>
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
      </Tabs>
    </div>
  );
}
