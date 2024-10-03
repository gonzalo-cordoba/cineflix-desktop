"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import logocn from "../../../../public/logo.png";
import logocnblack from "../../../../public/logocnblack.png";

import { PromotionalImages, RegistrationForm } from "@/components/register";
import * as motion from "framer-motion/client";

export default function Register() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-start lg:items-start lg:mt-28 lg:ml-16"
    >
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

        <PromotionalImages />
      </div>

      <Link href="/user">
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

        <RegistrationForm />
      </div>
    </motion.div>
  );
}
