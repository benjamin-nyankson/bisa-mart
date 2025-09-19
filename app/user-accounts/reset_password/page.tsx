import { ChangePassword } from "@/components/forms/reset-password";
import React from "react";

export default function ResetPassword() {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl text-center">Change Password</h2>
      <p className="text-center">
        Change your password here
      </p>
      <ChangePassword />
    </div>
  );
}
