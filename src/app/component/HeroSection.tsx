"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RotatingIcon from "./RotatingIcon";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden py-28">

            {/* Floating Icons */}
            <RotatingIcon
                src="/rss.svg"
                className="absolute left-10 top-16"
                duration={10}
                size={50}
            />

            <RotatingIcon
                src="/wordpress.svg"
                className="absolute right-12 top-20"
                duration={12}
                size={55}
            />

            <RotatingIcon
                src="/robot.svg"
                className="absolute bottom-20 right-20"
                duration={8}
                size={55}
            />

            <RotatingIcon
                src="settings.svg"
                className="absolute bottom-24 left-20"
                duration={14}
                size={45}
            />

            {/* Content */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h1 className="mt-4 text-primary text-4xl font-mono font-semibold tracking-tight md:text-6xl">
                        Your Autonomous AI Editorial Engine
                    </h1>

                    <p className="mt-4 text-base text-zinc-600 sm:text-lg">
                        Plan, draft, optimize, and publish content at scale with one
                        coordinated system.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Button className="gap-2 rounded font-semibold cursor-pointer">
                            Get Started
                        </Button>

                        <Button variant="outline" className='bg-blue-100/60 hover:bg-blue-100/60 rounded cursor-pointer text-blue-600 hover:text-blue-600 font-semibold'>How it works</Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}