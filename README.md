# Portfólio — Vinícius Franco Rocha

Site pessoal em HTML/CSS/JS puro, publicado em produção via Vercel:
**https://portfolio-five-xi-37.vercel.app**

## Estrutura

```
portfolio/
├── index.html
├── projetos.html
├── contato.html
├── assets/
│   ├── icons/    → ícones de UI (GitHub, Gmail, LinkedIn, idioma)
│   ├── images/    → foto pessoal e imagem de marca
│   ├── logo/      → logo atual do site
│   └── docs/      → CV em PDF
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Rodando localmente

Não há build step. Basta servir a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000/index.html`.

## Deploy

Publicado automaticamente na Vercel a cada push na branch `main`.

## Convenção de commits

`tipo: o que mudou`, por exemplo:
- `feat: adiciona seção de projetos`
- `fix: corrige link do CV`
- `chore: remove assets órfãos`
