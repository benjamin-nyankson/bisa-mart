"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Tab = {
  label: string;
  href: string;
};

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

export function Tabs({ tabs, className }: TabsProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-full flex justify-between border-b border-gray-200",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "px-4 py-2  w-full text-center font-semibold transition-colors",
              " focus:outline-none",
              isActive
                ? "border-b-2 border-primary text-primary"
                : "text-gray-900"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
