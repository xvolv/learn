import React from "react";

const Page = async () => {
  const res = await fetch("http://localhost:3000/api/hello", { cache: "no-store" }); 
  const data = await res.json();

  return <div>text : {JSON.stringify(data)}</div>;
};

export default Page;
