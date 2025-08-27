"use client";
import { Comment } from "@/lib/comments/comments";
import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("http://localhost:3000/api/comments");
      const data = await res.json();
      setComments(data.comments);
    };
    fetchComments();
  }, []);
  const handleDelete = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      toast.success(`deleted: ${data.comment.text}`);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } else {
      const err = await res.json();
      toast.error(err.message || "failed to delete");
    }
  };
  return (
    <>
      <div>
        <h2>all comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.text}---
              <button
                onClick={() => handleDelete(comment.id)}
                className="bg-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CommentList;
