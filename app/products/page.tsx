import { span } from "framer-motion/client";
import React from "react";

const page = async () => {
  type comment = {
    id: number;
    text: string;
  };
  const res = await fetch("http://localhost:3000/api/hello");
  const comment = await fetch("http://localhost:3000/api/comments");
  const data = await res.json();
  const commentObject = await comment.json();
  console.log("--", commentObject.message);
  return (
    <div>
      {" "}
      we got this = {data.message} .... <br />
      <ul>
        {commentObject.message.map((items: comment) => {
          return <li>{items.id} : {items.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default page;
