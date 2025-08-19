import React from "react";
type Props = {
  params: Promise<{
    productId: string;
  }>;
  searchParams: Promise<{
    type: string;
  }>;
};

const page = async ({ params, searchParams }: Props) => {
  const { productId } = await params;
  const { type } = await searchParams;
  return (
    <div>
      {" "}
      product ID: {productId} type : {type}
    </div>
  );
};

export default page;
