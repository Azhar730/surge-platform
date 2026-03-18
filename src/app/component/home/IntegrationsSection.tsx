import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function IntegrationsSection() {
  return (
    <section className="py-10 px-6 bg-slate-100">
      <div className="mx-auto max-w-5xl">
        <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-10 overflow-hidden">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4 max-w-xs"
          >
            <Badge
              variant="outline"
              className="text-xs text-slate-600 border-slate-300 rounded-full px-3 py-1"
            >
              Integrations
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Seamless Integrations
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed">
              Connect RSS Feeds with your CMS through our platform
              <br />
              in a snap
            </p>

            <Button className="mt-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-5 py-2 text-sm font-medium">
              Get Started Now
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 w-full max-w-sm flex flex-col gap-3">
              
              {/* RSS Feed Row */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                {/* RSS Icon */}
                <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M6.18 15.64a2.18 2.18 0 010 4.36 2.18 2.18 0 010-4.36M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 006.18 7.27V4.44M4 10.1a9.9 9.9 0 019.9 9.9h-2.83a7.07 7.07 0 00-7.07-7.07V10.1z" />
                  </svg>
                </div>
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">RSS Feed</span>
                  </div>
                  <div className="h-2 w-28 bg-slate-200 rounded-full" />
                </div>
              </div>

              {/* Dots connector */}
              <div className="flex justify-center py-1 gap-1 flex-col items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>

              {/* WordPress Row */}
              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                {/* WordPress Icon */}
                <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-700" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-.98.18-1.92.5-2.79l2.76 7.57A8.4 8.4 0 013.6 12zm8.4 8.4a8.4 8.4 0 01-2.38-.34l2.53-7.35.02-.04 2.47 6.77c.01.04.03.07.05.1A8.38 8.38 0 0112 20.4zm1.16-11.26l2.07 6.01.57 1.9a8.4 8.4 0 01-5.19-8.63l2.55.72zm4.08.6c.4.71.62 1.53.62 2.26 0 1.76-.95 5.27-1.4 6.97l-3.83-11.38c.64-.03 1.21-.1 1.21-.1.57-.07.5-.9-.07-.87 0 0-1.71.14-2.81.14-1.04 0-2.78-.14-2.78-.14-.57-.03-.64.83-.07.87 0 0 .54.07 1.11.1L11.6 14.6 9.53 8.74c.64-.03 1.21-.1 1.21-.1.57-.07.5-.9-.07-.87 0 0-1.71.14-2.81.14h-.66A8.4 8.4 0 0119.2 12c0 .64-.08 1.26-.21 1.86l-.55-1.84-1.2-3.28z" />
                  </svg>
                </div>
                <div className="flex flex-col flex-1 gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">Wordpress</span>
                  </div>
                  <div className="h-2 w-28 bg-slate-200 rounded-full" />
                </div>
              </div>

            </div>
          </motion.div>

        </Card>
      </div>
    </section>
  );
}