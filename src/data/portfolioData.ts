export type DisciplineTag =
  | 'DESIGN GRÁFICO'
  | 'BRANDING'
  | 'UX/UI'
  | '3D'
  | 'ILUSTRAÇÃO'
  | 'MOTION';

export type GalleryBlock =
  | {
      type: 'wide';
      image: string;
      alt?: string;
      captionBelow?: string;
      bgClass?: string;
      heightClass?: string;
      objectFit?: 'cover' | 'contain';
      objectPosition?: string;
    }
  | {
      type: 'pair';
      heightClass?: string;
      items: [
        {
          image: string;
          alt?: string;
          overlayNote?: string;
          bgClass?: string;
          objectPosition?: string;
        },
        {
          image: string;
          alt?: string;
          overlayNote?: string;
          bgClass?: string;
          objectPosition?: string;
        },
      ];
    }
  | {
      type: 'triple';
      heightClass?: string;
      items: [
        { image: string; alt?: string },
        { image: string; alt?: string },
        { image: string; alt?: string },
      ];
    }
  | {
      type: 'quad-bento';
      left: { image: string; alt?: string };
      midTop: { image: string; alt?: string };
      midBottom: { image: string; alt?: string };
      right: { image: string; alt?: string };
      captionBelow?: string;
    }
  | {
      type: 'video';
      poster: string;
      title?: string;
      ctaLabel?: string;
      playingHeightClass?: string;
      videoUrl?: string;
      fallbackExternalUrl?: string;
    }
  | {
      type: 'external-preview';
      image: string;
      title: string;
      subtitle?: string;
      buttonLabel: string;
      url: string;
    };

export type UxCaseRightVisual =
  | {
      kind: 'wide';
      image: string;
      alt: string;
      bgClass?: string;
      heightClass?: string;
      objectFit?: 'cover' | 'contain';
    }
  | {
      kind: 'pair';
      heightClass?: string;
      items: [
        {
          image: string;
          alt: string;
          captionBelow?: string;
          bgClass?: string;
          objectFit?: 'cover' | 'contain';
        },
        {
          image: string;
          alt: string;
          captionBelow?: string;
          bgClass?: string;
          objectFit?: 'cover' | 'contain';
        },
      ];
    }
  | {
      kind: 'top-plus-pair';
      top: {
        image: string;
        alt: string;
        bgClass?: string;
      };
      bottom: [
        { image: string; alt: string; bgClass?: string },
        { image: string; alt: string; bgClass?: string },
      ];
    }
  | {
      kind: 'stacked';
      items: {
        image: string;
        alt: string;
        captionBelow?: string;
        bgClass?: string;
        heightClass?: string;
      }[];
    }
  | {
      kind: 'slider';
      autoPlayMs?: number;
      heightClass?: string;
      slides: {
        image: string;
        label: string;
        alt: string;
      }[];
    }
  | {
      kind: 'prototype-card';
      image: string;
      alt: string;
      protoUrl: string;
      badgeText?: string;
    };

export interface UxCaseSection {
  id: string;
  alignTop?: boolean;
  textBlocks: {
    title: string;
    body: string;
    ctaLabel?: string;
    ctaUrl?: string;
  }[];
  visual: UxCaseRightVisual;
}

export interface UxCaseStudyData {
  heroHeading: string;
  heroText: string;
  heroImage: string;
  heroImageAlt: string;
  prototypeUrl?: string;
  sections: UxCaseSection[];
}

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
  pipelineTitle?: string;
  pipeline?: string;
  outcome: string;
  highlights: { label: string; value: string }[];
  galleryCaptions: { title: string; note: string; image?: string }[];
  galleryBlocks?: GalleryBlock[];
  uxCaseStudy?: UxCaseStudyData;
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
 * Para atualizar textos, links, vídeos, experiências ou projetos, edite aqui
 * e coloque novas mídias dentro de public/media/.
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
      institution: 'Centro Universitário Carioca (UniCarioca)',
      institutionLines: ['Centro Universitário', 'Carioca'],
      degree: 'Bacharel em Publicidade e Propaganda',
      period: '2018 - 2021',
      note: 'Formação em comunicação estratégica, funil de vendas, direção de arte, planejamento de campanhas e linguagem audiovisual.',
    },
    {
      id: 'edu-02',
      institution: 'Universidade do Estado do Rio de Janeiro (ESDI / UERJ)',
      institutionLines: ['Universidade do Estado', 'do Rio de Janeiro'],
      degree: 'Bacharel em Design – ESDI / UERJ',
      period: '2023 - atual',
      note: 'Escola Superior de Desenho Industrial (ESDI/UERJ) — aprofundamento em projeto visual, UX/UI orientados a dados, sistemas de identidade, embalagens e experimentação gráfica/3D.',
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
      category: 'Motion, Áudio & 3D',
      color: '#BB5A4B',
      items: [
        'Blender 3D (Modelagem, Rigging & Animação)',
        'Adobe After Effects (Ae)',
        'Adobe Premiere Pro (Pr)',
        'Audacity (Sound Design)',
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
      slug: 'que-deus-me-proteja',
      title: 'Que Deus Me Proteja',
      subtitle: 'Curta-Metragem Autoral de Terror & Suspense Psicológico (2D + 3D)',
      clientOrContext: 'Curta-Metragem Autoral • ESDI / UERJ',
      year: '2026',
      role: 'Roteiro, Direção de Arte, Modelagem 3D/2D, Animação & Sound Design',
      accentColor: '#BB5A4B',
      textColorOnAccent: '#FFF8F5',
      tags: ['3D', 'MOTION', 'ILUSTRAÇÃO'],
      tools: ['Blender', 'Photoshop', 'Premiere', 'After Effects', 'Audacity'],
      coverImage: '/media/qdmp/qdmp-01-hero.png',
      behanceUrl: 'https://www.behance.net/gallery/248888171/Que-Deus-me-proteja',
      summary:
        'Curta-metragem autoral de terror e suspense psicológico combinando geometria 3D low-poly dos anos 2000, expressões faciais 2D desenhadas à mão e sound design imersivo.',
      challenge:
        'Baseado em um conto autoral que escrevi aos 16 anos, "Que Deus me Proteja" é um curta-metragem de terror e suspense psicológico focado no medo gerado pela sugestão e pelo desconhecido.\n\nO grande desafio do projeto foi viabilizar uma produção cinematográfica completa trabalhando 100% sozinho e com recursos limitados. Para tirar a história do papel sem comprometer a carga dramática, precisei desenhar um fluxo de trabalho enxuto de ponta a ponta e transformar as limitações técnicas em escolhas estéticas intencionais criando tensão, paranoia e expressividade com geometria simplificada.',
      approach:
        'Para traduzir visualmente o estado mental dos personagens, construí uma estética híbrida que une nostalgia e expressionismo:\n\nAdotei modelos com poucos polígonos que resgatam a estética dos gráficos 3D dos anos 2000, contrastando essa simplicidade geométrica com um trabalho denso de luzes e sombras marcadas.\n\nBebendo de referências como *Mononoke* e *Paranoia Agent*, a direção cinematográfica evita expor o monstro diretamente, apoiando-se em enquadramentos desconfortáveis e silêncios pesados para gerar ansiedade.',
      pipeline:
        '**Expressividade Híbrida (2D + 3D):** Inspirado em *The Legend of Zelda: Wind Waker*, desenhei as expressões faciais em 2D para aplicá-las sobre os corpos tridimensionais. Para superar a dificuldade de sincronização entre a atuação 3D e os rostos desenhados, utilizei técnicas de planificação das ilustrações combinadas a ajustes precisos no mapeamento UV dentro do Blender.\n\n**Dramaticidade na Composição:** Extrair o peso de cenários minimalistas demandou múltiplas baterias de testes de iluminação.\n\n**Imersão Sonora e IA:** Como a atmosfera não dependeria de hiper-realismo visual, o som assumiu o protagonismo na construção do terror psicológico. Utilizei síntese de voz por IA para a dublagem e criei toda a paisagem sonora distorcendo ruídos naturais no Audacity.',
      outcome:
        'Como responsável por todas as etapas da cadeia de produção, desenvolvi e entreguei:\n\n**Pré-produção:** Roteiro adaptado, *Moodboard* de direção de arte, *Concept Art* dos personagens, *Storyboard* e *Animatic* completo para validação de ritmo e montagem.\n\n**Produção 3D & 2D:** Modelagem *low-poly* de personagens e cenários, mapeamento UV customizado, *sheets* de texturas faciais 2D animadas, *rigging*, *layout* de câmeras, animação 3D e iluminação no Blender.\n\n**Pós-produção & Áudio:** Edição e montagem final (Premiere Pro / After Effects), dublagem com vozes sintetizadas por IA e *Sound Design* / trilha de tensão original (Audacity).\n\n**Filme Final:** Curta-metragem de animação renderizado e finalizado.',
      highlights: [
        { label: 'CONTEXTO', value: 'ESDI / UERJ (Autoral)' },
        { label: 'ESTÉTICA', value: 'Híbrida 2D + 3D Low-Poly' },
        { label: 'STACK', value: 'Blender / Premiere / Audacity' },
      ],
      galleryCaptions: [],
      galleryBlocks: [
        {
          type: 'wide',
          image: '/media/qdmp/qdmp-01-hero.png',
          alt: 'Que Deus Me Proteja — Cena noturna na estrada',
          heightClass: 'h-[230px] sm:h-[299px]',
        },
        {
          type: 'pair',
          heightClass: 'h-[185px] sm:h-[218px]',
          items: [
            {
              image: '/media/qdmp/qdmp-02-face-left.png',
              alt: 'Expressão facial 2D aplicada sobre personagem 3D',
            },
            {
              image: '/media/qdmp/qdmp-03-scene-right.png',
              alt: 'Atmosfera noturna e enquadramento de tensão',
            },
          ],
        },
        {
          type: 'wide',
          image: '/media/qdmp/qdmp-04-moodboard.png',
          alt: 'Moodboard de referências visuais e estéticas',
          bgClass: 'bg-white p-2 sm:p-3',
          objectFit: 'contain',
          heightClass: 'h-[230px] sm:h-[299px]',
          captionBelow: 'Moodboard',
        },
        {
          type: 'quad-bento',
          left: {
            image: '/media/qdmp/qdmp-05-concept-left.png',
            alt: 'Concept Art — Turnaround completo do personagem',
          },
          midTop: {
            image: '/media/qdmp/qdmp-06-concept-mid-top.png',
            alt: 'Concept Art — Proporções lateral e frontal',
          },
          midBottom: {
            image: '/media/qdmp/qdmp-07-concept-mid-bot.png',
            alt: 'Concept Art — Silhueta distorcida da criatura',
          },
          right: {
            image: '/media/qdmp/qdmp-08-concept-right.png',
            alt: 'Concept Art — Sheets de expressões faciais 2D',
          },
          captionBelow: 'Concept Art',
        },
        {
          type: 'wide',
          image: '/media/qdmp/qdmp-09-blender-tpose.png',
          alt: 'Modelagem low-poly em T-pose no Blender',
          bgClass: 'bg-[#424242]',
          heightClass: 'h-[230px] sm:h-[299px]',
        },
        {
          type: 'wide',
          image: '/media/qdmp/qdmp-10-blender-monster.png',
          alt: 'Deformação corporal e atuação da criatura no Blender',
          bgClass: 'bg-[#424242]',
          heightClass: 'h-[230px] sm:h-[299px]',
        },
        {
          type: 'pair',
          heightClass: 'h-[220px] sm:h-[299px]',
          items: [
            {
              image: '/media/qdmp/qdmp-11-render-side.png',
              alt: 'Modelo 3D com textura facial 2D aplicada (vista 3/4)',
              bgClass: 'bg-[#424242]',
            },
            {
              image: '/media/qdmp/qdmp-12-render-front.png',
              alt: 'Modelo 3D finalizado em T-pose frontal',
              bgClass: 'bg-[#424242]',
            },
          ],
        },
        {
          type: 'pair',
          heightClass: 'h-[175px] sm:h-[192px]',
          items: [
            {
              image: '/media/qdmp/qdmp-13a-rigging.png',
              alt: 'Rigging e Armature no Blender 4.1',
              bgClass: 'bg-[#2A2A2A]',
            },
            {
              image: '/media/qdmp/qdmp-13b-camera.png',
              alt: 'Layout de câmeras e blocagem de cena no Blender',
              bgClass: 'bg-[#2A2A2A]',
            },
          ],
        },
        {
          type: 'video',
          poster: '/media/qdmp/qdmp-14-video-poster.png',
          title: 'Que Deus Me Proteja — Curta-Metragem Completo',
          videoUrl: 'https://youtu.be/YY82ibsMkmI',
          fallbackExternalUrl: 'https://www.behance.net/gallery/248888171/Que-Deus-me-proteja',
        },
      ],
    },
    {
      id: '02',
      slug: 'galapagos-jogos-data-driven-ux',
      title: 'Galápagos Jogos',
      subtitle: 'Redesign de E-commerce Orientado por Dados (Big Data + Escuta Ativa)',
      clientOrContext:
        'Projeto Integrado Interação 25.1 (ESDI/UERJ) • Orientação: Profª Alice Tavares Figueiredo',
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
      challenge: '',
      approach: '',
      outcome: '',
      highlights: [
        { label: 'CONTEXTO', value: 'ESDI / UERJ (UX Case)' },
        { label: 'OBJETIVO', value: 'Descoberta & Conversão' },
        { label: 'STACK', value: 'Figma / Sheets / Illustrator' },
      ],
      galleryCaptions: [],
      uxCaseStudy: {
        heroHeading: 'CONTEXTO',
        heroText:
          'O mercado brasileiro de jogos de tabuleiro modernos atravessa uma era de expansão. Para além do entretenimento infantil, o setor é sustentado pela busca de jovens adultos por desconexão de telas e socialização presencial de qualidade.\n\nO projeto buscava aprimorar a experiência de compra do usuário ao buscar esses jogos, usando a análise quantitativa de **19.974 jogos** do site BoardGameGeek combinada com escuta ativa da comunidade para aprimorar termos técnicos complexos em uma jornada fluida de compra por ocasião de uso.',
        heroImage: '/media/galapagos/gal-01-home-full.png',
        heroImageAlt: 'Nova Homepage da Galápagos Jogos — Wandering Towers e Ocasiões de Uso',
        prototypeUrl:
          'https://www.figma.com/proto/ggOWkR7uql82LMwh0dYDXk/Gal%C3%A1pagos-Jogos',
        sections: [
          {
            id: 'problema-diagnostico',
            textBlocks: [
              {
                title: 'PROBLEMA & DIAGNÓSTICO',
                body: 'Através de escuta ativa de comunidades (Reddit, BGG Forums, Ludopedia) e análise do e-commerce da Galápagos, identificamos duas fricções estruturais que causavam abandono de carrinho e hesitação na escolha:',
              },
            ],
            visual: {
              kind: 'pair',
              heightClass: 'h-[210px] sm:h-[235px]',
              items: [
                {
                  image: '/media/galapagos/gal-02-diag-vocab.png',
                  alt: 'Lacuna 01 — Vocabulário Inacessível',
                  bgClass: 'bg-[#19182D] p-2',
                  objectFit: 'contain',
                },
                {
                  image: '/media/galapagos/gal-03-diag-transp.png',
                  alt: 'Lacuna 02 — Falta de Transparência Real',
                  bgClass: 'bg-[#14161B] p-2',
                  objectFit: 'contain',
                },
              ],
            },
          },
          {
            id: 'engenharia-pesquisa',
            textBlocks: [
              {
                title: 'ENGENHARIA & PESQUISA',
                body: 'Para desenhar uma solução ancorada na realidade, realizei o tratamento e análise de dados de **19.974 jogos** do BoardGameGeek (BGG), cruzando atributos ontológicos de jogos com os anseios expressos por jogadores reais.',
              },
            ],
            visual: {
              kind: 'top-plus-pair',
              top: {
                image: '/media/galapagos/gal-04-sheets-bgg.png',
                alt: 'Base de dados de 19.974 jogos tratada no Google Sheets',
                bgClass: 'bg-[#FAFBFD] p-1.5',
              },
              bottom: [
                {
                  image: '/media/galapagos/gal-05-etl-pipeline.png',
                  alt: 'Pipeline de Limpeza (ETL) no Google Sheets',
                  bgClass: 'bg-[#181A21] p-1.5',
                },
                {
                  image: '/media/galapagos/gal-06-insights-stats.png',
                  alt: 'Insights Estatísticos Comprovados',
                  bgClass: 'bg-[#1B1B2E] p-1.5',
                },
              ],
            },
          },
          {
            id: 'matriz-moscow',
            textBlocks: [
              {
                title: 'PRIORIZAÇÃO DE ESCOPO\nVIA MATRIZ MOSCOW',
                body: 'Como em qualquer entrega real de produto, as ideias precisavam de foco cirúrgico para viabilizar um MVP consistente e de alto impacto para a Galápagos Jogos:',
              },
            ],
            visual: {
              kind: 'wide',
              image: '/media/galapagos/gal-07-moscow.png',
              alt: 'Matriz MoSCoW — Must Have, Should Have, Could Have e Won’t Have',
              bgClass: 'bg-[#0C0E14] p-2 sm:p-3',
              heightClass: 'h-[190px] sm:h-[224px]',
              objectFit: 'contain',
            },
          },
          {
            id: 'linguagem-visual',
            textBlocks: [
              {
                title: 'LINGUAGEM VISUAL',
                body: 'Construí um sistema visual baseado na paleta clássica da Galápagos Jogos, porém elevando o contraste, o refinamento tipográfico e a clareza de micro-ícones de atributos.',
              },
            ],
            visual: {
              kind: 'stacked',
              items: [
                {
                  image: '/media/galapagos/gal-08-paleta-cores.png',
                  alt: 'Paleta de Cores Institucional — Galápagos Jogos',
                  captionBelow: 'Paleta de Cores Institucional',
                  bgClass: 'bg-[#0C0E14] p-2.5 sm:p-3.5',
                  heightClass: 'h-[115px] sm:h-[148px]',
                },
                {
                  image: '/media/galapagos/gal-09-icones-ocasioes.png',
                  alt: 'Ícones Vetoriais das 5 Ocasiões de Uso',
                  captionBelow: 'Ícones Vetoriais das 5 Ocasiões de Uso',
                  bgClass: 'bg-[#0C0E14] p-2.5 sm:p-3.5',
                  heightClass: 'h-[115px] sm:h-[148px]',
                },
              ],
            },
          },
          {
            id: 'antes-depois',
            textBlocks: [
              {
                title: 'ANTES VS. DEPOIS',
                body: 'Comparando a estrutura antiga da Galápagos Jogos com a nova proposta. A interface anterior tratava o board game como um item de almoxarifado; o redesign o posiciona como uma experiência social viva.',
              },
            ],
            visual: {
              kind: 'pair',
              heightClass: 'h-[205px] sm:h-[250px]',
              items: [
                {
                  image: '/media/galapagos/gal-10-antes.png',
                  alt: 'Interface antiga da Galápagos Jogos (Antes)',
                  captionBelow: 'Antes',
                  bgClass: 'bg-white',
                  objectFit: 'cover',
                },
                {
                  image: '/media/galapagos/gal-11-depois.png',
                  alt: 'Nova proposta de interface da Galápagos Jogos (Depois)',
                  captionBelow: 'Depois',
                  bgClass: 'bg-white',
                  objectFit: 'cover',
                },
              ],
            },
          },
          {
            id: 'homepage-e-filtros',
            alignTop: true,
            textBlocks: [
              {
                title: 'HOMEPAGE: DESCOBERTA,\nOFERTAS & ONBOARDING',
                body: '**Barra de Ocasiões –** Navegação horizontal minimalista direcionando para os principais momentos de uso de um jogo moderno.\n\n**Vitrine de Descontos –** Seção de urgência de conversão ("Descontos e Eventos") para combater a barreira do preço alto apontada na pesquisa.\n\n**Sessão Aprenda a Jogar –** Vídeo tutorial integrado do YouTube (ex: *Exploding Kittens*) para desmistificar regras com botão de compra imediato.',
              },
              {
                title: 'TRADUÇÃO DOS DADOS\nEM FILTROS',
                body: 'Nas categorias, os atributos técnicos do BGG se materializam em uma barra lateral intuitiva. Onde ao clicar em mais de um filtro vai priorizar os jogos que mais têm relação com o que o usuário procura.\n\n**Filtro 01 – Nível de Desafio**\nFácil de Aprender • Requer Estratégia • Recomendado para Especialistas.\n\n**Filtro 02 – Tempo de Jogo**\nPartida Rápida (15m) • Média (30–90m) • Épica (+90m).\n\n**Filtro 03 – Tipo de Experiência**\nRejogável • Competitivo • Cooperativo • Bluff & Enganação.\n\n**Filtro 04 – Função Didática**\nRaciocínio Lógico • Criatividade • Trabalho em Equipe • Alfabetização.',
              },
            ],
            visual: {
              kind: 'slider',
              autoPlayMs: 5000,
              heightClass: 'h-[540px] sm:h-[780px] lg:h-[980px]',
              slides: [
                {
                  image: '/media/galapagos/gal-01-home-full.png',
                  label: '1. Homepage',
                  alt: 'Homepage: Barra de Ocasiões, Descontos e Aprenda a Jogar',
                },
                {
                  image: '/media/galapagos/gal-12-catalogo-filtros.png',
                  label: '2. Catálogo & Filtros',
                  alt: 'Catálogo Jogar em Família com filtros facetados traduzidos do BGG',
                },
              ],
            },
          },
          {
            id: 'pagina-produto-cross-selling',
            alignTop: true,
            textBlocks: [
              {
                title: 'PÁGINA DE PRODUTO &\nCROSS-SELLING INTELIGENTE',
                body: 'Além da clareza dos atributos essenciais, desenhamos uma alavanca direta de faturamento para o e-commerce: a sugestão casada do tamanho exato de sleeves (protetores plásticos de cartas).\n\n**Atributos Claros –** Jogadores (2–8), Idade mínima (8+), Tempo (30–60m) e Dinâmica (Competitivo) exibidos diretamente ao lado do botão de compra.\n\n**Bundle "Deixe sua Aventura Completa" –** Elimina uma das dores dos clientes (não saber qual o tamanho e quantidade de sleeves necessários para proteger as cartas do jogo) e eleva o Ticket Médio (AOV) da Galápagos em um clique.\n\n**Divisão em Abas Estruturadas –**\nAbas para *Descrição*, *Componentes Inclusos* (para evitar surpresas desagradáveis) e *Download de Regras em PDF*.',
              },
            ],
            visual: {
              kind: 'slider',
              autoPlayMs: 4500,
              heightClass: 'h-[520px] sm:h-[760px] lg:h-[920px]',
              slides: [
                {
                  image: '/media/galapagos/gal-13-produto-bundle.png',
                  label: '1. Página de Produto & Bundle',
                  alt: 'Página de Produto Unstable Unicorns com atributos claros e Bundle de Sleeves',
                },
                {
                  image: '/media/galapagos/gal-12-catalogo-filtros.png',
                  label: '2. Descoberta no Catálogo',
                  alt: 'Página de Categoria Jogar em Família levando ao produto Unstable Unicorns',
                },
              ],
            },
          },
          {
            id: 'prototipo-navegavel',
            textBlocks: [
              {
                title: 'PROTÓTIPO NAVEGÁVEL',
                body: 'Navegue pela jornada interativa completa no Figma — testando na prática a descoberta por ocasião de uso na Homepage, a filtragem de categorias e a compra combinada na Página de Produto.',
                ctaLabel: 'ABRIR PROTÓTIPO NO FIGMA',
                ctaUrl:
                  'https://www.figma.com/proto/ggOWkR7uql82LMwh0dYDXk/Gal%C3%A1pagos-Jogos',
              },
            ],
            visual: {
              kind: 'prototype-card',
              image: '/media/galapagos/gal-11-depois.png',
              alt: 'Testar Protótipo Navegável — Galápagos Jogos no Figma',
              protoUrl:
                'https://www.figma.com/proto/ggOWkR7uql82LMwh0dYDXk/Gal%C3%A1pagos-Jogos',
              badgeText: 'Testar Protótipo Interativo',
            },
          },
        ],
      },
    },
    {
      id: '03',
      slug: 'clube-o-globo-instagram',
      title: 'Clube O Globo 360º',
      subtitle: 'Estratégia de Conversão, Rebranding & Engajamento Multiplataforma',
      clientOrContext: 'Editora Globo • Clube O Globo (@clubeoglobo)',
      year: '2026',
      role: 'Design Digital, Identidade Visual, Motion & Peças Multiplataforma',
      accentColor: '#BB5A4B',
      textColorOnAccent: '#FFF8F5',
      tags: ['BRANDING', 'DESIGN GRÁFICO', 'MOTION'],
      tools: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Figma'],
      coverImage: '/media/clube-oglobo/clube-01-hero.png',
      behanceUrl:
        'https://www.behance.net/gallery/252101733/Estratgia-de-Conversao-e-Engajamento-INSTAGRAM',
      summary:
        'Campanha integrada online e offline para o Clube O Globo unificando banners web, social media, motion e anúncio impresso no Jornal O Globo para converter assinantes em seguidores ativos.',
      challenge:
        'O objetivo central deste projeto foi criar uma ponte entre a base de assinantes já existente e o perfil do Instagram do Clube O Globo.\n\nApesar de contar com um grande volume de clientes, o desafio consistia em convertê-los em seguidores ativos na rede social, incentivando-os a conhecer o espaço e acompanhar as atualizações diárias da marca.\n\nPara resolver esse problema de conversão, desenvolvi o desdobramento visual de uma campanha focada na percepção de valor. A comunicação destacou de forma clara e direta os benefícios tangíveis de seguir a página: sorteios, promoções, ingressos gratuitos e dicas de gastronomia, lazer e agenda cultural no Rio de Janeiro. O eixo criativo girou em torno do forte argumento de que, com os descontos, a assinatura do cliente pode acabar saindo de graça.',
      approach:
        'Desdobramento da identidade visual atualizada do Clube O Globo (amarelo solar + roxo vibrante + azul institucional) em múltiplos pontos de contato sincronizados entre físico e digital.',
      pipelineTitle: 'PIPELINE TÉCNICO',
      pipeline:
        '**Consistência Omnichannel:** Adaptação da mesma diretriz tipográfica e cromática para formatos extremos, desde *superbanners* horizontais web até diagramação de página inteira de jornal impresso no InDesign.\n\n**Ponte Físico-Digital:** Inserção estratégica de *QR Code* de leitura rápida na edição impressa para captura imediata no mobile.',
      outcome:
        '**Mídia Digital & Social:** *Superbanners* no portal O Globo + sequência de criativos estáticos e em *Motion* para *Feed* e *Stories* no Instagram.\n\n**Mídia Impressa:** Anúncio de página inteira veiculado no Jornal O Globo fortalecendo o *rebranding* da marca.',
      highlights: [
        { label: 'EMPRESA', value: 'Editora Globo' },
        { label: 'OBJETIVO', value: 'Aquisição e Conversão' },
        { label: 'STACK', value: 'Figma / Ps / InDesign / Ae' },
      ],
      galleryCaptions: [],
      galleryBlocks: [
        {
          type: 'wide',
          image: '/media/clube-oglobo/clube-01-hero.png',
          alt: 'Clube O Globo 360º — Presença integrada em portal web, mobile e jornal impresso',
          heightClass: 'h-[240px] sm:h-[384px]',
        },
        {
          type: 'wide',
          image: '/media/clube-oglobo/clube-02-pecas.png',
          alt: 'Sistema visual no Figma: Paleta de cores Clube, Banners, Peças Meta e Teste Motion',
          bgClass: 'bg-[#1E1E1E] p-1.5 sm:p-2.5',
          objectFit: 'contain',
          heightClass: 'h-[235px] sm:h-[376px]',
        },
        {
          type: 'wide',
          image: '/media/clube-oglobo/clube-03-web-social.png',
          alt: 'Criativo para redes sociais em uso mobile — Viva experiências exclusivas sem pesar o bolso',
          heightClass: 'h-[230px] sm:h-[299px]',
        },
        {
          type: 'wide',
          image: '/media/clube-oglobo/clube-04-impresso.png',
          alt: 'Anúncio de página inteira no Jornal O Globo com QR Code de conversão rápida',
          heightClass: 'h-[230px] sm:h-[299px]',
          objectPosition: 'object-top',
        },
        {
          type: 'video',
          poster: '/media/clube-oglobo/clube-05-motion-poster.png',
          title: 'Clube O Globo — Vídeo Motion para Redes Sociais',
          ctaLabel: 'Assistir Motion (Redes Sociais)',
          playingHeightClass: 'h-[440px] sm:h-[540px]',
          videoUrl: 'https://youtube.com/shorts/BMmdeC7gfFc?feature=share',
          fallbackExternalUrl:
            'https://www.behance.net/gallery/252101733/Estratgia-de-Conversao-e-Engajamento-INSTAGRAM',
        },
      ],
    },
    {
      id: '04',
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
      coverImage: '/media/village/village-01-topo.png',
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
        { label: 'OBJETIVO', value: 'Aquisição e Conversão' },
        { label: 'STACK', value: 'Figma / Photoshop / Duda' },
      ],
      galleryCaptions: [],
      galleryBlocks: [
        {
          type: 'wide',
          image: '/media/village/village-01-topo.png',
          alt: 'LP Village Superbet — Dobra principal (Hero) e proposta de valor',
          heightClass: 'h-[240px] sm:h-[384px]',
          objectPosition: 'object-top',
        },
        {
          type: 'wide',
          image: '/media/village/village-02-sec2.png',
          alt: 'Construção e edição modular dentro da plataforma Duda',
          heightClass: 'h-[225px] sm:h-[299px]',
          objectPosition: 'object-top',
        },
        {
          type: 'pair',
          heightClass: 'h-[175px] sm:h-[192px]',
          items: [
            {
              image: '/media/village/village-03-pair-left.png',
              alt: 'Cards promocionais com gatilho de escassez (Esgotado)',
              objectPosition: 'object-top',
            },
            {
              image: '/media/village/village-04-pair-right.png',
              alt: 'Vitrine de datas e atrações com CTA direto de assinatura',
              objectPosition: 'object-top',
            },
          ],
        },
        {
          type: 'wide',
          image: '/media/village/village-05-bottom.png',
          alt: 'Adaptação responsiva multitelas — Desktop, Tablet e Mobile',
          bgClass: 'bg-white p-2 sm:p-3',
          objectFit: 'contain',
          heightClass: 'h-[225px] sm:h-[299px]',
        },
        {
          type: 'external-preview',
          image: '/media/village/village-01-topo.png',
          title: 'Preview Navegável da Landing Page',
          subtitle: 'Visualize a página real responsiva publicada no ambiente Duda (Desktop, Tablet e Mobile).',
          buttonLabel: 'Abrir Preview da LP',
          url: 'https://clientes.responsivesiteeditor.com/preview/e84825ad?t=1795458659323',
        },
      ],
    },
    {
      id: '05',
      slug: 'embalagem-mel-organico',
      title: 'Mel Orgânico Mundo Verde',
      subtitle: 'Design de Embalagem, Ilustração Rubber Hose & Sistema de Rótulos',
      clientOrContext: 'Projeto de Embalagem (Mundo Verde) • Coautoria com Mel Souza',
      year: '2026',
      role: 'Design de Embalagem, Ilustração Vetorial & Direção Fotográfica',
      accentColor: '#E0C45B',
      textColorOnAccent: '#171717',
      tags: ['BRANDING', 'ILUSTRAÇÃO', 'DESIGN GRÁFICO'],
      tools: ['Illustrator', 'Photoshop'],
      coverImage: '/media/mel/mel-01-hero.png',
      behanceUrl: 'https://www.behance.net/gallery/246968765/Embalagem-Mel-Organico',
      summary:
        'Linha de embalagens e rótulos ilustrados para Mel Orgânico Mundo Verde (Eucalipto, Laranjeira e Jataí) unindo estética Rubber Hose dos anos 1930, tipografia inspirada no cinema francês e ergonomia em bisnaga invertida.',
      challenge:
        'Na gôndola de produtos naturais, embalagens de mel costumam repetir códigos visuais previsíveis — tons terrosos apagados, favos genéricos e rótulos com leitura lateral que dificultam a identificação rápida no ponto de venda.\n\nO desafio deste projeto para o **Mundo Verde** (em coautoria com Mel Souza) foi reposicionar a linha de Mel Orgânico em bisnaga dosadora invertida (350g), criando uma identidade vibrante, jovem e colecionável capaz de se destacar instantaneamente na prateleira sem abrir mão da credibilidade de um produto 100% certificado.',
      approach:
        '**Refinamento Óptico de Marca:** Antes de construir os rótulos, diagnosticamos inconsistências de espaçamento na assinatura do Mundo Verde em escalas reduzidas e executamos o realinhamento óptico e ajuste fino de *kerning*.\n\n**Estética Rubber Hose & Cinema Francês:** A partir de um *benchmarking* de marcas independentes de alimentos e da animação clássica dos anos 1930 (*Rubber Hose*), combinamos a tipografia display **Senilita** (curvas orgânicas de alto impacto) com a **Micaroline** (inspirada em cartazes do cinema francês para assinar cada florada).\n\n**Storytelling Sensorial por Florada:** Criamos um sistema modular sobre fundo creme (`#F7F2D4`) emoldurado por padrão quadriculado (*checkered*), onde cada mascote traduz sua origem: cachecol e caneca quente para **Eucalipto** (`#0DB3AF`), flor cítrica e leveza solar para **Laranjeira** (`#DE6F37`) e atitude *streetwear* despojada para a nativa **Jataí** (`#E0C110`).',
      pipelineTitle: 'PIPELINE TÉCNICO',
      pipeline:
        '**Ilustração Vetorial & Avatares:** Desenvolvimento autoral no Illustrator de 3 mascotes de corpo inteiro para a frente e 3 avatares exclusivos (gorro, chapéu de sol e óculos retrô) para o topo dos contra-rótulos.\n\n**Ergonomia & Rigor Regulatório:** Faca oval e diagramação frente e verso pensadas para leitura direta na embalagem invertida (*squeeze*), integrando tabela nutricional, instruções de banho-maria, código de barras e selos **Produto Orgânico Brasil** e **S.I.F.**\n\n**Direção de Arte por Contraste Complementar:** Uso estratégico do fundo azul cobalto (`#1C1CF5`) — cor diretamente oposta ao âmbar no círculo cromático — para maximizar a luminosidade e a textura dourada do mel.',
      outcome:
        '**Sistema Completo de Embalagens:** Linha de 3 SKUs de 350g (Eucalipto, Laranjeira e Jataí) com rótulos frontais e traseiros fechados em padrões CMYK e RGB.\n\n**Universo Visual & Direção Fotográfica:** Família de 6 ilustrações vetoriais (poses principais + avatares), guia tipográfico/cromático e série visual de produto para ponto de venda e campanha.',
      highlights: [
        { label: 'MARCA', value: 'Mundo Verde (Coautoria)' },
        { label: 'DISCIPLINA', value: 'Embalagem & Ilustração' },
        { label: 'STACK', value: 'Illustrator / Photoshop' },
      ],
      galleryCaptions: [],
      galleryBlocks: [
        {
          type: 'wide',
          image: '/media/mel/mel-01-hero.png',
          alt: 'Linha Mel Orgânico Mundo Verde — Eucalipto, Jataí e Laranjeira (350g)',
          bgClass: 'bg-[#1C1CF5]',
          heightClass: 'h-[250px] sm:h-[384px]',
        },
        {
          type: 'pair',
          heightClass: 'h-[195px] sm:h-[218px]',
          items: [
            {
              image: '/media/mel/mel-02-logo-realign.png',
              alt: 'Auditoria óptica e ajuste de kerning da assinatura Mundo Verde',
              bgClass: 'bg-[#F4F3EF]',
            },
            {
              image: '/media/mel/mel-03-mascotes-ref.png',
              alt: 'Benchmarking visual — CPG contemporâneo, Rubber Hose 1930s e ergonomia squeeze',
              bgClass: 'bg-[#F4F3EF]',
            },
          ],
        },
        {
          type: 'wide',
          image: '/media/mel/mel-04-tipografia.png',
          alt: 'Combinação tipográfica — Senilita (Display) e Micaroline (inspiração no cinema francês)',
          bgClass: 'bg-[#F4F3EF]',
          heightClass: 'h-[180px] sm:h-[239px]',
        },
        {
          type: 'wide',
          image: '/media/mel/mel-05-paleta-sistema.png',
          alt: 'Sistema cromático calibrado em RGB e CMYK por florada',
          bgClass: 'bg-[#F4F3EF]',
          heightClass: 'h-[180px] sm:h-[239px]',
        },
        {
          type: 'wide',
          image: '/media/mel/mel-06-ilustracoes.png',
          alt: 'Família de ilustrações vetoriais — Mascotes completos e avatares de contra-rótulo',
          bgClass: 'bg-[#F4F3EF]',
          heightClass: 'h-[280px] sm:h-[460px]',
        },
        {
          type: 'wide',
          image: '/media/mel/mel-07-rotulos-faca.png',
          alt: 'Planificação técnica dos rótulos frontais e traseiros com selos Orgânico Brasil e S.I.F.',
          bgClass: 'bg-[#F4F3EF] p-2 sm:p-4',
          objectFit: 'contain',
          heightClass: 'h-[340px] sm:h-[486px]',
        },
        {
          type: 'triple',
          heightClass: 'h-[205px] sm:h-[218px]',
          items: [
            {
              image: '/media/mel/mel-08-foto-1.png',
              alt: 'Direção fotográfica — Mel Orgânico Florada Eucalipto',
            },
            {
              image: '/media/mel/mel-09-foto-2.png',
              alt: 'Direção fotográfica — Mel Orgânico Florada Laranjeira',
            },
            {
              image: '/media/mel/mel-10-foto-3.png',
              alt: 'Direção fotográfica — Mel Orgânico Florada Jataí',
            },
          ],
        },
      ],
    },
    {
      id: '06',
      slug: 'm0nk3y-3d',
      title: 'M0NK3Y',
      subtitle: 'Do Rascunho ao Render: Pipeline 3D no Blender & Criação de Key Visuals',
      clientOrContext: 'Projeto Autoral • Character Design, Lookdev & Direção de Arte 3D',
      year: '2024',
      role: 'Concept 2D, Modelagem 3D, Shaders, Iluminação & Pós-Produção',
      accentColor: '#BB5A4B',
      textColorOnAccent: '#FFF8F5',
      tags: ['3D', 'ILUSTRAÇÃO'],
      tools: ['Blender', 'Photoshop'],
      coverImage: '/media/monkey/monkey-01-final.png',
      behanceUrl: 'https://www.behance.net/gallery/208451571/M0NK3Y',
      summary:
        'Desenvolvimento completo de personagem e cena 3D no Blender — do rascunho no papel ao render final iluminado — consolidando em curto prazo o domínio técnico para criação de Key Visuals e ativos de campanha.',
      challenge:
        'Dar vida a um personagem 3D autoral completo — saindo do rascunho inicial no papel até a modelagem e o *render* final — como um desafio prático para dominar o **Blender** em um curto espaço de tempo.\n\nMais do que estudar ferramentas isoladas, o objetivo foi absorver rapidamente uma *pipeline* completa de ilustração 3D capaz de gerar **Key Visuals proprietários**, mascotes e cenas de alto impacto aplicáveis ao desenvolvimento de campanhas publicitárias e lançamentos de marca.',
      approach:
        '**Evolução Rápida Orientada a Projeto:** Em vez de exercícios básicos desconectados, estruturei o aprendizado construindo uma cena ambiciosa do zero. Em pouco tempo de prática intensiva, saí da blocagem primitiva para o controle de anatomia estilizada, profundidade espacial e física de materiais.\n\n**Do Traço 2D ao Volume 3D:** A peça nasceu de um *sketch* focado em gesto e narrativa. Na passagem para a blocagem (*Clay*), traduzi a perspectiva dramática em *contra-plongée* e a sensação de gravidade zero na pose aberta do astronauta diante do buraco negro.\n\n**Contraste Complementar & Foco Narrativo:** A direção de arte explora a oposição cromática entre o **laranja vibrante** (macacão espacial e reflexo incandescente do disco de acreção) e o **azul profundo** do espaço, conduzindo o olhar imediatamente para a expressão do personagem e o visor `M0NK3Y`.',
      pipelineTitle: 'PIPELINE TÉCNICO',
      pipeline:
        '**Modelagem & Escultura Estilizada:** Combinação de formas orgânicas (pelagem em mechas, expressão facial e mãos) com modelagem de traje e acessórios (cúpula esférica, módulo peitoral e dobras do macacão com zíper metálico).\n\n**Lookdev, Shaders & Texturas:** Configuração de materiais distintos reagindo à mesma atmosfera — vidro translúcido com refração e reflexo especular no capacete, tecido acetinado com aplicação de *decal* UV e emissão luminosa nos anéis gravitacionais.\n\n**Staging, Câmera & Rig de Iluminação:** Construção do palco 3D no *viewport* com partículas estelares em profundidade e múltiplas luzes de área e recorte (*rim light* quente + preenchimento frio), finalizada com *glow* atmosférico e assinatura luminosa `M0NK3Y` na pós-produção.',
      outcome:
        '**Cena & Personagem 3D Autorais:** Domínio comprovado de todas as etapas no Blender — *concept*, modelagem, *lookdev*, iluminação cinematográfica e pós-produção — alcançado em curva acelerada de aprendizado.\n\n**Aplicação Direta em Campanhas:** Autonomia criativa para desenvolver *Key Visuals* exclusivos, mascotes 3D, *packshots* e desdobramentos multiformato (Web, *Landing Pages*, Social Media e OOH) com liberdade total de câmera e luz, sem depender de bancos de imagem genéricos.',
      highlights: [
        { label: 'PROJETO', value: 'Estudo Autoral 3D' },
        { label: 'OBJETIVO', value: 'Domínio 3D & Key Visuals' },
        { label: 'STACK', value: 'Blender 3D / Photoshop' },
      ],
      galleryCaptions: [],
      galleryBlocks: [
        {
          type: 'wide',
          image: '/media/monkey/monkey-01-final.png',
          alt: 'M0NK3Y — Key Visual 3D finalizado no Blender e Photoshop',
          bgClass: 'bg-[#050512]',
          heightClass: 'h-[250px] sm:h-[384px]',
          objectPosition: 'object-[50%_38%]',
        },
        {
          type: 'wide',
          image: '/media/monkey/monkey-02-evolucao.png',
          alt: 'Evolução completa do projeto: Rascunho 2D, Blocagem Clay 3D no Blender e Render Final',
          bgClass: 'bg-[#121212]',
          heightClass: 'h-[175px] sm:h-[239px]',
        },
        {
          type: 'wide',
          image: '/media/monkey/monkey-03-viewport-luz.png',
          alt: 'Bastidores no Viewport do Blender: posicionamento espacial, câmera em contra-plongée e rig de iluminação',
          bgClass: 'bg-[#2C2C2C]',
          heightClass: 'h-[205px] sm:h-[280px]',
        },
        {
          type: 'wide',
          image: '/media/monkey/monkey-04-render-base.png',
          alt: 'Render base puro no Blender: teste de refração do vidro, shaders de tecido e luz de recorte antes da pós-produção',
          bgClass: 'bg-[#050512]',
          heightClass: 'h-[320px] sm:h-[486px]',
        },
        {
          type: 'wide',
          image: '/media/monkey/monkey-01-final.png',
          alt: 'Arte finalizada M0NK3Y: ativação do visor luminoso peitoral, bloom incandescente do buraco negro e color grading',
          bgClass: 'bg-[#050512]',
          heightClass: 'h-[320px] sm:h-[486px]',
        },
      ],
    },
  ] as ProjectItem[],
};
