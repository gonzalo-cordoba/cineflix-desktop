import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import Image1 from "../../../public/banner1.png";
import Image2 from "../../../public/banner2.png";
import Image3 from "../../../public/banner3.png";

export function Carrousel() {
  const images = [Image1, Image2, Image3];

  return (
    <main className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl">
        <Carousel className="w-full">
          <CarouselContent className="relative w-full h-[400px]">
            {images.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Card className="w-full h-full border-none">
                  <CardContent className="relative w-full h-full p-0">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </main>
  );
}
