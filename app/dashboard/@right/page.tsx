"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js client router

const Right = () => {
  const [nickname, setNickname] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [email, setEmail] = useState(""); // New field
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Conditional routing
    if (nickname.trim().toLowerCase() === "admin") {
      router.push("/admin"); // navigate to /admin
    } else {
      alert(`Nickname: ${nickname}\nZodiac: ${zodiac}\nEmail: ${email}`);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl h-[380px]">
      <h2 className="text-xl font-bold mb-4 text-gray-800">User Info</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Nickname input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nickname
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Zodiac select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zodiac Sign
          </label>
          <select
            value={zodiac}
            onChange={(e) => setZodiac(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select your zodiac</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </div>

        {/* Email input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Save Info
        </button>
      </form>
    </div>
  );
};

export default Right;
