"use client";
import { usePathname } from "next/navigation";
import { Tabs } from "@/components/ui/tabs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const excludedPaths = ["forgot_password", "verify_account"];
  const pathname = usePathname();
  const hideTabs = excludedPaths.some((path) => pathname.includes(path));

  return (
    <div className="flex items-center justify-center mt-5 w-full">
      <div className="w-md rounded-lg bg-white p-6 shadow-md">
        {!hideTabs && (
          <div className="w-full flex items-center justify-center">
            <Tabs tabs={authTabs} />
          </div>
        )}
        <div className="my-3 flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

const authTabs = [
  { label: "Sign In", href: "/user-accounts/signin" },
  { label: "Sign Up", href: "/user-accounts/signup" },
];
