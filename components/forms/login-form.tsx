"use client";
import { TextInput } from "../ui/text-input";
import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { PhoneNumberInput } from "../ui/PhoneNumberInput";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePost } from "@/hooks/usePost";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [phone, setPhone] = useState<string | undefined>("");
  const [password, setPassword] = useState("");
  const { loading, error, success, postData, data } = usePost();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const body = Object.fromEntries(formData.entries());
    await postData("login", body);
  };

  useEffect(() => {
    if (success) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("authToken", data.data.token);
      toast.success("Login success");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }

    const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

    if (isAuthenticated) {
      router.replace("/");
    }
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 flex w-full flex-col items-center justify-center"
    >
      <PhoneNumberInput
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        placeholder="Enter your phone"
      />

      <div className="flex w-full items-center justify-between py-3 text-sm">
        <label className="font-bold text-gray-700">Password</label>
        <Link
          href="/user-accounts/forgot_password"
          className="text-secondary hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
      />

      <Button
        size="lg"
        rightIcon={<ArrowRight />}
        className="mt-3"
        type="submit"
        isLoading={loading}
      >
        SIGN IN
      </Button>
    </form>
  );
}
