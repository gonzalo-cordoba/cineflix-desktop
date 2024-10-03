import { BannerCarrousel } from "@/components/component/banner-carrousel";
import { Cards } from "@/components/component/cards";
import { DropdownNavBar } from "@/components/component/dropdown-nav-bar";
import Promotions from "@/components/component/promotions";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { Movie, MoviesResponse } from "@/lib/types";
import * as motion from "framer-motion/client";

export default async function Home() {
  let movies: Movie[] = [];
  try {
    const response = await axiosInstance.get<MoviesResponse>("/movie/popular");
    movies = response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>;
  }

  return (
    <>
      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <BannerCarrousel />
      </motion.main>

      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mt-8 space-y-6 px-4 md:px-8 lg:px-16"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-extrabold text-2xl sm:text-small md:text-4xl lg:text-4xl text-center"
        >
          Descubre la cartelera en tu cine
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-3"
        >
          <Button
            className="font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3"
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "20px",
            }}
          >
            Cartelera
          </Button>
          <Button
            className="font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3"
            style={{
              backgroundColor: "#D4BBFC",
              color: "white",
              borderRadius: "20px",
            }}
          >
            Próximamente
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center bg-white bg-opacity-80 rounded-lg px-4 py-0 sm:px-6 sm:py-0"
          style={{
            backgroundColor: "#9667E0",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <DropdownNavBar />
        </motion.div>
        <motion.main
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Cards movies={movies} />
        </motion.main>
      </motion.main>

      <motion.main
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <Promotions />
      </motion.main>
    </>
  );
}
