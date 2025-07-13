import styles from "./styles.module.css"

import { fetchLeituras } from "src/services/api";
import { useQuery } from "react-query";

interface Leitura {
    andar: string;
    data: string;
    hora: string;
    valor_leitura: number;
}

export default function Status () {  
    const { data: leituras, isLoading, error } = useQuery<Leitura[]>('fetchLeituras', fetchLeituras, {
        refetchInterval: 5000,
        retry: false
    });

    // Mostrar loading
    if (isLoading) {
        return (
            <div className={styles.container}>
                <p className={styles.text1}>Carregando dados...</p>
            </div>
        );
    }

    // Mostrar erro
    if (error) {
        return (
            <div className={styles.container}>
                <p className={styles.text1}>Erro ao carregar dados.</p>
            </div>
        );
    }

    // Mostrar mensagem se não houver leituras
    if (!leituras || !Array.isArray(leituras) || leituras.length === 0) {
        return (
            <div className={styles.container}>
                <p className={styles.text1}>Não há dados disponíveis.</p>
            </div>
        );
    }

    return (
        <div>
            {leituras.map((item, index) => (
                <div key={index} className={styles.container}>
                    <p className={styles.text1}>{item.andar}</p>
                    <div className={styles.statusDiv}>
                        <p className={styles.text2}>
                            {item.valor_leitura > 3 ? "• Condição estável." : "• Alerta."}
                            - {item.valor_leitura} absorvente(s)
                        </p>
                        <div className={item.valor_leitura >= 3 ? styles.greenSignal : styles.redSignal}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}