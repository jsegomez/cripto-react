import z from "zod";

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({        
        Name: z.string(),
        FullName: z.string()
    })
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);



