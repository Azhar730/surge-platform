"use client";

import { useState } from "react";
import { OnboardingSidebar, Step, StepAddFeeds, StepConnectCMS, StepPreferences, StepSchedule } from "@/app/component/onboarding";

const STEP_LABELS = ["Add Feeds", "Preferences", "Connect CMS", "Schedule"];

function buildSteps(currentStep: number): Step[] {
  return STEP_LABELS.map((label, i) => {
    const id = i + 1;
    let status: Step["status"] = "upcoming";
    if (id < currentStep) status = "completed";
    else if (id === currentStep) status = "active";
    return { id, label, status };
  });
}

interface OnboardingProps {
  onComplete?: () => void;
}

function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () =>
    setCurrentStep((s) => Math.min(s + 1, STEP_LABELS.length));

  const handleComplete = () => {
    onComplete?.();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-200 via-indigo-100 to-slate-300 p-6">
      {/* Card */}
      <div className="w-full max-w-3xl bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 flex overflow-hidden min-h-[420px]">
        {/* Left sidebar */}
        <div className="w-52 shrink-0 bg-white/30 border-r border-white/50 px-6 py-8">
          <OnboardingSidebar steps={buildSteps(currentStep)} />
        </div>

        {/* Right content */}
        <div className="flex-1 px-10 py-8">
          {currentStep === 1 && <StepAddFeeds onContinue={next} />}
          {currentStep === 2 && <StepPreferences onContinue={next} />}
          {currentStep === 3 && <StepConnectCMS onContinue={next} />}
          {currentStep === 4 && <StepSchedule onComplete={handleComplete} />}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;