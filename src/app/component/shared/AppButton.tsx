"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type AppButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

export default function AppButton({
  children,
  type = "button",
  onClick,
  className = "",
}: AppButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`w-full h-11 rounded-full 
      bg-blue-700 cursor-pointer hover:bg-blue-600
      text-white font-medium shadow-md
      ${className}`}
    >
      {children}
    </Button>
  );
}
