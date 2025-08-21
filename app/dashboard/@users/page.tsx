// app/dashboard/@users/page.tsx
"use client";

import React from 'react';

export default function Users() {
  console.log("Users slot rendered");
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold">JD</span>
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-600">Admin</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold">SM</span>
          </div>
          <div>
            <p className="font-medium">Sarah Miller</p>
            <p className="text-sm text-gray-600">User</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}