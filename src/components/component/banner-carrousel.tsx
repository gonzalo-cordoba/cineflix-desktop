"use client";

import { useEffect, useRef, useState } from "react";
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

export function BannerCarrousel() {
  const images = [Image1, Image2, Image3];
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          ".carousel-next"
        ) as HTMLButtonElement;
        const previousButton = carouselRef.current.querySelector(
          ".carousel-previous"
        ) as HTMLButtonElement;

        if (currentIndexRef.current >= images.length - 1) {
          previousButton?.click();
          currentIndexRef.current = 0;
        } else {
          nextButton?.click();
          currentIndexRef.current += 1;
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl">
        <Carousel className="w-full" ref={carouselRef}>
          <CarouselContent className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
            {images.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Card className="w-full h-full border-none">
                  <CardContent className="relative w-full h-full p-0">
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="carousel-previous absolute left-0 top-1/2 transform -translate-y-1/2 z-10 border-none"
            style={{
              backgroundColor: "#9667E0",
              color: "white",
              borderRadius: "10px",
              width: "45px",
              height: "45px",
            }}
          />
          <CarouselNext
            className="carousel-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 border-none"
            style={{
              backgroundColor: "#9667E0",
              color: "white",
              borderRadius: "10px",
              width: "45px",
              height: "45px",
            }}
          />
        </Carousel>
      </div>
    </main>
  );
}
