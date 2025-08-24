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

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((c) => c.id === parseInt(id));

  if (index === -1) {
    return new Response(JSON.stringify({ error: "not found" }), {
      status: 404,
    });
  }
  const body = await req.json();
  if (!body) {
    return new Response(JSON.stringify({ error: "no text found" }), {
      status: 400,
    });
  }
  comments[index].text = body.text;
  return new Response(
    JSON.stringify({ message: `comment updated with ${body.text}` }),
    {
      status: 200,
    }
  );
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((c) => c.id === parseInt(id));

  if (index === -1) {
    return new Response(JSON.stringify({ error: "No element with this id" }), {
      status: 404,
    });
  }
  comments.splice(index, 1);
  return new Response(JSON.stringify({ message: "delete success" }));
}
