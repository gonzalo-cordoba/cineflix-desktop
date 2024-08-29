import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";

interface NavigationButtonProps {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  children,
  style,
  className,
}) => {
  return (
    <Link href={href}>
      <button
        style={{
          borderRadius: "10px",
          ...style,
        }}
        className={`mt-2 px-6 py-3 w-64 lg:w-full ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};
