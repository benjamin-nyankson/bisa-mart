import { appName } from "@/constants/constant";
import React from "react";

export function Socials() {
  return (
    <div className="flex items-center justify-between bg-secondary py-2 text-white px-5 font-semibold">
      <p className="">Welcome to {appName} online store.</p>
      <p>Follow us: </p>
    </div>
  );
}
