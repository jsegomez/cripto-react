import api from "../utils/axios"
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-currency-response-schema";
import type { CryptoCurrency, CryptoPrice, CurrencyPair } from "../types";
import { CryptoPriceSchema } from "../schemas/crypto-price-schema";

export const getCryptos = async(limit: number, coin: string): Promise<CryptoCurrency[]> => {
    try {
        const { data: { Data: response } } = await api.get(`/data/top/mktcapfull?limit=${limit}&tsym=${coin}`);
        const result = CryptoCurrenciesResponseSchema.safeParse(response);
        
        if(!result.success) throw new Error('Error al validar los datos de la API');
        else return result.data;
    } catch (error) {        
        if(error instanceof Error) throw error;        
        else throw new Error('Error al obtener los datos de criptomonedas');
    }
}

export const getCrytoPrice = async(values: CurrencyPair): Promise<CryptoPrice>=>{
    try {
        const { data: { DISPLAY } } = await api.get(`/data/pricemultifull?fsyms=${values.cryptoCurrency}&tsyms=${values.currency}`);        
        const result = CryptoPriceSchema.safeParse(DISPLAY[values.cryptoCurrency][values.currency]);        
        if(result.success) return result.data;
        else throw new Error('Error al obtener datos');
    } catch (error) {
        if(error instanceof Error) throw error;        
        else throw new Error();
    }
}