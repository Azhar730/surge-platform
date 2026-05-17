import { DashboardSidebar } from "./DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen max-w-full flex dashboard-scale">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
