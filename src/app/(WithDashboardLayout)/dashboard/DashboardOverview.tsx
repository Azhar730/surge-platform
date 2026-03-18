import { SystemStatusBar } from "./SystemStatusBar";
import { TodaysTheme } from "./TodaysTheme";
import { RecentlyPublished } from "./RecentlyPublished";
import { JobLog } from "./JobLog";
import { ErrorAlerts } from "./ErrorAlerts";
import { MOCK_ARTICLES, MOCK_ERROR_ALERTS, MOCK_JOB_LOG, MOCK_SYSTEM_STATUS, MOCK_TODAYS_THEME } from "./mock-data";


export function DashboardOverview() {
  return (
    <div className="flex-1 flex flex-col gap-5 p-8 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
        Overview
      </h1>

      {/* System Status stat bar */}
      <SystemStatusBar {...MOCK_SYSTEM_STATUS} />

      {/* Today's Theme banner */}
      <TodaysTheme {...MOCK_TODAYS_THEME} />

      {/* Bottom grid: table + right column */}
      <div className="flex gap-5 items-start">
        {/* Recently Published table */}
        <div className="flex-1 min-w-0">
          <RecentlyPublished articles={MOCK_ARTICLES} />
        </div>

        {/* Right column: Job Log + Error Alerts */}
        <div className="w-56 shrink-0 flex flex-col gap-4">
          <JobLog jobs={MOCK_JOB_LOG} />
          <ErrorAlerts alerts={MOCK_ERROR_ALERTS} />
        </div>
      </div>
    </div>
  );
}
