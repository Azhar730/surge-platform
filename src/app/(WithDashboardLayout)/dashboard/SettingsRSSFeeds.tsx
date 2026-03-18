"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feed {
  id: string;
  url: string;
  status: "active" | "error";
  description: string;
}

const INITIAL_FEEDS: Feed[] = [
  {
    id: "1",
    url: "techcrunch.com/feed/",
    status: "active",
    description: "Checked every 4 hours · Last checked 12 mins ago",
  },
  {
    id: "2",
    url: "verceil.com/blog/feed",
    status: "active",
    description: "Checked every 1 hour · Last checked 3 mins ago",
  },
  {
    id: "3",
    url: "ycombinator.com/feed",
    status: "error",
    description: "Invalid feed URL · Unable to reach",
  },
];

export function SettingsRSSFeeds() {
  const [feeds, setFeeds] = useState<Feed[]>(INITIAL_FEEDS);
  const [newUrl, setNewUrl] = useState("");

  const handleAdd = () => {
    if (!newUrl.trim()) return;
    setFeeds((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        url: newUrl.trim(),
        status: "active",
        description: "Checking…",
      },
    ]);
    setNewUrl("");
  };

  const handleDelete = (id: string) => {
    setFeeds((prev) => prev.filter((f) => f.id !== id));
  };

  const maxFeeds = 3;
  const plan = "Pro";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-5">
      {/* Header */}
      <div>
        <h2 className="text-base font-bold text-slate-800">RSS Feeds</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-slate-400">
            {feeds.length} / {maxFeeds} feeds used
          </span>
          <span className="text-[10px] font-semibold bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full">
            {plan}
          </span>
        </div>
        {/* Usage bar */}
        <div className="mt-2 h-1 w-40 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-400 rounded-full transition-all"
            style={{ width: `${(feeds.length / maxFeeds) * 100}%` }}
          />
        </div>
      </div>

      {/* Feed list */}
      <div className="flex flex-col gap-2">
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="flex items-start justify-between gap-3 py-2"
          >
            <div className="flex items-start gap-2">
              {/* Status dot */}
              <span
                className={cn(
                  "mt-1 w-2 h-2 rounded-full shrink-0",
                  feed.status === "active" ? "bg-emerald-400" : "bg-red-400"
                )}
              />
              <div>
                <p className="text-sm font-medium text-slate-700">{feed.url}</p>
                <p
                  className={cn(
                    "text-xs mt-0.5",
                    feed.status === "error"
                      ? "text-red-400"
                      : "text-slate-400"
                  )}
                >
                  {feed.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(feed.id)}
              className="text-slate-300 hover:text-red-400 transition-colors mt-0.5"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Add new feed */}
      <div className="flex items-center gap-3">
        <Input
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="https://example.com/feed"
          className="h-10 rounded-xl border-slate-200 text-sm focus-visible:ring-indigo-400 focus-visible:ring-offset-0"
        />
        <Button
          onClick={handleAdd}
          className="h-10 px-5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
