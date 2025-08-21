import React from "react";
// import { notFound } from "next/navigation";
const page = async ({ params }: { params: Promise<{ itemId: string }> }) => {
  const { itemId } = await params;

  if (Number(itemId) > 10) {
    throw new Error("why you hit over 10");
  }
  return <div>this is item id {itemId}</div>;
};

export default page;
