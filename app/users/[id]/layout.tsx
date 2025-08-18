import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "layout login",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
