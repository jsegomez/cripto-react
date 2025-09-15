import { create } from "zustand";
import { getCryptos } from "../api/CryptoApi";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-currency-response-schema";

export const useCryptoStore = create(() =>({
    fetchCrypto: async (limit: number, coin: string) => {
        const data = await getCryptos(limit, coin);        
        const result = CryptoCurrenciesResponseSchema.parse(data);
        console.log(result);        
    }
}))