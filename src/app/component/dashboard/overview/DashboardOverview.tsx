"use client";

import { SystemStatusBar } from "./SystemStatusBar";
import { TodaysTheme } from "./TodaysTheme";
import { RecentlyPublished } from "./RecentlyPublished";
import { JobLog } from "./JobLog";
import { ErrorAlerts } from "./ErrorAlerts";
import {
  MOCK_ARTICLES,
  MOCK_ERROR_ALERTS,
  MOCK_JOB_LOG,
  MOCK_SYSTEM_STATUS,
  MOCK_TODAYS_THEME,
} from "./mock-data";
import { DashboardHeader } from "@/app/(WithDashboardLayout)/dashboard/DashboardHeader";

export function DashboardOverview() {
  return (
    <div className="flex-1 flex flex-col bg-muted/40 min-h-screen overflow-auto max-w-full">
      <DashboardHeader
        title="Dashboard"
        subtitle="Overview of your automation, recent activity, and publishing status."
      />
      <div className="flex flex-col gap-4 px-4 sm:px-8 pb-8 pt-4">
        <SystemStatusBar {...MOCK_SYSTEM_STATUS} />
        <TodaysTheme data={MOCK_TODAYS_THEME} />
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <RecentlyPublished articles={MOCK_ARTICLES} />
          </div>
          <div className="flex flex-col gap-4 w-96">
            <JobLog jobs={MOCK_JOB_LOG} />
            <ErrorAlerts alerts={MOCK_ERROR_ALERTS} />
          </div>
        </div>
      </div>
    </div>
  );
}