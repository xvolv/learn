"use client";

import React, { useState } from "react";

const User = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User:", { username, email });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Our Customers
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
            type="submit"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
