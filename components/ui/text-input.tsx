"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, error, helperText, className, containerClassName, ...props },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col gap-1 w-full", containerClassName)}>
        {label && (
          <label className="font-bold text-gray-700">{label}</label>
        )}

        <input
          ref={ref}
          className={cn(
            "px-3 py-2 border rounded-lg outline-none transition-all",
            "focus:ring-1 focus:ring-primary focus:border-primary",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
          {...props}
        />

        {helperText && !error && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
