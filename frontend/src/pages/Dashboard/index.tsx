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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.4987753989867!2d-43.13047291210388!3d-22.904401404628768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1745450252013!5m2!1spt-BR!2sbr"
                className={styles.iframeMap}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                allowFullScreen
                ></iframe>
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