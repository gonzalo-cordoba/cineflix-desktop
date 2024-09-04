import { useState, useRef, useEffect } from "react";

export function useDropdown() {
  const [dropdownContent, setDropdownContent] = useState<React.ReactNode>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Agregar estado para controlar dropdown activo en móvil
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (content: React.ReactNode, identifier: string) => {
    setDropdownContent(content);
    setActiveDropdown(identifier); // Usar identificador para el dropdown activo
  };

  const handleMouseLeaveDropdown = () => {
    if (!isDropdownHovered) {
      setDropdownContent(null);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownContent(null);
      setActiveDropdown(null); // Cerrar dropdown activo al hacer clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    dropdownContent,
    isDropdownHovered,
    setIsDropdownHovered,
    dropdownRef,
    handleMouseEnter,
    handleMouseLeaveDropdown,
    activeDropdown,
    setActiveDropdown, // Exponer setter de activeDropdown
  };
}
