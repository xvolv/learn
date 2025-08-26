import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@//lib/jwt";

export async function GET(req: NextRequest) {
  // Get token from cookie
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
  }

  const payload = verifyToken(token);

  if (!payload) {
    return NextResponse.json({ message: "Unauthorized: Invalid token" }, { status: 401 });
  }

  // Only logged-in users reach here
  return NextResponse.json({ message: "This is protected data", user: payload });
}
