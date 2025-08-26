import { NextRequest, NextResponse } from "next/server";
import { comments } from "../../db/data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase();

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const filtered = comments.filter((c) =>
    c.text.toLowerCase().includes(query)
  );

  return NextResponse.json(
    { results: filtered },
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
