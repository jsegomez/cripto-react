import z from "zod";

export const PairSchema = z.object({
    currency: z.string(),
    cryptoCurrency: z.string()
});