"use client";

import { useForm, useFieldArray } from "react-hook-form";
// zod removed — using a simple type for the form values
import { useState, KeyboardEvent, useRef } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DashboardHeader } from "../DashboardHeader";
import { Label } from "@/components/ui/label";

type FormValues = {
  targetAudience: string;
  writingTone: string;
  excludedTopics: { value: string }[];
};

// ── Component ────────────────────────────────────────────────────────────────
function BrandsPage() {
  const [saved, setSaved]           = useState(false);
  const [topicInput, setTopicInput] = useState("");
  const inputRef                    = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      targetAudience: "Investors",
      writingTone:    "Professional",
      excludedTopics: [{ value: "crypto" }, { value: "politics" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "excludedTopics",
  });

  // Add topic tag
  const addTopic = () => {
    const val = topicInput.trim();
    const exists = fields.some((f) => f.value === val);
    if (val && !exists) {
      append({ value: val });
    }
    setTopicInput("");
  };

  const handleTopicKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTopic();
    }
    if (e.key === "Backspace" && !topicInput && fields.length > 0) {
      remove(fields.length - 1);
    }
  };

  // Submit
  const onSubmit = (data: FormValues) => {
    const formatted = {
      targetAudience: data.targetAudience,
      writingTone:    data.writingTone,
      excludedTopics: data.excludedTopics.map((t) => t.value),
    };

    console.log("✅ Form submitted:", formatted);

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 min-h-screen overflow-auto">
      <DashboardHeader
        title="Brands"
        subtitle="Manage your content style, tone, and preferences."
      />

      <div className="px-4 sm:px-8 pb-8 pt-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 flex flex-col gap-6">
              {/* Card subtitle */}
              <p className="text-base text-muted-foreground">
                Configure how the AI shapes content for your audience.
              </p>

              {/* TARGET AUDIENCE */}
              <div className="flex flex-col gap-1">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Target Audience</Label>
                <Input
                  {...form.register("targetAudience")}
                  className="h-11 rounded-xl border border-slate-200 bg-white text-base text-foreground shadow-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-0"
                />
                {form.formState.errors.targetAudience && (
                  <p className="text-xs text-red-400">{String(form.formState.errors.targetAudience.message)}</p>
                )}
              </div>

              {/* WRITING TONE */}
              <div className="flex flex-col gap-1">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Writing Tone</Label>
                <Input
                  {...form.register("writingTone")}
                  className="h-11 rounded-xl border border-slate-200 bg-white text-base text-foreground shadow-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-0"
                />
                {form.formState.errors.writingTone && (
                  <p className="text-xs text-red-400">{String(form.formState.errors.writingTone.message)}</p>
                )}
              </div>

              {/* EXCLUDED TOPICS */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Excluded Topics{" "}
                  <span className="normal-case font-normal text-muted-foreground tracking-normal">
                    (optional)
                  </span>
                </span>

                {/* Tag input box */}
                <div
                  className="min-h-11 flex flex-wrap items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white focus-within:ring-2 focus-within:ring-indigo-300 cursor-text"
                  onClick={() => inputRef.current?.focus()}
                >
                  {/* Tags */}
                  {fields.map((field, index) => (
                    <span
                      key={field.id}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-semibold"
                    >
                      {field.value}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          remove(index);
                        }}
                        className="text-indigo-400 hover:text-indigo-700 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}

                  {/* Inline input */}
                    <input
                    ref={inputRef}
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    onKeyDown={handleTopicKeyDown}
                    onBlur={addTopic}
                    placeholder="Add topic..."
                    className="flex-1 min-w-25 text-base text-muted-foreground placeholder:text-muted-foreground outline-none bg-transparent"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Press Enter or comma to add a topic
                </p>
              </div>

              {/* Save button */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  className="h-10 px-6 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white text-base font-semibold shadow-md transition-all"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </form>
      </div>

      {/* Toast */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-white border border-slate-100 shadow-lg rounded-2xl px-4 py-3 transition-all duration-300",
          saved
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
        <span className="text-sm font-semibold text-foreground">Saved Changes</span>
      </div>
    </div>
  );
}

export default BrandsPage;