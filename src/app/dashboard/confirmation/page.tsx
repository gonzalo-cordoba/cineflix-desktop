"use client";

import React, { useState } from "react";
import {
  Button as ConfirmButton,
  HeaderMovie,
  TicketSelected,
} from "@/components/choicetickets";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Form } from "@/components/ui/form";
import { ProfileForm } from "@/components/confirmation/Form";

export default function Confirmation() {
  // const [] = useState(1);
  const { data: session } = useSession();

  const handleFormSubmit = (data: any) => {
    // IMPORTANTE: Agregar una alerta que muestre al usuario el envio correcto de su formulario
    console.log("Formulario enviado con exito", data);
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
            {/* Aca va el formulario de compra */}
            <ProfileForm onSubmit={handleFormSubmit} />
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
              <ConfirmButton label="Volver" color="#9667E0" />
            </Link>

            <ConfirmButton
              label="Confirmar"
              color="#9667E0"
              onClick={() => {
                const form = document.querySelector("form");
                if (form) {
                  form.requestSubmit();
                }
              }}
            />
          </section>
        </main>
      </div>
    </>
  );
}
