"use client";

import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState } from "react";

type Comment = {
  id: number;
  text: string;
};

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Comment[]>([]);

  const handleSearch = async () => {
    if (!query) return;

    const res = await fetch(`http://localhost:3000/api/search?q=${query}`);
    const data = await res.json();
    console.log("this is from data====", data);
    setResults(data.results);
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm w-[400px]">
      <h2 className="text-lg font-semibold mb-2">Search Comments</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search comments..."
        className="border px-2 py-1 rounded mr-2 w-2/3"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Search
      </button>

      <div className="mt-4">
        {results.length === 0 ? (
          <p className="text-gray-500">No results yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {results.map((c) => (
              <li key={c.id}>{c.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
