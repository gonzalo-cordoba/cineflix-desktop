import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  return (
    <Link href="/">
      <button
        className="
          absolute 
          top-4 
          right-4 
          md:top-8 
          md:right-8 
          flex 
          items-center 
          font-bold 
          px-3 
          py-2 
          md:px-4 
          md:py-2 
          bg-[#D4BBFC] 
          text-white 
          rounded-lg 
          hover:bg-[#B38EE1] 
          transition 
          duration-300
        "
        style={{
          borderRadius: "15px",
          color: "white",
        }}
      >
        <ArrowLeft className="mr-2" />
        <span className="hidden md:inline">Volver</span>
      </button>
    </Link>
  );
};
