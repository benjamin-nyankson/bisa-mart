// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const { pathname } = req.nextUrl;

  // Define all auth pages
  const authPaths = [
    "/signin",
    "/signup",
    "/forgot_password",
    "/verify_account",
  ];

  // If logged in and trying to access auth pages, redirect to dashboard/home
  if (token && authPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
