import { useState } from "react";
import { FirebaseAuth } from "@/firebase/firebase";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { signIn } from "next-auth/react";

interface LoginData {
  email: string;
  password: string;
}

interface UseFirebaseLogin {
  loginUser: (data: LoginData) => Promise<LoginUserResult>;
  error: string | null;
  loading: boolean;
  user: User | null;
}

interface LoginUserResult {
  success: boolean;
  user?: User;
  message?: string;
}

export const useFirebaseLogin = (): UseFirebaseLogin => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const loginUser = async ({
    email,
    password,
  }: LoginData): Promise<LoginUserResult> => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      setUser(userCredential.user);

      await signIn("credentials", {
        email,
        token: await userCredential.user.getIdToken(),
        callbackUrl: "/",
      });

      setLoading(false);
      return { success: true, user: userCredential.user };
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
  return { loginUser, error, loading, user };
};
