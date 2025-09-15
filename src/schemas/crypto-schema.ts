import z from "zod";

export const CurrencySchema = z.object({
    code: z.enum(['USD', 'MXN', 'EUR', 'GBP']),
    name: z.string()
})