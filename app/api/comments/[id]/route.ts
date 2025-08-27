import { comments } from "@/lib/comments/comments";
import { NextResponse } from "next/server";

export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
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
