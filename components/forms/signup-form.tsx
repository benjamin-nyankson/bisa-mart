"use client";

import React, { useEffect, useState } from "react";
import { TextInput } from "../ui/text-input";
import { PhoneNumberInput } from "../ui/PhoneNumberInput";
import { Select } from "../ui/Select";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const {
    loading,
    error: apiError,
    success,
    data: response,
    postData,
  } = useFetch();
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const router = useRouter();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (body: Record<string, FormDataEntryValue | undefined>) => {
    const newErrors: Record<string, string> = {};

    if (!body.firstName) newErrors.firstName = "First name is required";
    if (!body.lastName) newErrors.lastName = "Last name is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";

    if (body.email && typeof body.email === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!body.password || String(body.password).length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (body.password !== body.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!body.source) {
      newErrors.source = "Please select an option";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const body = Object.fromEntries(formData.entries());

    const newErrors = validate(body);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // stop submit if errors

    await postData("signup", { ...body, phoneNumber });
  };

  useEffect(() => {
    if (success) {
      localStorage.setItem("authToken", response.data?.token);
      console.log(response);
      router.push(`/user-accounts/verify_account`);
    }
  }, [success, response, router]);

  return (
    <form
      className="mt-5 flex w-full flex-col items-center justify-center space-y-4"
      onSubmit={handleSubmit}
    >
      <TextInput
        name="firstName"
        placeholder="Enter your first name"
        label="First name"
        error={errors.firstName}
      />
      <TextInput
        name="lastName"
        placeholder="Enter your last name"
        label="Last name"
        error={errors.lastName}
      />
      <PhoneNumberInput
        onChange={setPhoneNumber}
        label="Phone Number"
        placeholder="Enter your phone"
        value={phoneNumber}
        error={errors.phoneNumber}
      />
      <TextInput
        name="email"
        placeholder="Enter your email"
        label="Email Address (optional)"
        type="email"
        error={errors.email}
      />
      <TextInput
        name="password"
        placeholder="8+ characters"
        label="Password"
        type="password"
        error={errors.password}
      />
      <TextInput
        name="confirmPassword"
        placeholder="Re-enter your password"
        label="Confirm Password"
        type="password"
        error={errors.confirmPassword}
      />
      <Select
        name="source"
        options={[{ label: "Select an option", value: "" }, ...options]}
        label="How did you hear about us?"
        error={errors.source}
      />
      <TextInput
        name="referral"
        placeholder="eg. 270653"
        label="Referral code (optional)"
        className="w-full"
      />

      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          name="terms"
          required
        />
        <span>
          I have read & agree to the{" "}
          <Link href="/terms" className="text-secondary hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>
        </span>
      </label>

      <Button
        size="lg"
        className="w-full p-3"
        rightIcon={<ArrowRight />}
        type="submit"
        isLoading={loading}
      >
        Sign Up
      </Button>
    </form>
  );
}

const options = ["Facebook", "Instagram", "Twitter/X"].map((item) => ({
  value: item,
  label: item,
}));
