import React from "react";
import CommentComponent from "../components/CommentComponent";
const page = async () => {
  const res = await fetch("http://localhost:3000/api/comments/2");
  const data = await res.json();
  const messages = data.message;
  console.log("data", data);
  console.log("data.message", data.message);
  return (
    <div className="flex justify-center ">
      <div>
        <h1 className="text-center bg-red-500 mt-14">test post</h1>
        <hr className="mb-4" />

        <CommentComponent messages={messages} />
      </div>
    </div>
  );
};

export default page;
