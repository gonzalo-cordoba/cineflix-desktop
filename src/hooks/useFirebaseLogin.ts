import { useState } from "react";
import { FirebaseAuth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginData {
  email: string;
  password: string;
}

interface UseFirebaseLogin {
  loginUser: (data: LoginData) => Promise<LoginUserResult>;
  error: string | null;
  loading: boolean;
}

interface LoginUserResult {
  success: boolean;
  message?: string;
}

export const useFirebaseLogin = (): UseFirebaseLogin => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loginUser = async ({
    email,
    password,
  }: LoginData): Promise<LoginUserResult> => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(FirebaseAuth, email, password);
      setLoading(false);
      return { success: true };
    } catch (err: any) {
      setLoading(false);
      if (err.code === "auth/user-not-found") {
        setError("Usuario no encontrado.");
      } else if (err.code === "auth/wrong-password") {
        setError("Contraseña incorrecta.");
      } else {
        setError(err.message);
      }
      return { success: false, message: err.message };
    }
  };
  return { loginUser, error, loading };
};
