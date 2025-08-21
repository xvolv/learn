// app/dashboard/layout.tsx
"use client";

import React, { useState } from 'react';

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
  const [refreshKeys, setRefreshKeys] = useState({
    users: 0,
    notifications: 0,
    revenue: 0
  });

  const refreshSlot = (slot: keyof typeof refreshKeys) => {
    setRefreshKeys(prev => ({
      ...prev,
      [slot]: prev[slot] + 1
    }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main content */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          {children}
        </div>

        {/* Users slot */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Users</h2>
            <button
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm hover:bg-blue-200"
              onClick={() => refreshSlot('users')}
            >
              Refresh
            </button>
          </div>
          <div key={refreshKeys.users}>{users}</div>
        </div>

        {/* Notifications slot */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <button
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm hover:bg-blue-200"
              onClick={() => refreshSlot('notifications')}
            >
              Refresh
            </button>
          </div>
          <div key={refreshKeys.notifications}>{notifications}</div>
        </div>

        {/* Revenue slot */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Revenue</h2>
            <button
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm hover:bg-blue-200"
              onClick={() => refreshSlot('revenue')}
            >
              Refresh
            </button>
          </div>
          <div key={refreshKeys.revenue}>{revenue}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;