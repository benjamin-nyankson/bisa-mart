"use client";
import { BASE_URL } from "@/components/constant";
import { User, UserProfile } from "@/components/UserProfile";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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

      if (storedAuth && storedToken) {
        getUser(storedToken);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authToken");
    router.push("/");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <UserProfile user={user as User} logout={logout} />
    </div>
  );
}
