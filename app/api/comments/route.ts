import { comments } from "../../../db/data";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const textQuery = url.searchParams.get("text");

  const result = textQuery
    ? comments.filter(c =>
        c.text.toLowerCase().includes(textQuery.toLowerCase())
      )
    : comments;

  return new Response(JSON.stringify({ message: result }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
