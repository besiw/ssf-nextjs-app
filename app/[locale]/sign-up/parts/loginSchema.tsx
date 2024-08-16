import z from "zod";

export const loginSchema = z.object({
  userName: z.string().email(),
  password: z.string().min(8),
  email: z.string(),
});

export type User = z.infer<typeof loginSchema>;
