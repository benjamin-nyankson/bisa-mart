"use client";

import { useState } from "react";
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

type phonSection = "countryShortName" | "countryName" | "countryCode";
interface PhoneNumberInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string | undefined, country?: CountryInfo) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  includedSections?: phonSection[];
}

interface CountryInfo {
  countryShortName: string;
  countryCode: string;
  countryName: string;
}

export function PhoneNumberInput({
  label,
  placeholder = "Enter phone number",
  value,
  onChange,
  disabled = false,
  error,
  className,
  includedSections = ["countryShortName", "countryName", "countryCode"],
}: PhoneNumberInputProps) {
  const [focused, setFocused] = useState(false);
  const [country, setCountry] = useState<CountryInfo | null>(null);

  const handleChange = (val: string | undefined) => {
    if (!val) {
      onChange(undefined);
      return;
    }

    const shortName = "GH"; //change this later
    const code = getCountryCallingCode(shortName);
    const name = "Ghana";

    const countryInfo = {
      countryShortName: shortName,
      countryCode: code,
      countryName: name,
    };

    setCountry(countryInfo);
    onChange(val, countryInfo);
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="mb-1 block font-bold text-gray-700">{label}</label>
      )}
      <div
        className={cn(
          "flex items-center rounded-md border px-3 py-3 text-sm transition-colors",
          focused
            ? "border-primary ring-1 ring-primary"
            : "border-gray-300 hover:border-gray-400",
          disabled && "cursor-not-allowed bg-gray-100 opacity-70"
        )}
      >
        <PhoneInput
          international
          withCountryCallingCode
          defaultCountry="GH"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <input type="hidden" name="phoneNumber" value={value || ""} />
      {country && (
        <>
          {includedSections.includes("countryShortName") && (
            <input
              type="hidden"
              name="countryShortName"
              value={country.countryShortName}
            />
          )}
          {includedSections.includes("countryCode") && (
            <input
              type="hidden"
              name="countryCode"
              value={country.countryCode}
            />
          )}
          {includedSections.includes("countryName") && (
            <input
              type="hidden"
              name="countryName"
              value={country.countryName}
            />
          )}
        </>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
