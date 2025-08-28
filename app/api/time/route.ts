export const dynamic = "force-static";
export const revalidate = 10;
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ time: new Date().toLocaleTimeString() });
}
