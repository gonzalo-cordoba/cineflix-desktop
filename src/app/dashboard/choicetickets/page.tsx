"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTicketContext } from "@/context/TicketContext";

import {
  Button,
  HeaderMovie,
  TicketSelected,
} from "@/components/choicetickets";
import * as motion from "framer-motion/client";

export default function ChoiceOfTickets() {
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

            <TicketSelected onUpdateTickets={updateTicketCount} />
          </section>
        </main>

        <main style={{ width: "45%", paddingBottom: "5rem" }}>
          <section>
            <HeaderMovie />
          </section>

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
