"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SeatsSelected } from "@/components/choiceseats/SeatsSelected";
import { Button, HeaderMovie } from "@/components/choicetickets";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import * as motion from "framer-motion/client";

export default function ChoiceOfSeats() {
  const [ticketCount, setTicketCount] = useState(1);
  const [hasSelectedSeats, setHasSelectedSeats] = useState(false);
  const { data: session } = useSession();
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handleSeatsChange = (hasSelected: boolean) => {
    setHasSelectedSeats(hasSelected);
    if (hasSelected) {
      setShowAlert(false);
    }
  };

  const handleNextClick = () => {
    if (!hasSelectedSeats) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      router.push("/dashboard/confirmation");
    }
  };

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
              Elige tus asientos
            </h2>
            <p>
              Para seleccionar las butacas, hace click sobre una ubicacion
              disponible. Esta pantalla es un indicador de la disposicion de las
              ubicaciones en la sala, y no representa distancias reales.
            </p>
            {showAlert && (
              <Alert
                variant="destructive"
                style={{
                  display: "inline-block",
                  maxWidth: "425px",
                  whiteSpace: "nowrap",
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid #f5c6cb",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.5rem",

                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Seleccione sus butacas para continuar con su compra.
                </AlertDescription>
              </Alert>
            )}

            <SeatsSelected onSeatsChange={handleSeatsChange} />
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
            <Link href="/dashboard/choicetickets">
              <Button label="Volver" color="#9667E0" />
            </Link>

            <Button
              label="Siguiente"
              color="#9667E0"
              onClick={handleNextClick}
              disabled={!hasSelectedSeats}
            />
          </section>
        </main>
      </motion.div>
    </>
  );
}
