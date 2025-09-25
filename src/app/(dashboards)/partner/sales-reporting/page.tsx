'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DollarSign, Users, CreditCard, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const chartData = [
  { month: 'Jan', revenue: 4500 },
  { month: 'Feb', revenue: 5200 },
  { month: 'Mar', revenue: 7100 },
  { month: 'Apr', revenue: 6300 },
  { month: 'May', revenue: 8200 },
  { month: 'Jun', revenue: 9500 },
];

const recentSales = [
    { id: '1', customer: 'Global Tech Inc.', date: '2024-06-28', course: 'Advanced Kubernetes', amount: '$2,500.00' },
    { id: '2', customer: 'Innovate Solutions', date: '2024-06-27', course: 'Developing on Google Cloud', amount: '$1,800.00' },
    { id: '3', customer: 'Bright Future LLC', date: '2024-06-27', course: 'Data Engineering on GCP', amount: '$3,200.00' },
    { id: '4', customer: 'Synergy Corp', date: '2024-06-26', course: 'Advanced Kubernetes', amount: '$2,500.00' },
    { id: '5', customer: 'Quantum Dynamics', date: '2024-06-25', course: 'Cloud Architecture Design', amount: '$2,000.00' },
]

export default function SalesReportingPage() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-headline">Sales &amp; Reporting</h1>
        <Button>
            <Download className="mr-2" />
            Export Reports
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">+12.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+10 since last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card>
            <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Revenue from the last 6 months.</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                        <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>A list of the most recent sales transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentSales.map((sale) => (
                        <TableRow key={sale.id}>
                            <TableCell className="font-medium">{sale.customer}</TableCell>
                            <TableCell>{sale.course}</TableCell>
                            <TableCell>{sale.date}</TableCell>
                            <TableCell className="text-right">{sale.amount}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}