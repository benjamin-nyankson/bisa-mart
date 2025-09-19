"use client";
import { Button } from "@/components/ui/button";
import { PhoneNumberInput } from "@/components/ui/PhoneNumberInput";
import { usePost } from "@/hooks/usePost";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [phone, setPhone] = useState<string | undefined>("");
  const { loading, error, success, postData, data: response } = usePost();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const body = Object.fromEntries(formData.entries());

    await postData("forgot-password", body);
  };

  useEffect(() => {
    if (success) {
      toast.success("Verification code sent successfully");
      localStorage.setItem("authToken", response.data?.token);

      setTimeout(() => {
        router.push("/user-accounts/reset_password");
      }, 3000);
    }
  }, [success, error]);

  return (
    <form
      onSubmit={handleSubmit}
      className=" space-y-3 flex items-center justify-center flex-col text-sm text-gray-500"
    >
      <h2 className="font-bold text-2xl">Forgot Password</h2>
      <p className="text-center">
        Enter the mobile number associated with your Bisame account
      </p>
      <PhoneNumberInput
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        placeholder="Enter your phone"
        includedSections={["countryShortName"]}
      />
      <Button
        className="w-full"
        size="lg"
        rightIcon={<ArrowRight />}
        disabled={phone?.trim().length == 0}
        isLoading={loading}
      >
        SEND CODE
      </Button>
      <div className="text-center mt-3">
        <p>
          Already have an account?
          <Link href="/user-accounts/signin" className="text-secondary">
            Sign In
          </Link>
        </p>
        <p>
          {`Don't have an account?`}
          <Link href="/user-accounts/signup" className="text-secondary">
            {" "}
            Sign Up
          </Link>
        </p>

        <p className="pt-2">
          You may contact{" "}
          <Link href="/" className="text-primary">
            Customer Service
          </Link>{" "}
          for help restoring access to your account
        </p>
      </div>
    </form>
  );
}
