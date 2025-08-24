import { comments } from "../../../../db/data";
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const comment = comments.find((c) => c.id === parseInt(id));

  if (!comment) {
    return new Response(JSON.stringify({ error: "not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(comment), {
    status: 200,
  });
}
