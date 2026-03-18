"use client";

import { useState } from "react";
import { SettingsTab, SettingsTabBar } from "../SettingsTabBar";
import { SettingsRSSFeeds } from "../SettingsRSSFeeds";
import { SettingsEditorialPreferences } from "../SettingsEditorialPreferences";
import { SettingsPublishing } from "../SettingsPublishing";
import { SettingsSchedule } from "../SettingsSchedule";
import { SettingsBilling } from "../SettingsBilling";


function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("rss-feeds");

  return (
    <div className="flex-1 flex flex-col gap-6 p-8 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
        Settings
      </h1>

      <SettingsTabBar activeTab={activeTab} onChange={setActiveTab} />

      <div className="max-w-full w-full">
        {activeTab === "rss-feeds" && <SettingsRSSFeeds />}
        {activeTab === "editorial-preferences" && (
          <SettingsEditorialPreferences />
        )}
        {activeTab === "publishing" && <SettingsPublishing />}
        {activeTab === "schedule" && <SettingsSchedule />}
        {activeTab === "billing" && <SettingsBilling />}
      </div>
    </div>
  );
}

export default SettingsPage;