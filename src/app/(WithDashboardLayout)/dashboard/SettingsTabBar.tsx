"use client";

import { cn } from "@/lib/utils";

export type SettingsTab =
  | "rss-feeds"
  | "editorial-preferences"
  | "publishing"
  | "schedule"
  | "billing";

const TABS: { id: SettingsTab; label: string }[] = [
  { id: "rss-feeds", label: "RSS Feeds" },
  { id: "editorial-preferences", label: "Editorial Preferences" },
  { id: "publishing", label: "Publishing" },
  { id: "schedule", label: "Schedule" },
  { id: "billing", label: "Billing" },
];

interface SettingsTabBarProps {
  activeTab: SettingsTab;
  onChange: (tab: SettingsTab) => void;
}

export function SettingsTabBar({ activeTab, onChange }: SettingsTabBarProps) {
  return (
    <div className="flex items-center gap-1 bg-white rounded-xl border border-slate-100 shadow-sm p-1 w-fit">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
            activeTab === tab.id
              ? "bg-indigo-500 text-white shadow-sm"
              : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
