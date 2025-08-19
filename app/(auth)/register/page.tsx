"use client";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toast.custom((t) => (
      <div
        style={{
          marginTop: "8px",
          background: "#333",
          color: "white",
          padding: "8px 16px",
          borderRadius: "6px",
        }}
      >
        ✅ Registered!
      </div>
    ), {
      // attach it right after "below here"
      position: "top-center", // still required, but we’ll anchor visually
    });
  }, []);

  return (
    <div ref={containerRef}>
      below here
    </div>
  );
};

export default Page;
