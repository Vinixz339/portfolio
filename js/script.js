/* ========================================================================
   Vinícius Franco Rocha — script.js (v6)

   Índice
   1) i18n — dicionário por chave { pt, en }
   2) Utilitários
   3) Motor de i18n
   4) Navegação (âncoras, menu mobile)
   5) Seletor de idioma (PT / EN)
   6) Motion (reveals, nome animado, linha da timeline, cursor)
   7) Filtro de projetos
   8) Formulário de contato
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
    'language-aria': 'Idioma',
    'menu-aria': 'Abrir menu principal',

    /* Hero */
    'hero-role-1': 'Analista de ITSM',
    'hero-role-2': 'Automação de processos',
    'hero-role-3': 'Inteligência artificial',
    'hero-lead': 'Analista de ITSM com mais de 2 anos de experiência na administração, customização e sustentação de GLPI e Serviceaide ISM, integrando essas plataformas a automações e chatbots com IA.',
    'hero-btn-cv': 'Baixar CV',
    'hero-btn-projects': 'Ver projetos',
    'hero-btn-contact': 'Falar comigo',

    'flow-type': 'Requisição',
    'flow-step-1': 'Abertura',
    'flow-step-2': 'Triagem automática',
    'flow-step-2-detail': 'n8n · regras de categoria',
    'flow-step-3': 'Aprovação do gestor',
    'flow-step-3-detail': 'fluxo condicional',
    'flow-step-4': 'Execução e fechamento',
    'flow-step-4-detail': 'GLPI · notificação',
    'flow-sla': 'SLA 8h úteis',
    'flow-elapsed': '12 min decorridos',
    'flow-caption': 'Fluxo ilustrativo de um chamado',

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
    'projects-list-aria': 'Lista de projetos',
    'filter-aria': 'Filtrar por área',
    'filter-all': 'Todos',
    'filter-automation': 'Automação',
    'filter-ai': 'Chatbots e IA',
    'filter-count-one': '1 projeto',
    'filter-count-many': '{n} projetos',
    'case-client': 'Cliente',
    'case-type': 'Tipo',
    'case-area': 'Área · Plataforma',
    'case-period': 'Período',
    'case-stack': 'Tecnologias',
    'period-2025-now': '2025–Atual',
    'type-delivery': 'Entrega na Tecnocomp',
    'type-case': 'Case técnico',

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
    'case-6-stack': 'automação',

    'case-7-title': 'Migração e validação estrutural do GLPI',
    'case-7-lead': 'Migrações e validações estruturais em GLPI, incluindo integração de autenticação via SSO/SAML, importação de base de conhecimento e validação funcional entre versões da plataforma.',

    'case-8-area': 'Automação · Microsoft Entra ID',
    'case-8-title': 'Automação de reset de senha',
    'case-8-lead': 'Fluxo automatizado de redefinição de senha de usuários no Microsoft Entra ID via Microsoft Graph API, acionado a partir do canal de atendimento.',

    'case-9-area': 'Chatbots e IA · Agente de IA',
    'case-9-title': 'Assistente financeiro conversacional com IA',
    'case-9-lead': 'Agente de IA integrado a mensageria, com consulta a dados de mercado, memória de conversa e camada de recuperação de informação (RAG).',
    'case-9-stack-1': 'Agente de IA',
    'case-9-stack-3': 'mensageria',

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
    'language-aria': 'Language',
    'menu-aria': 'Open main menu',

    /* Hero */
    'hero-role-1': 'ITSM Analyst',
    'hero-role-2': 'Process automation',
    'hero-role-3': 'Artificial intelligence',
    'hero-lead': 'ITSM analyst with 2+ years of experience administering, customizing and supporting GLPI and Serviceaide ISM, integrating these platforms with automations and AI chatbots.',
    'hero-btn-cv': 'Download CV',
    'hero-btn-projects': 'See projects',
    'hero-btn-contact': 'Get in touch',

    'flow-type': 'Service request',
    'flow-step-1': 'Opened',
    'flow-step-2': 'Automated triage',
    'flow-step-2-detail': 'n8n · category rules',
    'flow-step-3': 'Manager approval',
    'flow-step-3-detail': 'conditional flow',
    'flow-step-4': 'Fulfillment and closure',
    'flow-step-4-detail': 'GLPI · notification',
    'flow-sla': 'SLA 8 business hours',
    'flow-elapsed': '12 min elapsed',
    'flow-caption': 'Illustrative ticket flow',

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
    'projects-list-aria': 'Project list',
    'filter-aria': 'Filter by area',
    'filter-all': 'All',
    'filter-automation': 'Automation',
    'filter-ai': 'Chatbots and AI',
    'filter-count-one': '1 project',
    'filter-count-many': '{n} projects',
    'case-client': 'Client',
    'case-type': 'Type',
    'case-area': 'Area · Platform',
    'case-period': 'Period',
    'case-stack': 'Technologies',
    'period-2025-now': '2025–Present',
    'type-delivery': 'Delivered at Tecnocomp',
    'type-case': 'Technical case',

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
    'case-6-stack': 'automation',

    'case-7-title': 'GLPI migration and structural validation',
    'case-7-lead': 'Migrations and structural validations in GLPI, including SSO/SAML authentication, knowledge base import and functional validation across platform versions.',

    'case-8-area': 'Automation · Microsoft Entra ID',
    'case-8-title': 'Password reset automation',
    'case-8-lead': 'Automated password reset flow for Microsoft Entra ID users via Microsoft Graph API, triggered from the support channel.',

    'case-9-area': 'Chatbots and AI · AI agent',
    'case-9-title': 'Conversational AI financial assistant',
    'case-9-lead': 'AI agent connected to messaging, with market data lookup, conversation memory and a retrieval layer (RAG).',
    'case-9-stack-1': 'AI agent',
    'case-9-stack-3': 'messaging',

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

  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === normalized));
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

    if (link.classList.contains('skip-link')) target.focus({ preventScroll: true });
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

/* ========================================================================
   5) Seletor de idioma — dois botões PT / EN (aria-pressed)
   ======================================================================== */
const initLanguageSwitch = () => {
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang !== currentLang) setLanguage(btn.dataset.lang);
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
  // <details> abrindo/fechando muda a altura da timeline
  timeline.addEventListener('toggle', onScroll, true);
  update();
};

/* 6.4 Cursor customizado
   Anel que segue o ponteiro com lerp via rAF (o loop para quando assenta).
   Só em dispositivos com mouse (hover + pointer fine) e com motion ativo. */
const initCursor = () => {
  if (!motionEnabled()) return;
  const fineQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!fineQuery.matches) return;

  const INTERACTIVE = 'a[href], button:not([disabled]), summary, label, select, [role="button"], [data-cursor="hover"]';
  const TEXT_INPUT = 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, [contenteditable="true"]';
  const EASE = 0.2;

  const cursor = document.createElement('div');
  cursor.className = 'cursor is-hidden';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<div class="cursor-ring"></div>';
  document.body.appendChild(cursor);

  let targetX = 0;
  let targetY = 0;
  let x = 0;
  let y = 0;
  let raf = null;
  let active = false;
  let overText = false;

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
    cursor.classList.toggle('is-hidden', overText);
    if (!raf) raf = requestAnimationFrame(render);
  };

  const onOver = (event) => {
    const el = event.target instanceof Element ? event.target : null;
    if (!el) return;
    overText = !!el.closest(TEXT_INPUT);
    cursor.classList.toggle('is-hover', !overText && !!el.closest(INTERACTIVE));
    cursor.classList.toggle('is-light', !!el.closest('[data-cursor="light"]'));
    if (active) cursor.classList.toggle('is-hidden', overText);
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
    cursor.remove();
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerover', onOver);
    if (raf) cancelAnimationFrame(raf);
  };
  fineQuery.addEventListener?.('change', (event) => { if (!event.matches) disable(); });
  reducedMotionQuery.addEventListener?.('change', (event) => { if (event.matches) disable(); });
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
    updateCount();
  };

  buttons.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.dataset.filter !== active) apply(btn.dataset.filter);
  }));
  document.addEventListener('vfr:langchange', updateCount);
  apply(active, { animate: false });
};

/* ========================================================================
   8) Formulário de contato (FormSubmit via AJAX, com fallback de POST)
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

/* ========================================================================
   9) Boot
   ======================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(storage.get(VFR.storageKey) || VFR.defaultLang);
  initLanguageSwitch();

  initAnchors();
  initMobileMenu();

  initKineticTitle();
  initReveal();
  initTimelineLine();
  initCursor();

  initProjectFilter();
  initContactForm();

  window.__vfrReady = true;
});
