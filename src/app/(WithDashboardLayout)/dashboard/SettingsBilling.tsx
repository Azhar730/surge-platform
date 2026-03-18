"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

type BillingCycle = "Monthly" | "Annual";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  current?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 19,
    features: ["5 RSS feeds", "Daily publishing"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    features: ["20 RSS feeds", "Daily publishing"],
    current: true,
  },
  {
    id: "business",
    name: "Business",
    price: 99,
    features: ["50 RSS feeds", "Multiple runs / day"],
  },
];

export function SettingsBilling() {
  const [cycle, setCycle] = useState<BillingCycle>("Monthly");
  const [showCancel, setShowCancel] = useState(false);

  const feedsUsed = 3;
  const feedsMax = 5;

  return (
    <div className="flex flex-col gap-5">
      {/* Current plan banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 text-white shadow-md">
        {/* decorative circle */}
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
          Pro Plan · Monthly
        </p>
        <p className="text-4xl font-bold mt-1">
          $49
          <span className="text-lg font-medium text-indigo-200"> / month</span>
        </p>
        <p className="text-xs text-indigo-200 mt-1">Renews on April 10, 2026</p>
        <div className="flex items-center gap-3 mt-5">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-xl text-sm font-semibold bg-white/20 hover:bg-white/30 text-white border-0"
          >
            Upgrade Plan
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-xl text-sm font-semibold bg-white/20 hover:bg-white/30 text-white border-0"
          >
            Manage Billing
          </Button>
        </div>
      </div>

      {/* Plan limits */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col gap-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Plan Limits
        </p>

        {/* Feeds usage */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-700">Feeds</span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              {feedsUsed}/{feedsMax} used
            </span>
            <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-400 rounded-full"
                style={{ width: `${(feedsUsed / feedsMax) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Publish frequency */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-700">Publish Frequency</span>
          <span className="text-sm text-slate-500 font-medium">Daily</span>
        </div>
      </div>

      {/* Plans comparison */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Plans
          </p>
          {/* Billing cycle toggle */}
          <div className="flex items-center bg-white border border-slate-200 rounded-full p-0.5 text-xs font-semibold">
            {(["Monthly", "Annual"] as BillingCycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={cn(
                  "px-3 py-1 rounded-full transition-all",
                  cycle === c
                    ? "bg-slate-800 text-white"
                    : "text-slate-500 hover:text-slate-800"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative bg-white rounded-2xl border p-5 flex flex-col gap-3",
                plan.current
                  ? "border-indigo-300 shadow-md"
                  : "border-slate-100 shadow-sm"
              )}
            >
              {plan.current && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                  Current Plan
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-slate-800">{plan.name}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  ${cycle === "Annual" ? Math.round(plan.price * 0.8) : plan.price}
                  <span className="text-xs font-normal text-slate-400"> /mo</span>
                </p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-3 h-3 text-indigo-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.current ? "outline" : "default"}
                size="sm"
                className={cn(
                  "mt-auto rounded-xl text-xs font-semibold",
                  plan.current
                    ? "border-indigo-200 text-indigo-500 hover:bg-indigo-50"
                    : plan.id === "business"
                    ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border-0"
                )}
              >
                {plan.current
                  ? "Current Plan"
                  : plan.id === "starter"
                  ? "Downgrade"
                  : "Upgrade Now"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Stripe payment method */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-indigo-600 text-base tracking-tight">
            stripe
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-slate-400" />
              Visa •••• 4832
            </p>
            <p className="text-xs text-slate-400">Expires 09 / 27</p>
          </div>
        </div>
        <button className="text-slate-300 hover:text-red-400 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Cancel subscription */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-red-400">
            Cancel Subscription
          </p>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">
            You can cancel anytime. Your plan will remain active until the end
            of the current billing period.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCancel(true)}
          className="shrink-0 rounded-xl border-red-200 text-red-400 hover:bg-red-50 hover:text-red-500 text-xs font-semibold"
        >
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
}
