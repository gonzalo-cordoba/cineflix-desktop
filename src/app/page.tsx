import { BannerCarrousel } from "@/components/component/banner-carrousel";
import { DropdownNavBar } from "@/components/component/dropdown-nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <BannerCarrousel />
      </main>

      <main className="flex flex-col items-center mt-24 space-y-4">
        <h1 className="font-extrabold text-4xl text-center">
          Descubre la cartelera en tu cine
        </h1>

        <div className="flex space-x-4 pt-3">
          <Button
            className="font-semibold rounded-lg"
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "20px",
            }}
          >
            Cartelera
          </Button>
          <Button
            className="font-semibold"
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "20px",
            }}
          >
            Próximamente
          </Button>
        </div>

        <div
          className="flex gap-6 justify-end bg-white bg-opacity-80 rounded-lg px-0 py-0 pr-5 pl-0 -ml-96"
          style={{
            backgroundColor: "#D4BBFC",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <DropdownNavBar />
        </div>
      </main>
    </>
  );
}
