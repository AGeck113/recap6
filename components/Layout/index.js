import React from "react";
import TitleBar from "../TitleBar/index";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <TitleBar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
