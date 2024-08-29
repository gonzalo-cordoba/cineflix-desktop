import React from "react";
import Image from "next/image";
import googleIcon from "../../../public/icono-google.svg";
import facebookIcon from "../../../public/icono-facebook.svg";

interface AuthButtonsProps {
  onGoogleSignIn: () => void;
  onFacebookSignIn: () => void;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({
  onGoogleSignIn,
  onFacebookSignIn,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={onGoogleSignIn}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
        className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-4 px-4 flex items-center justify-center gap-2 rounded transition-colors duration-300 hover:bg-blue-700"
        type="button"
      >
        <Image src={googleIcon} alt="Google Icon" width={24} height={24} />
        <span>Continuar con Google</span>
      </button>

      <button
        onClick={onFacebookSignIn}
        style={{
          backgroundColor: "#1877F2",
          color: "white",
          border: "none",
          borderRadius: "10px",
        }}
        className="w-full md:w-[500px] lg:w-[600px] h-[50px] mt-4 px-4 flex items-center justify-center gap-2 rounded transition-colors duration-300 hover:bg-blue-700"
        type="button"
      >
        <Image src={facebookIcon} alt="Facebook Icon" width={24} height={24} />
        <span>Continuar con Facebook</span>
      </button>
    </div>
  );
};
