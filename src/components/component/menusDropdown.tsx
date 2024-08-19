import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import popcorn from "../../../public/popcorn.png";
import popcornvip from "../../../public/popcornvip.png";

export default function MenusDropdown() {
  return (
    <div className="mx-auto max-w-4xl p-4 flex flex-wrap justify-center gap-4">
      <Card
        className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px]"
        style={{
          borderRadius: "15px",
        }}
      >
        <CardContent
          className="pt-2"
          style={{ backgroundColor: "white", borderRadius: "15px" }}
        >
          <div className="relative w-full pb-[56.25%]">
            <Image
              src={popcorn}
              alt="Menu tradicional"
              fill
              objectFit="contain"
              className="absolute top-0 left-0"
              style={{ backgroundColor: "white", borderRadius: "15px" }}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">
            Tradicional
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base md:text-lg">
            Todos los alimentos favoritos para disfrutar de tu pelicula.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card
        className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px]"
        style={{
          borderRadius: "15px",
        }}
      >
        <CardContent
          className="pt-2"
          style={{ backgroundColor: "white", borderRadius: "15px" }}
        >
          <div className="relative w-full pb-[56.25%]">
            <Image
              src={popcornvip}
              alt="Menu VIP"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0"
              style={{ backgroundColor: "white", borderRadius: "15px" }}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">
            Menu VIP
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base md:text-lg">
            Los mejores alimentos y bebidas para tu experiencia VIP.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
