export type DisciplineTag =
  | 'DESIGN GRÁFICO'
  | 'BRANDING'
  | 'UX/UI'
  | '3D'
  | 'ILUSTRAÇÃO'
  | 'MOTION';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientOrContext: string;
  year: string;
  role: string;
  accentColor: string;
  textColorOnAccent: string;
  tags: DisciplineTag[];
  tools: string[];
  coverImage: string;
  behanceUrl: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: { label: string; value: string }[];
  galleryCaptions: { title: string; note: string; image?: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  mode: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionLines?: [string, string];
  degree: string;
  period: string;
  note: string;
}

export interface SkillGroup {
  category: string;
  color: string;
  items: string[];
}

/**
 * ============================================================================
 * ARQUIVO CENTRAL DE CONTEÚDO DO PORTFÓLIO — BRUNO VIANA DE ANDRADE
 * ============================================================================
 */
export const portfolioData = {
  profile: {
    firstName: 'BRUNO',
    lastName: 'VIANA',
    name: 'BRUNO VIANA',
    fullName: 'Bruno Viana de Andrade',
    roleSubtitle: 'Designer • Motion 2D/3D • UI • Ilustração',
    headline: 'Estudo de casos de Design Gráfico, UX, Modelagem 3D e Animação.',
    shortBio:
      'Designer digital híbrido unindo visão analítica (Publicidade) com refinamento estético (Design/ESDI), atuando entre UI/UX, design estático, motion 2D/3D e branding.',
    fullBio:
      'Designer digital híbrido, unindo forte visão analítica (graduação em Publicidade) com refinamento estético (Design/ESDI). Experiência comprovada em empresas de grande porte na criação de assets visuais orientados a dados para campanhas de topo e meio de funil de vendas. Capacidade técnica multidisciplinar, transitando entre design estático (Figma, Photoshop), motion/vídeo (After Effects, Premiere) e modelagem 3D (Blender). Busco atuar como Designer Jr., focado em resolver problemas de negócios através da comunicação visual, branding e design digital.',
    location: 'Brasil • Rio de Janeiro, RJ',
    availability: 'Rio de Janeiro, RJ • Disponível para Remoto',
    desktopIllustration: '/media/figma/illust-desk-main.png',
    mobileIllustration: '/media/figma/illust-mobile-full.png',
    projectsSubtitle: 'Estudo de casos de Design Gráfico, UX, Modelagem 3D e Animação.',
    cvUrl: '/curriculo-bruno-viana.pdf',
    socials: {
      behanceHandle: 'Obrunoviana',
      behanceUrl: 'https://www.behance.net/Obrunoviana',
      linkedinHandle: 'bruno-vianaa',
      linkedinUrl: 'https://www.linkedin.com/in/bruno-vianaa',
    },
    contact: {
      email: 'bruno.vianaa96@gmail.com',
      phone: '(21) 99037-4780',
      linkedin: 'https://www.linkedin.com/in/bruno-vianaa',
      behance: 'https://www.behance.net/Obrunoviana',
      whatsapp: 'https://wa.me/5521990374780',
    },
  },

  education: [
    {
      id: 'edu-01',
      institution: 'Universidade do Estado do Rio de Janeiro (ESDI / UERJ)',
      institutionLines: ['Universidade do Estado', 'do Rio de Janeiro'],
      degree: 'Design – ESDI / UERJ (8º período)',
      period: 'Em andamento',
      note: 'Escola Superior de Desenho Industrial (ESDI/UERJ) — aprofundamento em projeto visual, UX/UI orientados a dados, sistemas de identidade, embalagens e experimentação gráfica/3D.',
    },
    {
      id: 'edu-02',
      institution: 'Centro Universitário Carioca (UniCarioca)',
      institutionLines: ['Centro Universitário', 'Carioca'],
      degree: 'Bacharel em Publicidade e Propaganda',
      period: '2021',
      note: 'Formação em comunicação estratégica, funil de vendas, direção de arte, planejamento de campanhas e linguagem audiovisual.',
    },
  ] as EducationItem[],

  experiences: [
    {
      id: 'exp-01',
      company: 'Editora Globo',
      role: 'Estagiário em Design',
      period: 'Fev/2025 - Atual',
      mode: 'Rio de Janeiro, RJ',
      summary:
        'Desenvolvimento de Landing Pages de alta conversão, rebranding do Clube O Globo e criação de assets multiplataforma orientados a performance.',
      highlights: [
        'Desenvolvimento de Landing Pages para campanhas de conversão do Jornal O Globo e seus parceiros, utilizando a plataforma Duda, aplicando fundamentos de UX/UI e design de performance.',
        'Aplicação de ferramentas de Inteligência Artificial (como Antigravity) para otimização de processos criativos, acelerando a ideação e a escala na entrega dos ativos digitais.',
        'Participação ativa no processo de rebranding e atualização da identidade visual do Clube O Globo, garantindo a coesão da marca em múltiplos pontos de contato.',
        'Criação, diagramação e finalização de assets multiplataforma (redes sociais, e-mail marketing corporativo e materiais impressos) alinhados às diretrizes de marketing.',
      ],
    },
    {
      id: 'exp-02',
      company: 'Projeto Anime Dicria',
      role: 'Designer e Comunicador Visual (Voluntário)',
      period: '2021 - Atual',
      mode: 'Rio de Janeiro, RJ',
      summary:
        'Planejamento de comunicação, identidade visual e execução gráfica para iniciativa cultural e educacional comunitária.',
      highlights: [
        'Atuação multidisciplinar em iniciativa cultural, integrando estratégias de publicidade, design digital e metodologias educacionais para engajamento da comunidade local.',
        'Planejamento de comunicação e criação de identidade visual para projetos culturais de impacto, como a Mangateca Dicria.',
        'Suporte na concepção e execução visual de eventos presenciais, traduzindo conceitos educacionais e culturais em materiais gráficos, sinalização e peças de divulgação.',
      ],
    },
    {
      id: 'exp-03',
      company: 'Deseduca Lab',
      role: 'Estagiário de Design',
      period: 'Ago/2023 - Set/2024',
      mode: 'Rio de Janeiro, RJ',
      summary:
        'Aplicação de Design Thinking e desenvolvimento de interfaces visuais e materiais didáticos para o ensino médio.',
      highlights: [
        'Atuação direta no projeto "Design e Escola", aplicando metodologias de Design Thinking para o público de ensino médio.',
        'Desenvolvimento completo de materiais didáticos e interfaces visuais educativas, traduzindo conceitos complexos em peças visuais acessíveis e engajadoras.',
      ],
    },
    {
      id: 'exp-04',
      company: 'Carioca Júnior',
      role: 'Assistente de Marketing e Criação',
      period: 'Mar/2022 - Out/2022',
      mode: 'Rio de Janeiro, RJ',
      summary:
        'Consultoria criativa, desdobramento de identidade visual e gestão ponta a ponta de redes sociais para micro e pequenas empresas.',
      highlights: [
        'Atuação em agência júnior universitária com foco em consultoria, auxiliando micro e pequenas empresas a estabelecerem presença competitiva no mercado digital.',
        'Responsável por traduzir o planejamento estratégico dos clientes em execução visual (criação de peças gráficas e desdobramento de identidade visual).',
        'Gerenciamento do ciclo completo de redes sociais de ponta a ponta, desde a estruturação do calendário editorial até a entrega do design final focado no posicionamento das marcas.',
      ],
    },
    {
      id: 'exp-05',
      company: 'Mistero Decoração',
      role: 'Social Media Designer (Freelance)',
      period: 'Fev/2021 - Ago/2021',
      mode: 'Remoto / Rio de Janeiro',
      summary:
        'Planejamento estético de marca e criação de ativos digitais de alto impacto no segmento de decoração e interiores.',
      highlights: [
        'Atuação autônoma no nicho de decoração e interiores, responsável por traduzir as necessidades do cliente em soluções visuais de alto impacto.',
        'Gerenciamento direto do relacionamento com o cliente, conduzindo o planejamento estético da marca e a criação dos ativos digitais para engajamento em redes sociais.',
      ],
    },
  ] as ExperienceItem[],

  skills: [
    {
      category: 'Design & UI',
      color: '#DBAB73',
      items: [
        'Adobe Photoshop (Ps)',
        'Adobe Illustrator (Ai)',
        'Adobe InDesign (Id)',
        'Figma',
        'Canva',
        'CapCut',
        'Plataforma Duda (Landing Pages)',
      ],
    },
    {
      category: 'Motion & 3D',
      color: '#BB5A4B',
      items: [
        'Adobe After Effects (Ae)',
        'Adobe Premiere Pro (Pr)',
        'Blender 3D (Modelagem, Lookdev & Animação)',
      ],
    },
    {
      category: 'Estratégia & UX',
      color: '#8A9E88',
      items: [
        'UX Design & Data-Driven UX',
        'Funil de Vendas & Conversão',
        'Identidade Visual (Branding)',
        'Social Media Design',
        'Design Thinking',
      ],
    },
    {
      category: 'Gestão, Tech & Idiomas',
      color: '#E0C45B',
      items: [
        'IA Generativa & Fluxos Criativos (Antigravity)',
        'Metodologias Ágeis',
        'VS Code',
        'Trello',
        'Pacote Office',
        'Inglês (B2)',
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: '01',
      slug: 'galapagos-jogos-data-driven-ux',
      title: 'Galápagos Jogos',
      subtitle: 'Redesign de E-commerce Orientado por Dados (Big Data + Escuta Ativa)',
      clientOrContext: 'Projeto Integrado Interação 25.1 (ESDI/UERJ) • Orientação: Profª Alice Tavares Figueiredo',
      year: '2026',
      role: 'UX Research, Data Analysis, Design System & UI Design',
      accentColor: '#DBAB73',
      textColorOnAccent: '#171717',
      tags: ['UX/UI', 'DESIGN GRÁFICO'],
      tools: ['Figma', 'Photoshop', 'Illustrator'],
      coverImage: '/media/behance/cover-galapagos.png',
      behanceUrl: 'https://www.behance.net/gallery/257379631/Galapagos-Jogos-Data-Driven-UX',
      summary:
        'Como a análise quantitativa de 19.974 jogos do BoardGameGeek combinada com escuta ativa de comunidade transformou termos técnicos complexos em uma jornada fluida de compra por ocasião de uso.',
      challenge:
        'O mercado brasileiro de board games movimenta mais de US$ 150M ao ano (49,4% público Millennial), mas sofre com alto risco percebido de compra (jogos entre R$ 120 e R$ 450+). Através de escuta ativa em comunidades (Reddit, BGG Forums, Ludopedia) e diagnóstico do e-commerce atual, identificamos duas fricções críticas: vocabulário técnico inacessível ("Worker Placement", "Engine Building", "Draft") que aliena iniciantes e falta de transparência real sobre curva de aprendizado e tempo de partida.',
      approach:
        'Realizamos a triangulação de dados com pipeline de limpeza (ETL no Google Sheets) de 19.974 jogos do BoardGameGeek, cruzando mecânicas, complexidade e idade mínima com dores reais dos jogadores. Priorizamos o escopo do MVP via Matriz MoSCoW e criamos um Design System próprio (#541982 Galápagos Purple, #7C3AED Electric Violet, #10B981 Emerald Mint e #F59E0B Warm Amber) com ícones vetoriais para 5 Ocasiões de Uso ("Jogar em Família", "Festas e Grupos", "Jogar Sozinho", "Jogos para Casais" e "Populares").',
      outcome:
        'Redesign completo da arquitetura de e-commerce: nova Homepage com barra de ocasiões, vitrine de ofertas e onboarding em vídeo ("Aprenda a Jogar"); Catálogo com navegação facetada traduzindo dados do BGG em filtros intuitivos (Nível de Desafio, Tempo de Jogo, Tipo de Experiência e Função Didática); e Página de Produto com atributos claros acima da dobra e cross-selling inteligente ("Bundle Deixe sua Aventura Completa" com protetores de cartas exatos para elevar o Ticket Médio).',
      highlights: [
        { label: 'BASE ANALISADA', value: '19.974 Jogos (BGG)' },
        { label: 'METODOLOGIA', value: 'ETL + Escuta Ativa + MoSCoW' },
        { label: 'ENTREGÁVEIS', value: 'Design System + E-commerce UI' },
      ],
      galleryCaptions: [
        {
          title: 'Design System, MoSCoW & Arquitetura Antes vs. Depois',
          note: 'Tokens de identidade visual, ícones das 5 ocasiões de uso e evolução da interface burocrática para experiência centrada na intenção.',
          image: '/media/behance/galapagos-design-system.png',
        },
        {
          title: 'Navegação Facetada & Cross-Selling Inteligente',
          note: 'Tradução dos atributos técnicos do BGG em filtros laterais intuitivos e página de produto com Bundle automático para elevar o AOV.',
          image: '/media/behance/galapagos-ui-catalog.png',
        },
      ],
    },
    {
      id: '02',
      slug: 'lp-village-superbet',
      title: 'LP Village Superbet',
      subtitle: 'Landing Page de Conversão & Design de Performance — Jornal O Globo',
      clientOrContext: 'Editora Globo • Campanha Promocional O Globo + Village Superbet',
      year: '2026',
      role: 'UI/UX Design, Direção de Arte & Implementação (Duda)',
      accentColor: '#E0C45B',
      textColorOnAccent: '#171717',
      tags: ['UX/UI', 'DESIGN GRÁFICO'],
      tools: ['Figma', 'Photoshop', 'Duda'],
      coverImage: '/media/behance/cover-256481917.png',
      behanceUrl: 'https://www.behance.net/gallery/256481917/LP-Village-Superbet',
      summary:
        'Landing Page de alta conversão desenvolvida na Editora Globo para campanha de assinaturas do Jornal O Globo com ingressos para o festival Village Superbet no Jockey Club.',
      challenge:
        'Conectar o apelo de entretenimento ao vivo (transmissão de jogos e grandes shows no Jockey Club, como Anitta) à aquisição de assinaturas digitais do Jornal O Globo (a partir de R$ 9,90/mês com benefício de até 4 ingressos), reduzindo o atrito de leitura e maximizando a conversão em desktop e mobile.',
      approach:
        'Aplicação de fundamentos de UX/UI e design de performance utilizando a plataforma Duda: construção de dobra principal (Hero) de alto contraste com headline direta, selo visual da atração, CTA de ação imediata ("Escolha seu Dia") e hierarquia escaneável explicando a mecânica promocional.',
      outcome:
        'Landing Page responsiva colocada no ar para campanha oficial de conversão do Jornal O Globo e parceiros, unindo agilidade de entrega, consistência visual e foco em resultados de funil de vendas.',
      highlights: [
        { label: 'EMPRESA', value: 'Editora Globo' },
        { label: 'OBJETIVO', value: 'Aquisição & Conversão' },
        { label: 'STACK', value: 'Figma + Photoshop + Duda' },
      ],
      galleryCaptions: [
        {
          title: 'Hero Section & Proposta de Valor Acima da Dobra',
          note: 'Contraste cromático vibrante entre azul escuro, amarelo e verde guiando o olhar diretamente para o benefício e o CTA.',
          image: '/media/behance/cover-256481917.png',
        },
        {
          title: 'Hierarquia de Conversão & Mecânica Promocional',
          note: 'Explicação clara da oferta de assinatura com ingressos para eliminar dúvidas antes do clique.',
          image: '/media/behance/cover-256481917.png',
        },
      ],
    },
    {
      id: '03',
      slug: 'clube-o-globo-instagram',
      title: 'Clube O Globo • 360º',
      subtitle: 'Estratégia de Conversão, Rebranding & Engajamento Multiplataforma',
      clientOrContext: 'Editora Globo • Clube O Globo (@clubeoglobo)',
      year: '2026',
      role: 'Design Digital, Identidade Visual & Peças Multiplataforma',
      accentColor: '#BB5A4B',
      textColorOnAccent: '#FFF8F5',
      tags: ['BRANDING', 'DESIGN GRÁFICO', 'UX/UI'],
      tools: ['Photoshop', 'Illustrator', 'InDesign', 'Figma'],
      coverImage: '/media/behance/cover-252101733.png',
      behanceUrl: 'https://www.behance.net/gallery/252101733/Estratgia-de-Conversao-e-Engajamento-INSTAGRAM',
      summary:
        'Campanha integrada online e offline para o Clube O Globo unificando banners web, social media e anúncio impresso no Jornal O Globo para impulsionar engajamento e conversão no Instagram.',
      challenge:
        'Comunicar de forma tangível que os descontos, sorteios e experiências do Clube O Globo podem fazer a assinatura "sair de graça", levando leitores do jornal impresso e do portal web a seguirem e interagirem em tempo real com o perfil @clubeoglobo no Instagram.',
      approach:
        'Desdobramento da identidade visual atualizada do Clube O Globo (amarelo solar + roxo vibrante + azul institucional) em múltiplos pontos de contato: superbanner no portal O Globo com CTA direto, criativos para feed/stories no mobile ("Viva experiências exclusivas sem pesar o bolso") e página inteira impressa no jornal com QR Code de conversão rápida.',
      outcome:
        'Ecossistema visual coeso entre impresso, web e mobile, fortalecendo o rebranding do Clube O Globo e criando uma ponte direta de tráfego qualificado para o Instagram da marca.',
      highlights: [
        { label: 'MARCA', value: 'Clube O Globo' },
        { label: 'CANAIS', value: 'Web + Impresso + Instagram' },
        { label: 'FOCO', value: 'Rebranding & Engajamento' },
      ],
      galleryCaptions: [
        {
          title: 'Presença Integrada: Portal Web & Social Mobile',
          note: 'Banners digitais no portal O Globo sincronizados com a linguagem visual do feed no Instagram.',
          image: '/media/behance/cover-252101733.png',
        },
        {
          title: 'Mídia Impressa com Conversão Digital (QR Code)',
          note: 'Diagramação de anúncio em jornal impresso conectando o leitor físico ao ecossistema digital do Clube.',
          image: '/media/behance/cover-252101733.png',
        },
      ],
    },
    {
      id: '04',
      slug: 'que-deus-me-proteja',
      title: 'Que Deus Me Proteja',
      subtitle: 'Modelagem 3D Low-Poly, Atmosfera Visual & Animação Autoral',
      clientOrContext: 'Projeto Autoral • Animação 3D & Direção de Arte',
      year: '2026',
      role: 'Direção, Modelagem 3D, Iluminação & Pós-produção',
      accentColor: '#8A9E88',
      textColorOnAccent: '#141A15',
      tags: ['3D', 'MOTION', 'ILUSTRAÇÃO'],
      tools: ['Blender', 'After Effects', 'Photoshop'],
      coverImage: '/media/behance/cover-248888171.png',
      behanceUrl: 'https://www.behance.net/gallery/248888171/Que-Deus-me-proteja',
      summary:
        'Cena e narrativa visual em 3D estilizado explorando atmosfera densa de neblina noturna, silhueta de personagens low-poly e iluminação dramática.',
      challenge:
        'Construir tensão narrativa e identidade gráfica marcante combinando geometria estilizada low-poly com uma atmosfera cinematográfica imersiva.',
      approach:
        'Modelagem de personagens e ambiente florestal modular no Blender, trabalho de câmera em ângulo holandês (Dutch angle), volumetria de neblina com feixe de luz direcional guiando a leitura de profundidade e lettering expressivo integrado ao quadro.',
      outcome:
        'Projeto autoral de direção de arte 3D e motion publicado no Behance, demonstrando domínio de atmosfera, composição de cena e narrativa visual.',
      highlights: [
        { label: 'DISCIPLINA', value: 'Modelagem 3D & Motion' },
        { label: 'ESTÉTICA', value: 'Stylized Low-Poly' },
        { label: 'ENGINE', value: 'Blender 3D + After Effects' },
      ],
      galleryCaptions: [
        {
          title: 'Atmosfera, Câmera & Volumetria',
          note: 'Uso de neblina volumétrica, inclinação de câmera e feixe de luz no solo para criar profundidade e mistério.',
          image: '/media/behance/cover-248888171.png',
        },
        {
          title: 'Estilização Low-Poly & Tipografia',
          note: 'Silhuetas facetadas dos personagens e árvores em harmonia com o título da obra.',
          image: '/media/behance/cover-248888171.png',
        },
      ],
    },
    {
      id: '05',
      slug: 'embalagem-mel-organico',
      title: 'Mel Orgânico',
      subtitle: 'Design de Embalagem, Ilustração de Mascotes & Sistema de Rótulos',
      clientOrContext: 'Projeto de Embalagem (Mundo Verde) • Coautoria com Mel Souza',
      year: '2026',
      role: 'Design de Embalagem, Ilustração Vetorial & Direção Fotográfica',
      accentColor: '#E0C45B',
      textColorOnAccent: '#171717',
      tags: ['BRANDING', 'ILUSTRAÇÃO', 'DESIGN GRÁFICO'],
      tools: ['Illustrator', 'Photoshop'],
      coverImage: '/media/behance/cover-246968765.jpg',
      behanceUrl: 'https://www.behance.net/gallery/246968765/Embalagem-Mel-Organico',
      summary:
        'Linha de embalagens e rótulos ilustrados para Mel Orgânico (Eucalipto, Laranjeira e Jataí) combinando estética retrô-contemporânea, mascotes cheios de personalidade e codificação por cores.',
      challenge:
        'Fugir do visual genérico das gôndolas de produtos naturais criando uma linha de mel orgânico em bisnaga invertida que fosse imediatamente reconhecível, jovem e colecionável sem perder a chancela de produto certificado.',
      approach:
        'Criação de um sistema modular de rótulos emoldurados por padrão quadriculado (checkered) com código de cores por florada — Verde (Eucalipto), Laranja (Laranjeira) e Amarelo (Jataí) — protagonizado por ilustrações autorais de abelhas com visual streetwear/retrô e tipografia orgânica.',
      outcome:
        'Linha de 3 SKUs (350g) com forte impacto de prateleira e direção de arte fotográfica contrastante que destaca a textura dourada do mel.',
      highlights: [
        { label: 'LINHA', value: '3 Floradas (Eucalipto, Laranjeira, Jataí)' },
        { label: 'DISCIPLINA', value: 'Packaging & Ilustração' },
        { label: 'FORMATO', value: 'Bisnaga Invertida 350g' },
      ],
      galleryCaptions: [
        {
          title: 'Sistema de Cores & Mascotes por Florada',
          note: 'Cada variação de mel possui uma abelha ilustrada exclusiva e moldura quadriculada na cor da florada.',
          image: '/media/behance/cover-246968765.jpg',
        },
        {
          title: 'Ergonomia de Uso & Rótulo Invertido',
          note: 'Design pensado tanto para a embalagem em pé quanto para a versão dosadora invertida.',
          image: '/media/behance/cover-246968765.jpg',
        },
      ],
    },
    {
      id: '06',
      slug: 'm0nk3y-3d',
      title: 'M0NK3Y',
      subtitle: 'Character Design, Escultura 3D, Shaders & Iluminação Espacial',
      clientOrContext: 'Projeto Autoral • Character Design & Ilustração 3D',
      year: '2024',
      role: 'Modelagem 3D, Texturização, Lookdev & Render',
      accentColor: '#BB5A4B',
      textColorOnAccent: '#FFF8F5',
      tags: ['3D', 'ILUSTRAÇÃO'],
      tools: ['Blender', 'Photoshop'],
      coverImage: '/media/behance/cover-208451571.png',
      behanceUrl: 'https://www.behance.net/gallery/208451571/M0NK3Y',
      summary:
        'Personagem 3D autoral de um macaco astronauta flutuando diante de um buraco negro, explorando escultura estilizada, materiais translúcidos e iluminação dramática no Blender.',
      challenge:
        'Dar vida a um personagem 3D expressivo em gravidade zero, trabalhando o contraste de luz emitida por um buraco negro sobre diferentes materiais (vidro do capacete, tecido do traje espacial da NASA, pelagem estilizada e visor luminoso "M0NK3Y").',
      approach:
        'Escultura e modelagem do personagem em pose dinâmica de flutuação em contra-plongée, criação de shader de vidro com reflexo especular da singularidade espacial, emissão luminosa no peito e composição de partículas estelares.',
      outcome:
        'Render final em alta resolução consolidando o domínio de criação de personagens 3D, iluminação narrativa e lookdev no Blender.',
      highlights: [
        { label: 'DISCIPLINA', value: '3D Character & Lookdev' },
        { label: 'SOFTWARE', value: 'Blender 3D + Photoshop' },
        { label: 'ANO', value: '2024' },
      ],
      galleryCaptions: [
        {
          title: 'Expressão, Pose & Materiais do Traje',
          note: 'Contraste entre o traje laranja, luvas táteis, visor luminoso M0NK3Y e cúpula de vidro.',
          image: '/media/behance/cover-208451571.png',
        },
        {
          title: 'Iluminação Cósmica & Reflexos',
          note: 'Disco de acreção do buraco negro atuando como fonte dramática de rim light e reflexo no capacete.',
          image: '/media/behance/cover-208451571.png',
        },
      ],
    },
  ] as ProjectItem[],
};
