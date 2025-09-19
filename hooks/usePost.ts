"use client";

import { BASE_URL } from "@/components/constant";
import { useState } from "react";
import { toast } from "sonner";

type Methods = "POST" | "PATCH" | "PUT";
interface UsePostReturn<T> {
  loading: boolean;
  error: string | null;
  success: T | null;
  postData: (url: string, body: any, method?: Methods) => Promise<void>;
  data: T | null;
}

export function usePost<T = any>(): UsePostReturn<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<T | null>(null);
  const [data, setData] = useState<T | null>(null);

  const postData = async (endpoint: string, body: any, method = "POST") => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    const token = localStorage.getItem("authToken");
    const url = `${BASE_URL}/${endpoint}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    try {
      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setData(data);

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
      } else {
        setSuccess(data);
      }
    } catch (err) {
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, postData, data };
}
