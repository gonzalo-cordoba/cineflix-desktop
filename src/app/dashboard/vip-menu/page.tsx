import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/user";
import { Separator } from "@radix-ui/react-select";
import * as motion from "framer-motion/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MenuVip() {
  const vipMenuItems = [
    {
      name: "Pochoclos Gourmet",
      description: "Mezcla exclusiva de pochoclos con sabores únicos",
      image: "/popcorn.png",
    },
    {
      name: "Bebidas Premium",
      description: "Selección de refrescos y cócteles sin alcohol",
      image: "/popcorn.png",
    },
    {
      name: "Snacks Deluxe",
      description: "Variedad de aperitivos gourmet",
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
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: "#9667E0" }}
          >
            Menú VIP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 mb-6 text-center"
          >
            Disfruta de una experiencia cinematográfica de lujo con nuestro
            exclusivo Menú VIP
          </motion.p>
          <Separator className="my-6" style={{ backgroundColor: "#D4BBFC" }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vipMenuItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                key={index}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 rounded-full overflow-hidden mb-4"
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#9667E0" }}
            >
              Detalles del Menú VIP
            </h3>
            <ul className="space-y-4">
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Pochoclos Gourmet
                </h4>
                <p className="mt-2">
                  Nuestra mezcla exclusiva incluye pochoclos de maíz premium con
                  una selección de sabores gourmet como trufa, queso parmesano,
                  caramelo salado y chile lime. Preparados al momento para
                  garantizar la máxima frescura y sabor.
                </p>
              </li>
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Bebidas Premium
                </h4>
                <p className="mt-2">
                  Disfruta de una amplia selección de refrescos artesanales,
                  aguas saborizadas premium y cócteles sin alcohol preparados
                  por nuestros mixólogos. Incluye opciones como mojito de fresa
                  sin alcohol, limonada de lavanda y té helado de mango y
                  maracuyá.
                </p>
              </li>
              <li>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#9667E0" }}
                >
                  Snacks Deluxe
                </h4>
                <p className="mt-2">
                  Complementa tu experiencia con una variedad de aperitivos
                  gourmet, incluyendo chips vegetales, frutos secos tostados con
                  especias, mini sandwiches gourmet y una selección de
                  chocolates belgas. Todos nuestros snacks son preparados con
                  ingredientes de alta calidad.
                </p>
              </li>
            </ul>
          </motion.div>
          <Separator className="my-6" style={{ backgroundColor: "#D4BBFC" }} />
          <p className="text-center text-gray-700">
            El Menú VIP está diseñado para elevar tu experiencia
            cinematográfica. Disponible exclusivamente en nuestras salas VIP.
            Consulta con nuestro personal para más detalles y reservas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
