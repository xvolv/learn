"use client";

import React, { useState } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1); // optional: track retries
    reset(); // this will re-render the parent components under this error boundary
  };

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={handleRetry}>Retry</button>
      <p>Retries: {retryCount}</p>
    </div>
  );
}
