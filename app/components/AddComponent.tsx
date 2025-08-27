"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
const AddComponent = () => {
  const [text, setText] = useState("");
  const [lastComment, SetLastComment] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });
    const data = await res.json();

    SetLastComment(data?.comment?.text);
    toast.success(data?.comment?.text);

    setText("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          placeholder="any comment ?"
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">submit</button>
        <br />
      </form>
    </div>
  );
};

export default AddComponent;
