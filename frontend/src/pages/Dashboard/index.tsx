import Status from "src/components/Status";
import styles from "./styles.module.css";

export default function Dashboard() {
  return (
    <section className={styles.dashboardSection}>
      <h1 className={styles.title}>Contêineres - Prédio de Engenharia</h1>
      <Status />
    </section>
  );
}
