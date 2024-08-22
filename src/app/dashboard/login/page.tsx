import Image from "next/image";
import logocn from "../../../../public/logo.png";
import logocnblack from "../../../../public/logocnblack.png";
import googleIcon from "../../../../public/icono-google.svg";
import facebookIcon from "../../../../public/icono-facebook.svg";

import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
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

        <h1
          className="text-white font-bold text-4xl"
          style={{ color: "white" }}
        >
          Login
        </h1>
        <h2
          className="text-white font-bold text-4xl mt-10"
          style={{ color: "white" }}
        >
          Iniciar sesión
        </h2>
      </div>

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

        <main className="mb-6 lg:mb-14">
          <h2 className="flex justify-center text-center font-bold text-xl lg:text-3xl mb-4">
            Ingresa tu correo
          </h2>
          <Input
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
        </main>

        <main>
          <h2 className="flex justify-center text-center font-bold text-xl lg:text-3xl mb-4">
            Ingresa tu contraseña
          </h2>
          <Input
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
          <Link
            href="#"
            className="text-sm lg:text-base text-blue-500 hover:text-violet-900 mt-4 block text-right"
          >
            Olvidé mi contraseña
          </Link>
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
          Continuar
        </button>

        <button
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
          ¿No tienes cuenta aún?{" "}
          <Link href="/dashboard/register" style={{ color: "#9667E0" }}>
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
