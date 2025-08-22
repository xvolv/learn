import React from "react";

const layout = ({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <div className="border-2 border-b-gray-800 w-[500px] h-[600px] mx-3.5 my-4 shadow-lg rounded-xl">
      <section className="w-[200px] border-2 h-[400px] mt-2 ml-2 shadow-md rounded-lg">
        {children}
      </section>
      <div className="flex">
        <section className="w-[400px] h-[170px] border-2 mt-2 ml-2 shadow-md rounded-lg">
          {left}
        </section>
        <section className="w-[260px] ml-4 mt-2 border-2 h-[400px] absolute top-16 left-40 shadow-2xl  rounded-lg">
          {right}
        </section>
      </div>
    </div>
  );
};

export default layout;
