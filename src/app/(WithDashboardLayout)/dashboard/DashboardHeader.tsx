interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  userName?: string;
  userInitials?: string;
}

export function DashboardHeader({
  title,
  subtitle,
  userName = "Emma W.",
  userInitials = "EW",
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-8 pt-7 pb-2">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
        <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
          {userInitials}
        </div>
        <span className="text-sm font-semibold text-slate-700">{userName}</span>
      </div>
    </div>
  );
}