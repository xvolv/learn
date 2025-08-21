import React from "react";

const Layout = ({
  children,
  users,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4 p-4">
      {/* Main content */}
      <div className="col-span-2">{children}</div>

      {/* Users slot */}
      <div className="bg-gray-100 p-4 rounded-xl shadow">{users}</div>

      {/* Notifications slot */}
      <div className="bg-gray-100 p-4 rounded-xl shadow">{notifications}</div>

      {/* Revenue slot */}
      <div className="bg-gray-100 p-4 rounded-xl shadow">{revenue}</div>
    </div>
  );
};

export default Layout;
