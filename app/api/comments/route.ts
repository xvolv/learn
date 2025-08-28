import { comments } from "@/lib/comments/comments";
import { Comment } from "@/lib/comments/comments";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  console.log("this is not -<", authHeader?.split(" ")[1]);

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");
  let result = comments;
  if (search) {
    result = comments.filter((c) =>
      c.text.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json(
    { message: "comments fetched successfully", comments: result },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.text) {
    return NextResponse.json(
      { message: "text is required" },
      {
        status: 400,
      }
    );
  }
  const newComment: Comment = {
    id: comments.length + 1,
    text: body.text,
  };

  comments.push(newComment);

  return NextResponse.json(
    { message: "comment added", comment: newComment },
    {
      status: 201,
    }
  );
}
