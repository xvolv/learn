import React from "react";
import Link from "next/link";

const page = () => {
  const navLinks = ["one", "two", "three", "four", "fvie", "six"];
  return (
    <div>
      <pre>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <div>
                <Link href={`users/${link}`} key={index}>
                  {link}
                </Link>
                <br />
              </div>
            );
          })}
        </ul>
      </pre>
      users
      <br />
      <Link href="users/one">one</Link>
      <br />
      <Link href="users/two" replace={true}>
        two
      </Link>
      <br />
      <br />
      <Link href="/">⬅️ back</Link>
    </div>
  );
};

export default page;
