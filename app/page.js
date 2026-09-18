export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#inicio" className="logo">
            MC
          </a>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#certificados">Certificados</a>
            <a href="#contato">Contato</a>
            <a href="/forca">Jogo da Forca</a>
          </nav>
        </div>
      </header>

      <main>
        {/* =========================
            INÍCIO
        ========================= */}

        <section className="hero" id="inicio">
          <div className="hero-container">
            <div className="hero-content">
              <span className="status">
                <span className="status-dot"></span>
                Disponível para estágio
              </span>

              <h1>
                Maria Clara
                <span> de Oliveira</span>
              </h1>

              <h2>Estudante de Ciência da Computação</h2>

              <p className="hero-description">
                Estudante de Ciência da Computação interessada em programação,
                desenvolvimento de software e tecnologia, buscando transformar
                conhecimento em soluções práticas e continuar evoluindo na área.
              </p>

              <div className="hero-buttons">
                <a href="#projetos" className="button-primary">
                  Ver Projetos
                </a>

                <a
                  href="https://github.com/Clara-Barbosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-frame">
                <img
                  src="/perfil/maria-clara.jpeg"
                  alt="Foto de perfil de Maria Clara"
                  className="profile-image"
                />
              </div>

              <div className="decorative-dots">
                <span></span>
                <span></span>
                <span></span>

                <span></span>
                <span></span>
                <span></span>

                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SOBRE
        ========================= */}

        <section className="about" id="sobre">
          <div className="about-container">
            <div className="section-label">
              <span></span>
              SOBRE MIM
            </div>

            <div className="about-grid">
              <div className="about-content">
                <h2>
                  Um Pouco
                  <span> Sobre Mim</span>
                </h2>

                <p>
                  Sou estudante de Ciência da Computação e tenho interesse em
                  desenvolvimento de software, programação e tecnologia. Gosto de
                  aprender novas ferramentas e transformar conhecimentos em soluções
                  práticas.
                </p>

                <p>
                  Ao longo da graduação, venho desenvolvendo projetos acadêmicos e
                  ampliando meus conhecimentos em linguagens de programação,
                  desenvolvimento web, banco de dados e metodologias ágeis.
                </p>

                <p>
                  Atualmente, busco oportunidades que me permitam continuar evoluindo
                  tecnicamente, adquirir experiência prática e contribuir em projetos
                  reais na área de tecnologia.
                </p>
              </div>

              <div className="about-cards">
                <div className="about-card">
                  <span className="about-icon">🎓</span>

                  <p>FORMAÇÃO</p>

                  <strong>Ciência da Computação</strong>
                </div>

                <div className="about-card">
                  <span className="about-icon">📍</span>

                  <p>LOCALIZAÇÃO</p>

                  <strong>Recife, Pernambuco</strong>
                </div>

                <div className="about-card">
                  <span className="about-icon">💼</span>

                  <p>OBJETIVO</p>

                  <strong>Oportunidade na área de tecnologia</strong>
                </div>

                <div className="about-card">
                  <span className="about-icon">🌐</span>

                  <p>IDIOMAS</p>

                  <strong>Português • Inglês A1</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            HABILIDADES
        ========================= */}

        <section className="skills" id="habilidades">
          <div className="skills-container">
            <div className="section-label">
              <span></span>
              HABILIDADES
            </div>

            <div className="skills-title">
              <h2>
                Tecnologias e conhecimentos
                <span> que venho desenvolvendo</span>
              </h2>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>Frontend</h3>

                <div className="skill-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Next.js</span>
                </div>
              </div>

              <div className="skill-card">
                <h3>Programação</h3>

                <div className="skill-tags">
                  <span>Python</span>
                  <span>Java</span>
                  <span>C</span>
                  <span>Lógica de Programação</span>
                  <span>POO</span>
                  <span>Estruturas de Dados</span>
                </div>
              </div>

              <div className="skill-card">
                <h3>Banco de Dados</h3>

                <div className="skill-tags">
                  <span>SQL</span>
                  <span>PostgreSQL</span>
                </div>
              </div>

              <div className="skill-card">
                <h3>Ferramentas e Metodologias</h3>

                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>IntelliJ IDEA</span>
                  <span>Vercel</span>
                  <span>Scrum</span>
                  <span>Kanban</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PROJETOS
        ========================= */}

        <section className="projects" id="projetos">
          <div className="projects-container">
            <div className="section-label">
              <span></span>
              PROJETOS
            </div>

            <div className="projects-title">
              <h2>
                Alguns projetos
                <span> que já desenvolvi</span>
              </h2>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <img
                  src="/projetos/extrator-pdf.jpeg"
                  alt="Projeto Extrator de PDF desenvolvido para o 5º CTA"
                  className="project-image"
                />

                <div className="project-content">
                  <h3>Extrator de PDF — 5º CTA</h3>

                  <p>
                    Projeto acadêmico desenvolvido para o 5º CTA do Exército
                    Brasileiro, com foco na extração de informações de arquivos PDF e
                    criação da interface do sistema.
                  </p>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>Interface</span>
                    <span>Scrum</span>
                    <span>Trabalho em equipe</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <img
                  src="/projetos/olhos-de-aguia.jpeg"
                  alt="Projeto Olhos de Águia desenvolvido para o 5º CTA"
                  className="project-image"
                />

                <div className="project-content">
                  <h3>Olhos de Águia — 5º CTA</h3>

                  <p>
                    Projeto de robótica e visão computacional que envolveu a
                    construção de um drone e a realização de três masterclasses sobre
                    componentes de hardware e introdução à visão computacional.
                  </p>

                  <div className="project-tags">
                    <span>Robótica</span>
                    <span>Visão Computacional</span>
                    <span>Hardware</span>
                    <span>Apresentação técnica</span>
                  </div>
                </div>
              </article>

              <article className="project-card project-card-text">
                <div className="project-content">
                  <h3>Motor de Precificação Dinâmica</h3>

                  <p>
                    Projeto acadêmico desenvolvido com Java e JUnit, com foco em
                    lógica de negócio, testes e organização do código.
                  </p>

                  <div className="project-tags">
                    <span>Java</span>
                    <span>JUnit</span>
                    <span>Lógica</span>
                  </div>
                </div>
              </article>

              <article className="project-card project-card-text">
                <div className="project-content">
                  <h3>Sistema de Gerenciamento de Eventos</h3>

                  <p>
                    Projeto acadêmico desenvolvido com foco em Programação Orientada
                    a Objetos e organização das informações relacionadas a eventos.
                  </p>

                  <div className="project-tags">
                    <span>Java</span>
                    <span>POO</span>
                    <span>Estruturas de Dados</span>
                  </div>
                </div>
              </article>

              <article className="project-card project-card-text">
                <div className="project-content">
                  <h3>Portfólio Pessoal</h3>

                  <p>
                    Portfólio desenvolvido para a disciplina de Programação Web
                    Mobile, reunindo informações sobre minha formação, habilidades,
                    projetos e experiências acadêmicas.
                  </p>

                  <div className="project-tags">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>Vercel</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================
            CERTIFICADOS
        ========================= */}

        <section className="certificates" id="certificados">
          <div className="certificates-container">
            <div className="section-label">
              <span></span>
              CERTIFICADOS
            </div>

            <div className="certificates-title">
              <h2>
                Cursos e
                <span> certificados</span>
              </h2>
            </div>

            <div className="certificates-list">
              <div className="certificate-card">
                <span className="certificate-number">01</span>

                <div>
                  <h3>Técnico em Redes de Computadores</h3>
                  <p>ETE Governador Eduardo Campos</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">02</span>

                <div>
                  <h3>Programação Orientada a Objetos</h3>
                  <p>Em andamento</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">03</span>

                <div>
                  <h3>Oratória</h3>
                  <p>Grupo Voitto</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">04</span>

                <div>
                  <h3>HTML5</h3>
                  <p>Em andamento</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">05</span>

                <div>
                  <h3>Algoritmos e Aprendizado de Máquina</h3>
                  <p>DIO</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">06</span>

                <div>
                  <h3>Processamento e Limpeza de Dados em Python</h3>
                  <p>DIO</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">07</span>

                <div>
                  <h3>Processamento de Linguagem Neural</h3>
                  <p>DIO</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">08</span>

                <div>
                  <h3>Aplicações Práticas de Inteligência Artificial</h3>
                  <p>DIO</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">09</span>

                <div>
                  <h3>Introdução à Engenharia de Prompts</h3>
                  <p>DIO</p>
                </div>
              </div>

              <div className="certificate-card">
                <span className="certificate-number">10</span>

                <div>
                  <h3>Introdução a Banco de Dados Relacionais</h3>
                  <p>DIO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CONTATO
        ========================= */}

        <section className="contact" id="contato">
          <div className="contact-container">
            <div className="section-label">
              <span></span>
              CONTATO
            </div>

            <div className="contact-content">
              <div className="contact-text">
                <h2>
                  Entre em
                  <span> contato</span>
                </h2>

                <p>
                  Estou aberta a oportunidades de estágio e a novos projetos na área
                  de tecnologia.
                </p>
              </div>

              <div className="contact-cards">
                <a
                  href="mailto:mariaclarabarbosawork@gmail.com"
                  className="contact-card"
                >
                  <span className="contact-icon">✉</span>

                  <div>
                    <p>EMAIL</p>

                    <strong>
                      mariaclarabarbosawork@gmail.com
                    </strong>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/maria-clara-de-oliveira-barbosa-07457b364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <span className="contact-icon">in</span>

                  <div>
                    <p>LINKEDIN</p>

                    <strong>Maria Clara de Oliveira</strong>
                  </div>
                </a>

                <a
                  href="https://github.com/Clara-Barbosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <span className="contact-icon">&lt;/&gt;</span>

                  <div>
                    <p>GITHUB</p>

                    <strong>Clara-Barbosa</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          RODAPÉ
      ========================= */}

      <footer className="footer">
        <div className="footer-container">
          <a href="#inicio" className="footer-logo">
            MC
          </a>

          <p>
            Maria Clara de Oliveira • Ciência da Computação
          </p>

          <a href="#inicio" className="back-to-top">
            Voltar ao início ↑
          </a>
        </div>
      </footer>
    </>
  );
}