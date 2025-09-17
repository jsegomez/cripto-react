import { create } from "zustand";
import { getCryptos, getCrytoPrice } from "../api/CryptoApi";
import type { CryptoCurrency, CryptoPrice, CurrencyPair } from "../types";
import { devtools } from "zustand/middleware";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[];
    cryptoPrice: CryptoPrice | null,
    isPending: boolean;
    fetchCrypto: (limit: number, coin: string) => Promise<void>;
    getCrytoPrice: (values: CurrencyPair) => Promise<void>;
}

export const useCryptoStore = create<CryptoStore>()(devtools(
    (set) => ({
        loading: false,
        cryptoCurrencies: [],
        fetchCrypto: async (limit: number, coin: string) => {
            const data: CryptoCurrency[] = await getCryptos(limit, coin);        
            set(()=> ({ cryptoCurrencies: data }));
        },
        getCrytoPrice: async(values: CurrencyPair) =>{
            set(()=>({ isPending: true }))
            const data = await getCrytoPrice(values)            
            set(()=>({cryptoPrice: data}))
            set(()=>({isPending: false }))
        }
    })
))