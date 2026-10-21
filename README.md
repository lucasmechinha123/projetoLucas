<div align="center">

```
 _     _   _  ____    _    ____    _     ___ _   _ _  ______
| |   | | | |/ ___|  / \  / ___|  | |   |_ _| \ | | |/ / ___|
| |   | | | | |     / _ \ \___ \  | |    | ||  \| | ' /\___ \
| |___| |_| | |___ / ___ \ ___) | | |___ | || |\  | . \ ___) |
|_____|\___/ \____/_/   \_\____/  |_____|___|_| \_|_|\_\____/
```

### `> sua central de links, em um só toque_`

![HTML5](https://img.shields.io/badge/HTML5-0f1b2d?style=for-the-badge&logo=html5&logoColor=5ee0c4)
![CSS3](https://img.shields.io/badge/CSS3-0f1b2d?style=for-the-badge&logo=css3&logoColor=5ee0c4)
![JavaScript](https://img.shields.io/badge/JavaScript-0f1b2d?style=for-the-badge&logo=javascript&logoColor=5ee0c4)
![Responsivo](https://img.shields.io/badge/Responsivo-sim-0f1b2d?style=for-the-badge&labelColor=5ee0c4)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-0f1b2d?style=for-the-badge&logo=vercel&logoColor=5ee0c4)

</div>

---

## `01` // Sobre

Página de links no estilo **Linktree**, com fundo animado em **rede de partículas** (visual hi-tech), pensada para ser aberta por **QR Code** ou por **aproximação NFC** em um chaveiro.

Feita só com **HTML, CSS e JavaScript puro**. Sem frameworks, sem dependências e sem etapa de build.

## `02` // Recursos

| Módulo | O que faz |
| --- | --- |
| **Fundo em rede** | Partículas em movimento que se conectam por linhas neon quando ficam próximas |
| **Interação** | As partículas se ligam ao mouse ou ao toque na tela |
| **Botões de links** | GitHub, Instagram, WhatsApp, e-mail e o que mais você quiser |
| **Projetos** | Botão expansível com os projetos como sublinks |
| **Responsivo** | Layout adaptado para celular, tablet e computador |
| **Acessível** | Respeita `prefers-reduced-motion`, com foco visível no teclado |

## `03` // Estrutura

```
Lucas_links/
├── index.html    # página principal (HTML + CSS + JS em um só arquivo)
├── qrcode.html   # gerador de QR Code do seu link
└── README.md
```

## `04` // Como usar

```bash
# 1. clone o repositório
git clone https://github.com/lucasmechinha123/Lucas_links.git

# 2. entre na pasta
cd Lucas_links

# 3. abra o index.html no navegador
```

Não precisa instalar nada. Para testar com um servidor local:

```bash
npx serve .
```

## `05` // Personalização

Tudo fica no `index.html`.

**Links e projetos:** edite os blocos `<a>` dentro de `<nav>` e da seção `.projetos`.

**Cores:** altere as variáveis no começo do CSS.

```css
:root {
  --bg: #0f1b2d;      /* fundo */
  --accent: #5ee0c4;  /* cor de destaque */
}
```

**Partículas:** altere as constantes no começo do `<script>`.

```js
const QUANTIDADE = 75;   // número de partículas
const VELOCIDADE = 0.35; // velocidade do movimento
const DIST = 130;        // distância para formar as linhas
```

## `06` // Deploy

1. Suba o projeto para o GitHub.
2. Importe o repositório na [Vercel](https://vercel.com).
3. Clique em **Deploy** e copie o endereço gerado.

## `07` // Acesso por NFC e QR Code

**NFC no chaveiro**

1. Compre uma tag NFC (NTAG213 ou NTAG215).
2. Abra o app *NFC Tools* e escolha **Gravar → Adicionar um registro → URL/URI**.
3. Cole o endereço do seu site e grave na tag.

**QR Code**

Abra o `qrcode.html`, cole o endereço do seu site e gere o código para usar em cartão ou adesivo.

## `08` // Autor

<div align="center">

**Lucas Cavalcante**
Desenvolvedor front-end

[![GitHub](https://img.shields.io/badge/GitHub-lucasmechinha123-0f1b2d?style=for-the-badge&logo=github&logoColor=5ee0c4)](https://github.com/lucasmechinha123)

`> feito com código e café_`

</div>


<img width="1683" height="897" alt="image" src="https://github.com/user-attachments/assets/51d14f0d-bd97-4f7e-aa9f-f896d145e3ed" />
