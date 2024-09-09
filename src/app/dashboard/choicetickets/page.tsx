import {
  Button,
  HeaderMovie,
  TicketSelected,
} from "@/components/choicetickets";
import Link from "next/link";
import React from "react";

export default function ChoiceOfTickets() {
  return (
    <>
      <div
        className="flex items-center pl-20 mb-10"
        style={{ backgroundColor: "#D4BBFC", color: "white", height: "90px" }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold">Hola usuario</h1>
      </div>

      <div
        className="flex pl-20"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <main style={{ width: "45%" }}>
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
              General
            </h2>
            {/* Componente donde se puede elegir los tickets */}
            <TicketSelected />
          </section>
        </main>

        <main style={{ width: "45%" }}>
          <section>
            {/* Componente donde se muestra la pelicula con su título, edad recomendada, idioma y formato, sala de cine. Con subtotal, cargo total de servicio de entradas y total. */}
            <HeaderMovie />
          </section>

          {/* Contenedor de los botones */}
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Link href="/">
              <Button label="Volver" color="#9667E0" />
            </Link>

            <Link href="#">
              <Button label="Siguiente" color="#9667E0" />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
