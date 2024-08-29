import Image from "next/image";
import logocn from "../../../public/logo.png";
import logocnblack from "../../../public/logocnblack.png";

export const LoginHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`relative flex-col items-center justify-center ${
        isMobile ? "lg:hidden" : "hidden lg:flex"
      } w-[800px] h-[800px] rounded-lg bg-[#9667E0] border border-[#ccc] shadow-lg`}
    >
      <Image
        src={isMobile ? logocnblack : logocn}
        alt="Logo Cineflix"
        width={isMobile ? 150 : 300}
        height={isMobile ? 150 : 300}
        className={`${
          isMobile ? "mb-4" : "absolute top-4 mt-28"
        } text-white font-bold text-2xl`}
      />
      <h1 style={{ color: "white" }} className="text-white font-bold text-4xl">
        Login
      </h1>
      <h2
        style={{ color: "white" }}
        className="text-white font-bold text-4xl mt-10"
      >
        Iniciar sesión
      </h2>
    </div>
  );
};
