"use client";
import React, { useEffect, useState } from "react";
import { AuthHeader } from "./auth-header";
import Link from "next/link";
import { User, UserProfile } from "./UserProfile";
import { BASE_URL } from "./constant";
import LandingPage from "./landing-page";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import AuthenticatedLanding from "./authenticated-landing";

export default function Homepage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authToken");
  };

  const getUser = async (authToken: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.data);
      } else {
        logout();
        router.push("/user-accounts/signin");
      }
    } catch {
      toast.error("There was an error fetching user profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only run client-side
    if (typeof window !== "undefined") {
      const storedAuth = localStorage.getItem("isAuthenticated");
      const storedToken = localStorage.getItem("authToken");

      setIsAuthenticated(Boolean(storedAuth));
      setToken(storedToken);

      if (storedAuth && storedToken) {
        getUser(storedToken);
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      {isAuthenticated ? (
        <>
          {!loading && user && (
            <AuthenticatedLanding user={user} logout={logout} />
          )}
          {loading && <p className="text-gray-500">Loading profile...</p>}
        </>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
