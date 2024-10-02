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
import { useTicketContext } from "@/context/TicketContext";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

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
            {showAlert && (
              <Alert
                variant="destructive"
                style={{
                  display: "inline-block",
                  maxWidth: "425px",
                  whiteSpace: "nowrap",
                  backgroundColor: "red", // Color de fondo de la alerta
                  color: "white", // Color del texto de la alerta
                  border: "1px solid #f5c6cb", // Borde de la alerta
                  padding: "0.25rem 0.5rem", // Espaciado interno
                  borderRadius: "0.5rem", // Bordes redondeados
                  // margin: "1rem", // Margen alrededor de la alerta
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
            {/* Componente donde se puede elegir los asientos */}
            <SeatsSelected onSeatsChange={handleSeatsChange} />
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
      </div>
    </>
  );
}
