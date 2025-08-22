import React from "react";

const layout = ({
  children,
}: //   mine,
//   who,
{
  children: React.ReactNode;
  //   mine: React.ReactNode;
  //   who: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {/* {mine}
      {who} */}
    </div>
  );
};

export default layout;
