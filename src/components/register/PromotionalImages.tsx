import Image from "next/image";
import puntosPromo from "../../../public/puntospromo.png";
import ticketsPromo from "../../../public/ticketspromo.png";
import nivelPromo from "../../../public/nivelpromo.png";

export const PromotionalImages = () => {
  return (
    <main className="flex justify-center items-start gap-4">
      {[
        {
          src: puntosPromo,
          alt: "Promo puntos",
          text: "Acumula puntos con cada compra",
        },
        { src: ticketsPromo, alt: "Promo tickets", text: "Recibe promociones" },
        {
          src: nivelPromo,
          alt: "Promo niveles",
          text: "Sube de nivel para acceder a mejores promociones",
        },
      ].map((promo, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
          style={{ minHeight: "250px" }}
        >
          <Image
            style={{ borderRadius: "15px" }}
            src={promo.src}
            alt={promo.alt}
          />
          <p
            style={{ color: "white" }}
            className="font-semibold mt-2 w-full max-w-[150px]"
          >
            {promo.text}
          </p>
        </div>
      ))}
    </main>
  );
};
