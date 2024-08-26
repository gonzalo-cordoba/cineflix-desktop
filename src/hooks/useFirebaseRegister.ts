import { useState } from "react";
import { FirebaseAuth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface RegisterData {
  email: string;
  password: string;
  displayName?: string;
}

interface useFirebaseRegister {
  registerUser: (data: RegisterData) => Promise<void>;
  error: string | null;
  loading: boolean;
}

export const useFirebaseRegister = (): useFirebaseRegister => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async ({
    email,
    password,
    displayName,
  }: RegisterData) => {
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
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { registerUser, error, loading };
};
