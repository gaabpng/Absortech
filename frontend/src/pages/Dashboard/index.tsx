import Status from "src/components/Status"

import instagram from "assets/InstagramLogo.png"
import styles from "./styles.module.css"

import { useNavigate } from "react-router-dom"

export default function Dashboard () {
    const navigate = useNavigate()
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button
                    className={styles.buttonHomepage}
                    onClick={() => (navigate("/"))}>
                    ABSORTECH
                </button>
                <h1 className={styles.title1}>CS & EPS</h1>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title2}>Contêineres - Prédio de Engenharia</h1>
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
                        <p className={styles.text}>IC - Instituto de Computação</p>
                        <p className={styles.text}>UFF - Universidade Federal Fluminense</p>
                        <p className={styles.text}>Avenida Gal. Milton Tavares de Souza, s/n</p>
                        <p className={styles.text}>São Domingos, Niterói, RJ - 24210-310</p>
                    </div>
                    <div className={styles.linkDiv}>
                        <a 
                            href="https://www.instagram.com/cseps.uff/" 
                            target="_blank"
                            className={styles.link}>
                            <img 
                                src={instagram} 
                                alt="Link para a CS & EPS"
                                className={styles.image}
                                title="Logo do Instagram"/>
                            CS & EPS</a>
                        <a 
                            href="https://www.instagram.com/ieee.uff/" 
                            target="_blank"
                            className={styles.link}>
                            <img 
                                src={instagram} 
                                alt="Link para o Ramo IEEE UFF"
                                className={styles.image}
                                title="Logo do Instagram"/>
                            Ramo IEEE UFF</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}