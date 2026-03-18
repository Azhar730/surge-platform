import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import BadgeButton from "../shared/BadgeButton";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 15,
    tagline: "Great for getting started.",
    features: ["5 RSS Feeds", "Daily Publishing"],
    popular: false,
  },
  {
    name: "Premium",
    monthlyPrice: 49,
    yearlyPrice: 39,
    tagline: "Great for getting started.",
    features: ["10 RSS Feeds", "Daily Publishing"],
    popular: true,
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    yearlyPrice: 79,
    tagline: "Great for getting started.",
    features: ["15 RSS Feeds", "Daily Publishing"],
    popular: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-linear-to-b from-slate-100 to-slate-50 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <BadgeButton text="Our Pricing" />
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Choose The Best
            <br />
            Plan That Suites You
          </h2>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            Flexible pricing built for every stage
            <br />
            from startup to scale, no hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm font-medium ${!isYearly ? "text-slate-900" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                isYearly ? "bg-blue-600" : "bg-blue-600"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-slate-900" : "text-slate-400"}`}>
              Yearly
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col ${plan.popular ? "z-10 -mx-1" : ""}`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-xs font-medium text-center py-2 rounded-t-2xl">
                  Most Popular
                </div>
              )}
              <Card
                className={`flex flex-col h-full rounded-2xl border shadow-sm p-6 ${
                  plan.popular
                    ? "border-blue-500 border-2 rounded-t-none shadow-xl bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Plan name */}
                <p className="text-base font-semibold text-slate-800">{plan.name}</p>

                {/* Price */}
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-slate-400 mb-1">/month</span>
                </div>

                {/* Tagline */}
                <p className="mt-2 text-sm text-slate-500">{plan.tagline}</p>

                {/* Divider */}
                <div className="my-4 border-t border-slate-100" />

                {/* Features */}
                <p className="text-xs font-semibold text-slate-700 mb-3">What's included</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}