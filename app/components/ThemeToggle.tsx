"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // read from document.cookie on mount
    const match = document.cookie.match(/theme=(dark|light)/);
    if (match) setTheme(match[1]);
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    await fetch("/api/theme", {
      method: "POST",
      body: JSON.stringify({ theme: newTheme }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-white"
    >
      Toggle Theme (current: {theme})
    </button>
  );
}
