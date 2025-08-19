import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <Link href="/products/1?type=one">one</Link>
      <br />
      <Link href="/products/2?type=two">two</Link>
      <br />
      <Link href="/products/3?type=three">three</Link>
      <br />
      <Link href="/products/4?type=four">four</Link>
      <br />
    </div>
  );
};

export default page;
