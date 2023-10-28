import {z} from 'zod'

export const LoginSchema = z.object({
   username: z.string().min(1, "Your email address is required"),
         //  .email()
         //  .refine(value => value.endsWith("@cit.mak.ac.ug") || value.endsWith("@mak.ac.ug"), {
         //    message: "Please enter a valid university email address"
         //  }),
  password: z.string().min(1, "Your password is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;


export const RegistrationSchema = z.object({
  name: z.string().min(1, "Your full name is required"),
  username: z.string().min(1, "Your username is required"),
  registrationNumber: z.string().min(1, "Your registration name is required").optional(),
  university: z.string().optional(),
//   email: z.string().min(1, "Your university email address is required")
//           .email()
//           .refine(value => value.endsWith("@cit.mak.ac.ug") || value.endsWith("@mak.ac.ug"), {
//             message: "Please enter a valid university email address"
//           }),   
  password: z.string().min(8, "Your password is required").min(8, "Your password cannot be less than 8 characters"),
  confirmPassword: z.string(),

}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})

export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;
