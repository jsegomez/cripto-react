import { create } from "zustand";
import { getCryptos, getCrytoPrice } from "../api/CryptoApi";
import type { CryptoCurrency, CryptoPrice, CurrencyPair } from "../types";
import { devtools } from "zustand/middleware";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[];
    cryptoPrice: CryptoPrice | null,
    fetchCrypto: (limit: number, coin: string) => Promise<void>;
    getCrytoPrice: (values: CurrencyPair) => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(devtools(
    (set) => ({
        cryptoCurrencies: [],
        fetchCrypto: async (limit: number, coin: string) => {
            const data: CryptoCurrency[] = await getCryptos(limit, coin);        
            set(()=> ({ cryptoCurrencies: data }));
        },
        getCrytoPrice: async(values: CurrencyPair) =>{
            const data = await getCrytoPrice(values)            
            set( ()=>({cryptoPrice: data}) )
        }
    })
))