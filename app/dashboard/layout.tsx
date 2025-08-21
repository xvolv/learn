import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <UserAnalytics />
      <RevenuMetrics />
      <Notifications />
    </div>
  );
};
export default layout;
