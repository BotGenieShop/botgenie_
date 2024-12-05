// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar"; // Navbar bileşeninizi doğru yoldan import ettiğinizden emin olun
import Footer from "./Footer"; // Footer bileşeninizi doğru yoldan import ettiğinizden emin olun

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* İçeriğin yerleştirileceği alan */}
      <Footer />
    </div>
  );
};

export default Layout;
