"use client";

import { GetServerSideProps } from "next";
import axiosInstance from "@/lib/axiosInstance";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Movie, MoviesResponse } from "@/lib/types";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useMovieCard } from "@/hooks/useMovieCard";

interface HomeProps {
  movies: Movie[];
}

export function Cards({ movies }: HomeProps) {
  const router = useRouter();

  const { hoveredImage, isClient, handleMouseEnter, handleMouseLeave } =
    useMovieCard();

  const handleViewDetail = (id: number) => {
    if (isClient) {
      router.push(`/movie/${id}`);
    } else {
      console.log("Router is not mounted yet");
    }
  };

  const navigateToMovieDetail = (movieId: string) => {
    if (isClient) {
      router.push(`/movies/${movieId}`);
    } else {
      console.error("Router is not mount yet");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <Card
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      style={{ border: "none", boxShadow: "none" }}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(movie.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            margin: "8px",
          }}
        >
          <div
            className="relative transform transition-transform duration-300"
            style={{
              transform: hoveredImage === movie.id ? "scale(1.05)" : "scale(1)",
              boxShadow:
                hoveredImage === movie.id
                  ? "0 4px 8px rgba(0, 0, 0, 0.3)"
                  : "0 2px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: "15px",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={250}
              className="w-full h-128 object-contain"
              style={{
                width: "auto",
                height: "auto",
                objectFit: "contain",
                boxShadow: "inherit",
                borderRadius: "15px",
              }}
            />

            <Button
              className="absolute bottom-16 w-full text-lg font-extrabold transition-opacity duration-300"
              style={{
                backgroundColor: "#D4BBFC",
                color: "white",
                opacity: hoveredImage === movie.id ? 1 : 0,
                visibility: hoveredImage === movie.id ? "visible" : "hidden",
                boxShadow: "inherit",
                borderRadius: "10px",
              }}
              onClick={() => handleViewDetail(movie.id)}
            >
              Comprar entradas
            </Button>

            <Button
              className="absolute bottom-4 w-full text-lg font-extrabold transition-opacity duration-300"
              style={{
                backgroundColor: "transparent",
                color: "white",
                opacity: hoveredImage === movie.id ? 1 : 0,
                visibility: hoveredImage === movie.id ? "visible" : "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
                border: "none",
                borderRadius: "10px",
              }}
              onClick={() => handleViewDetail(movie.id)}
            >
              <InfoCircledIcon className="pr-1 w-6 h-6" />
              Ver detalle
            </Button>
          </div>
        </div>
      ))}
    </Card>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await axiosInstance.get<MoviesResponse>(
      "movie/now_playing"
    );
    const movies = response.data.results;

    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    return {
      props: {
        movies: [],
      },
    };
  }
};

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
