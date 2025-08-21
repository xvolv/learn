// app/dashboard/@revenue/page.tsx
"use client";

import React from 'react';

export default function Revenue() {
  console.log("Revenue slot rendered");
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Today</p>
          <p className="text-2xl font-bold">$2,483</p>
        </div>
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-green-600 font-bold">+12%</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-2xl font-bold">$18,246</p>
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-bold">+8%</span>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-4">Last updated: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}