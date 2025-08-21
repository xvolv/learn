import React from "react";

const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved to work");
    }, 3000);
  });
  return <div>about page loaded ✅ </div>;
};

export default page;
