import styles from "./styles.module.css"

import { useQuery } from "react-query";
import { fetchLeituras } from "src/services/api";

interface Leitura {
    andar: string;
    data: string;
    hora: string;
    valor_leitura: number;
}

export default function Status () {  
    const { data: leituras } = useQuery<Leitura[]>('fetchLeituras', fetchLeituras, {
        refetchInterval: 5000,
        retry: false
    });

    return (
        <div>
            {leituras && leituras.length > 0 ? (
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
