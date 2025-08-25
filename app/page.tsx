"use client";

export default function Home() {
  async function login() {
    await fetch("/api/login", { method: "POST" });
    alert("Logged in! Cookie is set.");
  }

  return (
    <main className="p-4">
      <h1>Victim Page</h1>
      <button onClick={login} className="border p-2">
        Login
      </button>
    </main>
  );
}
