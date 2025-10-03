import { appName } from "@/constants/constant";
import React from "react";

export function Socials() {
  return (
    <div className="flex items-center justify-between bg-secondary py-2  px-5 text-primary font-semibold">
      <p className="">Welcome to {appName} online store.</p>
      <p>Follow us: </p>
    </div>
  );
}
