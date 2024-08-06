import { Carrousel } from "@/components/component/carrousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Carrousel />
      </main>

      <main className="mt-20">
        <h1 className="font-extrabold text-3xl">
          Descubre la cartelera en tu cine
        </h1>
        <Button>Cartelera</Button>
        <Button>Próximamente</Button>
      </main>
    </>
  );
}
