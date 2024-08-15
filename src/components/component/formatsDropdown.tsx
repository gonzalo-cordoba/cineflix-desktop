import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import logoimax from "../../../public/imax-logo.jpg";
import logo4dx from "../../../public/4dx-logo.png";

export default function FormatsDropdown() {
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
              src={logoimax}
              alt="IMAX logo"
              fill
              objectFit="contain"
              className="absolute top-0 left-0"
              style={{ backgroundColor: "white", borderRadius: "15px" }}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">
            IMAX
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base md:text-lg">
            La mejor pantalla en tecnología 4K.
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
              src={logo4dx}
              alt="4DX logo"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0"
              style={{ backgroundColor: "white", borderRadius: "15px" }}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-base sm:text-lg md:text-xl">
            4DX
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base md:text-lg">
            Efectos especiales de movimiento, luz, viento y demás.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
