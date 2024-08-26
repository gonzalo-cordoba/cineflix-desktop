"use client";

import Image from "next/image";
import logocn from "../../../../public/logo.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Check, X } from "lucide-react";

import logocnblack from "../../../../public/logocnblack.png";
import googleIcon from "../../../../public/icono-google.svg";
import facebookIcon from "../../../../public/icono-facebook.svg";

import nivelPromo from "../../../../public/nivelpromo.png";
import puntosPromo from "../../../../public/puntospromo.png";
import ticketsPromo from "../../../../public/ticketspromo.png";
import { signIn } from "next-auth/react";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/validation/registerSchema";
import { useFirebaseRegister } from "@/hooks/useFirebaseRegister";

type FormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const { registerUser, error, loading, showAlert } = useFirebaseRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const result = await registerUser({
      email: data.email,
      password: data.password,
      displayName: data.name,
    });

    if (result?.success) {
      reset();
    }
  };

  const handleSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: "/user" });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-start lg:items-start lg:mt-28 lg:ml-16">
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <main className="mb-6 lg:mb-0">
            <h2 className="flex justify-center text-center font-bold text-xl lg:text-3xl mb-4">
              Crea una cuenta
            </h2>
            <p className="flex justify-center text-center font-light mt-5 ">
              Ingresa tu nombre
            </p>
            <Input
              {...register("name")}
              style={{
                backgroundColor: "#EBD9FC",
                color: "black",
                border: "none",
                borderRadius: "10px",
              }}
              className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-2 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
              type="text"
              placeholder="Nombre"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </main>

          <main className="mb-6 lg:mb-0">
            <p className="flex justify-center text-center font-light mt-5 ">
              Ingresa tu correo electrónico
            </p>
            <Input
              {...register("email")}
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </main>

          <main className="mb-6 lg:mb-0">
            <p className="flex justify-center text-center font-light mt-5 ">
              Ingresa una contraseña
            </p>
            <Input
              {...register("password")}
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
            {errors.password && (
              <p style={{ color: "red" }} className="text-sm mt-1">
                {errors.password.message}
              </p>
            )}
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
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarme"}
          </button>

          {showAlert && showAlert.type === "success" && (
            <Alert
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "15px",
              }}
              className="mt-5"
            >
              <Check className="h-4 w-4" />
              <AlertTitle style={{ color: "white" }}>¡Éxito!</AlertTitle>
              <AlertDescription style={{ color: "white" }}>
                Usted ha sido registrado correctamente.
              </AlertDescription>
            </Alert>
          )}

          {showAlert && showAlert.type === "error" && (
            <Alert
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "15px",
              }}
              className="mt-5"
            >
              <X className="h-4 w-4" />
              <AlertTitle style={{ color: "white" }}>Error</AlertTitle>
              <AlertDescription style={{ color: "white" }}>
                Ha ocurrido un error, vuelva a intentarlo mas tarde.
              </AlertDescription>
            </Alert>
          )}
        </form>

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
