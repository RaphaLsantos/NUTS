# NUTS - Tecnologia e Inovação

A **NUTS** é uma empresa focada no desenvolvimento de soluções em software para empresas de pequeno e médio porte. Este projeto apresenta o portal institucional da empresa, destacando suas plataformas de atuação, equipe e projetos em desenvolvimento.

## Funcionalidades

-   **Página Institucional**: Apresentação da empresa e seus valores (Qualidade, Criatividade, Inovação, Segurança e Ética).
-   **Plataformas de Atuação**: Detalhes sobre o desenvolvimento de sistemas Mobile (Android/iOS), Desktop e Web.
-   **Equipe (Quem Somos)**: Carrossel interativo apresentando os membros da equipe e seus papéis.
-   **Projetos em Destaque**: Apresentação de projetos novos, como o **serMãe**, destinado ao público feminino.
-   **Localização e Contato**: Mapa interativo e formulário de contato integrado.
-   **Navegação Responsiva**: Menu adaptável para dispositivos móveis e botão "Voltar ao Topo".

## Melhorias Realizadas

Recentemente, o projeto passou por uma reestruturação técnica para melhorar a manutenção e a acessibilidade:
-   **Organização de Pastas**: Todos os recursos foram movidos para uma pasta `assets/`, separando `css`, `js` e `img`.
-   **HTML Semântico**: O código foi refatorado utilizando tags semânticas do HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), melhorando o SEO e a acessibilidade.
-   **Otimização de Caminhos**: Referências de imagens e arquivos externos foram atualizadas para a nova estrutura.

## Tecnologias Utilizadas

-   **HTML5 Semântico**
-   **CSS3** (com design responsivo e animações)
-   **JavaScript** (interatividade e carrosséis)
-   **Boxicons & Font Awesome**: Bibliotecas de ícones.
-   **Google Maps API**: Integração de mapas.

## Pré-requisitos

Para visualizar este projeto localmente, você precisa apenas de um navegador web moderno.

## Instalação e Execução

### 1. Clonar o Repositório
```bash
git clone https://github.com/RaphaLsantos/NUTS.git
cd NUTS
```

### 2. Executar o Projeto
Como este é um projeto frontend estático, basta abrir o arquivo `index.html` no seu navegador.

```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
x-www-browser index.html
```

## Estrutura do Projeto
```text
NUTS/
├── assets/
│   ├── css/    # Arquivos de estilização
│   ├── img/    # Imagens e ícones organizados por seção
│   └── js/     # Scripts de interatividade
├── index.html  # Página principal refatorada
└── README.md   # Documentação do projeto
```

## Contribuição
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

## Licença
Este projeto está sob a licença MIT.

---
**Manus AI**
Fevereiro de 2026
