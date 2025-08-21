// app/dashboard/@notifications/page.tsx
"use client";

import React from 'react';

export default function Notifications() {
  console.log("Notifications slot rendered");
  
  return (
    <div className="space-y-2">
      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
        <p className="font-medium">New message from John</p>
        <p className="text-sm text-gray-600">Just now</p>
      </div>
      <div className="p-3 bg-green-50 rounded-lg border border-green-100">
        <p className="font-medium">Payment received</p>
        <p className="text-sm text-gray-600">5 minutes ago</p>
      </div>
      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
        <p className="font-medium">Server maintenance scheduled</p>
        <p className="text-sm text-gray-600">1 hour ago</p>
      </div>
      <p className="text-xs text-gray-500 mt-4">Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}