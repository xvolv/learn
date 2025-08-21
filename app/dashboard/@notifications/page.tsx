"use client";

import { useRouter } from "next/navigation";

export default function Notifications() {
  const router = useRouter();

  console.log("Notifications slot rendered");

  return (
    <div>
      Notifications Section - {Math.random()}
      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => router.refresh()}
      >
        Refresh Notifications Slot
      </button>
    </div>
  );
}
