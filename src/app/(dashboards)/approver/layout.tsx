
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Book, Users, Code, LineChart, MessageSquare, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/approver', label: 'Pending Reviews', icon: ShieldCheck },
  { href: '/approver/all-courses', label: 'All Courses', icon: Book },
  { href: '/approver/instructors', label: 'Instructors', icon: Users },
  { href: '/approver/courseware-developers', label: 'Courseware Developers', icon: Code },
  { href: '/approver/course-tracking', label: 'Course Tracking', icon: LineChart },
  { href: '/approver/instructor-chat', label: 'Instructor Chat', icon: MessageSquare },
];

export default function ApproverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  return (
    <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                        <Link href={item.href} passHref>
                        <SidebarMenuButton
                            isActive={pathname === item.href}
                            tooltip={{children: item.label}}
                        >
                            <item.icon />
                            <span>{item.label}</span>
                        </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
            {children}
        </SidebarInset>
    </SidebarProvider>
  );
}
