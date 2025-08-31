"use client";

import { useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function UsersError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error in /server-user/page:", error);
  }, [error]);

  return (
    <div className="p-8 flex justify-center items-center h-screen">
      <Alert className="max-w-md">
        <AlertTitle>Oops! Something went wrong.</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
        {/* Place the button directly with some margin */}
        <Button onClick={reset} className="mt-4 w-full" variant="default">
          Try Again
        </Button>
      </Alert>
    </div>
  );
}
