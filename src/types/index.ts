import type z from "zod";

import type { CurrencySchema } from "../schemas/crypto-schema";
import type { CryptoCurrenciesResponseSchema, CryptoCurrencyResponseSchema } from "../schemas/crypto-currency-response-schema";
import type { PairSchema } from "../schemas/pair-schema";
import type { CryptoPriceSchema } from "../schemas/crypto-price-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>
export type CurrencyPair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
