import { useNavigate } from "react-router-dom"
import instagram from "../../assets/InstagramLogo.png"
import Status from "../../componentes/Status"
import styles from "./styles.module.css"

export default function Dashboard () {
    
    const navigate = useNavigate()
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button
                    className={styles.buttonHomepage}
                    onClick={() => (navigate("/"))}>
                    Homepage
                </button>
                <h1 className={styles.title1}>CS & EPS</h1>
                <h1 className={styles.title2}>ABSORTECH</h1>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title3}>Contêineres - Prédio de Engenharia</h1>
                <div className={styles.statusDiv}>
                    <Status />
                </div>
            </main>

            <footer className={styles.footer}>
                <iframe
                    src="https://encurtador.com.br/DzsEf"
                    className={styles.iframeMap}
                    loading="lazy"></iframe>
                <div className={styles.infoDiv}>
                    <div className={styles.textDiv}>
                        <p className={styles.text}>Texto descrevendo</p>
                        <p className={styles.text}>Universidade Federal Fluminense - Instituto de Computação</p>
                        <p className={styles.text}>Avenida Gal. Milton Tavares de Souza, s/n</p>
                        <p className={styles.text}>São Domingos, Niterói, RJ - 24210-310</p>
                    </div>
                    <div className={styles.linkDiv}>
                        <a 
                            href="https://www.instagram.com/cseps.uff/" 
                            target="_blank"
                            className={styles.linkCSEPS}>
                            <img src={instagram} alt="Link para a CS & EPS" title="Logo do Instagram"/>
                            CS & EPS</a>
                        <a 
                            href="https://www.instagram.com/ieee.uff/" 
                            target="_blank"
                            className={styles.linkRamoUFF}>
                            <img src={instagram} alt="Link para o Ramo IEEE UFF" title="Logo do Instagram"/>
                            Ramo IEEE UFF</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}