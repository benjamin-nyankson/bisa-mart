"use client";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

export default function VerifyAccountPage() {
  const [otp, setOtp] = useState("");
  const { loading, success, postData } = useFetch();
  const router = useRouter();

  const handleVerify = async () => {
    await postData("verify-otp", {
      verificationCode: otp,
    });
  };

  useEffect(() => {
    if (success) {
      router.push("/user-accounts/signin");
    }
  }, [success, router]);

  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h2 className="font-bold text-2xl">Verify your account</h2>
      <p>{`We've sent a verification codeto your phone`}</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span className="mx-2">-</span>}
        renderInput={(props) => (
          <input
            {...props}
            className="w-32 h-12 border border-gray-300 rounded-md text-center focus:border-primary focus:ring-1 focus:ring-primary"
            style={{ width: 50, height: 50 }}
          />
        )}
      />

      <p>Resend code</p>

      <Button
        className="w-full"
        size="lg"
        disabled={otp.length < 6}
        onClick={handleVerify}
        isLoading={loading}
      >
        Verify Account
      </Button>
    </div>
  );
}
