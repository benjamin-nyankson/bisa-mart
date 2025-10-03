"use client";
import React from "react";
import { User } from "./UserProfile";
import { ShoppingBag, Truck, Heart, Package, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { appName } from "@/constants/constant";

interface AuthenticatedLandingProps {
  user: User;
  logout: () => void;
}

export default function AuthenticatedLanding({
  user,
  logout,
}: AuthenticatedLandingProps) {
  // Dummy data for now – in real app, fetch from backend
  const recentOrders = [
    { id: "ORD123", item: "Wireless Earbuds", status: "Delivered" },
    { id: "ORD124", item: "Smart Watch", status: "Shipped" },
  ];

  const cartItems = [
    { id: "CART1", item: "Running Sneakers", price: 80 },
    { id: "CART2", item: "Bluetooth Speaker", price: 45 },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      {/* <header className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 flex items-center justify-between shadow">
        <h1 className="text-2xl font-bold">{appName}</h1>
        <div className="flex items-center gap-4">
          <span className="font-medium">
            Hi, {user.firstName} {user.lastName}
          </span>
          <button
            onClick={logout}
            className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Logout
          </button>
        </div>
      </header> */}

      {/* Welcome Section */}
      <section className="py-12 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome back, {user.firstName}!
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-5">
          Discover new products, track your orders, and enjoy a seamless
          shopping experience with {appName}.
        </p>

        <Link
          href="/profile"
          className="bg-primary rounded-lg p-3 text-lg font-bold hover:bg-transparent hover:border-primary hover:border hover:text-primary text-white "
        >
          View Profile
        </Link>
      </section>

      {/* Features */}
      <section className="py-10 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <ShoppingBag className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Browse Products</h3>
            <p className="text-gray-600">
              Explore thousands of items tailored to your needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <Truck className="w-12 h-12 text-secondary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Track Orders</h3>
            <p className="text-gray-600">
              Keep an eye on your deliveries in real time.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Wishlist</h3>
            <p className="text-gray-600">
              Save your favorite products for later.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Recent Orders
        </h2>
        <div className="max-w-3xl mx-auto grid gap-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-secondary" />
                <div>
                  <p className="font-medium">{order.item}</p>
                  <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-lg ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Preview */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Cart
        </h2>
        <div className="max-w-3xl mx-auto grid gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                  <p className="font-medium">{item.item}</p>
                </div>
                <span className="font-semibold text-secondary">
                  GHC {item.price}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">
              Your cart is empty. Start shopping now!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} {appName}. All rights reserved.
      </footer>
    </div>
  );
}
