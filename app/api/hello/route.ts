// api/hello.ts
export const GET = async () => {
  return new Response(JSON.stringify({ msg: "send from api/Hello" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

