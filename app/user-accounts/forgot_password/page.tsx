import { Button } from "@/components/ui/button";
import { PhoneNumberInput } from "@/components/ui/PhoneNumberInput";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" space-y-3 flex items-center justify-center flex-col text-sm text-gray-500">
      <h2 className="font-bold text-2xl">Forgot Password</h2>
      <p className="text-center">
        Enter the mobile number associated with your Bisame account
      </p>

      <PhoneNumberInput />
      <Button className="w-full" size="lg" rightIcon={<ArrowRight />}>
        SEND CODE
      </Button>

      <div className="text-center mt-3">
        <p>
          Already have an account?{" "}
          <Link href="/user-accounts/signin" className="text-secondary">
            {" "}
            Sign In
          </Link>
        </p>
        <p>
          Don't have an account?{" "}
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
    </div>
  );
}
