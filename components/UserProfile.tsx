"use client";
import { User, Phone, Mail, Globe } from "lucide-react";
import { Button } from "./ui/button";

export type User = {
  id: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  countryName: string;
  countryShortName: string;
  profilePicture: string | null;
  referralCode: string | null;
  referralType: string | null;
  status: string;
  role: string;
  lastName: string;
  firstName: string;
  otherNames: string | null;
  authenticated: boolean;
  dateOfBirth: string | null;
};
export interface UserProfileProps {
  user: User;
  logout: () => void;
}

export function UserProfile({ user, logout }: UserProfileProps) {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-[#1209be] flex items-center justify-center text-white text-2xl font-bold">
          {user?.firstName?.[0]}
          {user?.lastName?.[0]}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-sm text-gray-500">{user?.role}</p>

          <span
            className={`inline-block mt-1 px-3 py-1 text-xs rounded-full ${
              user?.status === "Active"
                ? "bg-[#f97316] text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {user?.status}
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-4 text-sm">
        {/* Phone */}
        <div className="flex items-center gap-2 text-gray-700">
          <Phone className="w-4 h-4 text-[#f97316]" />
          <span>{user?.phoneNumber}</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 text-gray-700">
          <Mail className="w-4 h-4 text-[#f97316]" />
          <span>{user?.email || "No email provided"}</span>
        </div>

        {/* Country */}
        <div className="flex items-center gap-2 text-gray-700">
          <Globe className="w-4 h-4 text-[#1209be]" />
          <span>
            {user?.countryName} ({user?.countryShortName})
          </span>
        </div>

        {/* Authenticated */}
        <div className="flex items-center gap-2 text-gray-700">
          <User className="w-4 h-4 text-[#1209be]" />
          <span>
            {user?.authenticated ? "Authenticated" : "Not Authenticated"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center my-5">
        <Button onClick={logout}>LOGOUT</Button>
      </div>
    </div>
  );
}
