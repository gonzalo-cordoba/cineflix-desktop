"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

interface TicketContextProps {
  ticketCount: number;
  movieInfo: {
    title: string;
    poster: string;
  };
  subtotal: number;
  serviceCharge: number;
  total: number;
  updateTicketCount: (count: number) => void;
  updateMovieInfo: (info: { title: string; poster: string }) => void;
}

const TicketContext = createContext<TicketContextProps | undefined>(undefined);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    poster: "",
  });

  const ticketPrice = 11000;
  const serviceChargePerTicket = 1400;

  const subtotal = ticketCount * ticketPrice;
  const serviceCharge = ticketCount * serviceChargePerTicket;
  const total = subtotal + serviceCharge;

  const updateTicketCount = useCallback(
    (count: number) => setTicketCount(count),
    []
  );

  const updateMovieInfo = useCallback(
    (info: { title: string; poster: string }) => setMovieInfo(info),
    []
  );

  return (
    <TicketContext.Provider
      value={{
        ticketCount,
        movieInfo,
        subtotal,
        serviceCharge,
        total,
        updateTicketCount,
        updateMovieInfo,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error("useTicketContext must be used within a TicketProvider");
  }
  return context;
};
