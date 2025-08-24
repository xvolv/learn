import { comments } from "../../../db/data";
export async function GET() {
  return new Response(JSON.stringify({ message: comments }), {
    status: 200,
    headers: { "Content-Type": "Application/json" },
  });
}


