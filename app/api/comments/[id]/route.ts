import { comments } from "@/lib/comments/comments";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ message: "Comment not found" }, { status: 404 });
  }

  const deletedComment = comments.splice(index, 1)[0]; // get single object

  return NextResponse.json(
    { message: "Deleted", comment: deletedComment },
    { status: 200 }
  );
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) {
    return (
      NextResponse.json({ message: "comment not found" }),
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(
    { comment },
    {
      status: 200,
    }
  );
}
