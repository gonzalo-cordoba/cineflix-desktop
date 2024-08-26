"use client";

import Image from "next/image";
import logocn from "../../../../public/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import logocnblack from "../../../../public/logocnblack.png";
import googleIcon from "../../../../public/icono-google.svg";
import facebookIcon from "../../../../public/icono-facebook.svg";

import nivelPromo from "../../../../public/nivelpromo.png";
import puntosPromo from "../../../../public/puntospromo.png";
import ticketsPromo from "../../../../public/ticketspromo.png";
import { signIn } from "next-auth/react";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  const handleSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: "/user" });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-start lg:items-start lg:mt-28 lg:ml-16">
      {/* Contenedor de */}
      <div
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "15px",
          backgroundColor: "#9667E0",
          border: "1px solid #ccc",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        className="relative flex-col items-center justify-center hidden lg:flex"
      >
        <Image
          src={logocn}
          alt="Logo Cineflix"
          width={300}
          height={300}
          className="absolute top-4 text-white font-bold text-2xl mt-20"
        />

        <h2
          className="text-white font-bold text-4xl mt-36 mb-16"
          style={{ color: "white" }}
        >
          Crea tu cuenta Club Cineflix
        </h2>

        <main className="flex justify-center items-start gap-4">
          <div
            className="flex flex-col items-center text-center"
            style={{ minHeight: "250px" }}
          >
            <Image
              style={{ borderRadius: "15px" }}
              src={puntosPromo}
              alt="Promo puntos"
            />
            <p
              style={{ color: "white" }}
              className="font-semibold mt-2 w-full max-w-[150px]"
            >
              Acumula puntos con cada compra
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center"
            style={{ minHeight: "250px" }}
          >
            <Image
              style={{ borderRadius: "15px" }}
              src={ticketsPromo}
              alt="Promo tickets"
            />
            <p
              style={{ color: "white" }}
              className="font-semibold mt-2 w-full max-w-[150px]"
            >
              Recibe promociones
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center"
            style={{ minHeight: "250px" }}
          >
            <Image
              style={{ borderRadius: "15px" }}
              src={nivelPromo}
              alt="Promo niveles"
            />
            <p
              style={{ color: "white" }}
              className="font-semibold mt-2 w-full max-w-[150px]"
            >
              Sube de nivel para acceder a mejores promociones
            </p>
          </div>
        </main>
      </div>

      <Link href="/">
        <button
          className="flex items-center font-bold px-4 py-2 ml-5"
          style={{
            backgroundColor: "#D4BBFC",
            color: "white",
            borderRadius: "15px",
          }}
        >
          <ArrowLeft />
        </button>
      </Link>

      {/* Contenedor Mobile */}
      <div className="flex flex-col justify-center items-center w-full lg:w-[600px] mt-10 lg:mt-40 xl:w-[800px] px-4 lg:px-0 mx-auto">
        <div className="lg:hidden flex flex-col items-center mb-6">
          <Image
            src={logocnblack}
            alt="Logo Cineflix Black"
            width={150}
            height={150}
            className="mb-4"
          />
        </div>

        <main className="mb-6 lg:mb-0">
          <h2 className="flex justify-center text-center font-bold text-xl lg:text-3xl mb-4">
            Crea una cuenta
          </h2>
          <p className="flex justify-center text-center font-light ">
            Ingresa tu nombre
          </p>
          <Input
            style={{
              backgroundColor: "#EBD9FC",
              color: "black",
              border: "none",
              borderRadius: "10px",
            }}
            className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-2 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
            type="email"
            placeholder="Nombre"
          />
        </main>

        <main className="mb-6 lg:mb-0">
          <p className="flex justify-center text-center font-light mt-5 ">
            Ingresa tu correo electronico
          </p>
          <Input
            style={{
              backgroundColor: "#EBD9FC",
              color: "black",
              border: "none",
              borderRadius: "10px",
            }}
            className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-2 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
            type="email"
            placeholder="Email"
          />
        </main>

        <main className="mb-6 lg:mb-0">
          <p className="flex justify-center text-center font-light mt-5 ">
            Ingresa una contraseña
          </p>
          <Input
            style={{
              backgroundColor: "#EBD9FC",
              color: "black",
              border: "none",
              borderRadius: "10px",
            }}
            className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-2 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
            type="password"
            placeholder="Contraseña"
          />
        </main>

        <button
          style={{
            backgroundColor: "#9667E0",
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
          className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-8 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
          type="submit"
        >
          Registrarme
        </button>

        <button
          onClick={() => handleSignIn("google")}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
          className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-4 px-4 flex items-center justify-center gap-2 rounded transition-colors duration-300 hover:bg-blue-700"
          type="button"
        >
          <Image
            src={googleIcon}
            alt="Google Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <span>Continuar con Google</span>
        </button>

        <button
          style={{
            backgroundColor: "#1877F2",
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
          className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-4 px-4 flex items-center justify-center gap-2 rounded transition-colors duration-300 hover:bg-blue-700"
          type="button"
        >
          <Image
            src={facebookIcon}
            alt="Facebook Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          <span>Continuar con Facebook</span>
        </button>

        <p className="mt-5">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/dashboard/login" style={{ color: "#9667E0" }}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
