import { motion } from "framer-motion";
import { Check, Loader } from "lucide-react";
import BadgeButton from "../shared/BadgeButton";

const steps = [
  {
    title: "Connect Your RSS Feeds",
    description:
      "The platform continuously collects and organizes new articles from these feeds.",
    visual: (
      <div className="mt-auto pt-6 px-4 overflow-hidden">
        <div className="rounded-t-xl border border-slate-200 bg-white/80 p-5 shadow-md w-full">
          <p className="text-xs text-slate-400 mb-3 font-medium tracking-wide">
            RSS Feed URL
          </p>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 font-mono truncate">
            https://exampl
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Identifies Key Topics",
    description:
      "AI groups related stories together, and creates meaningful editorial themes.",
    visual: (
      <div className="mt-auto pt-6 px-4 overflow-hidden">
        <div className="rounded-t-xl border border-slate-200 bg-white/80 p-4 shadow-md w-full">
          {[
            { time: "03:00 AM", label: "Collection", done: true },
            { time: "03:01 AM", label: "Clustering", done: true },
            { time: "03:02 AM", label: "Publishing", done: false },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b last:border-0 border-slate-100"
            >
              <span className="text-xs text-slate-400 w-16">{item.time}</span>
              <span className="text-sm text-slate-700 flex-1 ml-2">
                {item.label}
              </span>
              {item.done ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Loader className="w-4 h-4 text-slate-400 animate-spin" />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Generate and Publish",
    description:
      "The system writes a complete article, publishes it directly to your CMS",
    visual: (
      <div className="mt-auto pt-6 px-4 overflow-hidden">
        <div className="rounded-t-xl border border-slate-200 bg-white/80 p-6 shadow-md w-full flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 font-bold text-lg">
            Z
          </div>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          </div>
          <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-slate-700"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-.98.18-1.92.5-2.79l2.76 7.57A8.4 8.4 0 013.6 12zm8.4 8.4a8.4 8.4 0 01-2.38-.34l2.53-7.35.02-.04 2.47 6.77c.01.04.03.07.05.1A8.38 8.38 0 0112 20.4zm1.16-11.26l2.07 6.01.57 1.9a8.4 8.4 0 01-5.19-8.63l2.55.72zm4.08.6c.4.71.62 1.53.62 2.26 0 1.76-.95 5.27-1.4 6.97l-3.83-11.38c.64-.03 1.21-.1 1.21-.1.57-.07.5-.9-.07-.87 0 0-1.71.14-2.81.14-1.04 0-2.78-.14-2.78-.14-.57-.03-.64.83-.07.87 0 0 .54.07 1.11.1L11.6 14.6 9.53 8.74c.64-.03 1.21-.1 1.21-.1.57-.07.5-.9-.07-.87 0 0-1.71.14-2.81.14h-.66A8.4 8.4 0 0119.2 12c0 .64-.08 1.26-.21 1.86l-.55-1.84-1.2-3.28z" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <BadgeButton text="How it works" />
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mt-3">
            Three Simple Steps To
            <br />
            Automated Publishing
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            Automatically collect articles from RSS feeds, analyze them with AI,
            <br />
            generate full-length content, and publish directly to your CMS
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl pt-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Text content */}
              <div className="px-6">
                <h3 className="text-base font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual bleeds to bottom edge */}
              {step.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}