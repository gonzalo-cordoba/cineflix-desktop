import Image from "next/image";
import logocnblack from "../../../public/logocnblack.png";
import { NavigationButton } from "./NavigationButton";

export const MobileContainer = () => {
  return (
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
        <h2 className="flex justify-center text-center font-bold text-xl lg:text-5xl mb-4">
          ¿Ya tienes cuenta?
        </h2>
        <NavigationButton
          href="/dashboard/login"
          style={{
            backgroundColor: "#D4BBFC",
            color: "white",
            borderRadius: "10px",
          }}
          className="mt-2 px-6 py-3 rounded w-64 lg:w-full"
        >
          Iniciar sesión
        </NavigationButton>
      </main>

      <main>
        <h2 className="flex justify-center text-center font-bold text-xl lg:text-5xl mb-4">
          Si nunca te registraste
        </h2>
        <NavigationButton
          href="/dashboard/register"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
          className="mt-2 px-6 py-3 rounded w-64 lg:w-full"
        >
          Crea una cuenta
        </NavigationButton>
      </main>
    </div>
  );
};
