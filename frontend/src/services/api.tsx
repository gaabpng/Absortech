import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchLeituras = async () => {
    try {
        const response = await api.get("/leituras/");
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao buscar leituras: ${error}`);
    }
};

export default api;
