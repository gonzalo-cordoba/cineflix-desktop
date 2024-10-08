"use client";

import React, { useState, useEffect } from "react";

type Seat = {
  id: string;
  row: string;
  number: number;
  status: "available" | "unavailable" | "selected";
};

export const SeatsSelected = ({
  onSeatsChange,
}: {
  onSeatsChange: (hasSelectedSeats: boolean) => void;
}) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const seatsPerRow = 15;
  const seatsPerSide = 7;

  const [seats, setSeats] = useState<Seat[]>(
    rows.flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, index) => ({
        id: `${row}${index + 1}`,
        row,
        number: index + 1,
        status: "available",
      }))
    )
  );

  useEffect(() => {
    const hasSelectedSeats = seats.some((seat) => seat.status === "selected");
    onSeatsChange(hasSelectedSeats);
  }, [seats, onSeatsChange]);

  const handleSeatClick = (clickedSeat: Seat) => {
    if (clickedSeat.status === "unavailable") return;

    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === clickedSeat.id
          ? {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected",
            }
          : seat
      )
    );
  };

  const getSeatStyle = (status: Seat["status"]) => {
    switch (status) {
      case "available":
        return { backgroundColor: "#9f7aea", color: "white" };
      case "unavailable":
        return {
          backgroundColor: "#a0aec0",
          color: "white",
          cursor: "not-allowed",
        };
      case "selected":
        return { backgroundColor: "#ecc94b", color: "black" };
    }
  };

  return (
    <div style={{ maxWidth: "1024px", margin: "auto", padding: "1rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          PANTALLA
        </h2>
        <div
          style={{
            height: "0.5rem",
            backgroundColor: "#cbd5e0",
            width: "100%",
            borderRadius: "0.25rem",
          }}
        ></div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <div style={{ display: "inline-block", minWidth: "100%" }}>
          {rows.map((row) => (
            <div
              key={row}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {row}
              </div>
              <div style={{ display: "flex" }}>
                {seats
                  .filter((seat) => seat.row === row)
                  .slice(0, seatsPerSide)
                  .map((seat) => (
                    <button
                      key={seat.id}
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                        margin: "0.125rem",
                        borderRadius: "0.25rem",
                        ...getSeatStyle(seat.status),
                      }}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.number}
                    </button>
                  ))}
              </div>
              <div style={{ width: "1.5rem" }}></div>{" "}
              <div style={{ display: "flex" }}>
                {seats
                  .filter((seat) => seat.row === row)
                  .slice(seatsPerSide)
                  .map((seat) => (
                    <button
                      key={seat.id}
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        border: "none",
                        cursor: "pointer",
                        margin: "0.125rem",
                        borderRadius: "0.25rem",
                        ...getSeatStyle(seat.status),
                      }}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat.number}
                    </button>
                  ))}
              </div>
              <div
                style={{
                  width: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {row}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1.5rem",
          fontSize: "0.875rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: "#9f7aea",
              marginRight: "0.5rem",
              borderRadius: "0.25rem",
            }}
          ></div>
          <span>Disponible</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: "#ecc94b",
              marginRight: "0.5rem",
              borderRadius: "0.25rem",
            }}
          ></div>
          <span>Tus butacas</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: "#a0aec0",
              marginRight: "0.5rem",
              borderRadius: "0.25rem",
            }}
          ></div>
          <span>No disponible</span>
        </div>
      </div>
    </div>
  );
};
