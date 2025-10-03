"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react"; // nice icon set already available in Next.js + Tailwind projects

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground p-6">
      {/* Fun Icon */}
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary-100 text-secondary-700">
        <ShoppingCart className="w-12 h-12" />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-7xl font-extrabold text-primary-500">404</h1>
      <h2 className="mt-2 text-2xl font-semibold">Oops! Page not found</h2>

      {/* Description */}
      <p className="mt-3 text-gray-500 text-center max-w-md">
        Looks like this item is out of stock… or maybe the page never existed.
        Don’t worry, let’s get you back on track!
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="rounded-xl bg-primary-500 px-6 py-3 text-white font-medium shadow-md hover:bg-primary-700 transition"
        >
          🏠 Go Home
        </Link>
        <Link
          href="/shop"
          className="rounded-xl bg-secondary-500 px-6 py-3 text-foreground font-medium shadow-md hover:bg-secondary-700 transition"
        >
          🛒 Browse Shop
        </Link>
      </div>
    </div>
  );
}
