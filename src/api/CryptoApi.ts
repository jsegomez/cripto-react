import { isAxiosError } from "axios"
import api from "../utils/axios"

export const getCryptos = async(limit: number, coin: string) => {
    try {
        const { data } = await api.get(`/data/top/mktcapfull?limit=${limit}&tsym=${coin}`) 
        return data
    } catch (error) {
        if(isAxiosError(error)){
            throw new Error(error.response?.data.message)
        }
    }
}