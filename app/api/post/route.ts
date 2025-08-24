import { comments } from "../../../db/data";

export async function POST(request: Request) {
  const body = await request.json();
  const { text } = body;

  const newId = comments.length + 1;

  comments.push({
    id: newId,
    text,
  });

  return new Response(
    JSON.stringify({ message: `name is in comments as: ${text}` }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
