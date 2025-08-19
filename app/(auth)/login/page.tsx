"use client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const page = () => {
  useEffect(() => {
    toast.success("logged in");
  },[]);

  return <div></div>;
};

export default page;
