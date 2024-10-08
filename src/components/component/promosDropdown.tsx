import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import lala from "../../../public/lala.webp";
import mix from "../../../public/cheetosMixPromoSubmenu.webp";

export default function PromosDropdown() {
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
              src={lala}
              alt="Promo lala"
              fill
              objectFit="contain"
              className="absolute top-0 left-0"
              style={{ backgroundColor: "white", borderRadius: "15px" }}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">
            Lala Plenia
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base md:text-lg">
            Compra productos Lala y disfruta la mejor experiencia.
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
              src={mix}
              alt="Promo Mix"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0"
              style={{ backgroundColor: "white", borderRadius: "15px" }}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">
            Llegó el Mix
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base md:text-lg">
            Disfruta el nuevo MIX de Cheetos y Palomitas Cheddar.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
