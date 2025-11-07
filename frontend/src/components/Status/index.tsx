import styles from "./styles.module.css";
import { fetchLeituras } from "src/services/api";
import { useQuery } from "react-query";

interface Leitura {
  andar: string;
  data: string;
  hora: string;
  valor_leitura: number;
}

export default function Status() {
  const EMPTY_HEIGHT = 20.73; // Sensor reading when empty (cm)
  const USABLE_HEIGHT = 15;   // Maximum fillable height (cm)
  const MAX_PADS = 12;        // How many pads fit in 15cm

  const calculatePads = (sensorReading: number): number => {
    // Calculate height occupied by pads
    const occupiedHeight = EMPTY_HEIGHT - sensorReading;
    const validHeight = Math.max(0, Math.min(occupiedHeight, USABLE_HEIGHT));
    
    // Rule of three: if 15cm = MAX_PADS, then validHeight = ?
    // pads = (validHeight * MAX_PADS) / USABLE_HEIGHT
    const padQuantity = (validHeight * MAX_PADS) / USABLE_HEIGHT;
    
    return Math.round(padQuantity);
  };

  const {
    data: leituras,
    isLoading,
    error,
  } = useQuery<Leitura[]>("fetchLeituras", fetchLeituras, {
    refetchInterval: 5000,
    retry: false
  });

  // Show loading
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Carregando dados...</p>
      </div>
    );
  }

  // Show error
  if (error) {
    return (
      <div className={styles.loadingContainer}>
        <p>Erro ao carregar dados. Tente novamente.</p>
      </div>
    );
  }

  // Show message if no readings available
  if (!leituras || !Array.isArray(leituras) || leituras.length === 0) {
    return (
      <div className={styles.loadingContainer}>
        <p>Não há dados disponíveis.</p>
      </div>
    );
  }

  return (
    <div className={styles.status}>
      {leituras.map((item, index) => {
        const quantidadeAbsorventes = calculatePads(item.valor_leitura);
        
        return (
          <div key={index} className={styles.container}>
            <p className={styles.text1}>Andar {item.andar}</p>
            <div className={styles.statusDiv}>
              <p className={styles.text2}>
                {quantidadeAbsorventes > 3 ? "• Condição estável" : "• Alerta"} -{" "}
                {quantidadeAbsorventes} absorvente{quantidadeAbsorventes !== 1 ? "s" : ""}
              </p>
              <div
                className={
                  quantidadeAbsorventes >= 3 ? styles.greenSignal : styles.redSignal
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
