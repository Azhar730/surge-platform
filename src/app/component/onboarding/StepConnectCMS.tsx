"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type ConnectionStatus = "idle" | "connected" | "failed";

interface StepConnectCMSProps {
  onContinue: () => void;
}

export function StepConnectCMS({ onContinue }: StepConnectCMSProps) {
  const [siteUrl, setSiteUrl] = useState("https://example.com/feed.xml");
  const [apiKey, setApiKey] = useState("••••••••••••••");
  const [status, setStatus] = useState<ConnectionStatus>("idle");
  const [testing, setTesting] = useState(false);

  const handleTestConnection = async () => {
    setTesting(true);
    setStatus("idle");
    // Simulate API test delay
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("connected"); // or "failed" for error state
    setTesting(false);
  };

  const canContinue = status === "connected";

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">
          Step 3 of 4
        </p>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Connect WordPress
        </h1>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">
        {/* Site URL */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-slate-700">
            Site URL
          </Label>
          <Input
            type="url"
            value={siteUrl}
            onChange={(e) => {
              setSiteUrl(e.target.value);
              setStatus("idle");
            }}
            placeholder="https://example.com/feed.xml"
            className={cn(
              "h-12 rounded-2xl border-0 bg-white/70 shadow-sm text-sm",
              "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-0",
              "placeholder:text-slate-400 text-slate-600"
            )}
          />
        </div>

        {/* API Key */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-slate-700">
            API Key
          </Label>
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => {
              setApiKey(e.target.value);
              setStatus("idle");
            }}
            placeholder="Enter your WordPress API key"
            className={cn(
              "h-12 rounded-2xl border-0 bg-white/70 shadow-sm text-sm",
              "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-0",
              "placeholder:text-slate-400"
            )}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        {/* Connection status */}
        {status === "connected" && (
          <span className="text-sm font-medium text-emerald-500 mr-1">
            Connected!
          </span>
        )}
        {status === "failed" && (
          <span className="text-sm font-medium text-red-400 mr-1">
            Failed. Try again.
          </span>
        )}

        {/* Test connection */}
        <Button
          onClick={handleTestConnection}
          disabled={testing}
          className="h-11 px-6 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold shadow-md transition-all"
        >
          {testing ? "Testing…" : "Test connection"}
        </Button>

        {/* Continue */}
        <Button
          onClick={onContinue}
          disabled={!canContinue}
          className={cn(
            "h-11 px-6 rounded-2xl text-sm font-semibold transition-all",
            canContinue
              ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-md"
              : "bg-indigo-200 text-indigo-300 cursor-not-allowed"
          )}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
