import z from "zod";

export const loginSchema = z.object({
  userName: z.string().email(),
  password: z.string().min(8),
});

export type User = z.infer<typeof loginSchema>;
