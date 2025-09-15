import type z from "zod";

import type { CurrencySchema } from "../schemas/crypto-schema";
import type { CryptoCurrenciesResponseSchema, CryptoCurrencyResponseSchema } from "../schemas/crypto-currency-response-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>