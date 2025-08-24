"use client";
import { MessageCircle } from "lucide-react";
import React, { useState } from "react";

type arr = {
  id: number;
  text: string;
};

const CommentComponent = ({ messages }: { messages: arr[] }) => {
  const [message, setMessage] = useState(""); // feedback for user
  const [text, setText] = useState(""); // input value
  const [localMessages, setLocalMessages] = useState<arr[]>(messages); // local state to update list

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`You typed: ${text}`);

    const res = await fetch("http://localhost:3000/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();

    // Add the new comment locally so UI updates immediately
    const newId = localMessages.length + 1;
    const newComment: arr = { id: newId, text };
    setLocalMessages([...localMessages, newComment]);

    setText(""); // clear input
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="h-[600px] w-[400px] border-2 border-cyan-800 shadow-2xl rounded-[10%] flex flex-col items-center justify-start py-8 space-y-6 bg-white"
      >
        <p className="text-center font-bold text-white bg-cyan-700 w-[80%] py-3 rounded-lg">
          Leave a Comment
        </p>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment..."
          className="w-[80%] border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400 rounded-xl p-3 outline-none transition-all"
        />

        <button
          type="submit"
          className="w-[80%] bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-700 transition-colors shadow-md"
        >
          Submit
        </button>

        {message && (
          <span className="text-sm text-gray-600 italic">{message}</span>
        )}

        <ul className="w-[80%] space-y-2">
          {localMessages.map((item) => (
            <li className="shadow-md p-2 flex gap-4 items-center" key={item.id}>
              <MessageCircle className="w-5 h-5 text-cyan-500" />
              <span>ID:{item.id}, comment: {item.text}</span>
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
};

export default CommentComponent;
