import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  BarChart,
  ArrowRight,
  FileText,
  DollarSign,
  Briefcase,
  TrendingUp,
  Shield,
  UploadCloud,
  Key,
  MessageSquare,
  BarChart2,
} from 'lucide-react';
import Link from 'next/link';

const customerManagementFeatures = [
  {
    icon: <UploadCloud className="h-6 w-6 text-primary" />,
    title: 'Customer Onboarding',
    description: 'Guided setup, bulk import, and CRM integration.',
    href: '#',
  },
  {
    icon: <Key className="h-6 w-6 text-primary" />,
    title: 'License Management',
    description: 'Assign, revoke, and manage courseware licenses and subscriptions.',
    href: '#',
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Customer Profiles',
    description: 'Centralized profiles, segmentation, and custom attributes.',
    href: '#',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Access & Identity',
    description: 'SSO/SAML, role-based access, and multi-factor authentication.',
    href: '#',
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: 'Engagement & Support',
    description: 'In-app messaging, support tickets, and automated onboarding.',
    href: '#',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: 'Usage Analytics',
    description: 'Dashboards, license utilization, and churn indicators.',
    href: '#',
  },
];

const salesReportingFeatures = [
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: 'Sales & Revenue Tracking',
    description: 'Track revenue by course, bundle, and region with multi-currency support.',
    href: '/partner/sales-reporting',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: 'Performance Metrics',
    description: 'Enrollment stats, completion rates, and partner leaderboards.',
    href: '#',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: 'Financial Reporting',
    description: 'Recurring revenue, commission calculation, and finance system integration.',
    href: '#',
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: 'Forecasting & Trends',
    description: 'Predictive sales analytics and AI-based revenue forecasting.',
    href: '#',
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: 'Custom Reports',
    description: 'Interactive dashboards, exportable reports, and a custom report builder.',
    href: '#',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Compliance & Audit',
    description: 'Tax/VAT reports, audit logs, and GDPR/POPIA compliance tools.',
    href: '#',
  },
];

export default function PartnerPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 font-headline">Partner Dashboard</h1>
      
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 font-headline flex items-center gap-2">
            <Users className="h-7 w-7" /> Manage Customers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerManagementFeatures.map((tool) => (
              <Card key={tool.title} className="flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {tool.icon}
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={tool.href}>
                      Go to Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 font-headline flex items-center gap-2">
            <BarChart className="h-7 w-7" /> Sales &amp; Reporting
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesReportingFeatures.map((tool) => (
              <Card key={tool.title} className="flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {tool.icon}
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={tool.href}>
                      View Reports <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
