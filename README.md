# Protifolio

Landing page moderna para portfólio de desenvolvedor, construída com React, TypeScript e Vite. O projeto destaca habilidades, projetos, processos e formas de contato, utilizando as melhores práticas e tecnologias atuais do ecossistema web.

## ✨ Tecnologias Utilizadas

- **React 19** — Biblioteca para construção de interfaces modernas e reativas.
- **TypeScript** — Superset do JavaScript que adiciona tipagem estática.
- **Vite** — Ferramenta de build e desenvolvimento ultrarrápida.
- **Tailwind CSS** — Framework utilitário para estilização rápida e responsiva.
- **Lucide React** — Ícones SVG modernos para React.
- **ESLint** — Linter para manter a qualidade e padronização do código.

## 📁 Estrutura do Projeto

```
protifolio/
├── public/           # Arquivos estáticos
├── src/
│   ├── assets/       # Imagens e SVGs
│   ├── components/   # Componentes React (About, Projects, Skills, etc)
│   ├── App.tsx       # Composição principal da página
│   ├── main.tsx      # Ponto de entrada da aplicação
│   └── App.css       # Estilos globais
├── package.json      # Dependências e scripts
├── tailwind.config.js# Configuração do Tailwind
├── vite.config.ts    # Configuração do Vite
└── README.md         # Documentação
```

## 🧩 Principais Funcionalidades

- **Seção Hero**: Apresentação e chamada para ação.
- **Sobre**: Experiência, áreas de atuação e tecnologias dominadas.
- **Projetos**: Destaque para projetos inovadores, tecnologias usadas e resultados.
- **Skills**: Lista de habilidades técnicas com níveis de proficiência.
- **Processo**: Metodologia de trabalho e ferramentas modernas.
- **Contato**: Formas de contato e links para redes sociais.
- **Footer**: Informações finais e créditos.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (recomendado v18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/protifolio.git
   cd protifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O Vite irá iniciar o servidor local. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

4. **Build para produção:**
   ```bash
   npm run build
   # ou
   yarn build
   ```
   Os arquivos otimizados ficarão na pasta `dist/`.

5. **Preview do build de produção:**
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

### Scripts Disponíveis
- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera o build de produção
- `preview`: Visualiza o build de produção localmente
- `lint`: Executa o linter para análise de código

## 🛠️ Customização
- Edite os componentes em `src/components/` para personalizar seções, textos e estilos.
- Altere as cores e temas no `tailwind.config.js`.
- Adicione novos projetos ou skills diretamente nos componentes correspondentes.

## 📚 Referências
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📄 Licença
Este projeto é open-source e está sob a licença MIT.
