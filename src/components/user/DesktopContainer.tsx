import Image from "next/image";
import logocn from "../../../public/logo.png";

export const DesktopContainer = () => {
  return (
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
      <h1 style={{ color: "white" }} className=" font-bold text-4xl">
        Bienvenido a Cineflix
      </h1>
    </div>
  );
};
