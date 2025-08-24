import { comments } from "../../../../db/data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const comment = comments.find((c) => c.id === id);

  if (!comment) {
    return new Response(JSON.stringify({ error: "not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify({message:comment}), {
    status: 200,
  });
}
