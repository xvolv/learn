import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { theme } = await req.json();

  const cookieStore = await cookies();
  cookieStore.set("theme", theme, {
    httpOnly: false, // allow JS to read
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return NextResponse.json({ message: `Theme set to ${theme}` });
}
