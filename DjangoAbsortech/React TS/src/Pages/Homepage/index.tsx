import React from 'react';
import styles from './style.module.css';

const WebPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.logo}>CS & EPS</div>
        <div className={styles.menuIcon}>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
          <div className={styles.menuLine}></div>
        </div>
      </header>

      {/* Seção Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div> {/* Camada para escurecer a imagem se necessário */}
        <div className={styles.heroContent}>
          <h1>ABSORTECH</h1>
          <p>DIGNIDADE E DISCRIÇÃO</p>
        </div>
      </section>

      {/* Seção Metas */}
      <section className={`${styles.contentSection} ${styles.metasSection}`}>
        <div className={styles.yellowBox}></div>
        <div className={styles.textContent}>
          <h2>Metas e nossos 4 “idade”</h2>
          <p>
            Um produto simples, prático, responsivo e escalável. Prático pela fácil instalação e baixa
            manutenção. Simples pelo visual limpo e elegante. Responsivo pela tecnologia
            eficiente. Escalável pelo uso de um sistema de comunicação otimizado e rápido entre
            contêineres.
          </p>
        </div>
      </section>

      {/* Seção Contêiner */}
      <section className={`${styles.contentSection} ${styles.containerSection}`}>
        <div className={styles.textContent}>
          <h2>Conteiner Autômato</h2>
          <p>
            Um produto simples, prático, responsivo e escalável. Prático pela fácil instalação e baixa
            manutenção. Simples pelo visual limpo e elegante. Responsivo pela tecnologia
            eficiente. Escalável pelo uso de um sistema de comunicação otimizado e rápido entre
            contêineres.
          </p>
        </div>
        <div className={styles.yellowBox}></div>
      </section>
    </div>
  );
};

export default WebPage;
