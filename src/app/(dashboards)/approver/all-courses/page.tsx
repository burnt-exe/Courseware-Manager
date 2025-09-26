
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal, Book } from 'lucide-react';

const builds = [
  {
    course: 'Advanced Kubernetes',
    version: 'v2.1.0',
    submittedBy: 'Alice Johnson',
    date: '2024-05-20',
    status: 'Pending',
  },
  {
    course: 'Developing on Google Cloud',
    version: 'v1.5.2',
    submittedBy: 'Bob Williams',
    date: '2024-05-18',
    status: 'Approved',
  },
  {
    course: 'Data Engineering on GCP',
    version: 'v3.0.1',
    submittedBy: 'Alice Johnson',
    date: '2024-05-15',
    status: 'Approved',
  },
  {
    course: 'Cloud Architecture Design',
    version: 'v1.2.0',
    submittedBy: 'Charlie Brown',
    date: '2024-05-12',
    status: 'Rejected',
  },
   {
    course: 'Advanced Kubernetes',
    version: 'v2.0.0',
    submittedBy: 'Alice Johnson',
    date: '2024-05-10',
    status: 'Approved',
  },
];

export default function AllCoursesPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'Approved':
        return <Badge variant="success">Approved</Badge>;
      case 'Rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Book className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">All Courses</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Course Build History</CardTitle>
          <CardDescription>
            A complete history of all courseware release builds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Submitted By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {builds.map((build) => (
                <TableRow key={`${build.course}-${build.version}`}>
                  <TableCell className="font-medium">{build.course}</TableCell>
                  <TableCell>
                    <code className="font-code">{build.version}</code>
                  </TableCell>
                  <TableCell>{build.submittedBy}</TableCell>
                  <TableCell>{build.date}</TableCell>
                  <TableCell>{getStatusBadge(build.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
