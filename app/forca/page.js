"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./forca.module.css";

const palavras = [
  "PIZZA",
  "LASANHA",
  "HAMBURGUER",
  "COXINHA",
  "PASTEL",
  "TAPIOCA",
  "CUSCUZ",
  "FEIJOADA",
  "MACARRAO",
  "ARROZ",
  "FEIJAO",
  "BATATA",
  "QUEIJO",
  "PIPOCA",
  "BOLO",
  "BRIGADEIRO",
  "SORVETE",
  "CHOCOLATE",
  "BISCOITO",
  "PANQUECA",
  "WAFFLE",
  "SANDUICHE",
  "CACHORROQUENTE",
  "EMPADA",
  "PUDIM",
  "MOUSSE",
  "PAODEQUEIJO",
  "SALADA",
  "OMELETE",
  "STROGONOFF",
  "ESCONDIDINHO",
  "ACARAJE",
  "CHURRASCO",
  "RISOTO",
  "TORTA",
  "CROISSANT",
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const MAX_ERROS = 6;

export default function Forca() {
  const [palavra, setPalavra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
  }

  function iniciarNovoJogo() {
    setPalavra(sortearPalavra());
    setLetrasUsadas([]);
  }

  const letrasErradas = letrasUsadas.filter(
    (letra) => !palavra.includes(letra)
  );

  const letrasCorretas = letrasUsadas.filter((letra) =>
    palavra.includes(letra)
  );

  const erros = letrasErradas.length;

  const tentativasRestantes = MAX_ERROS - erros;

  const venceu =
    palavra.length > 0 &&
    palavra.split("").every((letra) => letrasUsadas.includes(letra));

  const perdeu = erros >= MAX_ERROS;

  function escolherLetra(letra) {
    if (letrasUsadas.includes(letra) || venceu || perdeu) {
      return;
    }

    setLetrasUsadas((letrasAnteriores) => [
      ...letrasAnteriores,
      letra,
    ]);
  }

  function mostrarPalavra() {
    return palavra.split("").map((letra, index) => {
      const mostrarLetra =
        letrasUsadas.includes(letra) || perdeu;

      return (
        <span
          key={`${letra}-${index}`}
          className={styles.letraPalavra}
        >
          {mostrarLetra ? letra : "_"}
        </span>
      );
    });
  }

  return (
    <main className={styles.pagina}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            MC
          </Link>

          <Link href="/" className={styles.voltar}>
            ← Voltar ao portfólio
          </Link>
        </div>
      </header>

      <section className={styles.conteudo}>
        <div className={styles.tituloArea}>
          <span className={styles.etiqueta}>
            DESAFIO DE PALAVRAS
          </span>

          <h1>
            Jogo da
            <span> Forca</span>
          </h1>

          <p>
            Descubra qual é a comida antes que suas tentativas acabem.
          </p>
        </div>

        <div className={styles.jogo}>
          <div className={styles.painelForca}>
            <div className={styles.tentativas}>
              <p>TENTATIVAS RESTANTES</p>

              <strong>{tentativasRestantes}</strong>

              <span>de {MAX_ERROS}</span>
            </div>

            <div className={styles.desenho}>
              <svg
                viewBox="0 0 260 280"
                className={styles.svgForca}
                aria-label="Desenho do jogo da forca"
              >
                <line
                  x1="30"
                  y1="250"
                  x2="210"
                  y2="250"
                  className={styles.linhaForca}
                />

                <line
                  x1="70"
                  y1="250"
                  x2="70"
                  y2="30"
                  className={styles.linhaForca}
                />

                <line
                  x1="70"
                  y1="30"
                  x2="180"
                  y2="30"
                  className={styles.linhaForca}
                />

                <line
                  x1="180"
                  y1="30"
                  x2="180"
                  y2="65"
                  className={styles.linhaForca}
                />

                {erros >= 1 && (
                  <circle
                    cx="180"
                    cy="88"
                    r="23"
                    className={styles.corpo}
                  />
                )}

                {erros >= 2 && (
                  <line
                    x1="180"
                    y1="111"
                    x2="180"
                    y2="175"
                    className={styles.corpo}
                  />
                )}

                {erros >= 3 && (
                  <line
                    x1="180"
                    y1="128"
                    x2="145"
                    y2="153"
                    className={styles.corpo}
                  />
                )}

                {erros >= 4 && (
                  <line
                    x1="180"
                    y1="128"
                    x2="215"
                    y2="153"
                    className={styles.corpo}
                  />
                )}

                {erros >= 5 && (
                  <line
                    x1="180"
                    y1="175"
                    x2="150"
                    y2="215"
                    className={styles.corpo}
                  />
                )}

                {erros >= 6 && (
                  <line
                    x1="180"
                    y1="175"
                    x2="210"
                    y2="215"
                    className={styles.corpo}
                  />
                )}
              </svg>
            </div>
          </div>

          <div className={styles.painelJogo}>
            <div className={styles.palavra}>
              {palavra ? mostrarPalavra() : "Carregando..."}
            </div>

            {!venceu && !perdeu && (
              <p className={styles.instrucao}>
                Escolha uma letra:
              </p>
            )}

            {venceu && (
              <div
                className={`${styles.resultado} ${styles.vitoria}`}
              >
                <span>✓</span>

                <div>
                  <strong>Você acertou!</strong>
                  <p>A palavra era {palavra}.</p>
                </div>
              </div>
            )}

            {perdeu && (
              <div
                className={`${styles.resultado} ${styles.derrota}`}
              >
                <span>×</span>

                <div>
                  <strong>Fim de jogo!</strong>
                  <p>A palavra era {palavra}.</p>
                </div>
              </div>
            )}

            <div className={styles.teclado}>
              {alfabeto.map((letra) => {
                const usada = letrasUsadas.includes(letra);
                const correta =
                  usada && palavra.includes(letra);
                const errada =
                  usada && !palavra.includes(letra);

                let classeBotao = styles.tecla;

                if (correta) {
                  classeBotao += ` ${styles.teclaCorreta}`;
                }

                if (errada) {
                  classeBotao += ` ${styles.teclaErrada}`;
                }

                return (
                  <button
                    key={letra}
                    type="button"
                    className={classeBotao}
                    onClick={() => escolherLetra(letra)}
                    disabled={usada || venceu || perdeu}
                  >
                    {letra}
                  </button>
                );
              })}
            </div>

            <div className={styles.usadas}>
              <div className={styles.grupoLetras}>
                <p>LETRAS CORRETAS</p>

                <div className={styles.listaLetras}>
                  {letrasCorretas.length === 0 ? (
                    <span className={styles.nenhuma}>
                      Nenhuma
                    </span>
                  ) : (
                    letrasCorretas.map((letra) => (
                      <span
                        key={letra}
                        className={styles.letraCorreta}
                      >
                        {letra}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className={styles.grupoLetras}>
                <p>LETRAS ERRADAS</p>

                <div className={styles.listaLetras}>
                  {letrasErradas.length === 0 ? (
                    <span className={styles.nenhuma}>
                      Nenhuma
                    </span>
                  ) : (
                    letrasErradas.map((letra) => (
                      <span
                        key={letra}
                        className={styles.letraErrada}
                      >
                        {letra}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.novoJogo}
              onClick={iniciarNovoJogo}
            >
              Nova palavra
            </button>
          </div>
        </div>

        <div className={styles.informacao}>
          <span>💡</span>

          <p>
            As palavras deste jogo são nomes de comidas e pratos.
          </p>
        </div>
      </section>
    </main>
  );
}