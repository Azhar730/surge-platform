"use client";

import AppButton from "@/app/component/AppButton";
import FormInput from "@/app/component/FormInput";
import ZerodraftLogo from "@/app/component/ZeroDraftLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <ZerodraftLogo />

      <Card className="w-full max-w-md border-0 bg-card/60 backdrop-blur-xl shadow-lg">
        <CardHeader className="pb-2 pt-8">
          <CardTitle className="text-center text-xl font-semibold text-card-foreground">
            Forgot Password
          </CardTitle>
          <p className="text-center mt-3">Please enter your email to recieve verification code</p>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="youremail@gmail.com"
              register={register}
              error={errors.email}
            />
            <AppButton type="submit">Log in</AppButton>
            <p className="text-center">Didn't recieve code? Resend</p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
