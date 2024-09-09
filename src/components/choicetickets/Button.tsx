import React from "react";

type Props = {
  label: string;
  color?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ label, color = "blue", onClick }) => {
  return (
    <button
      className="flex items-center justify-center rounded-lg px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:text-lg lg:text-xl"
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: 10,
        width: "100%",
        maxWidth: "200px",
        height: "40px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
