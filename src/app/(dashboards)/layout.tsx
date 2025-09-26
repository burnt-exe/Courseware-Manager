import { Header } from '@/components/header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <main className="flex-1">
            <Breadcrumb />
            <SidebarInset>{children}</SidebarInset>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
