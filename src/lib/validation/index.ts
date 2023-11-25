import * as z from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: 'Name too short'}),
    username: z.string().min(2, {message: 'Username too short'}),
    email: z.string().email(),
    password : z.string().min(8, {message: 'Password too short'})
})
export const SignInValidation = z.object({
  email: z.string().email(),
  password : z.string().min(8, {message: 'Password too short'})
})
