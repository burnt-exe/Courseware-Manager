import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BarChart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const partnerTools = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Manage Customers',
    description: 'Onboard new customers, manage licenses, and view customer details.',
    href: '#',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Sales & Reporting',
    description: 'Track your sales, view revenue reports, and analyze performance metrics.',
    href: '#',
  },
];

export default function PartnerPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">Partner Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnerTools.map((tool) => (
           <Card key={tool.title} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl">
             <CardHeader>
               {tool.icon}
               <CardTitle className="mt-4">{tool.title}</CardTitle>
             </CardHeader>
             <CardContent className="flex-1">
               <CardDescription>{tool.description}</CardDescription>
             </CardContent>
             <CardFooter>
               <Button asChild className="w-full" variant="outline">
                 <Link href={tool.href}>
                   Go to Tool <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
             </CardFooter>
           </Card>
        ))}
      </div>
    </div>
  );
}
