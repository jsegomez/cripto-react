import { isAxiosError } from "axios"
import api from "../utils/axios"

export const getCryptos = async(limit: number, coin: string) => {
    try {
        const { data: { Data: response } } = await api.get(`/data/top/mktcapfull?limit=${limit}&tsym=${coin}`) 
        return response;
    } catch (error) {
        if(isAxiosError(error)){
            throw new Error(error.response?.data.message)
        }
    }
}