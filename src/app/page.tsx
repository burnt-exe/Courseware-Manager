import Link from 'next/link';
import { BookOpen, Briefcase, ShieldCheck, User, ArrowRight, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const roles = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: 'Student',
      description: 'Access your course materials, track your progress, and join a community of learners.',
      href: '/student',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: 'Instructor / Developer',
      description: 'Develop lectures, labs, and projects. Use our AI tools to streamline your workflow.',
      href: '/instructor',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Approver',
      description: 'Review release builds, perform quality control checks, and approve courseware for deployment.',
      href: '/approver',
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Partner / Reseller',
      description: 'Manage customer accounts, track sales, and access partner-specific resources.',
      href: '/partner',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex justify-center items-center gap-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
                    Courseware Manager
                  </h1>
                </div>
                <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
                  An integrated platform for developing, managing, and delivering high-quality technical courseware.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Choose Your Role
              </h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Select your role to access a tailored dashboard with the tools and information you need.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map((role) => (
                <Card key={role.title} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="items-center pt-8">
                    {role.icon}
                    <CardTitle className="mt-4">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription>{role.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant="outline">
                      <Link href={role.href}>
                        Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Courseware Manager. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
