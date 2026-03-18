import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type JobStatus = "done" | "running" | "pending";

export interface JobEntry {
  time: string;
  label: string;
  status: JobStatus;
}

interface JobLogProps {
  jobs: JobEntry[];
}

export function JobLog({ jobs }: JobLogProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <h3 className="text-sm font-bold text-slate-800 mb-3">Job Log</h3>
      <div className="flex flex-col gap-2">
        {jobs.map((job, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400 w-14 shrink-0">
              {job.time}
            </span>
            <span className="text-xs text-slate-700 flex-1">{job.label}</span>
            {job.status === "done" && (
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            )}
            {job.status === "running" && (
              <Loader2 className="w-3.5 h-3.5 text-indigo-400 animate-spin shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
