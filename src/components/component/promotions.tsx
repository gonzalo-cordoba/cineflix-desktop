"use client";

import Image from "next/image";
import imagePopCorn from "../../../public/popcorn.png";
import imagePopCorn2 from "../../../public/popcornvip.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Promotions() {
  return (
    <>
      <div className="container flex flex-col md:flex-row items-center px-4">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-bold text-3xl md:text-5xl">Menú tradicional</h1>
          <p className="font-medium mt-5 text-gray-500">
            Disfruta de todos tus alimentos y bebidas que tanto te encantan para
            vivir al máximo tu experiencia en nuestras salas.
          </p>
        </div>
        <Link
          href="/dashboard/traditional-menu"
          className="flex-none md:ml-6 relative"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <Image
            src={imagePopCorn}
            alt="Menú tradicional"
            layout="responsive"
            width={668}
            height={649}
            style={{
              boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.3)",
              borderRadius: "20px",
              transition: "opacity 0.3s ease",
              opacity: 1,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.6";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(128, 0, 128, 0.5)",
              borderRadius: "20px",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          >
            <ArrowRight
              style={{
                color: "white",
                fontSize: "40px",
                width: "50px",
                height: "50px",
              }}
            />
          </div>
        </Link>
      </div>

      <div className="container flex flex-col md:flex-row items-center mt-12 md:mt-24 px-4">
        <Link
          href="/dashboard/vip-menu"
          className="flex-none md:mr-6 order-2 md:order-1 relative mt-5 mb-20"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <Image
            src={imagePopCorn2}
            alt="Menú VIP"
            layout="responsive"
            width={668}
            height={649}
            style={{
              boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.3)",
              borderRadius: "20px",
              transition: "opacity 0.3s ease",
              opacity: 1,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.6";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(128, 0, 128, 0.5)",
              borderRadius: "20px",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          >
            <ArrowRight
              style={{
                color: "white",
                fontSize: "40px",
                width: "50px",
                height: "50px",
              }}
            />
          </div>
        </Link>
        <div className="flex-1 flex flex-col justify-center order-1 md:order-2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="font-bold text-3xl md:text-5xl">Menú VIP</h1>
          <p className="font-medium mt-5 text-gray-500">
            Conoce todos los productos, alimentos y preparaciones especiales que
            tenemos para tu experiencia VIP.
          </p>
        </div>
      </div>
    </>
  );
}
