import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Nombre es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
