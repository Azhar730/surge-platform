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
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const MINUTES = ["00", "15", "30", "45"];
const PERIODS = ["AM", "PM"];
const TIMEZONES = ["UTC", "EST", "PST", "CST", "IST", "CET"];

interface StepScheduleProps {
  onComplete: () => void;
}

export function StepSchedule({ onComplete }: StepScheduleProps) {
  const [hour, setHour] = useState("9");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("AM");
  const [timezone, setTimezone] = useState("UTC");
  const [autoStart, setAutoStart] = useState(false);

  const nextRunLabel = `Tomorrow at ${hour}:${minute} ${timezone}`;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">
          Step 4 of 4
        </p>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Schedule
        </h1>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">
        {/* Daily Publish Time */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-slate-700">
            Daily Publish time
          </Label>

          <div className="flex items-center gap-3">
            {/* Time picker row */}
            <div className="flex items-center gap-1 h-12 px-4 rounded-2xl bg-white/70 shadow-sm">
              {/* Hour */}
              <select
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer"
              >
                {HOURS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <span className="text-slate-400 font-semibold">:</span>
              {/* Minute */}
              <select
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer"
              >
                {MINUTES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              {/* Period */}
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 ml-1 outline-none cursor-pointer"
              >
                {PERIODS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <Clock className="w-4 h-4 text-slate-400 ml-1" />
            </div>

            {/* Timezone */}
            <Select
              value={timezone}
              onValueChange={(val) => setTimezone(val ?? "UTC")}
            >
              <SelectTrigger
                className={cn(
                  "h-12 w-28 rounded-2xl border-0 bg-white/70 shadow-sm text-sm text-slate-700 font-semibold",
                  "focus:ring-2 focus:ring-indigo-400 focus:ring-offset-0"
                )}
              >
                <SelectValue placeholder="TZ" />
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

        {/* Next Run info card */}
        <div className="h-12 flex items-center px-4 rounded-2xl bg-white/50 shadow-sm">
          <span className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Next Run: </span>
            {nextRunLabel}
          </span>
        </div>

        {/* Auto-Start toggle */}
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/50 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Auto-Start Immediately
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              System will begin polling feeds now
            </p>
          </div>
          <Switch
            checked={autoStart}
            onCheckedChange={setAutoStart}
            className="data-[state=checked]:bg-indigo-500"
          />
        </div>
      </div>

      {/* Complete Setup */}
      <div className="flex justify-end">
        <Button
          onClick={onComplete}
          className="h-11 px-8 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold shadow-md transition-all"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
}
