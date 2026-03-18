"use client";

import AppButton from "@/app/component/shared/AppButton";
import FormInput from "@/app/component/shared/FormInput";
import ZerodraftLogo from "@/app/component/shared/ZeroDraftLogo";
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
        <CardHeader className="pb-4 pt-8">
          <CardTitle className="text-center text-xl font-semibold text-card-foreground">
            Log in
          </CardTitle>
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

            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••••"
              register={register}
              error={errors.password}
            />
            <Link href={'/forgot-password'} className="text-blue-700 flex items-center justify-end">
                Forgot Password
            </Link>

            <AppButton type="submit">Send</AppButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
