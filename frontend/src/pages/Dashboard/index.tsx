import { useNavigate } from "react-router-dom";
import Status from "../../componentes/Status";
import styles from "./styles.module.css";
import homeStyles from "../Homepage/styles.module.css"; 
import instagram from "../../assets/InstagramLogo.png";
import youtube from "../../assets/youtubeLogo.png";
import linkedin from "../../assets/linkedlnLogo.png"; 
import facebook from "../../assets/facebookLogo.png";
import poweredByLogo from "../../assets/PoweredBy.png";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={homeStyles.container}>
      {/* 1. HEADER PADRONIZADO (copiado da Homepage) */}
      <header className={homeStyles.topBarHeader}>
        <div className={homeStyles.topBarLeft}>
          <button
            className={homeStyles.buttonHomepage}
            onClick={() => navigate("/")} // Modificado para voltar para a Homepage
          >
            Homepage 
          </button>
        </div>
        <h1 className={homeStyles.topBarCenterTitle}>CS EPS & WIE</h1>
        <div className={homeStyles.topBarRight}>
          <div className={homeStyles.menuIcon}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL DA DASHBOARD */}
      <main className={styles.dashboardMainContent}>
        <h1 className={styles.title}>Contêineres - Prédio de Engenharia</h1>
        <div className={styles.statusDiv}>
          <Status />
          {/* Você pode adicionar mais componentes Status aqui se precisar */}
        </div>
      </main>

      {/* 3. FOOTER PADRONIZADO (copiado da Homepage) */}
      <footer className={homeStyles.footer}>
        <div className={homeStyles.footerLeft}>
          <p><a href="#">Termos de Uso</a></p>
          <p><a href="#">Política de Privacidade</a></p>
        </div>

        <div className={homeStyles.footerCenter}>
          <p className={homeStyles.poweredByText}>Powered by</p>
          <a href="https://edu.ieee.org/br-uff/" target="_blank" rel="noopener noreferrer" title="Powered by UFF">
            <img src={poweredByLogo} alt="Powered by Logo" className={homeStyles.poweredByLogo} />
          </a>
          <p className={homeStyles.footerText}>© 2024 CS EPS & WIE. Todos os direitos reservados.</p>
        </div>

        <div className={homeStyles.footerRight}>
          <div className={homeStyles.socialIcons}>
            <a href="https://www.instagram.com/ieee.uff/" target="_blank" rel="noopener noreferrer" title="Instagram IEEE UFF">
              <img src={instagram} alt="Instagram Logo" />
            </a>
            <a href="https://www.youtube.com/user/ieeeuffsb" target="_blank" rel="noopener noreferrer" title="YouTube IEEE UFF">
              <img src={youtube} alt="YouTube Logo" />
            </a>
            <a href="https://br.linkedin.com/company/ramo-estudantil-ieee-uff" target="_blank" rel="noopener noreferrer" title="LinkedIn IEEE UFF">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
            <a href="https://twitter.com/your-account" target="_blank" rel="noopener noreferrer" title="Facebook IEEE UFF">
              <img src={facebook} alt="Facebook Logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
