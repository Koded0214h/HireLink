import z from "zod";

export const postNewJobFormSchema = z.object({
    jobTitle: z.string({message: "Please fill this field."}).trim().min(3, {message: "Minimum of 3 characters"}),
    location: z.string({message: "Please fill this field."}).trim(),
    jobType: z.enum(["full-time", "part-time", "remote", "contract"], {message: "Please select a field"}),
    minSalary: z.string().optional(),
    maxSalary: z.string().optional(),
    jobDesc: z.string({message: "Provide a brief JD"}),
    requirement: z.string({message: "Provide requirements for the jub"})
})

export type postNewJobFormSchemaType = z.infer<typeof postNewJobFormSchema>