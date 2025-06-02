import React from "react";
import "./style.module.css";

const Homepage: React.FC = () => (
  <>
    <header>
      <div className="container">
        <div className="logo">CS & EPS</div>
        <nav className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>ABSORTECH</h1>
          <p>DIGNIDADE E DISCRIÇÃO</p>
        </div>
      </section>

      <section className="info-section purple-bg">
        <div className="container content-flex">
          <div className="placeholder-box"></div>
          <div className="text-content">
            <h2>Metas e nossos 4 “idade”</h2>
            <p>
              Um produto simples, prático, responsivo e escalável. Prático pela fácil instalação e baixa manutenção. Simples pelo visual limpo e elegante. Responsivo pela tecnologia eficiente. Escalável pelo uso de um sistema de comunicação otimizado e rápido entre contêineres.
            </p>
          </div>
        </div>
      </section>

      <section className="info-section purple-bg">
        <div className="container content-flex reverse">
          <div className="placeholder-box"></div>
          <div className="text-content">
            <h2>Contêiner Autômato</h2>
            <p>
              Um produto simples, prático, responsivo e escalável. Prático pela fácil instalação e baixa manutenção. Simples pelo visual limpo e elegante. Responsivo pela tecnologia eficiente. Escalável pelo uso de um sistema de comunicação otimizado e rápido entre contêineres.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Homepage;
