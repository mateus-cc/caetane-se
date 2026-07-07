# 🪕 Caetane-se — Luthieria & Acessórios Acústicos

> *"Seu instrumento tocando com a alma e a precisão sonora que ele merece."*

---

## 📋 Sobre o Projeto

Este repositório contém o desenvolvimento de uma Landing Page interativa e moderna, construída como requisito de entrega para a **Atividade 4 e 5 - Construção de Site Simples com HTML, CSS e JS** do curso **Codifica Edu** (Módulo de Front-end).

O projeto simula a página de serviços profissionais de uma oficina de luthieria especializada em manutenção, regulagem, trastejamento e venda de acessórios para instrumentos acústicos (violões, cavaquinhos, entre outros). A aplicação foi idealizada aplicando conceitos sólidos de **UX/UI Design**, acessibilidade, consumo de APIs externas e versionamento de código.

---

## 🎯 Atendimento aos Requisitos da Atividade

Abaixo está o mapeamento de como cada critério mínimo exigido na atividade foi implementado na prática dentro do site:

* **Repositório Git & Fluxo de Branches:**
  * O projeto foi inicializado com Git e estruturado mantendo um histórico limpo e organizado.
  * Divisão estrita de fluxo entre a branch principal (`main`) para código estável/produção e a branch de trabalho (`develop`) para implementação de novas funcionalidades e testes.
* **Cabeçalho e Identidade Visual:**
  * Cabeçalho fixo com o logotipo e nome do projeto (**Caetane-se**), acompanhado de menu de navegação intuitivo e botão de acesso rápido.
* **Slogan e Proposta de Valor:**
  * Seção principal (*Hero Section*) contendo título de impacto e descrição clara dos serviços artesanais prestados.
* **Botão de Chamada para Ação (CTA) com JavaScript:**
  * Botões estratégicos como *"Solicitar Orçamento"* e *"Agendar Luthier"* que acionam eventos de JavaScript na interface, gerando feedbacks visuais modernos para o usuário (notificações flutuantes estilo *Toast*, substituindo os antigos alertas nativos de navegador).
* **Consumo de API (ViaCEP):**
  * Integração assíncrona com a API pública do **ViaCEP** em uma seção dedicada de *"Coleta e Entrega de Instrumentos"*. O usuário digita seu CEP para consultar dinamicamente se a oficina atende a sua região para o serviço de leva e traz, preenchendo o endereço automaticamente em tela.
* **Área de Contato com Formulário:**
  * Formulário estruturado para coleta de dados do cliente (Nome, E-mail, Tipo de Instrumento e Mensagem/Descrição do problema), com validação básica de preenchimento via JS e mensagem de confirmação de envio.
* **Paleta de Cores Harmoniosa e Tipografia:**
  * **Cores:** Design System baseado em tons que remetem à madeira e à natureza (Verde Musgo `#3A5A40` como cor de marca, tons de Caramelo/Madeira `#A3704C` para destaque e fundo Off-white `#F9F8F6` para conforto visual e contraste na leitura).
  * **Fontes:** Combinação da tipografia clássica e serifada **Playfair Display** (para títulos, remetendo ao artesanato e tradição musical) com a moderna e sem serifa **Inter** (para parágrafos, formulários e botões, garantindo alta legibilidade).

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **HTML5:** Estruturação semântica do conteúdo (utilizando tags como `<header>`, `<main>`, `<section>`, `<nav>`, `<form>` e `<footer>`).
* **CSS3:** Estilização global, layout responsivo via Flexbox e Grid Layout, variáveis CSS para controle da paleta de cores e animações de transição suave.
* **JavaScript (Vanilla JS):** Manipulação do DOM, escuta de eventos de clique/envio de formulário, criação de modais/toasts de feedback e consumo de API REST através da **Fetch API**.
* **Git & GitHub:** Versionamento de código e hospedagem do repositório remoto.
* **ViaCEP API:** Serviço web gratuito utilizado para a consulta de Códigos de Endereçamento Postal (CEP) do Brasil.

---

## 🗂️ Estrutura de Pastas do Repositório

```text
ATIVIDADE-4-5/
│
├── assets/          # Imagens, logotipos, ícones e mídias do site
├── css/             # Arquivos de folha de estilo
│   └── styles.css   # Estilização global e responsividade
├── js/              # Lógica de programação e interatividade
│   └── main.js      # Consumo da API ViaCEP e eventos dos botões CTA
└── index.html       # Estrutura principal da Landing Page
```

🔀 Fluxo de Versionamento (Git Branches)
Para atender as boas práticas do mercado e o requisito da entrega, o desenvolvimento seguiu o fluxo:

develop: Branch onde todo o código HTML, estilização CSS, lógica JS e testes de integração com a API ViaCEP foram realizados.

main: Branch principal que recebe o merge da branch develop apenas quando o site está completamente funcional, testado e pronto para avaliação ou deploy em produção.
