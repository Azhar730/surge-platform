"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
});

type FormValues = z.infer<typeof schema>;

export function ProfileSetup() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: FormValues) => {
    console.log("✅ Profile setup submitted:", {
      username: data.username,
      hasAvatar: !!avatar,
    });
  };

  return (
    /* ── Page background: soft lavender gradient ── */
    <div
      className="min-h-screen flex items-center justify-center p-4"
    >
      {/* ── Card: frosted lavender tint ── */}
      <div
        className="max-w-3xl mx-auto rounded-[28px] p-8 flex flex-col items-center gap-6"
        style={{
          background: "linear-gradient(160deg, rgba(235,238,252,0.85) 0%, rgba(220,225,248,0.75) 100%)",
          boxShadow: "0 8px 40px 0 rgba(100,110,200,0.10), 0 1.5px 0 0 rgba(255,255,255,0.7) inset",
          border: "1.5px solid rgba(255,255,255,0.65)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* ── Label ── */}
        <p className="text-sm text-muted-foreground font-medium text-center tracking-wide">
          Upload your Profile picture
        </p>

        {/* ── Avatar circle ── */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="relative flex items-center justify-center rounded-full transition-all duration-200 group"
          style={{
            width: 148,
            height: 148,
            background: "radial-gradient(circle at 38% 35%, #ffffff 60%, #e8eaf6 100%)",
            boxShadow:
              "0 8px 32px 0 rgba(100,110,200,0.18), 0 2px 8px 0 rgba(120,130,210,0.10), 0 1.5px 0 0 rgba(255,255,255,0.9) inset",
            border: "1.5px solid rgba(255,255,255,0.8)",
            overflow: "hidden",
          }}
        >
          {avatar ? (
            <Image
              src={avatar}
              alt="Profile avatar"
              fill
              className="object-cover"
              sizes="148px"
            />
          ) : (
            <Upload
              className="text-indigo-400 group-hover:text-indigo-500 transition-colors"
              style={{ width: 28, height: 28 }}
            />
          )}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* ── Form ── */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            {/* Username label */}
            <p className="text-sm text-muted-foreground font-medium text-center tracking-wide">
              Please enter the user name.
            </p>

            {/* Username field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John P"
                      className="h-11 rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-0"
                      style={{
                        background: "rgba(255,255,255,0.80)",
                        border: "1.5px solid rgba(200,205,235,0.7)",
                        boxShadow: "0 1px 4px 0 rgba(100,110,200,0.06)",
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-center" />
                </FormItem>
              )}
            />

            {/* Confirm button */}
            <Button
              type="submit"
              className="w-full h-11 rounded-xl text-sm font-semibold text-white shadow-md transition-all"
              style={{
                background: "linear-gradient(90deg, #5b6ef5 0%, #6c7ff7 100%)",
                boxShadow: "0 4px 16px 0 rgba(91,110,245,0.30)",
              }}
            >
              Confirm
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ProfileSetup;