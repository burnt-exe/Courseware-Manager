import { Header } from '@/components/header';
import { Breadcrumb } from '@/components/breadcrumb';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
