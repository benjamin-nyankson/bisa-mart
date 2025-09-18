"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error: string;
}

export function Select({
  label,
  options,
  className,
  error,
  ...props
}: SelectProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className=" font-bold text-gray-700">{label}</label>}
      <select
        className={cn(
          "w-full rounded-md border border-gray-300 bg-white px-3 py-3  outline-none focus:border-primary focus:ring-1 focus:ring-primary",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
