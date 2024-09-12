"use client";

import { BarcodeIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const TicketSelected = ({ onUpdateTickets }: any) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  // Estado para cantidad de entradas a sacar
  const [ticketCount, setTicketCount] = useState(1);

  // Funcion para incrementart la cantidad de entradas
  const increaseTickets = () => {
    setTicketCount((prev) => {
      const newCount = prev + 1;
      onUpdateTickets(newCount);
      return newCount;
    });
  };

  // Funcion para decrementar la cantidad d entradas
  const decreaseTickets = () => {
    setTicketCount((prev) => {
      if (prev > 1) {
        const newCount = prev - 1;
        onUpdateTickets(newCount);
        return newCount;
      }
      return prev;
    });
  };

  return (
    <div className="flex items-center bg-gray-100 p-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-red-600 rounded-lg shadow-lg overflow-hidden relative">
        {/* Ticket shape */}
        <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-gray-100 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-gray-100 rounded-full transform translate-x-1/2 translate-y-1/2"></div>

        {/* Content */}
        <div className="h-full flex flex-col">
          {/* Top section */}
          <div
            style={{ backgroundColor: "#9667E0", color: "white" }}
            className="py-1 px-2 flex justify-between items-center"
          >
            <span className="font-bold text-xs sm:text-sm">
              CINEFLIX TICKET
            </span>
            <div className="flex items-center">
              <span className="text-xs sm:text-sm font-bold mr-1 sm:mr-2">
                $11,000
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-2 h-2 sm:w-3 sm:h-3 fill-current text-white mx-0.5"
                    viewBox="0 0 24 24"
                    style={{ fill: "yellow" }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div
            style={{ backgroundColor: "#F2EBFB" }}
            className="flex-1 p-2 sm:p-3 flex flex-col sm:flex-row"
          >
            {/* Left side / Top for mobile */}
            <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-dashed border-red-300 pb-2 sm:pb-0 sm:pr-2 flex flex-row sm:flex-col justify-between items-center sm:items-start">
              <BarcodeIcon
                style={{ color: "black" }}
                className="w-1/2 sm:w-full h-10 sm:h-12 text-red-600"
              />
            </div>

            {/* Right side / Bottom for mobile */}
            <div className="w-full sm:w-2/3 pt-2 sm:pt-0 sm:pl-2 flex flex-col justify-center items-center">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <div className="text-lg sm:text-xl font-bold text-red-600 leading-tight">
                {title}
              </div>
              <div className="text-[0.5rem] sm:text-[0.6rem] text-red-600 mt-1">
                FECHA: 11/12/2024 &nbsp; SALA: 9 &nbsp; HORARIO: 15:30hs
              </div>
              {/* Botones para sumar y restar entradas */}
              <div className="mt-4 flex items-center gap-4">
                <button
                  style={{
                    backgroundColor: "#9667E0",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  onClick={decreaseTickets}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{ticketCount}</span>
                <button
                  style={{
                    backgroundColor: "#9667E0",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  onClick={increaseTickets}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
