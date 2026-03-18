import { DashboardSidebar } from "./DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen max-w-full flex bg-linear-to-br from-slate-100 via-indigo-50 to-slate-200">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
    </div>
  );
















}
