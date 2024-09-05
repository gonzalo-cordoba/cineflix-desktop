import { useState, useRef, useEffect } from "react";

export function useDropdown() {
  const [dropdownContent, setDropdownContent] = useState<React.ReactNode>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (content: React.ReactNode, identifier: string) => {
    setDropdownContent(content);
    setActiveDropdown(identifier);
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
      setActiveDropdown(null);
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
    setActiveDropdown,
    setDropdownContent,
  };
}
