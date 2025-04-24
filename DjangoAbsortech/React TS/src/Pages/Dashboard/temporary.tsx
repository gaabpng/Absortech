
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
// Definição da interface para a estrutura dos dados
interface Leitura {
    andar: string;
    data: string;
    hora: string;
    valor_leitura: number;
}
export default function Homepage() {

        const [leituras, setLeituras] = useState<Leitura[]>([]);

        useEffect(() => {
            const fetchData = () => {
                axios
                    .get<Leitura[]>("http://localhost:8000/api/leituras/")
                    .then((response) => {
                        setLeituras(response.data);
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar leituras:", error);
                    });
            };

            fetchData(); // Busca os dados imediatamente ao carregar a página
            const interval = setInterval(fetchData, 5000); // Atualiza a cada 5 segundos

            return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
        }, []);

        return (
            <div>
                <h1>ABSORTECH</h1>
                <h2>Discrição e Dignidade</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Andar</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Valor Leitura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leituras.length > 0 ? (
                            leituras.map((leitura, index) => (
                                <tr key={index}>
                                    <td>{leitura.andar}</td>
                                    <td>{leitura.data}</td>
                                    <td>{leitura.hora}</td>
                                    <td>{leitura.valor_leitura}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>Nenhum dado disponível.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    };
