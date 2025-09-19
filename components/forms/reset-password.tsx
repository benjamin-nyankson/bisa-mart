"use client";
import React, { useEffect } from "react";
import { TextInput } from "../ui/text-input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useFetch } from "@/hooks/useFetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function ChangePassword() {
  const { loading, error, success, postData } = useFetch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const body = Object.fromEntries(formData.entries());
    await postData("change-password", body, "PATCH");
  };

  useEffect(() => {
    if (success) {
      toast.success("Password changed successfully");

      setTimeout(() => {
        router.push("/user-accounts/signin");
      }, 300);
    }
  }, [success]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 flex w-full flex-col items-center justify-center gap-5"
    >
      <TextInput
        type="password"
        placeholder="Current Password"
        name="currentPassword"
        label="Current Password"
      />

      <TextInput
        type="password"
        placeholder="New Password"
        name="newPassword"
        label="New Password"
      />

      <Button
        size="lg"
        rightIcon={<ArrowRight />}
        className="mt-3"
        type="submit"
        isLoading={loading}
      >
        RESET PASSWORD
      </Button>
    </form>
  );
}
