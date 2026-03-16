import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    value: "item-1",
    question: "How does your platform track feature usage?",
    answer:
      "We automatically collect interaction data across your product and visualize which features are being used most — no manual tagging needed.",
  },
  {
    value: "item-2",
    question: "Do I need technical skills to use Alytics?",
    answer:
      "No technical skills are required. Alytics is designed to be intuitive and easy to use for everyone on your team.",
  },
  {
    value: "item-3",
    question: "Can Alytics integrate with tools we already use?",
    answer:
      "Yes, Alytics integrates with a wide range of popular tools including Slack, Notion, HubSpot, and more.",
  },
  {
    value: "item-4",
    question: "Is my data secure on Alytics?",
    answer:
      "Absolutely. We use industry-standard encryption and security practices to keep your data safe at all times.",
  },
  {
    value: "item-5",
    question: "Can I try Alytics before committing?",
    answer:
      "Yes! We offer a free 14-day trial with no credit card required so you can explore everything before deciding.",
  },
];

export default function FAQSection() {


  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header area */}
        <div className="text-center mb-14 md:mb-16">
          <Badge
            variant="secondary"
            className="mb-5 px-4 py-1.5 text-sm font-medium bg-gray-100/80 hover:bg-gray-100 border border-gray-200 rounded-full"
          >
            FAQ's
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Common Questions
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            With Clear Answers
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are answers to the most common things people ask before getting started.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="w-full max-w-3xl mx-auto"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-gray-200/70 last:border-b-0 py-5 first:pt-0 last:pb-0"
            >
              <AccordionTrigger
                className="
                  flex justify-between items-center 
                  text-left text-lg md:text-xl font-medium text-gray-900 
                  hover:no-underline py-2
                  [&[data-state=open]>div>svg]:rotate-180
                "
              >
                <span>{item.question}</span>

                <div className="ml-4 flex-shrink-0">
                  {openItem === item.value ? (
                    <Minus className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-4 pb-2 text-base text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}