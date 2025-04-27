import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"

interface Leitura {
    andar: string;
    data: string;
    hora: string;
    valor_leitura: number;
}

export default function Status () {
    
    const [leituras, setLeituras] = useState<Leitura[]>([]);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get<Leitura[]>("http://localhost:8000/api/leituras/")
                .then((response) => {
                    setLeituras(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar leituras: ", error);
                });
        };

        fetchData(); // Busca os dados imediatamente ao carregar a página
        const interval = setInterval(fetchData, 5000); // Atualiza a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);
    // <p>Não há dados disponíveis.</p>
    return (
        <div>
            {leituras.length > 0 ? (
                leituras.map((item, index) => (
                    <div key={index} className={styles.container}>
                        <p className={styles.text1}>{item.andar}</p>
                        <div className={styles.statusDiv}>
                            <p className={styles.text2}>
                                {item.valor_leitura > 3 ? "• Condição estável." : "• Alerta."}
                                - {item.valor_leitura} absorvente(s)</p>
                            <div className={item.valor_leitura >= 3 ? styles.greenSignal : styles.redSignal}></div>
                        </div>
                    </div>
                ))
            ) : (
                <p className={styles.text1}>Não há dados disponíveis.</p>
            )}
        </div>
    )
}