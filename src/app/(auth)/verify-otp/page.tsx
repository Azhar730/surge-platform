"use client";

import AppButton from "@/app/component/AppButton";
import OtpInput from "@/app/component/OtpInput";
import ZerodraftLogo from "@/app/component/ZeroDraftLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function VerifyOtpPage() {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    console.log("OTP:", otp);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <ZerodraftLogo />
      <Card className="w-full max-w-md border-0 bg-card/60 backdrop-blur-xl shadow-lg">
        <CardHeader className="pb-2 pt-8 text-center">
          <CardTitle className="text-xl font-semibold">
            Check your email
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Enter the 6-digit code we sent to
            <br />
            <span className="font-medium text-foreground">
              jogn.doe@example.com
            </span>
          </p>
        </CardHeader>
        <CardContent className="px-8 pb-8 space-y-6">
          <OtpInput onChange={setOtp} />
          <AppButton type="button" onClick={handleVerify}>
            Verify
          </AppButton>
          <p className="text-center text-sm text-muted-foreground">
            Didn't receive code?{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Resend
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default VerifyOtpPage;
