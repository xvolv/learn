import { NextResponse } from "next/server";

export async function POST() {
  // 🔴 BAD COOKIE (for demo only)
  const res = NextResponse.json({ message: "Logged in!" });
  res.cookies.set("session", "abc123", {
    httpOnly: false,  // BAD: readable by JS
    sameSite: "none", // BAD: allows CSRF
    secure: false,    // allow http://localhost
  });
  return res;
}
