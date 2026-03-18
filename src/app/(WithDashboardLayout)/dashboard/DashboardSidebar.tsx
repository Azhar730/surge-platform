"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-40 shrink-0 flex flex-col gap-6 pt-6 pb-8 px-4 bg-white/30 min-h-screen border-r border-slate-200/60">
      {/* Logo */}
      <div className="px-2 mb-2">
        <span className="font-mono text-base font-bold tracking-tighter text-slate-800 select-none">
          zerodraft.
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-indigo-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button className="px-3 py-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          Log out
        </button>
      </div>
    </aside>
  );
}
