import { Navbar } from "@/components";
import React from "react";

const InnerHeader = () => {
  const headerText = {
    mainTitle: "We are Awesome Team for\nYour Business Dream",
  };

  return (
    <div className="h-[166px] bg-start bg-cover bg-header-bg">
      <Navbar bg={false} />
    </div>
  );
};

export default InnerHeader;
