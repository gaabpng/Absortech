import { useNavigate } from "react-router-dom";
import instagram from "../assets/InstagramLogo.png";
import youtube from "../assets/YoutubeLogo.jpeg";
import linkedin from "../assets/LinkedinLogo.png";
import twitter from "../assets/TwitterLogo.jpeg";
import poweredByLogo from "../assets/poweredby.jpeg"; // Logo para "Powered by", crie ou use um placeholder

import homepageImg from '../../assets/homepageImg.png'; // Sua imagem principal do topo (homepageImg.png)

// Caso coloquemos um componente para o menu hambúrguer.
// import MenuHamburguer from "../../componentes/MenuHamburguer";


// Caso a gente tenha um componente Status (que exibia contêineres), ele pode ser removido ou realocado
// import Status from "../../componentes/Status"; 

import styles from "./style.module.css";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* 1. Barra Superior Roxa Escura */}
      <header className={styles.topBarHeader}>
        <div className={styles.topBarLeft}>
          <button
            className={styles.buttonHomepage}
            onClick={() => navigate("/dashboard")} // Botão Dashboard
          >
            Dashboard
          </button>
        </div>
        <h1 className={styles.topBarCenterTitle}>CS & EPS</h1>
        <div className={styles.topBarRight}>
          {/* Ícone de Menu Hambúrguer (pode ser um componente próprio depois) */}
          <div className={styles.menuIcon}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Seção da Imagem de Fundo Superior (1/3 da tela)  Isso daqui ta bugado, não sei o porquê*/}
        <section className={styles.topImageSection} style={{ backgroundImage: `url(${homepageImg})` }}>
          <div className={styles.imageOverlay}></div>
          <div className={styles.topImageContent}>
            <h1>ABSORTECH</h1>
            <p>DIGNIDADE E DISCRIÇÃO</p>
          </div>
        </section>

        {/* 3. Seção de Blocos (Caixinhas) */}
        <section className={styles.textBlocksSection}>
          <div className={styles.textBlocksContainer}>
            {/* Bloco 1 */}
            <div className={styles.textBlock}>
              <div className={styles.yellowSquare}></div>
              <div className={styles.textBlockContent}>
                <h2>Processo Produtivo</h2>
                <p>
                  Detalhes sobre a fabricação e montagem de nossos produtos, garantindo alta qualidade e eficiência.
                </p>
              </div>
            </div>

            {/* Bloco 2 */}
            <div className={styles.textBlock}>
              <div className={styles.yellowSquare}></div>
              <div className={styles.textBlockContent}>
                <h2>Instalação e Manutenção</h2>
                <p>
                  Informações sobre a facilidade de instalação e as práticas de manutenção para a longevidade do produto.
                </p>
              </div>
            </div>

            {/* Bloco 3 */}
            <div className={styles.textBlock}>
              <div className={styles.yellowSquare}></div>
              <div className={styles.textBlockContent}>
                <h2>Tecnologia Integrada</h2>
                <p>
                  Exploração das tecnologias incorporadas que tornam nossos contêineres inteligentes e autônomos.
                </p>
              </div>
            </div>
            {/* Você pode adicionar mais blocos 'textBlock' se necessário, o flexbox cuidará do layout */}
          </div>
        </section>

        {/* Suas seções originais (.info-section) podem vir aqui.
            Ajustei o nome da classe para mainContentSection para dar mais clareza,
            e você pode decidir se quer o gradiente nelas ou um fundo sólido. */}
        <section className={`${styles.mainContentSection} ${styles.purpleGradientBackground}`}>
          <div className={`${styles.mainContentContainer} ${styles.contentFlex}`}>
            {/* Você pode substituir o placeholder-box por uma imagem real ou SVG */}
            <div className={styles.placeholderBox}></div>
            <div className={styles.textContent}>
              <h2>Metas e nossos 4 “idade”</h2>
              <p>
                Um produto simples, prático, responsivo e escalável. Prático pela fácil instalação e baixa manutenção. Simples pelo visual limpo e elegante. Responsivo pela tecnologia eficiente. Escalável pelo uso de um sistema de comunicação otimizado e rápido entre contêineres.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.mainContentSection} ${styles.purpleGradientBackground}`}>
          <div className={`${styles.mainContentContainer} ${styles.contentFlex} ${styles.reverse}`}>
            <div className={styles.placeholderBox}></div>
            <div className={styles.textContent}>
              <h2>Contêiner Autômato</h2>
              <p>
                Um produto simples, prático, responsivo e escalável. Prático pela fácil instalação e baixa manutenção. Simples pelo visual limpo e elegante. Responsivo pela tecnologia eficiente. Escalável pelo uso de um sistema de comunicação otimizado e rápido entre contêineres.
              </p>
            </div>
          </div>
        </section>

        {/* Emanuel caso vc ache importante ter o componente Status na Homepage, você pode colocá-lo aqui */}
        {/* <section className={styles.statusSection}>
            <h1 className={styles.title2}>Contêineres - Prédio de Engenharia</h1>
            <div className={styles.statusDiv}>
              <Status />
            </div>
        </section> */}

      </main>

      {/* 4. Rodapé */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <p><a href="#">Termos de Uso</a></p>
          <p><a href="#">Política de Privacidade</a></p>
        </div>

        <div className={styles.footerCenter}>
          <p className={styles.poweredByText}>Powered by</p>
          <img src={poweredByLogo} alt="Powered by Logo" className={styles.poweredByLogo} />
        </div>

        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/cseps.uff/" target="_blank" title="Instagram CS & EPS">
              <img src={instagram} alt="Instagram Logo" />
            </a>
            <a href="https://www.youtube.com/your-channel" target="_blank" title="YouTube CS & EPS">
              <img src={youtube} alt="YouTube Logo" />
            </a>
            <a href="https://www.linkedin.com/your-company" target="_blank" title="LinkedIn CS & EPS">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
            <a href="https://twitter.com/your-account" target="_blank" title="Twitter CS & EPS">
              <img src={twitter} alt="Twitter Logo" />
            </a>
          </div>
        </div>
        {/* Emanuel se você quiser colocar o iframe de mapa adiciona ele aqui
            e estilizar com as classes do footer. Talvez em uma div separada ou acima dos links. */}
        {/* <iframe
            src="https://encurtador.com.br/DzsEf"
            className={styles.iframeMap}
            loading="lazy"></iframe> */}
      </footer>
    </div>
  );
}
