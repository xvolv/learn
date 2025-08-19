import React from "react";
import { Toaster } from "react-hot-toast";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
};

export default layout;
