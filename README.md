# Portfólio - Maria Clara de Oliveira

Este projeto é um portfólio pessoal desenvolvido com Next.js e React para a disciplina de Programação Web Mobile.

O objetivo do projeto é apresentar informações acadêmicas, habilidades, projetos, certificados e formas de contato, além de incluir uma página extra com um jogo da forca.

## Tecnologias utilizadas

- Next.js
- React
- JavaScript
- HTML
- CSS
- Git
- GitHub
- Vercel

## Funcionalidades

O portfólio possui:

- Página inicial de apresentação
- Seção "Sobre mim"
- Seção de habilidades
- Seção de projetos
- Seção de certificados
- Seção de contato
- Navegação entre as seções da página
- Layout responsivo para diferentes tamanhos de tela
- Página extra com jogo da forca

## Estrutura do projeto

A página principal do portfólio foi desenvolvida utilizando componentes React dentro do Next.js.

O conteúdo foi organizado em diferentes seções utilizando componentes React e JSX para estruturar a interface, enquanto o CSS foi utilizado para a estilização.

As imagens utilizadas no projeto ficam armazenadas dentro da pasta `public`.

A navegação da página utiliza links internos para acessar seções como:

- Início
- Sobre
- Habilidades
- Projetos
- Certificados
- Contato

## Jogo da Forca

O projeto também possui uma página com um jogo da forca.

O jogo utiliza palavras relacionadas a alimentos e possui mais de 30 palavras disponíveis para sorteio.

### Funcionalidades do jogo

- Sorteio aleatório de palavras
- Exibição das letras ocultas
- Teclado virtual
- Registro das letras já utilizadas
- Controle de tentativas
- Identificação de acertos e erros
- Identificação de vitória
- Identificação de derrota
- Revelação da palavra ao perder
- Botão para iniciar uma nova partida

## Lógica do jogo

Ao iniciar uma partida, uma palavra é escolhida aleatoriamente.

O jogador seleciona letras através do teclado virtual.

Quando uma letra é escolhida, o sistema verifica se ela existe na palavra.

Se a letra estiver correta, ela é exibida na posição correspondente.

Se a letra estiver incorreta, uma tentativa é contabilizada como erro.

O jogo termina quando todas as letras são descobertas ou quando o jogador atinge o limite de erros.

Os estados do React são utilizados para controlar informações como:

- Palavra sorteada
- Letras utilizadas
- Quantidade de erros
- Situação atual da partida

## Como executar o projeto

Primeiro, clone o repositório:

```bash
git clone https://github.com/Clara-Barbosa/portfolio-clara.git
```

Entre na pasta do projeto:

```bash
cd portfolio-clara
```

Instale as dependências:

```bash
npm install
```

Depois execute o projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

## Autora

Maria Clara de Oliveira

GitHub: https://github.com/Clara-Barbosa

LinkedIn: https://www.linkedin.com/in/maria-clara-de-oliveira-barbosa-07457b364
