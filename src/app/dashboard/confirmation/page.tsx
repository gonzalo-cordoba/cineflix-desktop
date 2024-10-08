"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProfileForm } from "@/components/confirmation/Form";

import * as motion from "framer-motion/client";
import {
  Button as ConfirmButton,
  HeaderMovie,
  TicketSelected,
} from "@/components/choicetickets";
import Swal from "sweetalert2";

export default function Confirmation() {
  const { data: session } = useSession();
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (data: any) => {
    Swal.fire({
      icon: "success",
      title: "¡Éxito!",
      text: "¡Gracias por tu compra!. Tu ticket para la película ha sido reservado con éxito.",
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted, router]);

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
            {/* Aca va el formulario de compra */}
            <ProfileForm onSubmit={handleFormSubmit} />
          </section>
        </main>

        <main style={{ width: "45%", paddingBottom: "5rem" }}>
          <section>
            {/* Componente donde se muestra la pelicula con su título, edad recomendada, idioma y formato, sala de cine. Con subtotal, cargo total de servicio de entradas y total. */}
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
            <Link href="/dashboard/choiceseats">
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
      </motion.div>
    </>
  );
}
