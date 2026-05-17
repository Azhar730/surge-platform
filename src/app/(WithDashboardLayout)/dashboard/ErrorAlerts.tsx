import { AlertTriangle } from "lucide-react";

export interface ErrorAlert {
  id: string;
  title: string;
  description: string;
  retryAttempted: boolean;
}

interface ErrorAlertsProps {
  alerts: ErrorAlert[];
}

export function ErrorAlerts({ alerts }: ErrorAlertsProps) {
  if (!alerts.length) return null;

  return (
    <div className="flex flex-col gap-3 bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className=" flex items-start gap-3"
        >
          {/* Orange warning icon box */}
          <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mt-0.5">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-800 truncate">{alert.title}</p>
            <p className="text-xs text-slate-400 mt-0.5">{alert.description}</p>
            <p className="text-xs text-slate-400 mt-0.5">
              Retry attempted:{" "}
              <span className="text-slate-600 font-medium">
                {alert.retryAttempted ? "Yes" : "No"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}