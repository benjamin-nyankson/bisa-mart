import { AuthHeader } from "@/components/auth-header";
import { SignupForm } from "@/components/forms/signup-form";
import React from "react";

export default function page() {
  return (
    <div className="w-full ">
      <AuthHeader text="Let's Get Started " />
      <p className="mt-2 font-semibold text-center">
        Join <span className="text-secondary">50K</span> users on
        <span className="text-secondary"> Bisame</span>
      </p>

      <div className="w-full " >
        <SignupForm />
      </div>
    </div>
  );
}
