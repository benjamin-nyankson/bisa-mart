"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useState, useRef, useEffect } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Dropdown({ trigger, children, className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn("relative w-48 rounded-lg  ", className)}
      ref={dropdownRef}
    >
      <div
        className="px-4 py-2 w-full rounded-lg whitespace-nowrap"
        onClick={() => setOpen((prev) => !prev)}
      >
        {trigger}
      </div>

      {open && (
        <div
          className="absolute right-0 mt-2 min-w-48 rounded-md bg-white shadow-lg z-50 p-5"
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}
