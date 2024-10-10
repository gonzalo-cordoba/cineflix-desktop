"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Movie } from "@/lib/types";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter, useSearchParams } from "next/navigation";
import { useMovieCard } from "@/hooks/useMovieCard";
import * as motion from "framer-motion/client";
import Link from "next/link";

import { ColorRing } from "react-loader-spinner";
import { ArrowLeft } from "lucide-react";

interface TrailerResponse {
  id: number;
  results: { key: string; type: string; site: string }[];
}

interface MovieDetails {
  id?: number;
  title: string;
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  poster_path?: string;
  backdrop_path?: string;
}

export default function TrailerMovie() {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const router = useRouter();
  const { isClient } = useMovieCard();

  const searchParams = useSearchParams();
  const movieId = searchParams.get("id");

  const handleViewDetail = (movie: Movie) => {
    if (isClient) {
      router.push(
        `/dashboard/choicetickets?title=${encodeURIComponent(
          movie.title
        )}&poster=${encodeURIComponent(movie.poster_path)}`
      );
    } else {
      console.log("Router is not mounted yet");
    }
  };

  useEffect(() => {
    if (movieId) {
      const fetchMovieDetails = async () => {
        try {
          const response = await axiosInstance.get<MovieDetails>(
            `movie/${movieId}`
          );
          setMovieDetails(response.data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      };

      const fetchTrailer = async () => {
        try {
          const response = await axiosInstance.get<TrailerResponse>(
            `movie/${movieId}/videos`
          );
          const trailer = response.data.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          );
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        } catch (error) {
          console.error("Error fetching trailer:", error);
        }
      };

      fetchMovieDetails();
      fetchTrailer();
    }
  }, [movieId]);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const backgroundStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: movieDetails?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
      : "url('/placeholder.svg?height=1080&width=1920')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px) contrast(1.2)",
    transform: "scale(1.1)",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
    alignItems: "center",
  };

  const videoContainerStyle: React.CSSProperties = {
    aspectRatio: "16 / 9",
    backgroundColor: "#1a1a1a",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  };

  const iframeStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    border: "none",
  };

  const textContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    color: "white",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "1.2",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    color: "#d1d5db",
  };

  const detailsStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
    fontSize: "0.875rem",
  };

  const genreStyle: React.CSSProperties = {
    backgroundColor: "#D4BBFC",
    color: "black",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
  };

  const durationStyle: React.CSSProperties = {
    color: "#d1d5db",
  };

  const ratingStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const starStyle: React.CSSProperties = {
    color: "#fbbf24",
    marginRight: "0.25rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#9667E0",
    color: "white",
    padding: "0.75rem 2rem",
    fontSize: "1.125rem",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  if (!movieDetails) {
    return (
      <div className="flex justify-center items-center h-96">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#9667E0", "#9667E0", "#9667E0", "#9667E0", "#9667E0"]}
        />
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Cargando información de la película...</div>}>
      <div style={containerStyle}>
        <div style={backgroundStyle} />
        <div style={overlayStyle} />
        <div style={contentStyle}>
          <Link
            href="/"
            style={{
              color: "white",
              fontSize: "1.125rem",
              transition: "background-color 0.3s",
            }}
          >
            <ArrowLeft />
          </Link>
          <motion.div
            style={contentStyle}
            initial="hidden"
            animate="visible"
            variants={animation}
          >
            <div style={videoContainerStyle}>
              {trailerKey ? (
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Movie Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>No trailer available</p>
              )}
            </div>
            <div style={textContainerStyle}>
              <h1 style={titleStyle}>{movieDetails.title}</h1>
              <p style={descriptionStyle}>{movieDetails.overview}</p>
              <div style={detailsStyle}>
                <span style={genreStyle}>
                  Géneros: {movieDetails.genres.map((g) => g.name).join(", ")}
                </span>
                <span style={durationStyle}>
                  Duración: {movieDetails.runtime} minutos
                </span>
                <div style={ratingStyle}>
                  <span style={starStyle}>★</span>
                  <span>{movieDetails.vote_average}/10</span>
                </div>
              </div>
              <button
                style={buttonStyle}
                onClick={() => {
                  if (movieDetails?.id && movieDetails.poster_path) {
                    handleViewDetail({
                      id: movieDetails.id,
                      title: movieDetails.title,
                      poster_path: movieDetails.poster_path,
                    });
                  } else {
                    console.error("Movie ID or Poster Path is undefined");
                  }
                }}
              >
                Comprar Boletos
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
}
