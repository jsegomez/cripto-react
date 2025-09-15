import { create } from "zustand";
import { getCryptos } from "../api/CryptoApi";

export const useCryptoStore = create(() =>({
    fetchCrypto: (limit: number, coin: string) => {
        const result = getCryptos(limit, coin);
        if(result) console.log(result)
    }
}))