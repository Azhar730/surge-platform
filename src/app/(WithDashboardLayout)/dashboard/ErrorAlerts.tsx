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
    <div className="flex flex-col gap-2">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-start gap-3"
        >
          <div className="mt-0.5 shrink-0">
            <AlertTriangle className="w-4 h-4 text-red-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">
              {alert.title}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{alert.description}</p>
            <p className="text-xs text-slate-400">
              Retry attempted:{" "}
              <span className="text-slate-600">
                {alert.retryAttempted ? "Yes" : "No"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
