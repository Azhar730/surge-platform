import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function FAQSection() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {/* হেডিং + ব্যাজ */}
      <div className="mb-10 text-center">
        <Badge variant="outline" className="mb-3 text-sm uppercase tracking-wide">
          FAQ
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Common Questions
          <br />
          <span className="text-muted-foreground">With Clear Answers</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are answers to the most common things people ask before getting started.
        </p>
      </div>

      {/* Accordion মূল কন্টেইনার */}
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1" className="border-b py-1">
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            <div className="flex w-full items-center justify-between">
              <span>How does your platform track feature usage?</span>
              <span className="ml-4 text-xs font-normal text-muted-foreground">—</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 text-muted-foreground">
            We automatically collect interaction data across your product and visualize
            which features are being used most — no manual tagging needed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b py-1">
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            Do I need technical skills to use Alytics?
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 text-muted-foreground">
            {/* এখানে তোমার আসল উত্তর দিবে */}
            No — Alytics is designed for non-technical users. You can set it up and get insights without writing any code.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b py-1">
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            Can Alytics integrate with tools we already use?
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 text-muted-foreground">
            Yes — we have native integrations with Segment, Mixpanel, Amplitude, PostHog, and many more. Custom integrations are also possible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b py-1">
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            Is my data secure on Alytics?
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 text-muted-foreground">
            Yes — we take security very seriously. Data is encrypted in transit and at rest, SOC 2 compliant, GDPR ready, and we never sell your data.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b-0 py-1">
          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
            Can I try Alytics before committing?
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 text-muted-foreground">
            Absolutely — we offer a 14-day free trial with full access to all features. No credit card required to start.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}