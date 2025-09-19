"use client";
import Link from "next/link";
import { ShoppingBag, Truck, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Hero */}
      <section className="flex-1 bg-gradient-to-r from-primary to-secondary text-white flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to BisaMe</h1>
        <p className="text-lg max-w-2xl mb-6">
          Your one-stop e-commerce platform. Shop smarter, pay securely, and
          enjoy fast delivery — all in one app.
        </p>
        <Link
          href="/user-accounts/signin"
          className="bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose BisaMe?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Browse thousands of products across multiple categories.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <ShieldCheck className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>Shop confidently with end-to-end encrypted transactions.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Truck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Get your orders delivered at lightning speed.</p>
          </div>
        </div>
      </section>

      {/* Featured Products (dummy) */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Sneakers", "Smartphone", "Headphones"].map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                Image
              </div>
              <h3 className="text-lg font-semibold">{product}</h3>
              <p className="text-gray-600 mb-4">$ {(idx + 1) * 50}</p>
              <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-[#0d0895]">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-secondary text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Shop with BisaMe?</h2>
        <Link
          href="/user-accounts/signup"
          className="bg-primary px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          Create an Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} BisaMe. All rights reserved.
      </footer>
    </div>
  );
}
