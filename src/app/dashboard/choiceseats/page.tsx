"use client";

import { SeatsSelected } from "@/components/choiceseats/SeatsSelected";
import {
  Button,
  HeaderMovie,
  TicketSelected,
} from "@/components/choicetickets";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export default function ChoiceOfSeats() {
  const [ticketCount, setTicketCount] = useState(1);
  const { data: session } = useSession();

  const handleUpdateTickets = (count: any) => {
    setTicketCount(count);
  };

  return (
    <>
      <div
        className="flex items-center pl-20 mb-10"
        style={{ backgroundColor: "#D4BBFC", color: "white", height: "90px" }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Hola {session?.user?.name || "Usuario"}
        </h1>
      </div>

      <div className="flex pl-20" style={{ display: "flex" }}>
        <main style={{ width: "45%" }}>
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
              Elige tus asientos
            </h2>
            <p>
              Para seleccionar las butacas, hace click sobre una ubicacion
              disponible. Esta pantalla es un indicador de la disposicion de las
              ubicaciones en la sala, y no representa distancias reales.
            </p>
            {/* Componente donde se puede elegir los asientos */}
            <SeatsSelected />
          </section>
        </main>

        <main style={{ width: "45%" }}>
          <section>
            {/* Componente donde se muestra la pelicula con su título, edad recomendada, idioma y formato, sala de cine. Con subtotal, cargo total de servicio de entradas y total. */}
            <HeaderMovie ticketCount={ticketCount} />
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

            <Link href="/dashboard/choiceseats">
              <Button label="Siguiente" color="#9667E0" />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
