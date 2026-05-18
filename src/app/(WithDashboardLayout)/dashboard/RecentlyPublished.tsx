import { cn } from "@/lib/utils";
import { Eye, RefreshCw, RotateCcw } from "lucide-react";

export type ArticleStatus = "Published" | "Failed" | "Retried";

export interface Article {
  id: string;
  title: string;
  time: string;
  source: string;
  status: ArticleStatus;
  viewUrl?: string;
}

interface RecentlyPublishedProps {
  articles: Article[];
}

const statusStyle: Record<ArticleStatus, string> = {
  Published: "bg-emerald-100 text-emerald-600",
  Failed: "bg-red-100 text-red-500",
  Retried: "bg-amber-100 text-amber-600",
};

export function RecentlyPublished({ articles }: RecentlyPublishedProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h2 className="text-lg font-bold text-foreground mb-4">
        Recently Published
      </h2>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_90px_110px_110px_64px] gap-2 px-2 mb-2">
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Title</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Time</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Source</span>
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Status</span>
        <span />
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-slate-50">
        {articles.map((article) => (
          <div
            key={article.id}
            className="grid grid-cols-[1fr_90px_110px_110px_64px] gap-2 items-center px-2 py-3.5 hover:bg-slate-50/60 rounded-lg transition-colors"
          >
            <span className="text-base text-foreground truncate pr-2">{article.title}</span>
            <span className="text-sm text-muted-foreground">{article.time}</span>
            <span className="text-sm text-muted-foreground">{article.source}</span>
            <div>
              <span
                className={cn(
                  "inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full",
                  statusStyle[article.status]
                )}
              >
                {article.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {article.status === "Published" && (
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              )}
              {article.status === "Failed" && (
                <>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </>
              )}
              {article.status === "Retried" && (
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}