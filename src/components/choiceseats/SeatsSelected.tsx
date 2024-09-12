import React, { useState, CSSProperties } from "react";

type Seat = {
  id: string;
  row: string;
  number: number;
  status: "available" | "unavailable" | "selected";
};

const buttonStyle: CSSProperties = {
  width: "24px",
  height: "24px",
  padding: "0",
  fontSize: "12px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  margin: "2px",
};

export const SeatsSelected = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const seatsPerRow = 15;
  const seatsPerSide = 7; // Asientos a cada lado del pasillo central

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

  const getSeatColor = (status: Seat["status"]): CSSProperties => {
    switch (status) {
      case "available":
        return {
          backgroundColor: "#9667E0",
          color: "white",
          borderRadius: "5px",
        };
      case "unavailable":
        return {
          backgroundColor: "#9ca3af",
          color: "white",
          cursor: "not-allowed",
          borderRadius: "5px",
        };
      case "selected":
        return {
          backgroundColor: "#ff9e00",
          color: "black",
          borderRadius: "5px",
        };
    }
  };

  const containerStyle: CSSProperties = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "16px",
  };

  const screenStyle: CSSProperties = {
    height: "8px",
    backgroundColor: "#d1d5db",
    width: "100%",
    borderRadius: "4px",
    marginBottom: "32px",
  };

  const rowStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  };

  const seatGroupStyle: CSSProperties = {
    display: "flex",
  };

  const legendStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "24px",
    fontSize: "14px",
  };

  const legendItemStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const legendColorStyle: CSSProperties = {
    width: "16px",
    height: "16px",
    marginRight: "8px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}
        >
          PANTALLA
        </h2>
        <div style={screenStyle}></div>
      </div>
      <div>
        {rows.map((row) => (
          <div key={row} style={rowStyle}>
            <div
              style={{
                width: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {row}
            </div>
            <div style={seatGroupStyle}>
              {seats
                .filter((seat) => seat.row === row)
                .slice(0, seatsPerSide)
                .map((seat) => (
                  <button
                    key={seat.id}
                    style={{ ...buttonStyle, ...getSeatColor(seat.status) }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat.number}
                  </button>
                ))}
            </div>
            <div style={{ width: "24px" }}></div>{" "}
            {/* Espacio para el pasillo central */}
            <div style={seatGroupStyle}>
              {seats
                .filter((seat) => seat.row === row)
                .slice(seatsPerSide)
                .map((seat) => (
                  <button
                    key={seat.id}
                    style={{ ...buttonStyle, ...getSeatColor(seat.status) }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat.number}
                  </button>
                ))}
            </div>
            <div
              style={{
                width: "24px",
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
      <div style={legendStyle}>
        <div style={legendItemStyle}>
          <div
            style={{ ...legendColorStyle, backgroundColor: "#9667E0" }}
          ></div>
          <span>Disponible</span>
        </div>
        <div style={legendItemStyle}>
          <div
            style={{ ...legendColorStyle, backgroundColor: "#ff9e00" }}
          ></div>
          <span>Tus butacas</span>
        </div>
        <div style={legendItemStyle}>
          <div
            style={{ ...legendColorStyle, backgroundColor: "#9ca3af" }}
          ></div>
          <span>No disponible</span>
        </div>
      </div>
    </div>
  );
};
