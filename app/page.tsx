import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <b>codevolution</b>
      <Link href="/login">login</Link>
      <br />
      <Link href="/register">Register</Link>
      <br />
    </div>
  );
};

export default page;
