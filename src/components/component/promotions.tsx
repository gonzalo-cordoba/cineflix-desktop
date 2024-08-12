import Image from "next/image";

import imagePopCorn from "../../../public/popcorn.jpg";

export default function Promotions() {
  return (
    <>
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-bold text-5xl">Menú tradicional</h1>
          <p className="font-medium mt-5" style={{ color: "gray" }}>
            Disfruta de todos tus alimentos y bebidas que tanto te encantan para
            vivir al máximo tu experiencia en nuestras salas.
          </p>
        </div>
        <div className="flex-none md:ml-6">
          <Image src={imagePopCorn} alt="#" width={668} height={649} />
        </div>
      </div>

      <div className="container flex flex-col md:flex-row items-center mt-24">
        <div className="flex-none md:mr-6 order-2 md:order-1">
          <Image src={imagePopCorn} alt="#" width={668} height={649} />
        </div>
        <div className="flex-1 flex flex-col justify-center order-1 md:order-2">
          <h1 className="font-bold text-5xl">Menú VIP</h1>
          <p className="font-medium mt-5" style={{ color: "gray" }}>
            Conoce todos los productos, alimentos y preparaciones especiales que
            tenemos para tu experiencia VIP.
          </p>
        </div>
      </div>
    </>
  );
}
