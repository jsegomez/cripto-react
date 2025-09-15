import axios from "axios";
import { envConfig } from "../config/env";

const api = axios.create({
    baseURL: envConfig.API_URL
});

export default api;