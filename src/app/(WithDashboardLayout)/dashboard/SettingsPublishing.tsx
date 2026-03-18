"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "connected" | "disconnected" | "testing";

export function SettingsPublishing() {
  const [siteUrl, setSiteUrl] = useState("https://blog.example.com");
  const [token, setToken] = useState("•••• •••• •••• ••••");
  const [status, setStatus] = useState<Status>("connected");

  const handleTest = async () => {
    setStatus("testing");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("connected");
  };

  const handleDisconnect = () => setStatus("disconnected");
  const handleReconnect = () => setStatus("connected");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-800">
          WordPress Connection
        </h2>
        <span
          className={cn(
            "flex items-center gap-1.5 text-xs font-semibold",
            status === "connected" ? "text-emerald-500" : "text-slate-400"
          )}
        >
          <span
            className={cn(
              "w-2 h-2 rounded-full",
              status === "connected" ? "bg-emerald-400" : "bg-slate-300"
            )}
          />
          {status === "connected"
            ? "Connected"
            : status === "testing"
            ? "Testing…"
            : "Disconnected"}
        </span>
      </div>

      {/* Site URL */}
      <div className="flex flex-col gap-1.5">
        <Label className="text-sm font-medium text-slate-600">Site URL</Label>
        <Input
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          className="h-11 rounded-xl border-slate-200 text-sm focus-visible:ring-indigo-400 focus-visible:ring-offset-0"
        />
      </div>

      {/* Application Token */}
      <div className="flex flex-col gap-1.5">
        <Label className="text-sm font-medium text-slate-600">
          Application Token
        </Label>
        <Input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="h-11 rounded-xl border-slate-200 text-sm focus-visible:ring-indigo-400 focus-visible:ring-offset-0"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleTest}
          disabled={status === "testing"}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          {status === "testing" ? "Testing…" : "Test Connection"}
        </button>
        <button
          onClick={handleReconnect}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          Reconnect
        </button>
        <button
          onClick={handleDisconnect}
          className="text-sm font-medium text-red-400 hover:text-red-600 transition-colors ml-auto"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
}
