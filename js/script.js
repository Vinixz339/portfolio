/* ========================================================================
   Vinícius Franco Rocha — script.js (v6)

   Índice
   1) i18n — dicionário por chave { pt, en }
   2) Utilitários
   3) Motor de i18n
   4) Navegação (âncoras, menu mobile, header ao rolar, menu acompanhando a rolagem)
   5) Seletor de idioma (PT / EN)
   6) Motion (reveals, nome animado, linha e pulso da timeline, details animado, contagem, cursor, circuitos)
   7) Filtro de projetos
   8) Formulário de contato e botão copiar
   9) Boot
   ======================================================================== */

/* ========================================================================
   1) i18n — dicionário por chave
   Uso no HTML:
     data-i18n="chave"                                   → textContent
     data-i18n-attr="aria-label:chave; placeholder:outra" → atributos
   O texto do HTML é o fallback sem JS; o dicionário PT espelha esse texto.
   Nomes próprios, siglas e nomes de ferramentas ficam só no HTML.
   ======================================================================== */
const I18N = {
  pt: {
    /* Página */
    'page-title': 'Vinícius Franco Rocha — Portfólio',
    'page-title-projects': 'Projetos — Vinícius Franco Rocha',
    'page-title-contact': 'Contato — Vinícius Franco Rocha',

    /* Header */
    'skip-link': 'Pular para o conteúdo',
    'header-home-aria': 'Página inicial',
    'nav-aria': 'Menu principal',
    'nav-about': 'Sobre',
    'nav-projects': 'Projetos',
    'nav-contact': 'Contato',
    'language-toggle-aria': 'Mudar idioma para inglês',
    'menu-aria': 'Abrir menu principal',

    /* Hero */
    'hero-role-1': 'Analista de ITSM',
    'hero-role-2': 'Automação de processos',
    'hero-role-3': 'Inteligência artificial',
    'hero-lead': 'Analista de ITSM com mais de 2 anos de experiência na administração, customização e sustentação de plataformas de service desk para clientes corporativos. Também atuo com inteligência artificial, no desenvolvimento de chatbots e agentes de IA.',
    'hero-btn-cv': 'Baixar CV',
    'hero-btn-projects': 'Ver projetos',
    'hero-btn-contact': 'Falar comigo',

    'metric-1': 'anos em ITSM, automação e chatbots',
    'metric-2': 'clientes corporativos atendidos simultaneamente',
    'metric-3': 'clientes com chatbots de IA em produção',
    'clients-label': 'Ambientes atendidos',

    /* Especialidades */
    'spec-eyebrow': 'Frentes principais',
    'spec-title': 'Especialidades',
    'spec-lead': 'Três frentes que se apoiam na operação: plataformas ITSM bem governadas, automações que eliminam trabalho manual e atendimento com IA.',
    'spec-1-title': 'Gestão de serviços de TI',
    'spec-1-text': 'Administração, customização e sustentação de GLPI e Serviceaide ISM, com fluxos de Incidentes, Requisições, Ativos, Catálogo de Serviços e Base de Conhecimento alinhados ao ITIL 4.',
    'spec-2-title': 'Automação de processos',
    'spec-2-text': 'Fluxos em n8n que orquestram plataformas ITSM, diretório de identidade e sistemas de terceiros via APIs REST e webhooks, eliminando tarefas manuais recorrentes do Service Desk.',
    'spec-3-title': 'Chatbots e IA',
    'spec-3-text': 'Chatbots com IA em produção em Botpress, Typebot e Genesys Cloud, integrados a bases de dados, APIs e automações de back-end para resolver chamados de nível 1.',

    /* Sobre */
    'about-eyebrow': 'Sobre',
    'about-title': 'Sobre mim',
    'about-p1': 'Atuo como Analista de ITSM e Automação (Pleno) na Tecnocomp, em modelo de consultoria e serviços gerenciados, atendendo simultaneamente 7 clientes corporativos. Participo de reuniões técnicas, levantamento de requisitos e apresentação de soluções.',
    'about-p2': 'Minha base é a gestão de serviços alinhada ao ITIL 4: padronização, cumprimento de SLA e qualidade de atendimento. A partir dela, integro plataformas ITSM a APIs REST, bancos de dados relacionais e modelos de IA para reduzir tarefas manuais e o volume de chamados de nível 1.',
    'about-p3': 'Fui promovido de Analista Júnior a Pleno em cerca de 2 anos, com indicação direta do Head de TI e do time de Infraestrutura de um dos principais clientes da carteira.',
    'skills-title': 'Competências técnicas',
    'skills-1-label': 'Ferramentas ITSM',
    'skills-1-value': 'GLPI (administração, customização e integração), Serviceaide ISM, Qualitor',
    'skills-2-label': 'Gestão de serviços',
    'skills-2-value': 'ITIL 4, Incidentes, Requisições, Ativos, Catálogo de Serviços, Base de Conhecimento, SLA, Service Desk',
    'skills-3-label': 'Automação',
    'skills-3-value': 'n8n, Power Automate, Webhooks, APIs REST, integração de sistemas',
    'skills-4-label': 'IA e chatbots',
    'skills-4-value': 'Botpress, Typebot, Genesys Cloud, GPT-4o, Whisper, RAG com Qdrant, engenharia de prompt',
    'skills-5-label': 'Dados',
    'skills-6-label': 'Infraestrutura e colaboração',
    'skills-6-value': 'Microsoft Entra ID (Microsoft Graph API), Microsoft Teams, Git e GitHub',
    'skills-7-label': 'Documentação',
    'skills-7-value': 'Documentação técnica, procedimentos operacionais padronizados, desenho de jornadas de atendimento',
    'skills-8-label': 'Conhecimento básico',
    'skills-9-label': 'Idiomas',
    'skills-9-value': 'Português nativo · Inglês intermediário (leitura técnica), em curso',

    /* Experiência */
    'exp-eyebrow': 'Trajetória',
    'exp-title': 'Experiência',
    'exp-more': 'Ver mais',
    'exp-1-date': '04/2024 — Atual',
    'exp-1-role': 'Analista de ITSM e Automação (Pleno)',
    'exp-1-desc': 'Administro e customizo as plataformas ITSM GLPI e Serviceaide ISM para uma carteira de 7 clientes corporativos (SABIN, Holambra, Stoller, Irani, GERA, TMG e Pátria), adaptando fluxos de Incidentes, Requisições, Ativos e Catálogo de Serviços às regras de negócio de cada contrato.',
    'exp-1-item-1': 'Promovido de Analista Júnior a Pleno em aproximadamente 2 anos, com reconhecimento e indicação direta do Head de TI e do time de Infraestrutura de um dos principais clientes da carteira.',
    'exp-1-item-2': 'Desenvolvo e sustento chatbots com IA em produção para 3 clientes e para a operação interna da Tecnocomp, integrando as jornadas de atendimento a bases de dados, APIs REST e automações de back-end para resolução de chamados de nível 1.',
    'exp-1-item-3': 'Construo fluxos automatizados em n8n para orquestração de processos entre plataformas ITSM, diretório de identidade e sistemas de terceiros, eliminando tarefas manuais recorrentes do Service Desk.',
    'exp-1-item-4': 'Implementei automação de transcrição e avaliação de ligações com IA, substituindo a auditoria manual de qualidade por um processo automatizado de análise e pontuação de atendimentos.',
    'exp-1-item-5': 'Executo migrações e validações estruturais em GLPI, incluindo integração de autenticação via SSO/SAML, importação de base de conhecimento e validação funcional entre versões da plataforma.',
    'exp-1-item-6': 'Elaboro relatórios técnicos e análises gerenciais via SQL e Power BI sobre volume de chamados, cumprimento de SLA e produtividade das equipes.',
    'exp-1-item-7': 'Produzo documentação técnica e procedimentos operacionais padronizados, e conduzo reuniões técnicas, alinhamentos e apresentações de solução para clientes.',
    'exp-2-role': 'Aprendiz Técnico em Mecatrônica',
    'exp-2-desc': 'Suporte à infraestrutura de TI corporativa, atendendo usuários internos em chamados de hardware, software e rede.',
    'exp-2-item-1': 'Configuração e manutenção de desktops, notebooks e impressoras, incluindo atualização de drivers e configuração de endereçamento IP.',
    'exp-2-item-2': 'Acompanhamento da manutenção de equipamentos industriais, contribuindo para a continuidade operacional da planta.',

    /* Educação */
    'edu-eyebrow': 'Formação',
    'edu-title': 'Educação e certificações',
    'edu-1-title': 'Análise e Desenvolvimento de Sistemas',
    'edu-2-title': 'Ensino Médio',
    'edu-list-title': 'Formação acadêmica',
    'edu-status-done': 'Concluído',
    'certs-title': 'Certificações e cursos',
    'cert-in-progress': 'Em conclusão',
    'cert-4': 'Governança e Arquitetura de TI',
    'cert-5': 'Automação No-Code e Low-Code',
    'cert-6': 'Power BI para Data Science',
    'cert-7': 'LGPD: Lei Geral de Proteção de Dados',

    /* Projetos */
    'projects-eyebrow': 'Portfólio',
    'projects-title': 'Projetos selecionados',
    'projects-lead': 'Casos reais em ITSM, automação de processos e chatbots com IA, entregues em modelo de consultoria e serviços gerenciados.',
    'projects-list-aria': 'Projetos para clientes',
    'filter-aria': 'Filtrar por área',
    'filter-all': 'Todos',
    'filter-automation': 'Automação',
    'filter-ai': 'Chatbots e IA',
    'filter-count-one': '1 projeto',
    'filter-count-many': '{n} projetos',
    'case-client': 'Cliente',
    'case-area': 'Área · Plataforma',
    'case-period': 'Período',
    'case-stack': 'Tecnologias',
    'period-2025-now': '2025–Atual',

    'case-1-title': 'Sustentação de ITSM (GLPI)',
    'case-1-lead': 'Sustentação e evolução contínua do ambiente GLPI com foco em estabilidade, previsibilidade e experiência. Atendimento de chamados de 2º nível, governança do catálogo e otimizações recorrentes.',
    'case-1-scope-1': 'Regras de negócio, campos condicionais e roteamento por filas;',
    'case-1-scope-2': 'Padronização de formulários, templates e checklists;',
    'case-1-scope-3': 'SLAs/OLAs, notificações e alertas operacionais;',
    'case-1-scope-4': 'Relatórios e KPIs no Power BI para tomadas de decisão.',

    'case-2-title': 'Implementação e sustentação de ITSM (GLPI)',
    'case-2-lead': 'Implantação ponta a ponta com catálogo, SLAs e fluxos de aprovação. Operação assistida pós go-live, automações de triagem e relatórios recorrentes.',
    'case-2-scope-1': 'Desenho de processos (Incidente, Requisição, Mudança);',
    'case-2-scope-2': 'Campos condicionais, formulários e validações;',
    'case-2-scope-3': 'Integrações essenciais (e-mail/Teams) e automações;',
    'case-2-scope-4': 'KPIs operacionais e governança de mudanças.',

    'case-3-title': 'Sustentação de ITSM (Serviceaide ISM)',
    'case-3-lead': 'Sustentação com padronização de filas, perfis e regras automáticas. Foco em fluidez de atendimento, governança do catálogo e confiabilidade operacional.',
    'case-3-scope-1': 'Estruturação de filas, papéis e matrizes de encaminhamento;',
    'case-3-scope-2': 'Ajustes de formulários e automações de rotina;',
    'case-3-scope-3': 'SLAs, notificações e alertas por criticidade;',
    'case-3-scope-4': 'Higienização de base (categorias, serviços, CIs).',

    'case-4-title': 'Sustentação de ITSM (Serviceaide ISM)',
    'case-4-lead': 'Sustentação com evolução de processos, administração da plataforma e atendimento de chamados. Regras e integrações para reduzir tempo de ciclo e aumentar a previsibilidade.',
    'case-4-scope-1': 'Catálogo de serviços e padronização de formulários;',
    'case-4-scope-2': 'Regras automáticas e roteamento por filas;',
    'case-4-scope-3': 'SLAs/OLAs e notificações consistentes;',
    'case-4-scope-4': 'Relatórios operacionais e executivos.',

    'case-5-area': 'Chatbots e IA · Genesys Cloud',
    'case-5-title': 'Implementação e sustentação de chatbot (Genesys Cloud)',
    'case-5-lead': 'Assistente conversacional com dispatch para filas no Genesys, integrado a Teams e WhatsApp. Fluxo de conversa orientado por dados, transbordo humano e integrações a sistemas internos.',
    'case-5-scope-1': 'Mapeamento de intents, entidades e jornadas de suporte;',
    'case-5-scope-2': 'Roteamento e transbordo com contexto para as filas corretas;',
    'case-5-scope-3': 'Mensagens padrão, linguagem consistente e coleta de feedback;',
    'case-5-scope-4': 'Logs e métricas para tuning e melhoria contínua.',

    'case-6-area': 'Chatbots e IA · Automação',
    'case-6-title': 'Transcrição e avaliação de ligações com IA',
    'case-6-lead': 'Automação que substitui a auditoria manual de qualidade por um processo automatizado de análise e pontuação de atendimentos, a partir da transcrição das ligações.',

    'case-7-title': 'Migração e validação estrutural do GLPI',
    'case-7-lead': 'Migrações e validações estruturais em GLPI, incluindo integração de autenticação via SSO/SAML, importação de base de conhecimento e validação funcional entre versões da plataforma.',

    'case-8-area': 'Automação · Microsoft Entra ID',
    'case-8-title': 'Automação de reset de senha',
    'case-8-lead': 'Fluxo automatizado de redefinição de senha de usuários no Microsoft Entra ID via Microsoft Graph API, acionado a partir do canal de atendimento.',

    'case-9-area': 'Chatbots e IA · Agente de IA',
    'case-9-title': 'Assistente financeiro conversacional com IA',
    'case-9-lead': 'Agente de IA integrado a mensageria, com consulta a dados de mercado, memória de conversa e camada de recuperação de informação (RAG).',

    /* Contato */
    'contact-eyebrow': 'Contato',
    'contact-title': 'Vamos conversar',
    'contact-lead': 'Compartilhe rapidamente o contexto da sua operação. Eu retorno com próximos passos objetivos.',
    'contact-section-aria': 'Canais de contato',
    'contact-info-title': 'Informações diretas',
    'contact-label-email': 'E-mail',
    'contact-label-phone': 'Telefone',
    'contact-label-location': 'Local',
    'contact-location': 'Santo André, São Paulo, Brasil',
    'contact-form-title': 'Formulário',
    'form-name-label': 'Nome',
    'form-name-placeholder': 'Seu nome completo',
    'form-email-label': 'E-mail',
    'form-email-placeholder': 'seu@email.com',
    'form-phone-label': 'Telefone (opcional)',
    'form-message-label': 'Mensagem',
    'form-message-placeholder': 'Explique brevemente o contexto e o objetivo.',
    'form-submit': 'Enviar mensagem',
    'form-sending': 'Enviando…',
    'form-success': 'Mensagem enviada. Retorno o contato em breve.',
    'form-error': 'Não foi possível enviar agora. Tente de novo ou escreva para vinfranrocha@gmail.com.',

    /* Rodada 3: projetos padronizados (Cliente + Escopo) */
    'client-own': 'Projeto próprio',
    'case-not-informed': 'Não informado',
    'case-scope-label': 'Escopo',
    'case-6-scope-1': 'Transcrição automática das ligações de atendimento;',
    'case-6-scope-2': 'Análise e pontuação dos atendimentos com IA;',
    'case-6-scope-3': 'Substituição da auditoria manual de qualidade.',
    'case-7-scope-1': 'Integração de autenticação via SSO/SAML;',
    'case-7-scope-2': 'Importação da base de conhecimento;',
    'case-7-scope-3': 'Validação funcional entre versões da plataforma.',
    'case-8-scope-1': 'Redefinição de senha no Microsoft Entra ID via Microsoft Graph API;',
    'case-8-scope-2': 'Fluxo acionado a partir do canal de atendimento.',
    'case-9-scope-1': 'Agente de IA integrado a mensageria;',
    'case-9-scope-2': 'Consulta a dados de mercado;',
    'case-9-scope-3': 'Memória de conversa;',
    'case-9-scope-4': 'Camada de recuperação de informação (RAG).',

    /* Rodada 2: foto, faixa, destaques, contato, footer */
    'photo-alt': 'Vinícius Franco Rocha',
    'photo-caption-role': 'Tecnocomp · Pleno',
    'feature-aria': 'Números e clientes',
    'about-note-label': 'Reconhecimento',
    'cases-featured': 'Em destaque',
    'cases-more': 'Outros projetos para clientes',
    'cases-own': 'Projetos próprios',
    'case-more': 'Ver escopo',
    'copy-label': 'Copiar',
    'copy-done': 'Copiado',
    'copy-email-aria': 'Copiar e-mail',
    'copy-done-aria': 'E-mail copiado',
    'form-response-time': 'Respondo em até 2 dias úteis.',
    'footer-nav-aria': 'Navegação do rodapé',
    'footer-back-top': 'Voltar ao topo',

    /* Footer */
    'footer-social-aria': 'Redes e contato',
    'footer-email': 'E-mail',
    'footer-rights': '© 2026 Vinícius Franco Rocha. Todos os direitos reservados.',
  },

  en: {
    /* Page */
    'page-title': 'Vinícius Franco Rocha — Portfolio',
    'page-title-projects': 'Projects — Vinícius Franco Rocha',
    'page-title-contact': 'Contact — Vinícius Franco Rocha',

    /* Header */
    'skip-link': 'Skip to content',
    'header-home-aria': 'Home page',
    'nav-aria': 'Main menu',
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'language-toggle-aria': 'Switch language to Portuguese',
    'menu-aria': 'Open main menu',

    /* Hero */
    'hero-role-1': 'ITSM Analyst',
    'hero-role-2': 'Process automation',
    'hero-role-3': 'Artificial intelligence',
    'hero-lead': 'ITSM analyst with 2+ years of experience administering, customizing and supporting service desk platforms for corporate clients. I also work with artificial intelligence, building chatbots and AI agents.',
    'hero-btn-cv': 'Download CV',
    'hero-btn-projects': 'See projects',
    'hero-btn-contact': 'Get in touch',

    'metric-1': 'years in ITSM, automation and chatbots',
    'metric-2': 'corporate clients served simultaneously',
    'metric-3': 'clients with AI chatbots in production',
    'clients-label': 'Environments supported',

    /* Specialties */
    'spec-eyebrow': 'Core areas',
    'spec-title': 'Specialties',
    'spec-lead': 'Three areas that reinforce each other in operations: well-governed ITSM platforms, automations that remove manual work, and AI-powered support.',
    'spec-1-title': 'IT service management',
    'spec-1-text': 'Administration, customization and support of GLPI and Serviceaide ISM, with Incident, Request, Asset, Service Catalog and Knowledge Base flows aligned with ITIL 4.',
    'spec-2-title': 'Process automation',
    'spec-2-text': 'n8n flows that orchestrate ITSM platforms, identity directory and third-party systems through REST APIs and webhooks, removing recurring manual work from the Service Desk.',
    'spec-3-title': 'Chatbots and AI',
    'spec-3-text': 'AI chatbots in production on Botpress, Typebot and Genesys Cloud, connected to databases, APIs and back-end automations to resolve tier-1 tickets.',

    /* About */
    'about-eyebrow': 'About',
    'about-title': 'About me',
    'about-p1': 'I work as an ITSM and Automation Analyst (mid-level) at Tecnocomp, in a consulting and managed services model, serving 7 corporate clients simultaneously. I take part in technical meetings, requirements gathering and solution presentations.',
    'about-p2': 'My foundation is service management aligned with ITIL 4: standardization, SLA compliance and service quality. From there, I integrate ITSM platforms with REST APIs, relational databases and AI models to reduce manual work and tier-1 ticket volume.',
    'about-p3': 'I was promoted from Junior to Mid-level Analyst in about 2 years, with a direct recommendation from the Head of IT and the Infrastructure team of one of the portfolio’s key clients.',
    'skills-title': 'Technical skills',
    'skills-1-label': 'ITSM tools',
    'skills-1-value': 'GLPI (administration, customization and integration), Serviceaide ISM, Qualitor',
    'skills-2-label': 'Service management',
    'skills-2-value': 'ITIL 4, Incidents, Requests, Assets, Service Catalog, Knowledge Base, SLA, Service Desk',
    'skills-3-label': 'Automation',
    'skills-3-value': 'n8n, Power Automate, Webhooks, REST APIs, systems integration',
    'skills-4-label': 'AI and chatbots',
    'skills-4-value': 'Botpress, Typebot, Genesys Cloud, GPT-4o, Whisper, RAG with Qdrant, prompt engineering',
    'skills-5-label': 'Data',
    'skills-6-label': 'Infrastructure and collaboration',
    'skills-6-value': 'Microsoft Entra ID (Microsoft Graph API), Microsoft Teams, Git and GitHub',
    'skills-7-label': 'Documentation',
    'skills-7-value': 'Technical documentation, standard operating procedures, service journey design',
    'skills-8-label': 'Basic knowledge',
    'skills-9-label': 'Languages',
    'skills-9-value': 'Portuguese (native) · English intermediate (technical reading), in progress',

    /* Experience */
    'exp-eyebrow': 'Career',
    'exp-title': 'Experience',
    'exp-more': 'See more',
    'exp-1-date': '04/2024 — Present',
    'exp-1-role': 'ITSM and Automation Analyst (Mid-level)',
    'exp-1-desc': 'I administer and customize the GLPI and Serviceaide ISM platforms for a portfolio of 7 corporate clients (SABIN, Holambra, Stoller, Irani, GERA, TMG and Pátria), adapting Incident, Request, Asset and Service Catalog flows to each contract’s business rules.',
    'exp-1-item-1': 'Promoted from Junior to Mid-level Analyst in about 2 years, with recognition and a direct recommendation from the Head of IT and the Infrastructure team of one of the portfolio’s key clients.',
    'exp-1-item-2': 'I build and support AI chatbots in production for 3 clients and for Tecnocomp’s internal operation, connecting service journeys to databases, REST APIs and back-end automations to resolve tier-1 tickets.',
    'exp-1-item-3': 'I build automated n8n flows to orchestrate processes across ITSM platforms, identity directory and third-party systems, removing recurring manual work from the Service Desk.',
    'exp-1-item-4': 'Implemented AI-based call transcription and evaluation, replacing manual quality audits with an automated process that analyzes and scores interactions.',
    'exp-1-item-5': 'I run migrations and structural validations in GLPI, including SSO/SAML authentication, knowledge base import and functional validation across platform versions.',
    'exp-1-item-6': 'I produce technical reports and management analyses with SQL and Power BI on ticket volume, SLA compliance and team productivity.',
    'exp-1-item-7': 'I write technical documentation and standard operating procedures, and lead technical meetings, alignments and solution presentations for clients.',
    'exp-2-role': 'Mechatronics Technical Apprentice',
    'exp-2-desc': 'Support for corporate IT infrastructure, handling internal users’ hardware, software and network tickets.',
    'exp-2-item-1': 'Setup and maintenance of desktops, notebooks and printers, including driver updates and IP addressing.',
    'exp-2-item-2': 'Supported maintenance of industrial equipment, contributing to the plant’s operational continuity.',

    /* Education */
    'edu-eyebrow': 'Education',
    'edu-title': 'Education and certifications',
    'edu-1-title': 'Systems Analysis and Development',
    'edu-2-title': 'High school',
    'edu-list-title': 'Academic background',
    'edu-status-done': 'Completed',
    'certs-title': 'Certifications and courses',
    'cert-in-progress': 'In progress',
    'cert-4': 'IT Governance and Architecture',
    'cert-5': 'No-Code and Low-Code Automation',
    'cert-6': 'Power BI for Data Science',
    'cert-7': 'LGPD: Brazilian General Data Protection Law',

    /* Projects */
    'projects-eyebrow': 'Portfolio',
    'projects-title': 'Selected projects',
    'projects-lead': 'Real cases in ITSM, process automation and AI chatbots, delivered in a consulting and managed services model.',
    'projects-list-aria': 'Client projects',
    'filter-aria': 'Filter by area',
    'filter-all': 'All',
    'filter-automation': 'Automation',
    'filter-ai': 'Chatbots and AI',
    'filter-count-one': '1 project',
    'filter-count-many': '{n} projects',
    'case-client': 'Client',
    'case-area': 'Area · Platform',
    'case-period': 'Period',
    'case-stack': 'Technologies',
    'period-2025-now': '2025–Present',

    'case-1-title': 'ITSM support (GLPI)',
    'case-1-lead': 'Continuous support and evolution of the GLPI environment, focused on stability, predictability and experience. Tier-2 tickets, catalog governance and recurring optimizations.',
    'case-1-scope-1': 'Business rules, conditional fields and queue routing;',
    'case-1-scope-2': 'Standardized forms, templates and checklists;',
    'case-1-scope-3': 'SLAs/OLAs, notifications and operational alerts;',
    'case-1-scope-4': 'Power BI reports and KPIs to support decisions.',

    'case-2-title': 'ITSM implementation and support (GLPI)',
    'case-2-lead': 'End-to-end rollout with catalog, SLAs and approval flows. Assisted operation after go-live, triage automations and recurring reports.',
    'case-2-scope-1': 'Process design (Incident, Request, Change);',
    'case-2-scope-2': 'Conditional fields, forms and validations;',
    'case-2-scope-3': 'Essential integrations (email/Teams) and automations;',
    'case-2-scope-4': 'Operational KPIs and change governance.',

    'case-3-title': 'ITSM support (Serviceaide ISM)',
    'case-3-lead': 'Support with standardized queues, profiles and automatic rules. Focus on service flow, catalog governance and operational reliability.',
    'case-3-scope-1': 'Queue structure, roles and routing matrices;',
    'case-3-scope-2': 'Form adjustments and routine automations;',
    'case-3-scope-3': 'SLAs, notifications and severity-based alerts;',
    'case-3-scope-4': 'Data hygiene (categories, services, CIs).',

    'case-4-title': 'ITSM support (Serviceaide ISM)',
    'case-4-lead': 'Support with process evolution, platform administration and ticket handling. Rules and integrations to reduce cycle time and increase predictability.',
    'case-4-scope-1': 'Service catalog and standardized forms;',
    'case-4-scope-2': 'Automatic rules and queue routing;',
    'case-4-scope-3': 'Consistent SLAs/OLAs and notifications;',
    'case-4-scope-4': 'Operational and executive reports.',

    'case-5-area': 'Chatbots and AI · Genesys Cloud',
    'case-5-title': 'Chatbot implementation and support (Genesys Cloud)',
    'case-5-lead': 'Conversational assistant dispatching to Genesys queues, integrated with Teams and WhatsApp. Data-driven conversation flow, human handoff and integrations with internal systems.',
    'case-5-scope-1': 'Mapping intents, entities and support journeys;',
    'case-5-scope-2': 'Routing and handoff with context to the right queues;',
    'case-5-scope-3': 'Standard messages, consistent tone and feedback capture;',
    'case-5-scope-4': 'Logs and metrics for tuning and continuous improvement.',

    'case-6-area': 'Chatbots and AI · Automation',
    'case-6-title': 'AI call transcription and evaluation',
    'case-6-lead': 'Automation that replaces manual quality audits with an automated process that analyzes and scores interactions from call transcripts.',

    'case-7-title': 'GLPI migration and structural validation',
    'case-7-lead': 'Migrations and structural validations in GLPI, including SSO/SAML authentication, knowledge base import and functional validation across platform versions.',

    'case-8-area': 'Automation · Microsoft Entra ID',
    'case-8-title': 'Password reset automation',
    'case-8-lead': 'Automated password reset flow for Microsoft Entra ID users via Microsoft Graph API, triggered from the support channel.',

    'case-9-area': 'Chatbots and AI · AI agent',
    'case-9-title': 'Conversational AI financial assistant',
    'case-9-lead': 'AI agent connected to messaging, with market data lookup, conversation memory and a retrieval layer (RAG).',

    /* Contact */
    'contact-eyebrow': 'Contact',
    'contact-title': 'Let’s talk',
    'contact-lead': 'Share a quick overview of your operation. I’ll reply with clear next steps.',
    'contact-section-aria': 'Contact channels',
    'contact-info-title': 'Direct contact',
    'contact-label-email': 'Email',
    'contact-label-phone': 'Phone',
    'contact-label-location': 'Location',
    'contact-location': 'Santo André, São Paulo, Brazil',
    'contact-form-title': 'Form',
    'form-name-label': 'Name',
    'form-name-placeholder': 'Your full name',
    'form-email-label': 'Email',
    'form-email-placeholder': 'you@company.com',
    'form-phone-label': 'Phone (optional)',
    'form-message-label': 'Message',
    'form-message-placeholder': 'Briefly describe the context and the goal.',
    'form-submit': 'Send message',
    'form-sending': 'Sending…',
    'form-success': 'Message sent. I’ll get back to you soon.',
    'form-error': 'The message couldn’t be sent. Try again or write to vinfranrocha@gmail.com.',

    /* Round 3: standardized projects (Client + Scope) */
    'client-own': 'Personal project',
    'case-not-informed': 'Not provided',
    'case-scope-label': 'Scope',
    'case-6-scope-1': 'Automatic transcription of support calls;',
    'case-6-scope-2': 'AI-based analysis and scoring of interactions;',
    'case-6-scope-3': 'Replacement of manual quality audits.',
    'case-7-scope-1': 'SSO/SAML authentication integration;',
    'case-7-scope-2': 'Knowledge base import;',
    'case-7-scope-3': 'Functional validation across platform versions.',
    'case-8-scope-1': 'Password reset in Microsoft Entra ID via Microsoft Graph API;',
    'case-8-scope-2': 'Flow triggered from the support channel.',
    'case-9-scope-1': 'AI agent connected to messaging;',
    'case-9-scope-2': 'Market data lookup;',
    'case-9-scope-3': 'Conversation memory;',
    'case-9-scope-4': 'Retrieval layer (RAG).',

    /* Round 2: photo, band, featured, contact, footer */
    'photo-alt': 'Vinícius Franco Rocha',
    'photo-caption-role': 'Tecnocomp · Mid-level',
    'feature-aria': 'Numbers and clients',
    'about-note-label': 'Recognition',
    'cases-featured': 'Featured',
    'cases-more': 'More client projects',
    'cases-own': 'Personal projects',
    'case-more': 'View scope',
    'copy-label': 'Copy',
    'copy-done': 'Copied',
    'copy-email-aria': 'Copy email',
    'copy-done-aria': 'Email copied',
    'form-response-time': 'I reply within 2 business days.',
    'footer-nav-aria': 'Footer navigation',
    'footer-back-top': 'Back to top',

    /* Footer */
    'footer-social-aria': 'Social and contact',
    'footer-email': 'Email',
    'footer-rights': '© 2026 Vinícius Franco Rocha. All rights reserved.',
  },
};

/* ========================================================================
   2) Utilitários
   ======================================================================== */
const VFR = {
  storageKey: 'vfr_portfolio_lang',
  langs: ['pt', 'en'],
  defaultLang: 'pt',
  htmlLang: { pt: 'pt-BR', en: 'en' },
  desktopQuery: '(min-width: 901px)',
};

const storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* modo privado, bloqueado etc. */ }
  },
};

const reducedMotionQuery = window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : { matches: false, addEventListener() {} };

/* A classe html.motion é definida no <head>; é a fonte de verdade. */
const motionEnabled = () => document.documentElement.classList.contains('motion');

/* Executa quando a tela de carregamento terminar (ou já, se não houver tela).
   Evita que animações de entrada rodem escondidas atrás dela. */
const whenLoaded = (fn) => {
  if (window.__vfrLoaded || !document.documentElement.classList.contains('is-loading')) {
    fn();
  } else {
    document.addEventListener('vfr:loaded', fn, { once: true });
  }
};

/* ========================================================================
   3) Motor de i18n
   ======================================================================== */
let currentLang = VFR.defaultLang;

const t = (key, lang = currentLang) => {
  const dict = I18N[lang] || {};
  if (dict[key] != null) return dict[key];
  return I18N[VFR.defaultLang][key];
};

const applyI18n = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.dataset.i18n, lang);
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s && s.trim());
      if (!attr || !key) return;
      const value = t(key, lang);
      if (value != null) el.setAttribute(attr, value);
    });
  });
};

const setLanguage = (lang) => {
  const normalized = VFR.langs.includes(lang) ? lang : VFR.defaultLang;
  currentLang = normalized;
  storage.set(VFR.storageKey, normalized);

  applyI18n(normalized);
  document.documentElement.setAttribute('lang', VFR.htmlLang[normalized]);

  // Toggle de idioma: marca a opção ativa (o aria-label vem do dicionário)
  document.querySelectorAll('[data-lang-option]').forEach((opt) => {
    opt.classList.toggle('is-active', opt.dataset.langOption === normalized);
  });

  document.dispatchEvent(new CustomEvent('vfr:langchange', { detail: { lang: normalized } }));
  return normalized;
};

/* ========================================================================
   4) Navegação
   ======================================================================== */

/* Âncoras da mesma página: rolagem suave (se motion) + foco no destino.
   O offset do header fixo vem de scroll-padding-top no CSS. */
const initAnchors = () => {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="#"]');
    if (!link) return;

    const url = new URL(link.href, window.location.href);
    const here = window.location.pathname.replace(/index\.html$/, '');
    const there = url.pathname.replace(/index\.html$/, '');
    if (here !== there || !url.hash) return;

    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: motionEnabled() ? 'smooth' : 'auto', block: 'start' });
    history.pushState(null, '', url.hash);

    if (link.classList.contains('skip-link') || link.hasAttribute('data-back-to-top')) {
      target.focus({ preventScroll: true });
    }
  });
};

const initMobileMenu = () => {
  const header = document.querySelector('.site-header');
  const toggle = header?.querySelector('.menu-toggle');
  const nav = header?.querySelector('.site-nav');
  if (!header || !toggle || !nav) return;

  const desktop = window.matchMedia(VFR.desktopQuery);

  const setOpen = (isOpen) => {
    header.classList.toggle('nav-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (desktop.matches) nav.removeAttribute('aria-hidden');
    else nav.setAttribute('aria-hidden', String(!isOpen));
  };

  toggle.addEventListener('click', () => setOpen(!header.classList.contains('nav-open')));

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!desktop.matches) setOpen(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener('change', () => setOpen(false));
  setOpen(false);
};

/* Header: borda inferior só depois de começar a rolar (R10) */
const initHeaderScroll = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
};

/* Item ativo do menu acompanhando a rolagem (home)
   data-spy="id1 id2" num link do menu: ele fica ativo (aria-current="location")
   enquanto qualquer uma dessas seções cruza a faixa central da tela.
   Não depende de motion: é informação de navegação, não animação. */
const initScrollSpy = () => {
  const links = document.querySelectorAll('.site-nav a[data-spy]');
  if (!links.length || !('IntersectionObserver' in window)) return;

  const inView = new Set();
  const sections = new Map(); // id da seção → links que a acompanham

  links.forEach((link) => {
    link.dataset.spy.split(/\s+/).forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      if (!sections.has(section)) sections.set(section, []);
      sections.get(section).push(link);
    });
  });

  const render = () => {
    links.forEach((link) => {
      const ids = link.dataset.spy.split(/\s+/);
      const active = ids.some((id) => inView.has(id));
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) inView.add(entry.target.id);
      else inView.delete(entry.target.id);
    });
    render();
  }, { rootMargin: '-45% 0px -50% 0px' }); // faixa de ~5% no meio da viewport

  sections.forEach((_, section) => observer.observe(section));
};

/* ========================================================================
   5) Idioma — um único botão que alterna PT ⇄ EN
   O botão inteiro é a área de clique; "PT / EN" é só indicação visual.
   ======================================================================== */
const initLanguageSwitch = () => {
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  });
};

/* ========================================================================
   6) Motion
   Tudo aqui é opcional: sem html.motion (reduced motion ou falha de JS),
   o conteúdo aparece estático e completo.
   ======================================================================== */

/* 6.1 Reveals por IntersectionObserver
   Variações definidas no CSS via data-reveal="up|fade|left|mask".
   data-reveal-stagger="80" num pai escalona os filhos (ms por item). */
const initReveal = () => {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  document.querySelectorAll('[data-reveal-stagger]').forEach((parent) => {
    const step = parseInt(parent.dataset.revealStagger, 10) || 70;
    parent.querySelectorAll('[data-reveal]').forEach((child, i) => {
      child.style.setProperty('--reveal-delay', `${Math.min(i * step, 480)}ms`);
    });
  });

  const showAll = () => elements.forEach((el) => el.classList.add('is-visible'));

  if (!motionEnabled() || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  // O IntersectionObserver respeita o clip-path do próprio alvo: um elemento
  // "mask" começa 100% recortado e nunca seria detectado. Nesses casos o
  // observado é o pai, e a classe é aplicada ao elemento de reveal.
  const targets = new Map(); // observado → elementos a revelar
  elements.forEach((el) => {
    const observed = el.dataset.reveal === 'mask' && el.parentElement ? el.parentElement : el;
    if (!targets.has(observed)) targets.set(observed, []);
    targets.get(observed).push(el);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      targets.get(entry.target)?.forEach((el) => el.classList.add('is-visible'));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach((_, observed) => observer.observe(observed));

  reducedMotionQuery.addEventListener?.('change', (event) => {
    if (!event.matches) return;
    document.documentElement.classList.remove('motion');
    observer.disconnect();
    showAll();
  });
};

/* 6.2 Kinetic typography do nome (hero)
   Cada palavra sobe de dentro de uma máscara, em sequência rápida.
   Leitores de tela recebem o texto inteiro; as palavras animadas são aria-hidden. */
const initKineticTitle = () => {
  const title = document.querySelector('[data-kinetic]');
  if (!title || !motionEnabled()) return;

  const text = title.textContent.trim();
  const words = text.split(/\s+/);

  const srText = document.createElement('span');
  srText.className = 'visually-hidden';
  srText.textContent = text;

  const visual = document.createElement('span');
  visual.setAttribute('aria-hidden', 'true');
  words.forEach((word, i) => {
    const mask = document.createElement('span');
    mask.className = 'kw';
    const inner = document.createElement('span');
    inner.className = 'kw-inner';
    inner.textContent = word;
    inner.style.setProperty('--kw-delay', `${80 + i * 90}ms`);
    mask.appendChild(inner);
    visual.appendChild(mask);
    if (i < words.length - 1) visual.appendChild(document.createTextNode(' '));
  });

  title.replaceChildren(srText, visual);

  // Dois frames para o estado inicial ser pintado antes da transição
  requestAnimationFrame(() => requestAnimationFrame(() => title.classList.add('is-in')));
};

/* 6.3 Linha da timeline desenhada pelo scroll
   A linha em petróleo cresce conforme a timeline atravessa a tela
   (progresso = quanto da timeline já passou de ~60% da altura da viewport).
   Usa pathLength="1" no SVG, então o offset vai de 1 (vazia) a 0 (cheia). */
const initTimelineLine = () => {
  const timeline = document.querySelector('[data-timeline]');
  if (!timeline || !motionEnabled()) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const rect = timeline.getBoundingClientRect();
    const anchor = window.innerHeight * 0.6;
    const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
    timeline.style.setProperty('--tl-offset', (1 - progress).toFixed(4));
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  // <details> abrindo/fechando muda a altura da timeline (inclusive durante a animação)
  timeline.addEventListener('toggle', onScroll, true);
  timeline.addEventListener('vfr:details-resize', onScroll);
  update();
};

/* 6.4 <details> com altura animada ao abrir e fechar
   Sem motion, o <details> nativo abre/fecha na hora (nada é interceptado).
   Com motion: o clique no <summary> anima a altura do conteúdo via Web
   Animations API; ao fechar, só remove [open] quando a animação termina. */
const initDetailsAnimation = () => {
  if (!motionEnabled()) return;

  document.querySelectorAll('details.timeline-details, details.case-details').forEach((details) => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('summary + *');
    if (!summary || !content) return;

    let animation = null;
    const DURATION = 380;
    const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

    // Enquanto anima, avisa a timeline a cada frame para a linha acompanhar
    const notifyWhileRunning = () => {
      if (!animation) return;
      details.dispatchEvent(new CustomEvent('vfr:details-resize', { bubbles: true }));
      requestAnimationFrame(notifyWhileRunning);
    };

    const run = (from, to, onDone) => {
      animation?.cancel();
      details.classList.add('is-animating');
      animation = content.animate(
        [{ height: `${from}px`, opacity: from === 0 ? 0 : 1 }, { height: `${to}px`, opacity: to === 0 ? 0 : 1 }],
        { duration: DURATION, easing: EASING }
      );
      requestAnimationFrame(notifyWhileRunning);
      animation.onfinish = () => {
        animation = null;
        details.classList.remove('is-animating');
        onDone?.();
        details.dispatchEvent(new CustomEvent('vfr:details-resize', { bubbles: true }));
      };
      animation.oncancel = () => {
        animation = null;
        details.classList.remove('is-animating');
      };
    };

    summary.addEventListener('click', (event) => {
      if (!motionEnabled()) return; // reduced motion ligado com a página aberta: comportamento nativo
      event.preventDefault();

      if (!details.open) {
        details.open = true;
        run(0, content.offsetHeight);
      } else {
        const current = content.offsetHeight;
        run(current, 0, () => { details.open = false; });
      }
    });
  });
};

/* 6.5 Contagem das métricas (R2)
   Sobe de 0 ao valor em 600 ms, uma única vez, quando a métrica ENTRA na tela
   rolando. Se já estiver visível na carga, o número fica parado no valor final
   (nunca mostra valor errado em print, prévia ou leitura rápida). */
const initCountUp = () => {
  const items = document.querySelectorAll('[data-count]');
  if (!items.length || !motionEnabled() || !('IntersectionObserver' in window)) return;

  const run = (el) => {
    const to = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / 600, 1);
      const eased = 1 - (1 - p) ** 3;
      el.textContent = `${Math.round(to * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  let initialPass = true;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (!initialPass) run(entry.target);
    });
  }, { threshold: 0.6 });

  items.forEach((el) => observer.observe(el));
  // O primeiro callback do observer reporta o que já está na tela: esses não animam
  setTimeout(() => { initialPass = false; }, 250);
};

/* 6.6 Pulso único no ponto do cargo atual (item 14, adaptado)
   Dispara uma vez quando o cargo atual entra na tela, depois que a data e o
   conteúdo terminaram de aparecer. */
const initTimelinePulse = () => {
  const current = document.querySelector('.timeline-item.is-current');
  if (!current || !motionEnabled() || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    setTimeout(() => current.classList.add('is-pulsing'), 650);
  }, { threshold: 0.5, rootMargin: '0px 0px -15% 0px' });

  observer.observe(current);
};

/* 6.7 Cursor customizado
   Anel que segue o ponteiro com lerp via rAF (o loop para quando assenta).
   Só em dispositivos com mouse (hover + pointer fine) e com motion ativo. */
const initCursor = () => {
  if (!motionEnabled()) return;
  const fineQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!fineQuery.matches) return;

  const INTERACTIVE = 'a[href], button:not([disabled]), summary, label, select, [role="button"], [data-cursor="hover"]';
  const TEXT_INPUT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, [contenteditable="true"]';
  // O cursor do sistema fica oculto, então o customizado precisa acompanhar de perto
  const EASE = 0.5;
  const root = document.documentElement;

  const cursor = document.createElement('div');
  cursor.className = 'cursor is-hidden';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<div class="cursor-ring"></div><div class="cursor-orbit"><span></span><span></span></div>';
  document.body.appendChild(cursor);
  root.classList.add('has-custom-cursor');

  let targetX = 0;
  let targetY = 0;
  let x = 0;
  let y = 0;
  let raf = null;
  let active = false;
  let overText = false;

  // Posição do ponteiro na página anterior: o cursor já aparece no lugar certo
  // após trocar de página, sem precisar mexer o mouse (a seta do sistema está oculta)
  const POS_KEY = 'vfr_cursor_pos';
  try {
    const saved = JSON.parse(sessionStorage.getItem(POS_KEY) || 'null');
    if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) {
      targetX = x = saved.x;
      targetY = y = saved.y;
      active = true;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursor.classList.remove('is-hidden');
    }
  } catch { /* sessionStorage indisponível */ }
  const savePos = () => {
    try { sessionStorage.setItem(POS_KEY, JSON.stringify({ x: targetX, y: targetY })); } catch { /* ignora */ }
  };
  window.addEventListener('pagehide', savePos);
  document.addEventListener('click', savePos, true);

  const place = () => {
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const render = () => {
    x += (targetX - x) * EASE;
    y += (targetY - y) * EASE;
    if (Math.abs(targetX - x) < 0.1 && Math.abs(targetY - y) < 0.1) {
      x = targetX;
      y = targetY;
      place();
      raf = null;
      return;
    }
    place();
    raf = requestAnimationFrame(render);
  };

  const onMove = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    targetX = event.clientX;
    targetY = event.clientY;
    if (!active) {
      active = true;
      x = targetX;
      y = targetY;
      place();
    }
    cursor.classList.remove('is-hidden');
    if (!raf) raf = requestAnimationFrame(render);
  };

  const onOver = (event) => {
    const el = event.target instanceof Element ? event.target : null;
    if (!el) return;
    overText = !!el.closest(TEXT_INPUT);
    // Campo de texto: vira barra vertical (cursor de texto), nunca some
    cursor.classList.toggle('is-text', overText);
    cursor.classList.toggle('is-hover', !overText && !!el.closest(INTERACTIVE));
    cursor.classList.toggle('is-light', !!el.closest('[data-cursor="light"]'));
  };

  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerover', onOver, { passive: true });
  document.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  document.addEventListener('pointerup', () => cursor.classList.remove('is-down'));
  document.documentElement.addEventListener('mouseleave', () => {
    cursor.classList.add('is-hidden');
    active = false;
  });

  const disable = () => {
    root.classList.remove('has-custom-cursor'); // devolve a seta do sistema
    cursor.remove();
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerover', onOver);
    if (raf) cancelAnimationFrame(raf);
  };
  fineQuery.addEventListener?.('change', (event) => { if (!event.matches) disable(); });
  reducedMotionQuery.addEventListener?.('change', (event) => { if (event.matches) disable(); });
};

/* 6.8 Fundo: circuitos
   Detalhe discreto só nas seções de fundo BRANCO: poucas trilhas de circuito (nós
   quadrados, ligações em "L" com quinas arredondadas), concentradas nas laterais,
   longe do texto. Pulsos de energia percorrem as trilhas de forma contínua
   (movimento por tempo real, rastro que se apaga aos poucos, nós acendendo de leve
   quando a energia passa) e a rede acompanha levemente o cursor.
   Um <canvas> por seção; um único loop que só desenha seções visíveis e pausa com a
   aba oculta. Com "reduzir movimento": circuito parado, sem pulsos nem parallax.
   No celular (até 760px) o circuito não é criado: nada de canvas nem loop. */
const mobileNetworkQuery = window.matchMedia('(max-width: 760px)');

const initNetwork = () => {
  // Celular: só inicializa se a tela passar a ser larga (ex.: girar o tablet)
  if (mobileNetworkQuery.matches) {
    const onChange = (event) => {
      if (event.matches) return;
      mobileNetworkQuery.removeEventListener('change', onChange);
      initNetwork();
    };
    mobileNetworkQuery.addEventListener('change', onChange);
    return;
  }

  // Fundos brancos: hero, intro das páginas internas e seções .block sem variação de cor
  const sections = Array.from(document.querySelectorAll('.hero, .block'))
    .filter((s) => !s.classList.contains('block--paper') && !s.classList.contains('feature-band'));
  if (!sections.length) return;

  const animate = motionEnabled();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rgb = getComputedStyle(document.documentElement).getPropertyValue('--network').trim() || '15, 114, 133';

  const CELL = 150;          // célula da grade (px)
  const NODE_CHANCE = 0.16;  // poucos nós: é só um detalhe
  const SNAP = 4;
  const CORNER = 8;          // raio das quinas das trilhas
  const TRAIL = 70;          // comprimento do rastro do pulso (px)

  let pointerX = 0;
  let pointerY = 0;
  let parallaxX = 0;
  let parallaxY = 0;
  if (animate) {
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
  }

  const snap = (v) => Math.round(v / SNAP) * SNAP;
  const smooth = (t) => t * t * (3 - 2 * t);

  // Mais presente nas laterais, quase invisível no centro (onde fica o texto)
  const edgeWeight = (x, w) => {
    const fromCenter = Math.abs(x - w / 2) / (w / 2); // 0 no centro, 1 na borda
    return 0.12 + 0.88 * smooth(Math.min(1, Math.max(0, (fromCenter - 0.35) / 0.5)));
  };

  // Ponto a uma distância d numa trilha em L (horizontal até a quina, depois vertical)
  const pointOn = (link, d) => {
    const { a, b } = link;
    const h = Math.abs(b.x - a.x);
    if (d <= h) return { x: a.x + Math.sign(b.x - a.x) * d, y: a.y };
    return { x: b.x, y: a.y + Math.sign(b.y - a.y) * (d - h) };
  };

  const fields = sections.map((section) => {
    const canvas = document.createElement('canvas');
    canvas.className = 'network-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    section.prepend(canvas);
    return { section, canvas, ctx: canvas.getContext('2d'), nodes: [], links: [], pulses: [], w: 0, h: 0, visible: false };
  });

  const build = (field) => {
    const rect = field.section.getBoundingClientRect();
    field.w = Math.max(1, Math.round(rect.width));
    field.h = Math.max(1, Math.round(rect.height));
    field.canvas.width = field.w * dpr;
    field.canvas.height = field.h * dpr;
    field.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cols = Math.ceil(field.w / CELL) + 1;
    const rows = Math.ceil(field.h / CELL) + 1;
    const nodes = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = snap(c * CELL + CELL * (0.2 + Math.random() * 0.6));
        // Menos nós perto do centro
        if (Math.random() > NODE_CHANCE * (0.3 + 0.7 * edgeWeight(x, field.w))) continue;
        nodes.push({ x, y: snap(r * CELL + CELL * (0.2 + Math.random() * 0.6)), hub: Math.random() < 0.2, energy: 0, links: [] });
      }
    }

    const links = [];
    const seen = new Set();
    nodes.forEach((n, i) => {
      nodes
        .map((m, j) => ({ j, d: Math.abs(m.x - n.x) + Math.abs(m.y - n.y) }))
        .filter((o) => o.j !== i && o.d < CELL * 2.4)
        .sort((p, q) => p.d - q.d)
        .slice(0, 1 + (Math.random() < 0.35 ? 1 : 0))
        .forEach(({ j }) => {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (seen.has(key)) return;
          seen.add(key);
          const link = { a: n, b: nodes[j], length: Math.abs(nodes[j].x - n.x) + Math.abs(nodes[j].y - n.y) };
          if (link.length < 1) return;
          links.push(link);
          n.links.push(link);
          nodes[j].links.push(link);
        });
    });

    // Poucos pulsos, velocidades levemente diferentes (px por segundo)
    const pulses = animate && links.length
      ? Array.from({ length: Math.max(1, Math.round(links.length / 4)) }, () => {
        const link = links[Math.floor(Math.random() * links.length)];
        return { link, d: Math.random() * link.length, forward: Math.random() < 0.5, speed: 38 + Math.random() * 26, history: [] };
      })
      : [];

    Object.assign(field, { nodes, links, pulses });
  };

  const traceLinks = (ctx, links) => {
    links.forEach(({ a, b }) => {
      const r = Math.min(CORNER, Math.abs(b.x - a.x) / 2, Math.abs(b.y - a.y) / 2);
      ctx.moveTo(a.x + 0.5, a.y + 0.5);
      if (r > 0.5) {
        ctx.arcTo(b.x + 0.5, a.y + 0.5, b.x + 0.5, b.y + 0.5, r);
      } else {
        ctx.lineTo(b.x + 0.5, a.y + 0.5);
      }
      ctx.lineTo(b.x + 0.5, b.y + 0.5);
    });
  };

  // Avança o pulso por distância, passando de uma trilha para a próxima sem parar
  const advance = (p, dist) => {
    let remaining = dist;
    let guard = 0;
    while (remaining > 0 && guard++ < 8) {
      const toEnd = p.forward ? p.link.length - p.d : p.d;
      if (remaining < toEnd) {
        p.d += p.forward ? remaining : -remaining;
        remaining = 0;
      } else {
        remaining -= toEnd;
        const node = p.forward ? p.link.b : p.link.a;
        node.energy = 1; // o nó acende quando a energia chega
        const options = node.links.filter((l) => l !== p.link);
        const next = options.length ? options[Math.floor(Math.random() * options.length)] : p.link;
        p.forward = next.a === node;
        p.d = p.forward ? 0 : next.length;
        p.link = next;
      }
    }
  };

  const draw = (field, dt) => {
    const { ctx, w, h } = field;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(parallaxX * 18, parallaxY * 12);

    // Trilhas: bem suaves, mais fortes nas laterais (gradiente horizontal)
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, `rgba(${rgb}, 0.16)`);
    grad.addColorStop(0.3, `rgba(${rgb}, 0.03)`);
    grad.addColorStop(0.7, `rgba(${rgb}, 0.03)`);
    grad.addColorStop(1, `rgba(${rgb}, 0.16)`);
    ctx.lineWidth = 1;
    ctx.strokeStyle = grad;
    ctx.beginPath();
    traceLinks(ctx, field.links);
    ctx.stroke();

    // Nós (acendem e apagam suavemente)
    field.nodes.forEach((n) => {
      const k = edgeWeight(n.x, w);
      if (animate && n.energy > 0) n.energy = Math.max(0, n.energy - dt * 1.4);
      const glow = n.energy;
      if (glow > 0.01) {
        ctx.fillStyle = `rgba(${rgb}, ${0.1 * glow * k})`;
        ctx.fillRect(n.x - 7, n.y - 7, 15, 15);
      }
      ctx.fillStyle = `rgba(${rgb}, ${(0.22 + 0.45 * glow) * k})`;
      ctx.strokeStyle = ctx.fillStyle;
      if (n.hub) {
        ctx.strokeRect(n.x - 4.5, n.y - 4.5, 10, 10);
        ctx.fillRect(n.x - 1, n.y - 1, 3, 3);
      } else {
        ctx.fillRect(n.x - 2, n.y - 2, 5, 5);
      }
    });

    // Pulsos: rastro contínuo que se apaga do fim para a cabeça
    field.pulses.forEach((p) => {
      if (animate) advance(p, p.speed * dt);
      const head = pointOn(p.link, p.d);
      p.history.unshift(head);
      // guarda pontos suficientes para cobrir o rastro
      let len = 0;
      for (let i = 1; i < p.history.length; i++) {
        len += Math.hypot(p.history[i].x - p.history[i - 1].x, p.history[i].y - p.history[i - 1].y);
        if (len > TRAIL) { p.history.length = i + 1; break; }
      }
      const k = edgeWeight(head.x, w);
      for (let i = 1; i < p.history.length; i++) {
        const t = 1 - i / p.history.length; // 1 na cabeça → 0 no fim
        ctx.strokeStyle = `rgba(${rgb}, ${0.5 * t * t * k})`;
        ctx.lineWidth = 1 + t;
        ctx.beginPath();
        ctx.moveTo(p.history[i - 1].x + 0.5, p.history[i - 1].y + 0.5);
        ctx.lineTo(p.history[i].x + 0.5, p.history[i].y + 0.5);
        ctx.stroke();
      }
      // cabeça com brilho suave
      ctx.fillStyle = `rgba(${rgb}, ${0.18 * k})`;
      ctx.beginPath();
      ctx.arc(head.x + 0.5, head.y + 0.5, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(${rgb}, ${0.8 * k})`;
      ctx.beginPath();
      ctx.arc(head.x + 0.5, head.y + 0.5, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  };

  fields.forEach((field) => { build(field); draw(field, 0); });

  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const field = fields.find((f) => f.section === entry.target);
        if (!field) return;
        const rect = entry.target.getBoundingClientRect();
        if (mobileNetworkQuery.matches) return;
        if (Math.abs(Math.round(rect.width) - field.w) > 2 || Math.abs(Math.round(rect.height) - field.h) > 2) {
          build(field);
          draw(field, 0);
        }
      });
    });
    fields.forEach((field) => ro.observe(field.section));
  }

  if (!animate) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const field = fields.find((f) => f.section === entry.target);
      if (field) field.visible = entry.isIntersecting;
    });
  }, { rootMargin: '100px 0px' });
  fields.forEach((field) => io.observe(field.section));

  let raf = null;
  let last = 0;
  const loop = (now) => {
    // Janela estreitou para largura de celular: para o loop (o canvas some pelo CSS)
    if (mobileNetworkQuery.matches) { raf = null; return; }
    // dt em segundos, limitado para não "pular" depois de a aba voltar
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    const ease = 1 - Math.pow(0.001, dt); // suavização do parallax independente do FPS
    parallaxX += (pointerX - parallaxX) * ease;
    parallaxY += (pointerY - parallaxY) * ease;
    fields.forEach((field) => { if (field.visible) draw(field, dt); });
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = null;
    } else if (!raf && !mobileNetworkQuery.matches) {
      last = 0;
      raf = requestAnimationFrame(loop);
    }
  });

  mobileNetworkQuery.addEventListener('change', (event) => {
    if (event.matches || raf || document.hidden || !motionEnabled()) return;
    fields.forEach((field) => { build(field); draw(field, 0); });
    last = 0;
    raf = requestAnimationFrame(loop);
  });

  reducedMotionQuery.addEventListener?.('change', (event) => {
    if (!event.matches) return;
    cancelAnimationFrame(raf);
    raf = null;
  });
};

/* ========================================================================
   7) Filtro de projetos (data-area nos .case)
   ======================================================================== */
const initProjectFilter = () => {
  const buttons = document.querySelectorAll('[data-filter]');
  const cases = document.querySelectorAll('.case[data-area]');
  const countEl = document.getElementById('filter-count');
  if (!buttons.length || !cases.length) return;

  let active = 'all';
  const matches = (item, filter) => filter === 'all' || item.dataset.area === filter;

  // Quantidade por área ao lado de cada botão (fixa: não depende do filtro ativo)
  buttons.forEach((btn) => {
    const n = Array.from(cases).filter((item) => matches(item, btn.dataset.filter)).length;
    const badge = btn.querySelector('.filter-n');
    if (badge) badge.textContent = String(n);
  });

  const updateCount = () => {
    if (!countEl) return;
    const visible = Array.from(cases).filter((c) => !c.hidden).length;
    countEl.textContent = visible === 1
      ? t('filter-count-one')
      : t('filter-count-many').replace('{n}', visible);
  };

  // Traço único que desliza até o botão ativo (item 12)
  const bar = document.querySelector('.filter-bar');
  const moveBar = () => {
    const current = Array.from(buttons).find((btn) => btn.dataset.filter === active);
    if (!bar || !current) return;
    bar.style.width = `${current.offsetWidth}px`;
    bar.style.transform = `translateX(${current.offsetLeft}px)`;
  };

  const apply = (filter, { animate = true } = {}) => {
    active = filter;
    buttons.forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.filter === filter)));
    cases.forEach((item) => {
      const show = matches(item, filter);
      item.hidden = !show;
      // Casos que (re)aparecem entram com um fade curto; já revelados não repetem o reveal de scroll
      item.classList.remove('is-filtered-in');
      if (show && animate && motionEnabled()) {
        item.classList.add('is-visible');
        void item.offsetWidth; // reinicia a animação
        item.classList.add('is-filtered-in');
      }
    });
    // Grupo ("Em destaque" / "Outros projetos") sem nenhum caso visível some inteiro
    document.querySelectorAll('[data-case-group]').forEach((group) => {
      group.hidden = !group.querySelector('.case:not([hidden])');
    });
    // Seção (clientes / próprios) sem nenhum caso visível também some
    document.querySelectorAll('[data-case-section]').forEach((section) => {
      section.hidden = !section.querySelector('.case:not([hidden])');
    });
    updateCount();
    moveBar();
  };

  buttons.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.dataset.filter !== active) apply(btn.dataset.filter);
  }));
  document.addEventListener('vfr:langchange', () => {
    updateCount();
    moveBar(); // a largura do botão muda com o idioma
  });
  window.addEventListener('resize', moveBar, { passive: true });
  document.fonts?.ready.then(moveBar);
  apply(active, { animate: false });
  // Posição inicial sem animar o traço
  if (bar) {
    bar.style.transition = 'none';
    moveBar();
    requestAnimationFrame(() => { bar.style.transition = ''; });
  }
};

/* ========================================================================
   8) Formulário de contato e botão copiar (FormSubmit via AJAX, com fallback de POST)
   ======================================================================== */
const initContactForm = () => {
  const form = document.querySelector('form.contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const nextInput = document.getElementById('form-next');
  let statusKey = null;

  if (nextInput) {
    nextInput.value = new URL('contato.html?sent=1', window.location.href).href;
  }

  const setStatus = (key, type) => {
    statusKey = key;
    if (!statusEl) return;
    statusEl.textContent = key ? t(key) : '';
    statusEl.dataset.state = type || '';
    // Reinicia o fade de entrada a cada mudança de status (item 15)
    statusEl.classList.remove('is-shown');
    if (key) {
      void statusEl.offsetWidth;
      statusEl.classList.add('is-shown');
    }
  };

  const setLoading = (isLoading) => {
    form.classList.toggle('is-loading', isLoading);
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    submitBtn.setAttribute('aria-busy', String(isLoading));
    submitBtn.textContent = t(isLoading ? 'form-sending' : 'form-submit');
  };

  // Retorno do fallback sem JS/AJAX (FormSubmit redireciona com ?sent=1)
  if (new URL(window.location.href).searchParams.get('sent') === '1') {
    setStatus('form-success', 'success');
  }

  document.addEventListener('vfr:langchange', () => {
    if (statusKey) statusEl.textContent = t(statusKey);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;

    setLoading(true);
    setStatus('form-sending', 'info');

    try {
      const action = form.getAttribute('action');
      const ajaxUrl = action.includes('/ajax/') ? action : action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      const response = await fetch(ajaxUrl, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error('request_failed');

      setStatus('form-success', 'success');
      form.reset();
    } catch {
      setStatus('form-error', 'error');
    } finally {
      setLoading(false);
    }
  });
};

/* Botão "Copiar" (e-mail na página de contato)
   Copia o valor, troca ícone e texto por "Copiado" por 1,6 s e anuncia a troca
   pelo aria-label. Sem API de clipboard (http sem TLS, navegador antigo), o botão
   seleciona o texto do link ao lado para o usuário copiar manualmente. */
const initCopyButtons = () => {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    const text = btn.querySelector('.copy-btn-text');
    const use = btn.querySelector('use');
    let timer = null;

    const showDone = () => {
      clearTimeout(timer);
      btn.classList.add('is-done');
      if (text) text.textContent = t('copy-done');
      use?.setAttribute('href', use.getAttribute('href').replace('#i-copy', '#i-check'));
      btn.setAttribute('aria-label', t('copy-done-aria'));
      timer = setTimeout(() => {
        btn.classList.remove('is-done');
        if (text) text.textContent = t('copy-label');
        use?.setAttribute('href', use.getAttribute('href').replace('#i-check', '#i-copy'));
        btn.setAttribute('aria-label', t('copy-email-aria'));
      }, 1600);
    };

    const selectFallback = () => {
      const value = btn.closest('.channel')?.querySelector('.channel-value');
      if (!value) return;
      const range = document.createRange();
      range.selectNodeContents(value);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    };

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        showDone();
      } catch {
        selectFallback();
      }
    });
  });
};

/* ========================================================================
   9) Boot
   ======================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(storage.get(VFR.storageKey) || VFR.defaultLang);
  initLanguageSwitch();

  initAnchors();
  initMobileMenu();
  initHeaderScroll();
  initScrollSpy();

  // Entradas animadas começam só quando a tela de carregamento some
  whenLoaded(() => {
    initKineticTitle();
    initReveal();
    initCountUp();
  });
  initTimelineLine();
  initTimelinePulse();
  initDetailsAnimation();
  initCursor();
  initNetwork();

  // Contagens de clientes (métrica e "Ambientes atendidos") sempre iguais ao número de nomes na lista
  document.querySelectorAll('[data-client-count]').forEach((el) => {
    const list = document.querySelector('.client-list');
    if (!list) return;
    el.textContent = String(list.children.length);
    if (el.hasAttribute('data-count')) el.dataset.count = String(list.children.length);
  });

  initProjectFilter();
  initContactForm();
  initCopyButtons();

  window.__vfrReady = true;
});
