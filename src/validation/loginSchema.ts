import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Correo electrónico inválido")
    .nonempty("El correo electrónico es obligatorio"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .nonempty("La contraseña es obligatoria"),
});
