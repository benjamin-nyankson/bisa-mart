import { AuthHeader } from "@/components/auth-header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col gap-5">
      <AuthHeader text="Welcome" />
      <Link
        href="/user-accounts/signin"
        className="bg-primary p-3 rounded-lg text-xl text-white"
      >
        Get Started
      </Link>
    </div>
  );
}
