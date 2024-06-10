"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import { InlineWidget } from "react-calendly";

export default function InlineDatePicker() {
  const [date, setDate] = useState<any>(null);
  const [showTime, setShowTime] = useState(false);
  const [selectTime, setSelectTime] = useState(undefined);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const showTimeFn = () => {};

  const handleChangeDate = (e: any) => {
    console.log(e.value);
    setDate(e.value);
    setShowTime(true);
    // showTimeFn();
  };

  const times = [
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 PM",
  ];

  console.log("times :", times);

  return (
    <div className="flex items-start justify-center gap-2 p-10 bg-overlay-bg section">
      <InlineWidget
        url="https://calendly.com/ahmed-abd-elmageed-saad-elnmer"
        styles={{ width: "80%", height: "600px" }}
      />
      {/* <Calendar
        className="text-white"
        value={date}
        onChange={handleChangeDate}
        inline
        showWeek
      />

      {showTime && (
        <div className="flex flex-col gap-2">
          {times.map((time, i) => {
            return (
              <button
                type="button"
                key={i}
                className="p-4 px-10 bg-white rounded-md"
                onClick={() => setSelectTime(time)}
              >
                {time}
              </button>
            );
          })}
        </div>
      )} */}
    </div>
  );
}
