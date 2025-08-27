import { comments } from "@/lib/comments/comments";
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    { message: "comments fetched successfully", comments },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
