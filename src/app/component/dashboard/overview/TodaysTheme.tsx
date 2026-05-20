"use client";

import { TodaysThemeData } from "./types";

interface TodaysThemeProps {
  data: TodaysThemeData;
}

export function TodaysTheme({ data }: TodaysThemeProps) {
  return (
    <div className="max-w-full bg-white rounded-md border px-6 py-4 flex items-center justify-between gap-4 h-20">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-sm text-muted-foreground font-medium shrink-0">
          Today&apos;s Theme
        </span>
        <span className="text-sm font-semibold text-foreground truncate">
          &ldquo;{data.theme}&rdquo;
        </span>
      </div>
      <span className="text-xs text-foreground font-medium shrink-0 bg-muted-foreground/20 border px-3 py-1 rounded">
        {data.sourced} sourced · {data.generated} generated
      </span>
    </div>
  );
}