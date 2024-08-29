"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@/validation/registerSchema";
import { useFirebaseRegister } from "@/hooks/useFirebaseRegister";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Check, X } from "lucide-react";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { AuthButtons } from "./AuthButtons";
import { Alerts } from "./Alerts";

type FormValues = z.infer<typeof registerSchema>;

export const RegistrationForm: React.FC = () => {
  const { registerUser, error, loading, showAlert } = useFirebaseRegister();
  const [isHovered, setIsHovered] = useState(false);

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

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/user" });
  };

  const handleFacebookSignIn = async () => {
    await signIn("facebook", { callbackUrl: "/user" });
  };

  return (
    <div>
      {showAlert && (
        <Alerts
          type={error ? "error" : "success"}
          title={error ? "Error" : "Éxito"}
          description={error || "Registro exitoso"}
        />
      )}

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
            <p style={{ color: "red" }} className=" text-sm mt-1">
              {errors.name.message}
            </p>
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
            <p style={{ color: "red" }} className="text-sm mt-1">
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
      </form>

      <AuthButtons
        onGoogleSignIn={handleGoogleSignIn}
        onFacebookSignIn={handleFacebookSignIn}
      />

      <p className="flex justify-center mt-5">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/dashboard/login" style={{ color: "#9667E0" }}>
          Inicia sesión
        </Link>
      </p>
    </div>
  );
};
