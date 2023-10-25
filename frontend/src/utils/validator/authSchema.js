import * as z from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must have at least 3 character' })
    .max(10, { message: 'Maximum character for username is 10' }),
  password: z.string().min(8, { message: 'Password must have at least 8 character' }),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username must have at least 3 character' })
      .max(10, { message: 'Maximum character for username is 10' }),
    password: z.string().min(8, { message: 'Password must have at least 8 character' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm password must have at least 8 character' }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
