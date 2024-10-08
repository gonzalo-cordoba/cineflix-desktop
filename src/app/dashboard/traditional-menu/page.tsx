import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-select";
import * as motion from "framer-motion/client";
import { ArrowLeft } from "lucide-react";

export default function TraditionalMenu() {
  const menuItems = [
    {
      name: "Pochoclos",
      description: "Clásicos pochoclos recién hechos",
      image: "/popcorn.png",
    },
    {
      name: "Gaseosas",
      description: "Variedad de refrescos fríos",
      image: "/popcorn.png",
    },
    {
      name: "Nachos",
      description: "Crujientes nachos con queso",
      image: "/popcorn.png",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #9667E0 0%, #D4BBFC 100%)",
      }}
    >
      <Card
        className="w-full max-w-4xl overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(150, 103, 224, 0.3)",
        }}
      >
        <CardContent className="p-6 md:p-8">
          <Link
            href="/"
            className="flex items-center mb-4 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2" />
            Volver
          </Link>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: "#9667E0" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Menú Tradicional del Cine
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Disfruta de nuestros clásicos favoritos para acompañar tu película
          </motion.p>
          <Separator className="my-6" style={{ backgroundColor: "#D4BBFC" }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#9667E0" }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <Separator className="my-6" style={{ backgroundColor: "#D4BBFC" }} />
          <motion.div
            className="bg-gray-100 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#9667E0" }}
            >
              Detalles del Menú Tradicional
            </h3>
            <ul className="space-y-4">
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Pochoclos
                </h4>
                <p className="mt-2">
                  Nuestros pochoclos son preparados al momento, garantizando
                  frescura y sabor en cada bocado. Disponibles en tres tamaños:
                  pequeño, mediano y grande. Elige entre mantequilla clásica o
                  caramelo.
                </p>
              </li>
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Gaseosas
                </h4>
                <p className="mt-2">
                  Ofrecemos una amplia selección de refrescos fríos para
                  satisfacer tu sed. Elige entre Coca-Cola, Sprite, Fanta y
                  otras opciones, disponibles en tamaños pequeño, mediano y
                  grande. También tenemos opciones sin azúcar.
                </p>
              </li>
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Nachos
                </h4>
                <p className="mt-2">
                  Crujientes nachos de maíz servidos con nuestra deliciosa salsa
                  de queso caliente. Puedes añadir jalapeños para un toque
                  picante extra. Disponibles en porciones individuales o para
                  compartir.
                </p>
              </li>
            </ul>
          </motion.div>
          <Separator className="my-6" style={{ backgroundColor: "#D4BBFC" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#9667E0" }}
            >
              Combos Populares
            </h3>
            <ul className="space-y-4">
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Combo Individual
                </h4>
                <p className="mt-2">
                  Pochoclos medianos + Gaseosa mediana a elección
                </p>
              </li>
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Combo Pareja
                </h4>
                <p className="mt-2">
                  Pochoclos grandes + 2 Gaseosas medianas + Nachos para
                  compartir
                </p>
              </li>
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Combo Familiar
                </h4>
                <p className="mt-2">
                  2 Pochoclos grandes + 4 Gaseosas medianas + 2 Nachos
                  individuales
                </p>
              </li>
            </ul>
          </motion.div>
          <Separator className="my-6" style={{ backgroundColor: "#D4BBFC" }} />
          <p className="text-center text-gray-700">
            Todos nuestros productos están disponibles en el mostrador de
            snacks. ¡Disfruta de tu película con nuestras deliciosas opciones!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
