"use client";

import Image from "next/image";
import React from "react";

import { useTicketContext } from "@/context/TicketContext";

export const HeaderMovie = () => {
  const { ticketCount, movieInfo, subtotal, serviceCharge, total } =
    useTicketContext();

  const formatNumber = (number: any) => number.toLocaleString("es-ES");

  return (
    <div
      style={{
        maxWidth: "90%",
        height: "auto",
        borderRadius: "15px",
        backgroundColor: "#9667E0",
        border: "1px solid #ccc",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
      className="relative lg:flex"
    >
      {/* Contenedor de la imagen y texto */}
      <div
        className="mt-5"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Imagen de la película */}
        <div style={{ flexShrink: 0, width: "100%", maxWidth: "350px" }}>
          {movieInfo.poster && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster}`}
              alt={movieInfo.title || "Movie Poster"}
              layout="responsive"
              width={350}
              height={350}
              style={{ borderRadius: "10px" }}
            />
          )}
        </div>

        {/* Información de la película */}
        <div style={{ color: "white", flex: 1 }}>
          <p className="text-4xl font-semibold">{movieInfo.title}</p>
          <div
            className="mt-2 mb-2"
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "15px",
              display: "inline-block",
              padding: "5px 10px",
            }}
          >
            +16
          </div>
          <p className="mb-2">CASTELLANO DBOX 3D</p>
          <p
            className="font-bold"
            style={{ display: "flex", alignItems: "center" }}
          >
            HOYTS BUENOS AIRES SALA 9
          </p>
        </div>
      </div>

      {/* Contenedor del desglose de precios */}
      <div className="mt-5" style={{ width: "100%" }}>
        {/* Subtotal */}
        <div
          className="flex justify-between w-full mb-4"
          style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}
        >
          <p className="text-sm font-normal" style={{ color: "white" }}>
            Subtotal
          </p>
          <p className="text-sm font-normal" style={{ color: "white" }}>
            ${formatNumber(subtotal)}
          </p>
        </div>

        {/* Cargo por servicio */}
        <div
          className="flex justify-between w-full mb-4"
          style={{ borderBottom: "1px solid white", paddingBottom: "10px" }}
        >
          <p className="text-sm font-normal" style={{ color: "white" }}>
            Cargo total por el servicio de entradas
          </p>
          <p className="text-sm font-normal" style={{ color: "white" }}>
            ${formatNumber(serviceCharge)}
          </p>
        </div>

        {/* Total */}
        <div className="flex justify-between w-full mt-6">
          <p
            className="text-lg font-bold"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            Total
          </p>
          <p
            className="text-lg font-bold"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            ${formatNumber(total)}
          </p>
        </div>
      </div>
    </div>
  );
};
