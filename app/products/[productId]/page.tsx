"use client";
import { useRouter } from "next/navigation";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { usePathname } from "next/navigation";
const Page = () => {

  const path = usePathname();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const params = useParams(); // { productId: string }
  const searchParams = useSearchParams(); // URLSearchParams instance

  return (
    <div>
      Product ID: {params.productId} <br />
      Type: {searchParams.get("type")}
      <button onClick={handleClick}> place order</button>
    </div>
  );
};

export default Page;


