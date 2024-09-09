import React from "react";

export const TicketSelected = () => {
  return (
    <div className="relative w-full max-w-[270px] h-[150px] flex items-center justify-center md:max-w-[220px] md:h-[130px]">
      <div
        style={{
          backgroundColor: "#9667E0",
          color: "white",
          borderRadius: "15px",
          width: "200px",
          height: "100%",
        }}
        className="flex flex-col justify-center items-center md:w-[60%]"
      >
        <span className="font-semibold text-base md:text-sm mb-1">DBOX</span>
        <span className="font-semibold text-base md:text-sm">$12,400</span>
      </div>
    </div>
  );
};
