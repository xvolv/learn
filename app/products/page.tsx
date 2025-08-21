import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/products/1">one</Link>
      <br />
      <Link href="/products/2">two</Link>
      <br />
      <Link href="/products/3">three</Link>
      <br />
      <Link href="/products/4">four</Link>
      <br />
    </div>
  );
};

export default page;
