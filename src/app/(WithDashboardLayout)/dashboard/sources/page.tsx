"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardHeader } from "../DashboardHeader";
import { cn } from "@/lib/utils";

interface Feed {
  id: string;
  url: string;
  checkInterval: string;
  lastChecked: string;
  status: "active" | "error";
  errorMessage?: string;
}

const INITIAL_FEEDS: Feed[] = [
  {
    id: "1",
    url: "techcrunch.com/feed/",
    checkInterval: "Checked every 4 hours",
    lastChecked: "Last checked 12 mins ago",
    status: "active",
  },
  {
    id: "2",
    url: "vercel.com/blog/feed",
    checkInterval: "Checked every 1 hour",
    lastChecked: "Last checked 3 mins ago",
    status: "active",
  },
  {
    id: "3",
    url: "ycombinator.com/feed",
    checkInterval: "",
    lastChecked: "",
    status: "error",
    errorMessage: "Invalid feed URL · Unable to reach",
  },
];

const MAX_FEEDS = 5;
const PLAN = "Pro";

function SourcesPage() {
  const [feeds, setFeeds]       = useState<Feed[]>(INITIAL_FEEDS);
  const [newUrl, setNewUrl]     = useState("");
  const [error, setError]       = useState("");

  const usedCount = feeds.length;
  const progressPct = Math.min((usedCount / MAX_FEEDS) * 100, 100);

  const handleAdd = () => {
    const trimmed = newUrl.trim();
    if (!trimmed) {
      setError("Please enter a feed URL.");
      return;
    }
    if (feeds.some((f) => f.url === trimmed)) {
      setError("This feed already exists.");
      return;
    }
    if (usedCount >= MAX_FEEDS) {
      setError("Feed limit reached. Upgrade to add more.");
      return;
    }

    const newFeed: Feed = {
      id: Date.now().toString(),
      url: trimmed,
      checkInterval: "Checked every 4 hours",
      lastChecked: "Last checked just now",
      status: "active",
    };

    setFeeds((prev) => [...prev, newFeed]);
    setNewUrl("");
    setError("");
  };

  const handleDelete = (id: string) => {
    setFeeds((prev) => prev.filter((f) => f.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 min-h-screen overflow-auto">
      <DashboardHeader
        title="Sources"
        subtitle="Add and manage RSS feeds used for content collection."
      />

      <div className="px-4 sm:px-8 pb-8 pt-4">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 flex flex-col gap-6">

          {/* RSS Feeds header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-foreground">RSS Feeds</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600">
                {PLAN}
              </span>
            </div>

            {/* Usage + progress */}
            <p className="text-sm text-muted-foreground font-medium">
              {usedCount} / {MAX_FEEDS} feeds used
            </p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden max-w-xs">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Feed list */}
          <div className="flex flex-col divide-y divide-slate-50">
            {feeds.map((feed) => (
              <div
                key={feed.id}
                className="flex items-start sm:items-center justify-between gap-4 py-4 group"
              >
                {/* Left: dot + info */}
                <div className="flex items-start sm:items-center gap-3">
                  {/* Status dot */}
                  <span
                    className={cn(
                      "mt-1 sm:mt-0 w-2 h-2 rounded-full shrink-0",
                      feed.status === "active" ? "bg-emerald-500" : "bg-red-400"
                    )}
                  />

                  <div className="flex flex-col gap-0.5">
                    <p className="text-base font-semibold text-foreground break-all">
                      {feed.url}
                    </p>
                    {feed.status === "active" ? (
                      <p className="text-sm text-muted-foreground">
                        {feed.checkInterval} · {feed.lastChecked}
                      </p>
                    ) : (
                      <p className="text-xs text-red-400 font-medium">
                        {feed.errorMessage}
                      </p>
                    )}
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(feed.id)}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Add feed input */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Input
                value={newUrl}
                onChange={(e) => {
                  setNewUrl(e.target.value);
                  setError("");
                }}
                onKeyDown={handleKeyDown}
                placeholder="https://example.com/feed"
                className={cn(
                  "flex-1 h-11 rounded-xl border bg-white text-base text-foreground shadow-none",
                  "placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-0",
                  error ? "border-red-300" : "border-slate-200"
                )}
              />
              <Button
                onClick={handleAdd}
                className="h-11 px-6 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold shadow-md shrink-0 transition-all"
              >
                Add
              </Button>
            </div>
            {error && (
              <p className="text-xs text-red-400 font-medium">{error}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SourcesPage;