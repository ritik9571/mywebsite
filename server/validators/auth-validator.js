const {z} = require("zod");

// creating an object schema

const signupSchema = z.object({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars. "})
    .max(255, { message: "Name must not be more than 255 characters" }),

    email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({message: "Invalid email address"})
    .min(3, { message: "email must be at least of 3 chars. "})
    .max(255, { message: "Email must not be more than 255 characters" }),

    phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 chars. "})
    .max(20, { message: "Name must not be more than 20 characters" }),

    password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 9 chars. "})
    .max(20, { message: "Password must not be more than 20 characters" }),

});

module.exports = signupSchema;