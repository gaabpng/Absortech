import axios from "axios";

export let baseURL = '';
const url = window.location.host;

if (url.includes("localhost") || url.includes("127.0.0.1")) {
    baseURL = "http://localhost:80/api";
} else if (url.startsWith('ec2')) {
    baseURL = "http://ec2-54-175-178-188.compute-1.amazonaws.com:80/api"
}

const api = axios.create({
    baseURL: baseURL,
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
