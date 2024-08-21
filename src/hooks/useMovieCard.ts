import { useState, useEffect } from "react";

export function useMovieCard() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return {
    hoveredImage,
    isClient,
    handleMouseEnter,
    handleMouseLeave,
  };
}
