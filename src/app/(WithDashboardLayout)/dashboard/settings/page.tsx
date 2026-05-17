"use client";

import { useState } from "react";
import { SettingsTab, SettingsTabBar } from "../SettingsTabBar";
import { SettingsPublishing } from "../SettingsPublishing";
import { SettingsSchedule } from "../SettingsSchedule";
import { SettingsBilling } from "../SettingsBilling";
import { SettingsRSSFeeds } from "../SettingsRSSFeeds";


function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");

  return (
    <div className="flex-1 flex flex-col gap-6 p-8 overflow-auto">
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
        Settings
      </h1>

      <SettingsTabBar activeTab={activeTab} onChange={setActiveTab} />

      <div className="max-w-full w-full">
        {activeTab === "profile" && <SettingsRSSFeeds />}
        {activeTab === "integration" && <SettingsPublishing />}
        {activeTab === "schedule" && <SettingsSchedule />}
        {activeTab === "billing" && <SettingsBilling />}
      </div>
    </div>
  );
}

export default SettingsPage;