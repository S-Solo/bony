import Footer from "components/Footer";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-body w-full min-h-screen pt-16 flex flex-col justify-between">
      <main className="h-full min-w-min max-w-screen-lg p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
