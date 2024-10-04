"use client";

import {
  Button,
  HeaderMovie,
  TicketSelected,
} from "@/components/choicetickets";
import { useTicketContext } from "@/context/TicketContext";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as motion from "framer-motion/client";

export default function ChoiceOfTickets() {
  // const [ticketCount, setTicketCount] = useState(1);
  const { ticketCount, updateTicketCount, updateMovieInfo } =
    useTicketContext();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "Titulo desconocido";
  const poster = searchParams.get("poster") || "";

  useEffect(() => {
    if (title && poster) {
      updateMovieInfo({ title, poster });
    }
  }, [title, poster, updateMovieInfo]);

  // const handleUpdateTickets = (count: any) => {
  //   setTicketCount(count);
  // };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center pl-20 mb-10"
        style={{ backgroundColor: "#D4BBFC", color: "white", height: "90px" }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Hola {session?.user?.name || "Usuario"}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex pl-20"
        style={{ display: "flex" }}
      >
        <main style={{ width: "45%" }}>
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
              General
            </h2>
            {/* Componente donde se puede elegir los tickets */}
            <TicketSelected onUpdateTickets={updateTicketCount} />
          </section>
        </main>

        <main style={{ width: "45%", paddingBottom: "5rem" }}>
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

            <Link href="/dashboard/choiceseats">
              <Button label="Siguiente" color="#9667E0" />
            </Link>
          </section>
        </main>
      </motion.div>
    </>
  );
}
