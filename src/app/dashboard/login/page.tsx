"use client";

import { useFirebaseLogin } from "@/hooks/useFirebaseLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "@/validation/loginSchema";
import { useForm } from "react-hook-form";

import Image from "next/image";
import logocnblack from "../../../../public/logocnblack.png";
import googleIcon from "../../../../public/icono-google.svg";
import facebookIcon from "../../../../public/icono-facebook.svg";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ArrowLeft, X } from "lucide-react";
import { LoginHeader } from "@/components/login";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { loginUser, error, loading } = useFirebaseLogin();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    const result = await loginUser({
      email: data.email,
      password: data.password,
    });

    if (result.success) {
      reset();
      router.push("/");
    }
  };

  const handleSignIn = async (provider: string) => {
    await signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-start lg:items-start lg:mt-28 lg:ml-16">
      <LoginHeader isMobile={false} />

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

        <div>
          {error && (
            <Alert
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "15px",
              }}
              className="mb-5"
            >
              <X />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Su correo o contraseña no son validos.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <main className="mb-6 lg:mb-0">
              <h2 className="flex justify-center text-center font-bold text-xl lg:text-3xl mb-4">
                Inicia sesión
              </h2>
              <p className="flex justify-center text-center font-light mt-5">
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
                className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-8 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
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
              <p className="flex justify-center text-center font-light mt-5">
                Ingresa tu contraseña
              </p>
              <Input
                {...register("password")}
                style={{
                  backgroundColor: "#EBD9FC",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                }}
                className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-8 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
                type="password"
                placeholder="Contraseña"
              />
              {errors.password && (
                <p style={{ color: "red" }} className="text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              <Link
                href="#"
                className="text-sm lg:text-base text-blue-500 hover:text-violet-900 mt-4 block text-right"
              >
                Olvidé mi contraseña
              </Link>
            </main>

            <button
              className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-8 px-4 rounded transition-colors duration-1000 hover:bg-purple-800 hover:shadow-lg"
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "#9667E0",
                color: "white",
                border: "none",
                borderRadius: "10px",
              }}
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
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

          <p className="flex justify-center mt-5">
            ¿No tienes cuenta aún?{" "}
            <Link href="/dashboard/register" style={{ color: "#9667E0" }}>
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
