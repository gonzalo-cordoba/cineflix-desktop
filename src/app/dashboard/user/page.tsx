import Image from "next/image";
import logocn from "../../../../public/logo.png";
import logocnblack from "../../../../public/logocnblack.png";

export default function User() {
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
          Bienvenido a Cineflix
        </h1>
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
          <h2 className="flex justify-center text-center font-bold text-xl lg:text-4xl mb-4">
            ¿Ya tienes cuenta?
          </h2>
          <button
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "10px",
            }}
            className="mt-2 px-6 py-3 rounded w-64 lg:w-full"
          >
            Iniciar sesión
          </button>
        </main>

        <main>
          <h2 className="flex justify-center text-center font-bold text-xl lg:text-4xl mb-4">
            Si nunca te registraste
          </h2>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
            className="mt-2 px-6 py-3 rounded w-64 lg:w-full"
          >
            Crea una cuenta
          </button>
        </main>
      </div>
    </div>
  );
}
