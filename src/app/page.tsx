import { BannerCarrousel } from "@/components/component/banner-carrousel";
import { DropdownNavBar } from "@/components/component/dropdown-nav-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <BannerCarrousel />
      </main>

      <main className="flex flex-col items-center mt-8 space-y-6 px-4 md:px-8 lg:px-16">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Descubre la cartelera en tu cine
        </h1>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-3">
          <Button
            className="font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3"
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "20px",
            }}
          >
            Cartelera
          </Button>
          <Button
            className="font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3"
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
          className="flex flex-col sm:flex-row gap-6 justify-center bg-white bg-opacity-80 rounded-lg px-4 py-0 sm:px-6 sm:py-0"
          style={{
            backgroundColor: "#9667E0",
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
