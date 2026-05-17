"use client";

import { useState, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Upload,
  X,
  Eye,
  EyeOff,
  CheckCircle2,
  Camera,
  User,
  Lock,
} from "lucide-react";
import Image from "next/image";

type ProfileFormValues = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  mailingAddress?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};

export default function ProfilePage() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      fullName: "John P",
      email: "john@email.com",
      phoneNumber: "",
      companyName: "",
      mailingAddress: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setPhotoFile(file);
    setPhotoUrl(URL.createObjectURL(file));
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const removePhoto = () => {
    setPhotoUrl(null);
    setPhotoFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = (values: ProfileFormValues) => {
    const payload = {
      ...values,
      photo: photoFile
        ? { name: photoFile.name, size: photoFile.size, type: photoFile.type }
        : null,
    };
    console.log("✅ Profile form submitted:", payload);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F8] flex items-start justify-center py-8 px-4 sm:py-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">

        {/* ── Avatar Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 sm:px-8 pt-7 pb-6 border-b border-slate-100">
          {/* Avatar circle */}
          <div
            className={`relative group w-[68px] h-[68px] rounded-full overflow-hidden shrink-0 cursor-pointer transition-all ${
              dragOver ? "ring-2 ring-indigo-400 ring-offset-2" : "ring-2 ring-slate-200"
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            {photoUrl ? (
              <Image src={photoUrl} alt="Avatar" fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <User className="w-8 h-8 text-slate-400" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Name + email + buttons */}
          <div className="flex-1 min-w-0">
            <p className="text-[17px] font-semibold text-slate-900 leading-tight truncate">
              {watch("fullName") || "Your Name"}
            </p>
            <p className="text-[13px] text-slate-500 mt-0.5 truncate">
              {watch("email")}
            </p>
            <div className="flex flex-wrap gap-2 mt-2.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50 active:bg-slate-100 transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                Upload Photo
              </button>
              {photoUrl && (
                <button
                  type="button"
                  onClick={removePhoto}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-rose-500 border border-rose-100 rounded-lg px-3 py-1.5 hover:bg-rose-50 active:bg-rose-100 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Remove
                </button>
              )}
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        {/* ── Form ── */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-8 pb-8">

          {/* ── Personal Information ── */}
          <section className="pt-7">
            <h2 className="text-[15px] font-semibold text-slate-800 leading-tight">
              Personal Information
            </h2>
            <p className="text-[12.5px] text-slate-500 mt-0.5">
              Manage your personal and account information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 mt-5">

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Full Name
                </label>
                <Input
                  placeholder="John P"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400"
                />
                {errors.fullName && (
                  <p className="text-[11.5px] text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Email Address
                </label>
                <Input
                  {...register("email")}
                  disabled
                  className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-slate-50/80 text-slate-400 cursor-not-allowed"
                />
                <p className="text-[11.5px] text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 shrink-0" />
                  Email cannot be changed
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Phone Number{" "}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <Input
                  placeholder="+1 (555) 000-0000"
                  {...register("phoneNumber")}
                  className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Company Name{" "}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <Input
                  placeholder="e.g. Acme Corp"
                  {...register("companyName")}
                  className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400"
                />
              </div>

              {/* Mailing Address — full width */}
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Mailing Address
                </label>
                <Input
                  placeholder="123 Main St, Suite 100, City, State, ZIP"
                  {...register("mailingAddress")}
                  className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400"
                />
              </div>
            </div>
          </section>

          {/* ── Divider ── */}
          <div className="mt-8 mb-7 border-t border-slate-100" />

          {/* ── Change Password ── */}
          <section>
            <h2 className="text-[15px] font-semibold text-slate-800 leading-tight">
              Change Password
            </h2>
            <p className="text-[12.5px] text-slate-500 mt-0.5">
              Update your password to keep your account secure.
            </p>

            <div className="mt-5 space-y-5">

              {/* Current Password */}
              <div className="flex flex-col gap-1.5 w-full sm:max-w-[360px]">
                <label className="text-[12.5px] font-medium text-slate-700">
                  Current Password
                </label>
                <div className="relative">
                  <Input
                    type={showCurrent ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("currentPassword")}
                    className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400 pr-10"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowCurrent((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.currentPassword && (
                  <p className="text-[11.5px] text-red-500">{errors.currentPassword.message}</p>
                )}
              </div>

              {/* New + Confirm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">

                {/* New Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-medium text-slate-700">
                    New Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showNew ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("newPassword", {
                        minLength: { value: 8, message: "Min 8 characters" },
                      })}
                      className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400 pr-10"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowNew((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.newPassword && (
                    <p className="text-[11.5px] text-red-500">{errors.newPassword.message}</p>
                  )}
                </div>

                {/* Confirm New Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-medium text-slate-700">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("confirmNewPassword")}
                      className="h-10 text-[13.5px] rounded-lg border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-indigo-400 focus-visible:border-indigo-400 pr-10"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowConfirm((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmNewPassword && (
                    <p className="text-[11.5px] text-red-500">{errors.confirmNewPassword.message}</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ── Footer ── */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">

            {/* Success message */}
            <div
              className={`flex items-center gap-2 text-[13px] text-emerald-600 font-medium transition-all duration-300 ${
                submitted ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"
              }`}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Profile updated successfully
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2.5 sm:ml-auto">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => reset()}
                className="h-9 px-4 text-[13px] text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                className="h-9 px-5 text-[13px] font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-sm transition-colors"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
