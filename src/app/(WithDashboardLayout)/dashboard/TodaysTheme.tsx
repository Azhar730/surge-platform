interface TodaysThemeProps {
  theme: string;
  sourced: number;
  generated: number;
}

export function TodaysTheme({ theme, sourced, generated }: TodaysThemeProps) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-400 font-medium">Today's Theme</span>
        <span className="text-sm font-semibold text-slate-800">"{theme}"</span>
      </div>
      <div className="text-xs text-slate-400 font-medium">
        {sourced} sourced · {generated} generated
      </div>
    </div>
  );
}
