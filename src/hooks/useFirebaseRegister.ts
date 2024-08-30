import { useState } from "react";
import { FirebaseAuth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface RegisterData {
  email: string;
  password: string;
  displayName?: string;
}

interface UseFirebaseRegister {
  registerUser: (data: RegisterData) => Promise<RegisterUserResult>;
  error: string | null;
  loading: boolean;
  showAlert: {
    type: "success" | "error";
    message: string;
  } | null;
}

interface RegisterUserResult {
  success: boolean;
  message?: string;
}

export const useFirebaseRegister = (): UseFirebaseRegister => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const registerUser = async ({
    email,
    password,
    displayName,
  }: RegisterData): Promise<RegisterUserResult> => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );

      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }

      setLoading(false);
      setShowAlert({ type: "success", message: "Registro exitoso" });
      return { success: true, message: "Registro exitoso" };
    } catch (err: any) {
      setLoading(false);

      if (err.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado en otra cuenta.");
        setShowAlert({
          type: "error",
          message: "Este correo ya está registrado en otra cuenta",
        });
      } else {
        setError(err.message);
        setShowAlert({
          type: "error",
          message: "Error al registrar el usuario",
        });
      }

      return { success: false, message: err.message };
    }
  };

  return { registerUser, error, loading, showAlert };
};
