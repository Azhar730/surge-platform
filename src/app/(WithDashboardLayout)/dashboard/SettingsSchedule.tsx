"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TIMEZONES = [
  "GMT +6 (Dhaka)",
  "UTC",
  "GMT -5 (EST)",
  "GMT -8 (PST)",
  "GMT +5:30 (IST)",
  "GMT +1 (CET)",
];

export function SettingsSchedule() {
  const [publishTime, setPublishTime] = useState("03:00");
  const [timezone, setTimezone] = useState("GMT +6 (Dhaka)");
  const [automation, setAutomation] = useState(true);
  const [emailOnFailure, setEmailOnFailure] = useState(true);
  const [emailOnRetry, setEmailOnRetry] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-6">
      <h2 className="text-base font-bold text-slate-800">Schedule</h2>

      {/* Publish time + timezone */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Publish Time
          </Label>
          <div className="relative flex items-center h-11 border border-slate-200 rounded-xl px-3 bg-white focus-within:ring-2 focus-within:ring-indigo-400 focus-within:ring-offset-0">
            <input
              type="time"
              value={publishTime}
              onChange={(e) => setPublishTime(e.target.value)}
              className="text-sm text-slate-700 font-medium bg-transparent outline-none flex-1"
            />
          </div>
          <p className="text-xs text-slate-400">
            Runs daily at {publishTime} AM
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Timezone
          </Label>
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger className="h-11 rounded-xl border-slate-200 text-sm text-slate-700 focus:ring-indigo-400 focus:ring-offset-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-0 shadow-lg">
              {TIMEZONES.map((tz) => (
                <SelectItem key={tz} value={tz} className="text-sm">
                  {tz}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Toggles */}
      <div className="flex flex-col gap-4">
        <ToggleRow
          label="Automation"
          description="Pause to stop all scheduled publishing"
          checked={automation}
          onChange={setAutomation}
        />
        <ToggleRow
          label="Email on Failure"
          description="Get notified when a job fails"
          checked={emailOnFailure}
          onChange={setEmailOnFailure}
        />
        <ToggleRow
          label="Email on Successful Retry"
          description="Notify when a retry succeeds"
          checked={emailOnRetry}
          onChange={setEmailOnRetry}
        />
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <Button className="h-10 px-5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-800">{label}</p>
        <p className="text-xs text-slate-400 mt-0.5">{description}</p>
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-indigo-500"
      />
    </div>
  );
}
