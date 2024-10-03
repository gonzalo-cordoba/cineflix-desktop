import Link from "next/link";
import * as motion from "framer-motion/client";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#9667E0] text-white shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4"
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row">
          <ul className="flex flex-col mb-6 md:mb-0">
            <li>
              <Link
                href="#"
                className="text-2xl font-bold hover:bg-[#7b4dc4] p-2 rounded"
                style={{ color: "white" }}
              >
                Cartelera
              </Link>
            </li>
            <ul className="ml-6 font-light space-y-2">
              <li style={{ color: "white" }}>Preventas</li>
              <li style={{ color: "white" }}>Garantía Cineflix</li>
              <li style={{ color: "white" }}>Muestras</li>
              <li style={{ color: "white" }}>Próximos estrenos</li>
            </ul>
          </ul>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link
                href="#"
                className="text-2xl font-bold hover:bg-[#7b4dc4] p-2 rounded"
                style={{ color: "white" }}
              >
                ¿Quienes somos?
              </Link>
              <ul className="ml-6 font-light space-y-2">
                <li style={{ color: "white" }}>Proovedores</li>
                <li style={{ color: "white" }}>Trabaja en Cineflix</li>
                <li style={{ color: "white" }}>Coorporativo</li>
                <li style={{ color: "white" }}>Próximas aperturas</li>
                <li style={{ color: "white" }}>Cineflix media</li>
              </ul>
            </li>
            <li>
              <Link
                href="#"
                className="text-2xl font-bold hover:bg-[#7b4dc4] p-2 rounded"
                style={{ color: "white" }}
              >
                Legales
              </Link>
              <ul className="ml-6 font-light space-y-2">
                <li style={{ color: "white" }}>Terminos y condiciones</li>
                <li style={{ color: "white" }}>Avisos de privacidad</li>
                <li style={{ color: "white" }}>Terminos Cineflix</li>
                <li style={{ color: "white" }}>
                  Terminos y condiciones tickets
                </li>
                <li style={{ color: "white" }}>Código de conducta</li>
              </ul>
            </li>
            <li>
              <Link
                href="#"
                className="text-2xl font-bold hover:bg-[#7b4dc4] p-2 rounded"
                style={{ color: "white" }}
              >
                Contacto
              </Link>
              <ul className="ml-6 font-light space-y-2">
                <li style={{ color: "white" }}>Facturacion electronica</li>
                <li style={{ color: "white" }}>cineflixsoporte@gmail.com</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#7b4dc4] p-2 rounded"
            style={{ color: "white" }}
          >
            <svg
              className="h-10 w-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#7b4dc4] p-2 rounded"
            style={{ color: "white" }}
          >
            <svg
              className="h-10 w-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-6 pt-4 text-center text-sm" style={{ color: "white" }}>
        <p>
          &copy; {new Date().getFullYear()} CineFlix. Todos los derechos
          reservados.
        </p>
      </div>
    </motion.footer>
  );
}
