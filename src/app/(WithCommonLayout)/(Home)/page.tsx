// "use client"
// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import Badge from "../../component/shared/BadgeButton";
// import IntegrationsSection from "../../component/home/IntegrationsSection";
// import FAQSection from "../../component/home/FAQSection";
// import BenefitsSection from "@/app/component/home/BenefitsSection";
// import HeroSection from "@/app/component/home/HeroSection";
// import HowItWorksSection from "@/app/component/home/HowItWorksSection";
// import PricingSection from "@/app/component/home/PricingSection";
// import CTASection from "@/app/component/home/CTASection";

import { HomePage } from "@/app/component/homepage/HomePage";

// const integrations = ["Semrush", "WordPress", "Webflow", "Google Docs", "Notion", "HubSpot"];

// const pricing = [
//   { name: "Basic", price: "$19", users: "2 seats" },
//   { name: "Pro", price: "$49", users: "10 seats", featured: true },
//   { name: "Enterprise", price: "$99", users: "Unlimited seats" },
// ];
// const features = [
//   {
//     title: "Automated RSS Collection",
//     description: "Connect your RSS feeds and automatically collect articles from trusted sources throughout the day.",
//   },
//   {
//     title: "AI Editorial Clustering",
//     description: "Our AI analyzes recent articles and groups them into meaningful editorial themes.",
//   },
//   {
//     title: "Direct CMS Publishing",
//     description: "Articles are published automatically to your site through CMS integration.",
//   },
//   {
//     title: "Automation Monitoring",
//     description: "Track system status, publishing activity, and failures from a simple dashboard.",
//   },
// ];



// function App() {
//   return (
//     <div className="bg-zinc-50 text-zinc-900">
//       <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/90 backdrop-blur">
//         <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
//           <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-blue-600">
//             <Image
//               src="/zerodraft.svg"
//               alt="Zerodraft Logo"
//               width={120}
//               height={40}
//               className="object-contain"
//             />
//           </Link>
//           <NavigationMenu>
//             <NavigationMenuList>
//               {[
//                 ["Platform", "#platform"],
//                 ["Workflow", "#workflow"],
//                 ["Pricing", "#pricing"],
//                 ["FAQ", "#faq"],
//               ].map(([label, href]) => (
//                 <NavigationMenuItem key={label}>
//                   <NavigationMenuLink href={href}>
//                     {label}
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//           <Link href={"/onboarding"}>
//           <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 rounded cursor-pointer ">
//             Get Started
//           </Button>
//           </Link>
//         </div>
//       </header>

//       <main>
//         <section className="relative overflow-hidden bg-linear-to-b from-zinc-100 to-zinc-50 pt-4">
//           <div className="mx-auto max-w-6xl px-6 pb-10">
//             <HeroSection />
//             <div className="flex items-center justify-center dotted-bg">
//               <Image
//                 src={'/banner.jpg'}
//                 height={500}
//                 width={950}
//                 alt="banener"
//                 className="rounded-2xl border-6 border-white"
//               />

//             </div>
//             <div className="text-center mt-4">
//               <h2 className="text-xl font-bold">Trusted By</h2>
//               <div className="flex items-center gap-8 mt-2 justify-center">
//                 <Image
//                   src={'/trust-1.png'}
//                   height={40}
//                   width={100}
//                   alt="trust-1"
//                 />
//                 <Image
//                   src={'/trust-2.png'}
//                   height={40}
//                   width={100}
//                   alt="trust-2"
//                 />
//                 <Image
//                   src={'/trust-3.png'}
//                   height={40}
//                   width={100}
//                   alt="trust-3"
//                 />
//                 <Image
//                   src={'/trust-4.png'}
//                   height={40}
//                   width={100}
//                   alt="trust-4"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="platform" className="py-20">
//           <div className="mx-auto max-w-6xl px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.35 }}
//               className="mx-auto max-w-2xl text-center"
//             >
//               <Badge text="Unique Features" />
//               <h2 className="text-4xl font-semibold tracking-tight px-2 md:px-32">
//                 Powerful Automation For AI-Driven Publishing
//               </h2>
//               <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 Automatically collect articles from RSS feeds, identify meaningful themes with AI,
//                 <br className="hidden sm:inline" />
//                 generate full-length content, and publish directly to your CMS.
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
//               {features.map((feature, index) => (
//                 <Card
//                   key={index}
//                   className="border border-slate-200 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
//                 >
//                   {/* Empty image placeholder area */}
//                   <div className="h-52  rounded-xl border mx-2" />

//                   <CardHeader className="px-6 pb-6 pt-4">
//                     <CardTitle className="text-lg font-semibold text-slate-800 transition-colors">
//                       {feature.title}
//                     </CardTitle>
//                     <CardDescription className="text-sm mt-1 leading-relaxed text-slate-500">
//                       {feature.description}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//         <BenefitsSection />
//         <HowItWorksSection />
//         <IntegrationsSection />
//         <PricingSection />
//         <FAQSection />
//         <CTASection/>

//         <section id="faq" className="border-b border-zinc-200 py-20">
//           <div className="mx-auto max-w-3xl px-6">
//             <h2 className="text-center text-3xl font-semibold tracking-tight">Common Questions With Clear Answers</h2>
//             <div className="mt-10 space-y-3">
//               {[
//                 "How long does setup take?",
//                 "Can I approve content before publishing?",
//                 "Which CMS platforms are supported?",
//                 "Do you offer migration support?",
//               ].map((question) => (
//                 <details key={question} className="border border-zinc-200 bg-white px-5 py-4">
//                   <summary className="cursor-pointer text-sm font-medium">{question}</summary>
//                   <p className="mt-3 text-sm text-zinc-600">
//                     Most teams go live in under one week and keep full editorial control through flexible approval steps.
//                   </p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="py-20">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             className="mx-auto max-w-4xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-12 text-center"
//           >
//             <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-700">
//               <Sparkles className="h-4 w-4" />
//               Ready to change the way you publish?
//             </p>
//             <h2 className="mt-3 text-3xl font-semibold tracking-tight">Run Your Editorial Machine On Autopilot</h2>
//             <Button className="mt-7">Start 14-day Free Trial</Button>
//           </motion.div>
//         </section>
//       </main>

//       <footer className="border-t border-zinc-200 py-8">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-xs text-zinc-500">
//           <p>2026 Vireon Labs</p>
//           <p>Privacy Policy</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App

function Page() {
  return <HomePage />;
}

export default Page;