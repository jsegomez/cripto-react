import type z from "zod";
import type { CurrencySchema } from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>