"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Eye, Pencil, RotateCcw, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { DashboardHeader } from "../DashboardHeader";

type Status = "All" | "Draft" | "Published" | "Failed" | "Retried";
type ArticleStatus = "Draft" | "Published" | "Failed" | "Retried";

interface Draft {
  id: string;
  title: string;
  time: string;
  platform: string;
  status: ArticleStatus;
  preview: string;
}

const MOCK_DRAFTS: Draft[] = [
  { id: "1", title: "Why AI Copilots Are Changing Code Review",   time: "Oct 24", platform: "WordPress", status: "Published", preview: "AI-powered code review tools are transforming how engineering teams collaborate. From catching bugs earlier to suggesting architectural improvements, these copilots are becoming indispensable members of development workflows.\n\nThe key advantage isn't just speed—it's consistency. While human reviewers may miss patterns across large codebases, AI copilots maintain awareness of the entire project context." },
  { id: "2", title: "The Rise Of Edge Computing In 2024",         time: "Oct 22", platform: "WordPress", status: "Draft",     preview: "Edge computing is reshaping how data is processed, moving computation closer to where data is generated rather than relying on centralized data centers." },
  { id: "3", title: "Optimizing React Server Components",          time: "Oct 23", platform: "Medium",    status: "Failed",    preview: "React Server Components offer a new paradigm for building performant applications, but optimization requires understanding the boundary between server and client rendering." },
  { id: "4", title: "Understanding Vector Databases",             time: "Oct 23", platform: "Dev.to",    status: "Retried",   preview: "Vector databases are becoming essential infrastructure for AI applications, enabling semantic search and similarity matching at scale." },
  { id: "5", title: "Building Scalable APIs With GraphQL",        time: "Oct 25", platform: "Medium",    status: "Published", preview: "GraphQL provides a flexible and efficient alternative to REST APIs, allowing clients to request exactly the data they need." },
  { id: "6", title: "Demystifying Quantum Computing",             time: "Oct 21", platform: "WordPress", status: "Draft",     preview: "Quantum computing promises to solve problems that are intractable for classical computers, but understanding the fundamentals is the first step." },
  { id: "7", title: "An Introduction To Progressive Web Apps",    time: "Oct 20", platform: "Dev.to",    status: "Published", preview: "Progressive Web Apps bridge the gap between web and native applications, offering offline support, push notifications, and app-like experiences." },
  { id: "8", title: "Exploring The Future Of 5G Technology",      time: "Oct 18", platform: "Medium",    status: "Failed",    preview: "5G technology is set to revolutionize connectivity, enabling new use cases from autonomous vehicles to smart city infrastructure." },
  { id: "9", title: "How Blockchain Is Reshaping Finance",        time: "Oct 19", platform: "WordPress", status: "Retried",   preview: "Blockchain technology is disrupting traditional financial systems, enabling decentralized finance, faster cross-border payments, and greater transparency." },
];

const STATUS_FILTERS: Status[] = ["All", "Draft", "Published", "Failed", "Retried"];
const ITEMS_PER_PAGE = 9;
const TOTAL_PAGES = 5;

const statusStyle: Record<ArticleStatus, string> = {
  Published: "bg-emerald-100 text-emerald-600",
  Failed:    "bg-red-100 text-red-500",
  Retried:   "bg-amber-100 text-amber-600",
  Draft:     "bg-slate-100 text-slate-500",
};

function ZerodraftsPage() {
  const [search, setSearch]           = useState("");
  const [activeFilter, setActiveFilter] = useState<Status>("All");
  const [autoPosting, setAutoPosting]  = useState(false);
  const [currentPage, setCurrentPage]  = useState(1);
  const [previewDraft, setPreviewDraft] = useState<Draft | null>(null);

  const filtered = MOCK_DRAFTS.filter((d) => {
    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "All" || d.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex-1 flex flex-col bg-slate-100 min-h-screen overflow-auto">
      <DashboardHeader
        title="Zerodrafts"
        subtitle="View and track automatically generated draft articles before publishing"
      />

      <div className="px-4 sm:px-8 pb-8 pt-4 flex flex-col gap-4 flex-1">
        {/* Search + Filters + Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search drafts..."
              className="w-full pl-9 pr-4 h-9 rounded-xl border border-slate-200 bg-white text-base text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 flex-wrap">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors",
                  activeFilter === f
                    ? "bg-indigo-600 text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-200"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Auto posting toggle */}
          <div className="flex items-center gap-2 sm:ml-auto">
            <span className="text-sm font-medium text-slate-600">Auto posting</span>
            <Switch
              checked={autoPosting}
              onCheckedChange={setAutoPosting}
              className="data-[state=checked]:bg-indigo-500"
            />
          </div>
        </div>

        {/* Table card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex-1">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[1fr_80px_130px_130px_80px] gap-2 px-6 py-3 border-b border-slate-100">
            {["TITLE", "TIME", "PLATFORM", "STATUS", ""].map((h, i) => (
              <span key={i} className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          <div className="flex flex-col divide-y divide-slate-50">
            {filtered.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-slate-400">
                No drafts found.
              </div>
            ) : (
              filtered.map((draft) => (
                <div
                  key={draft.id}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_80px_130px_130px_80px] gap-1 sm:gap-2 items-start sm:items-center px-6 py-4 hover:bg-slate-50/60 transition-colors"
                >
                  {/* Title */}
                  <span className="text-base font-medium text-foreground truncate pr-2">
                    {draft.title}
                  </span>

                  {/* Time */}
                  <span className="text-sm text-muted-foreground">{draft.time}</span>

                  {/* Platform */}
                  <span className="text-sm text-muted-foreground">{draft.platform}</span>

                  {/* Status badge */}
                  <div>
                    <span
                      className={cn(
                        "inline-block text-xs font-semibold px-3 py-1 rounded-full",
                        statusStyle[draft.status]
                      )}
                    >
                      {draft.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    <button
                      onClick={() => setPreviewDraft(draft)}
                      className="text-muted-foreground hover:text-indigo-500 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {(draft.status === "Draft" || draft.status === "Retried") && (
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                    )}
                    {draft.status === "Failed" && (
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 pt-2">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={cn(
                "w-8 h-8 rounded-lg text-base font-semibold transition-colors",
                currentPage === page
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-muted-foreground hover:bg-slate-200"
              )}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Preview panel — slide in from right */}
      {previewDraft && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setPreviewDraft(null)}
          />

          {/* Panel */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-4">
              {/* Close */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-foreground leading-snug">
                  {previewDraft.title}
                </h2>
                <button
                  onClick={() => setPreviewDraft(null)}
                  className="shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-xs font-semibold px-2.5 py-0.5 rounded-full",
                    statusStyle[previewDraft.status]
                  )}
                >
                  {previewDraft.status}
                </span>
                <span className="text-sm text-muted-foreground">
                  {previewDraft.platform} · {previewDraft.time}
                </span>
              </div>

              {/* Preview text */}
              <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {previewDraft.preview}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ZerodraftsPage;