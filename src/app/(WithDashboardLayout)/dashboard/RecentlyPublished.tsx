import { cn } from "@/lib/utils";
import { RefreshCw, Copy, Pencil } from "lucide-react";

export type ArticleStatus = "Published" | "Failed" | "Retried";

export interface Article {
  id: string;
  title: string;
  time: string;
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
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h2 className="text-sm font-bold text-slate-800 mb-4">
        Recently Published
      </h2>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_100px_120px_60px] gap-2 px-2 mb-2">
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
          Title
        </span>
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
          Time
        </span>
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
          Status
        </span>
        <span />
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-slate-50">
        {articles.map((article) => (
          <div
            key={article.id}
            className="grid grid-cols-[1fr_100px_120px_60px] gap-2 items-center px-2 py-3 hover:bg-slate-50/60 rounded-lg transition-colors"
          >
            <span className="text-sm text-slate-700 truncate pr-4">
              {article.title}
            </span>
            <span className="text-sm text-slate-500">{article.time}</span>
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
              {article.status === "Published" && article.viewUrl && (
                <a
                  href={article.viewUrl}
                  className="text-xs text-indigo-500 font-medium hover:underline"
                >
                  View
                </a>
              )}
              {article.status === "Failed" && (
                <>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
              {article.status === "Retried" && (
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
