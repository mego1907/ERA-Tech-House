"use client";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

export default function InlineDatePicker() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex items-start justify-center gap-2 p-10 bg-overlay-bg section">
      <InlineWidget
        url="https://calendly.com/ahmed-abd-elmageed-saad-elnmer"
        styles={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
}
