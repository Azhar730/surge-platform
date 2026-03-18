import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl flex">
        <div className="relative bg-linear-to-br from-white via-slate-50 to-indigo-50 border border-slate-200 overflow-hidden flex flex-col sm:flex-row items-center gap-8 shadow-sm">

          {/* Left Content */}
          <div
            className="flex-1 flex flex-col gap-5 max-w-sm"
          >
            <h2 className="text-4xl font-bold text-indigo-600 leading-tight tracking-tight">
              Ready to change the way
              you automate ?
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Join thousands of users who made they workflows and
              automation an integral part of therir business
            </p>
            <div>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-8 py-5 text-base font-medium shadow-md">
                Try Now
              </Button>
            </div>
          </div>

          

        </div>
        <Image
            src={'/cta.jpg'}
            height={400}
            width={400}
            alt="cta-image"
            className="rounded-tl-2xl rounded-br-2xl shadow-lg"
          />
      </div>
    </section>
  );
}