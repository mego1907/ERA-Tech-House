import { Footer, InlineDatePicker, Navbar } from "@/components";
import React from "react";

const Book = () => {
  return (
    <div className="bg-fixed bg-center bg-cover bg-header-bg">
      <Navbar bg={true} />
      <InlineDatePicker />
      <Footer />
    </div>
  );
};

export default Book;
