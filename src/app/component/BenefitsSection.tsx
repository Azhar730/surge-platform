import { Clock, CalendarCheck, Sparkles, Settings, TrendingUp, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@base-ui/react";
import Badge from "./BadgeButton";

const benefits = [
  {
    icon: <Clock className="w-5 h-5 text-indigo-500" />,
    title: "Save Hours of Manual Work",
    description: "Automatically collect articles, generate content, and publish posts without manual writing or editing.",
  },
  {
    icon: <CalendarCheck className="w-5 h-5 text-indigo-500" />,
    title: "Publish Content Consistently",
    description: "Keep your website active with fresh articles generated and published on a reliable schedule.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
    title: "Turn News Into Insights",
    description: "AI analyzes multiple sources and transforms them into meaningful editorial articles.",
  },
  {
    icon: <Settings className="w-5 h-5 text-indigo-500" />,
    title: "An Autonomous Content Engine",
    description: "Once configured, the system continuously discovers topics and publishes articles automatically.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
    title: "Scale Without Any Hasle",
    description: "Produce more content without expanding your editorial team.",
  },
  {
    icon: <LayoutDashboard className="w-5 h-5 text-indigo-500" />,
    title: "Stay in Control",
    description: "Monitor automation status, publishing activity, and system health from a simple dashboard.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
        <Badge text="Benefits" />

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Content Publishing Fully
            <br />
            On Autopilot
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            From article discovery to writing and publishing,
            <br />
            the system runs your entire editorial pipeline automatically.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="border-none border-white bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <CardHeader className="px-6 pt-6 pb-6 flex flex-col gap-4">
                  {/* Icon box */}
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold text-slate-800 mb-2">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-500 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}