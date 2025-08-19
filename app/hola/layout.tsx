"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // e.g. "/hola/login"

  return (
    <div>
      <Link
        href="/hola/login"
        className={pathname === "/hola/login" ? "active" : ""}
      >
        login
      </Link>

      <Link
        href="/hola/register"
        className={pathname === "/hola/register" ? "active" : ""}
      >
        register
      </Link>

      <Link
        href="/hola/forgot-password"
        className={pathname === "/hola/forgot-password" ? "active" : ""}
      >
        forgot password
      </Link>

      {children}
    </div>
  );
};

export default Layout;
