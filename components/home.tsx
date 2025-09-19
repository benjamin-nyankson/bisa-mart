"use client";
import React, { useEffect, useState } from "react";
import { AuthHeader } from "./auth-header";
import Link from "next/link";
import { User, UserProfile } from "./UserProfile";
import { BASE_URL } from "./constant";

export default function Homepage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("authToken");
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setUser(data.data);
      }
    } catch {
      console.log("there was an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(Boolean(storedAuth));
    getUser();
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div className="flex items-center justify-center mt-10 flex-col gap-5">
      {isAuthenticated ? (
        <>{!loading && <UserProfile user={user as User} logout={logout} />}</>
      ) : (
        <>
          <AuthHeader text="Welcome" />
          <Link
            href="/user-accounts/signin"
            className="bg-[#f97316] p-3 rounded-lg text-xl text-white"
          >
            Get Started
          </Link>
        </>
      )}
    </div>
  );
}
