import { GetServerSideProps } from "next";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import { Movie, MoviesResponse } from "@/lib/types";

interface HomeProps {
  movies: Movie[];
}

export default function CardsMovies({ movies }: HomeProps) {
  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full"
              width={500}
              height={750}
            />
            <h2 className="font-extrabold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await axiosInstance.get<MoviesResponse>("/movie/popular");
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
