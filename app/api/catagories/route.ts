export const dynamic = "force-static";
export async function GET() {
  const categories = [
    { id: 1, name: "Elect" },
    { id: 2, name: "Books" },
    { id: 3, name: "clothing" },
    { id: 4, name: "Home and graden" },
  ];

  return Response.json(categories);
}
