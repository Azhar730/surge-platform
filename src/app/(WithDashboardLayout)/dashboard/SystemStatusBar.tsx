import { cn } from "@/lib/utils";

interface SystemStatusBarProps {
  status: "Active" | "Paused" | "Error";
  lastRun: string;
  nextRun: string;
  feedsCount: number;
  publishedLast7d: number;
}

export function SystemStatusBar({
  status,
  lastRun,
  nextRun,
  feedsCount,
  publishedLast7d,
}: SystemStatusBarProps) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 flex items-stretch divide-x divide-slate-100">
      {/* System Status */}
      <div className="px-6 py-4 min-w-[160px]">
        <p className="text-sm font-semibold text-slate-800">System Status</p>
        <span
          className={cn(
            "inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full",
            status === "Active" && "bg-emerald-100 text-emerald-600",
            status === "Paused" && "bg-amber-100 text-amber-600",
            status === "Error" && "bg-red-100 text-red-500"
          )}
        >
          {status}
        </span>
      </div>

      {/* Last Run */}
      <div className="px-8 py-4 flex flex-col gap-0.5">
        <p className="text-xs text-slate-400 font-medium">Last Run</p>
        <p className="text-xl font-bold text-slate-800">{lastRun}</p>
      </div>

      {/* Next Run */}
      <div className="px-8 py-4 flex flex-col gap-0.5">
        <p className="text-xs text-slate-400 font-medium">Next Run</p>
        <p className="text-xl font-bold text-slate-800">{nextRun}</p>
      </div>

      {/* Feeds */}
      <div className="px-8 py-4 flex flex-col gap-0.5">
        <p className="text-xs text-slate-400 font-medium">Feeds</p>
        <p className="text-xl font-bold text-slate-800">{feedsCount}</p>
      </div>

      {/* Published 7d */}
      <div className="px-8 py-4 flex flex-col gap-0.5">
        <p className="text-xs text-slate-400 font-medium">Published (7d)</p>
        <p className="text-xl font-bold text-slate-800">{publishedLast7d}</p>
      </div>
    </div>
  );
}
