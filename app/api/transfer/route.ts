import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieHeader = req.headers.get("cookie");
  const sessionCookie = cookieHeader
    ?.split(";")
    .find((c) => c.trim().startsWith("session="));

  if (sessionCookie?.includes("abc123")) {
    return NextResponse.json({ message: "💸 Money sent to attacker!" });
  }

  return NextResponse.json({ error: "Not authorized" }, { status: 401 });
}
