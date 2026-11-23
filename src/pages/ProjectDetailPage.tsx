import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  Play,
  X,
} from 'lucide-react';
import {
  type GalleryBlock,
  type ProjectItem,
  type UxCaseRightVisual,
  portfolioData,
} from '../data/portfolioData';
import { SoftwareBadges } from './ProjectsPage';

interface LightboxItem {
  src: string;
  alt: string;
}

/**
 * Converte marcações leves (**negrito**, *itálico* e `código`) em elementos React
 * preservando quebras de parágrafo (\n\n) e quebras de linha simples (\n).
 */
function FormattedParagraphs({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);

  const renderInline = (line: string) => {
    const tokens = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
    return tokens.map((token, idx) => {
      if (token.startsWith('**') && token.endsWith('**')) {
        return (
          <strong key={idx} className="font-bold text-white">
            {token.slice(2, -2)}
          </strong>
        );
      }
      if (token.startsWith('*') && token.endsWith('*')) {
        return (
          <em key={idx} className="italic text-white/95">
            {token.slice(1, -1)}
          </em>
        );
      }
      if (token.startsWith('`') && token.endsWith('`')) {
        return (
          <span key={idx} className="font-mono-tech text-[0.92em] text-white">
            {token.slice(1, -1)}
          </span>
        );
      }
      return <Fragment key={idx}>{token}</Fragment>;
    });
  };

  return (
    <div className="space-y-4">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split('\n');
        return (
          <p
            key={pIdx}
            className="font-sans text-[15px] sm:text-[17px] font-medium text-white/95 leading-[1.42] max-w-[485px]"
          >
            {lines.map((line, lIdx) => (
              <Fragment key={lIdx}>
                {lIdx > 0 && <br />}
                {renderInline(line)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Converte URLs comuns de vídeo (YouTube, Vimeo, Google Drive) para URL de embed,
 * ou identifica se é arquivo direto (.mp4 / .webm / .mov).
 */
function resolveVideoSource(rawUrl?: string): {
  kind: 'iframe' | 'video' | 'none';
  src: string;
} {
  if (!rawUrl || !rawUrl.trim()) {
    return { kind: 'none', src: '' };
  }

  const url = rawUrl.trim();

  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url)) {
    return { kind: 'video', src: url };
  }

  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/
  );
  if (ytMatch) {
    return {
      kind: 'iframe',
      src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
    };
  }

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return {
      kind: 'iframe',
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
    };
  }

  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) {
    return {
      kind: 'iframe',
      src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
    };
  }

  return { kind: 'iframe', src: url };
}

/**
 * Gera os blocos padrão da coluna direita para projetos que não definiram `galleryBlocks`
 */
function buildDefaultGalleryBlocks(project: ProjectItem): GalleryBlock[] {
  const getSlot = (idx: number) => {
    const existing = project.galleryCaptions[idx];
    if (existing) return existing;
    const fallbackImg =
      project.galleryCaptions[idx % Math.max(1, project.galleryCaptions.length)]?.image ||
      project.coverImage;
    return {
      title: project.title,
      note: '',
      image: fallbackImg,
    };
  };

  const s0 = getSlot(0);
  const s1 = getSlot(1);
  const s2 = getSlot(2);
  const s3 = getSlot(3);

  const blocks: GalleryBlock[] = [
    {
      type: 'wide',
      image: project.coverImage,
      alt: project.title,
      heightClass: 'h-[240px] sm:h-[299px]',
      objectPosition: 'object-top',
    },
    {
      type: 'pair',
      heightClass: 'h-[195px] sm:h-[218px]',
      items: [
        {
          image: s0.image || project.coverImage,
          alt: s0.title,
          overlayNote: s0.note || s0.title,
          objectPosition: 'object-left-top',
        },
        {
          image: s1.image || project.coverImage,
          alt: s1.title,
          overlayNote: s1.note || s1.title,
          objectPosition: 'object-right-top',
        },
      ],
    },
    {
      type: 'wide',
      image: s2.image || project.coverImage,
      alt: `${project.title} — Destaque`,
      heightClass: 'h-[240px] sm:h-[299px]',
      objectPosition: 'object-center',
    },
    {
      type: 'wide',
      image: s3.image || project.coverImage,
      alt: `${project.title} — Detalhe`,
      heightClass: 'h-[240px] sm:h-[299px]',
      objectPosition: 'object-bottom',
    },
  ];

  for (const extra of project.galleryCaptions.slice(4)) {
    blocks.push({
      type: 'wide',
      image: extra.image || project.coverImage,
      alt: extra.title,
      heightClass: 'h-[240px] sm:h-[299px]',
    });
  }

  return blocks;
}

function VideoBlockPlayer({
  poster,
  title,
  ctaLabel,
  playingHeightClass,
  videoUrl,
  fallbackExternalUrl,
}: {
  poster: string;
  title?: string;
  ctaLabel?: string;
  playingHeightClass?: string;
  videoUrl?: string;
  fallbackExternalUrl?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const resolved = resolveVideoSource(videoUrl);

  if (isPlaying && resolved.kind !== 'none') {
    return (
      <div
        className={`relative rounded-[10px] overflow-hidden bg-[#141414] shadow-xl ${
          playingHeightClass || 'h-[250px] sm:h-[340px] lg:h-[370px]'
        }`}
      >
        {resolved.kind === 'video' ? (
          <video
            src={resolved.src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain bg-black"
          />
        ) : (
          <iframe
            src={resolved.src}
            title={title || 'Vídeo do projeto'}
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>
    );
  }

  const handleClick = () => {
    if (resolved.kind !== 'none') {
      setIsPlaying(true);
    } else if (fallbackExternalUrl) {
      window.open(fallbackExternalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={title || 'Reproduzir vídeo do projeto'}
      className="group relative w-full text-left rounded-[10px] overflow-hidden bg-[#4A2C11] h-[250px] sm:h-[340px] lg:h-[370px] cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-white/80"
    >
      <img
        src={poster}
        alt={title || 'Capa do vídeo'}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white font-mono-tech text-[11px] uppercase tracking-wider">
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>
            {resolved.kind !== 'none'
              ? ctaLabel || 'Assistir Filme'
              : 'Assistir no Behance'}
          </span>
        </span>

        {resolved.kind === 'none' && fallbackExternalUrl && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/60 text-white/90 text-xs">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
    </button>
  );
}

/**
 * Slider interativo e automático para alternar entre duas ou mais telas sobrepostas do Figma
 */
function CaseImageSlider({
  slides,
  autoPlayMs = 4500,
  heightClass = 'h-[520px] sm:h-[760px] lg:h-[920px]',
  isLightboxOpen,
  onOpenFullscreen,
}: {
  slides: { image: string; label: string; alt: string }[];
  autoPlayMs?: number;
  heightClass?: string;
  isLightboxOpen: boolean;
  onOpenFullscreen: (src: string, alt: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isHovered || isLightboxOpen) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, isHovered, isLightboxOpen, slides.length]);

  const current = slides[index] || slides[0];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col gap-3"
    >
      {/* Abas / Pílulas seletoras para troca imediata */}
      {slides.length > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-black/25 backdrop-blur-sm">
            {slides.map((s, sIdx) => {
              const active = sIdx === index;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setIndex(sIdx)}
                  className={`px-3.5 py-1.5 rounded-full font-mono-tech text-[11px] sm:text-xs uppercase tracking-wide transition-all cursor-pointer ${
                    active
                      ? 'bg-[#D8A266] text-black font-bold shadow-sm'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          <span className="font-mono-tech text-[11px] text-white/80 uppercase tracking-wider hidden sm:inline">
            {isHovered ? 'Pausado' : 'Alternando automaticamente'}
          </span>
        </div>
      )}

      {/* Quadro principal da tela com crossfade suave */}
      <div
        className={`group relative w-full rounded-[10px] overflow-hidden bg-white shadow-xl ${heightClass}`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={current.image}
            alt={current.alt}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={() => onOpenFullscreen(current.image, current.alt)}
            className="w-full h-full object-cover object-top cursor-zoom-in select-none"
          />
        </AnimatePresence>

        {/* Botão de Fullscreen no canto superior direito */}
        <button
          type="button"
          onClick={() => onOpenFullscreen(current.image, current.alt)}
          aria-label={`Ampliar imagem: ${current.alt}`}
          className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-black/65 hover:bg-black/85 text-white transition-opacity opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Setas laterais sobrepostas */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setIndex((prev) => (prev - 1 + slides.length) % slides.length)
              }
              aria-label="Tela anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/65 hover:bg-black/85 text-white shadow-md cursor-pointer transition-transform active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
              aria-label="Próxima tela"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/65 hover:bg-black/85 text-white shadow-md cursor-pointer transition-transform active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicadores inferiores */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-sm">
              {slides.map((s, dotIdx) => (
                <button
                  key={`dot-${s.label}`}
                  type="button"
                  onClick={() => setIndex(dotIdx)}
                  aria-label={`Ir para ${s.label}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    dotIdx === index ? 'w-6 bg-[#D8A266]' : 'w-2 bg-white/55 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function UxSectionVisualRenderer({
  visual,
  isLightboxOpen,
  onOpenFullscreen,
}: {
  visual: UxCaseRightVisual;
  isLightboxOpen: boolean;
  onOpenFullscreen: (src: string, alt: string) => void;
}) {
  if (visual.kind === 'wide') {
    return (
      <button
        type="button"
        onClick={() => onOpenFullscreen(visual.image, visual.alt)}
        aria-label={`Ampliar imagem: ${visual.alt}`}
        className={`group relative w-full block rounded-[10px] overflow-hidden cursor-zoom-in shadow-md ${
          visual.bgClass || 'bg-[#0C0E14]'
        } ${visual.heightClass || 'h-[210px] sm:h-[250px]'}`}
      >
        <img
          src={visual.image}
          alt={visual.alt}
          className={`w-full h-full ${
            visual.objectFit === 'contain' ? 'object-contain' : 'object-cover'
          } transition-transform duration-500 group-hover:scale-[1.02]`}
        />
        <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </span>
      </button>
    );
  }

  if (visual.kind === 'pair') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visual.items.map((item, idx) => (
          <div key={`${item.image}-${idx}`}>
            <button
              type="button"
              onClick={() => onOpenFullscreen(item.image, item.alt)}
              aria-label={`Ampliar imagem: ${item.alt}`}
              className={`group relative w-full block rounded-[10px] overflow-hidden cursor-zoom-in shadow-md ${
                item.bgClass || 'bg-[#151622]'
              } ${visual.heightClass || 'h-[205px] sm:h-[235px]'}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full h-full ${
                  item.objectFit === 'contain'
                    ? 'object-contain'
                    : 'object-cover object-top'
                } transition-transform duration-500 group-hover:scale-[1.02]`}
              />
              <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </button>
            {item.captionBelow && (
              <p className="font-sans font-bold text-base sm:text-[19px] text-white mt-2 pl-1">
                {item.captionBelow}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (visual.kind === 'top-plus-pair') {
    return (
      <div className="space-y-4">
        <div className="max-w-[460px] mx-auto">
          <button
            type="button"
            onClick={() => onOpenFullscreen(visual.top.image, visual.top.alt)}
            aria-label={`Ampliar imagem: ${visual.top.alt}`}
            className={`group relative w-full block rounded-[10px] overflow-hidden cursor-zoom-in shadow-md h-[210px] sm:h-[255px] ${
              visual.top.bgClass || 'bg-[#FAFBFD]'
            }`}
          >
            <img
              src={visual.top.image}
              alt={visual.top.alt}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visual.bottom.map((item, idx) => (
            <button
              key={`${item.image}-${idx}`}
              type="button"
              onClick={() => onOpenFullscreen(item.image, item.alt)}
              aria-label={`Ampliar imagem: ${item.alt}`}
              className={`group relative w-full block rounded-[10px] overflow-hidden cursor-zoom-in shadow-md h-[145px] sm:h-[158px] ${
                item.bgClass || 'bg-[#181A21]'
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (visual.kind === 'stacked') {
    return (
      <div className="space-y-4">
        {visual.items.map((item, idx) => (
          <div key={`${item.image}-${idx}`}>
            <button
              type="button"
              onClick={() => onOpenFullscreen(item.image, item.alt)}
              aria-label={`Ampliar imagem: ${item.alt}`}
              className={`group relative w-full block rounded-[10px] overflow-hidden cursor-zoom-in shadow-md ${
                item.bgClass || 'bg-[#0C0E14]'
              } ${item.heightClass || 'h-[130px] sm:h-[148px]'}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </button>
            {item.captionBelow && (
              <p className="font-sans font-bold text-base sm:text-[19px] text-white mt-1.5 pl-1">
                {item.captionBelow}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (visual.kind === 'slider') {
    return (
      <CaseImageSlider
        slides={visual.slides}
        autoPlayMs={visual.autoPlayMs}
        heightClass={visual.heightClass}
        isLightboxOpen={isLightboxOpen}
        onOpenFullscreen={onOpenFullscreen}
      />
    );
  }

  if (visual.kind === 'prototype-card') {
    return (
      <a
        href={visual.protoUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative w-full block rounded-[10px] overflow-hidden bg-white h-[260px] sm:h-[380px] lg:h-[430px] shadow-xl"
      >
        <img
          src={visual.image}
          alt={visual.alt}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#D8A266] text-black font-mono-tech font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-transform duration-300 group-hover:scale-105">
            <span>{visual.badgeText || 'Navegar pelo Protótipo'}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
          </span>
        </div>
      </a>
    );
  }

  return null;
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = portfolioData;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const projectIndex = projects.findIndex((p) => p.slug === slug);

  // Sorteia 3 "Outros Projetos" aleatórios toda vez que o usuário entra/troca de página de projeto
  const randomOtherProjects = useMemo(() => {
    const candidates = projects.filter((p) => p.slug !== slug);
    const copy = [...candidates];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, 3);
  }, [projects, slug]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [slug]);

  const project = projectIndex !== -1 ? projects[projectIndex] : null;
  const uxCase = project?.uxCaseStudy;

  const blocks = useMemo<GalleryBlock[]>(() => {
    if (!project || uxCase) return [];
    return project.galleryBlocks && project.galleryBlocks.length > 0
      ? project.galleryBlocks
      : buildDefaultGalleryBlocks(project);
  }, [project, uxCase]);

  // Lista plana de todas as imagens clicáveis para navegação no Fullscreen (Lightbox)
  const lightboxItems = useMemo<LightboxItem[]>(() => {
    const list: LightboxItem[] = [];
    const pushUnique = (src: string, alt: string) => {
      if (!list.some((it) => it.src === src)) {
        list.push({ src, alt });
      }
    };

    if (uxCase) {
      pushUnique(uxCase.heroImage, uxCase.heroImageAlt);
      for (const sec of uxCase.sections) {
        const v = sec.visual;
        if (v.kind === 'wide') {
          pushUnique(v.image, v.alt);
        } else if (v.kind === 'pair') {
          for (const it of v.items) pushUnique(it.image, it.alt);
        } else if (v.kind === 'top-plus-pair') {
          pushUnique(v.top.image, v.top.alt);
          for (const it of v.bottom) pushUnique(it.image, it.alt);
        } else if (v.kind === 'stacked') {
          for (const it of v.items) pushUnique(it.image, it.alt);
        } else if (v.kind === 'slider') {
          for (const s of v.slides) pushUnique(s.image, s.alt);
        }
      }
      return list;
    }

    for (const block of blocks) {
      if (block.type === 'wide') {
        pushUnique(
          block.image,
          block.alt || block.captionBelow || project?.title || ''
        );
      } else if (block.type === 'pair') {
        for (const item of block.items) {
          pushUnique(
            item.image,
            item.overlayNote || item.alt || project?.title || ''
          );
        }
      } else if (block.type === 'triple') {
        for (const item of block.items) {
          pushUnique(item.image, item.alt || project?.title || '');
        }
      } else if (block.type === 'quad-bento') {
        pushUnique(block.left.image, block.left.alt || block.captionBelow || '');
        pushUnique(
          block.midTop.image,
          block.midTop.alt || block.captionBelow || ''
        );
        pushUnique(
          block.midBottom.image,
          block.midBottom.alt || block.captionBelow || ''
        );
        pushUnique(
          block.right.image,
          block.right.alt || block.captionBelow || ''
        );
      }
    }
    return list;
  }, [blocks, project?.title, uxCase]);

  const openImageFullscreen = useCallback(
    (src: string, alt?: string) => {
      const idx = lightboxItems.findIndex(
        (it) => it.src === src && (!alt || it.alt === alt)
      );
      if (idx !== -1) {
        setLightboxIndex(idx);
      } else {
        const fallbackIdx = lightboxItems.findIndex((it) => it.src === src);
        if (fallbackIdx !== -1) setLightboxIndex(fallbackIdx);
      }
    },
    [lightboxItems]
  );

  // Teclado no modo Fullscreen (Esc, ←, →) + trava scroll do body
  useEffect(() => {
    if (lightboxIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % lightboxItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + lightboxItems.length) % lightboxItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, lightboxItems.length]);

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const activeLightboxItem =
    lightboxIndex !== null ? lightboxItems[lightboxIndex] : null;

  return (
    <main className="min-h-screen w-full bg-[#BB5A4B] figma-card-texture text-white relative overflow-x-hidden pt-[84px] md:pt-[104px] pb-16 px-4 sm:px-7 lg:px-14">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {uxCase ? (
          /* ===================================================================
             LAYOUT DE CASE DE UX EM MÓDULOS (Ex.: GALÁPAGOS JOGOS)
             =================================================================== */
          <div className="space-y-8">
            {/* DOBRA INICIAL: Cabeçalho + Contexto à esquerda e Homepage à direita */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="lg:col-span-5 space-y-8"
              >
                <div>
                  <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-[50px] tracking-tight text-white leading-[1.02]">
                    {project.title}
                  </h1>

                  <p className="text-base sm:text-[19px] text-white/95 mt-2">
                    {project.year}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <SoftwareBadges tools={project.tools} size="md" />

                    {project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between gap-3.5 px-5 py-2 rounded-[18px] bg-[#D8A266] text-black font-mono-tech text-xs sm:text-[15px] uppercase tracking-wide hover:brightness-105 transition-all shadow-md"
                      >
                        <span>VER NO BEHANCE</span>
                        <ArrowRight className="w-4 h-4 stroke-[2]" />
                      </a>
                    )}
                  </div>

                  {/* 3 Colunas técnicas */}
                  <div className="mt-6 grid grid-cols-3 gap-4 max-w-[440px]">
                    {project.highlights.map((hl) => (
                      <div key={hl.label} className="min-w-0">
                        <span className="block font-mono-tech font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.05em] text-white">
                          {hl.label}
                        </span>
                        <span className="block font-sans font-semibold text-[11px] sm:text-xs text-white/95 mt-1 leading-snug">
                          {hl.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <section className="pt-1">
                  <h2 className="font-mono-tech font-extrabold text-xl sm:text-[24px] uppercase tracking-[0.05em] text-white leading-[1.08] mb-3.5">
                    {uxCase.heroHeading}
                  </h2>
                  <FormattedParagraphs text={uxCase.heroText} />
                </section>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.06 }}
                className="lg:col-span-7"
              >
                <button
                  type="button"
                  onClick={() =>
                    openImageFullscreen(uxCase.heroImage, uxCase.heroImageAlt)
                  }
                  aria-label={`Ampliar imagem: ${uxCase.heroImageAlt}`}
                  className="group relative w-full block rounded-[10px] overflow-hidden bg-white h-[340px] sm:h-[500px] lg:h-[600px] cursor-zoom-in shadow-xl"
                >
                  <img
                    src={uxCase.heroImage}
                    alt={uxCase.heroImageAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </button>
              </motion.div>
            </div>

            {/* MÓDULOS COM MOLDURA BRANCA (3px, rounded-[13px]) */}
            <div className="space-y-8 pt-2">
              {uxCase.sections.map((section) => (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.35 }}
                  className="border-[3px] border-white rounded-[13px] p-5 sm:p-7 lg:p-8"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 ${
                      section.alignTop ? 'items-start' : 'items-center'
                    }`}
                  >
                    {/* Texto(s) à esquerda */}
                    <div className="lg:col-span-5 space-y-9">
                      {section.textBlocks.map((tb, tbIdx) => (
                        <div key={`${section.id}-tb-${tbIdx}`}>
                          <h2 className="font-mono-tech font-extrabold text-xl sm:text-[24px] uppercase tracking-[0.05em] text-white leading-[1.08] mb-3.5 whitespace-pre-line">
                            {tb.title}
                          </h2>
                          <FormattedParagraphs text={tb.body} />

                          {tb.ctaLabel && tb.ctaUrl && (
                            <div className="mt-6">
                              <a
                                href={tb.ctaUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-[18px] bg-[#D8A266] text-black font-mono-tech font-bold text-xs sm:text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-lg"
                              >
                                <span>{tb.ctaLabel}</span>
                                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Visual à direita */}
                    <div className="lg:col-span-7">
                      <UxSectionVisualRenderer
                        visual={section.visual}
                        isLightboxOpen={lightboxIndex !== null}
                        onOpenFullscreen={openImageFullscreen}
                      />
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        ) : (
          /* ===================================================================
             LAYOUT EDITORIAL EM 2 COLUNAS (QDMP E DEMAIS PROJETOS)
             =================================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* COLUNA ESQUERDA (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-5 space-y-9"
            >
              <div>
                <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-[50px] tracking-tight text-white leading-[1.02]">
                  {project.title}
                </h1>

                <p className="text-base sm:text-[19px] text-white/95 mt-2">
                  {project.year}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3.5">
                  <SoftwareBadges tools={project.tools} size="md" />

                  {project.behanceUrl && (
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between gap-4 px-5 py-2 rounded-[18px] bg-[#D8A266] text-black font-mono-tech text-xs sm:text-[15px] uppercase tracking-wide hover:brightness-105 transition-all shadow-md"
                    >
                      <span>VER NO BEHANCE</span>
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </a>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 max-w-[440px]">
                  {project.highlights.map((hl) => (
                    <div key={hl.label} className="min-w-0">
                      <span className="block font-mono-tech font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.05em] text-white">
                        {hl.label}
                      </span>
                      <span className="block font-sans font-semibold text-[11px] sm:text-xs text-white/95 mt-1 leading-snug">
                        {hl.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <section className="pt-1">
                <h2 className="font-mono-tech font-extrabold text-xl sm:text-[24px] uppercase tracking-[0.05em] text-white leading-[1.08] mb-3.5">
                  O DESAFIO
                </h2>
                <FormattedParagraphs text={project.challenge} />
              </section>

              <section className="pt-2">
                <h2 className="font-mono-tech font-extrabold text-xl sm:text-[24px] uppercase tracking-[0.05em] text-white leading-[1.08] mb-3.5">
                  PROGRESSO E SOLUÇÃO
                </h2>
                <FormattedParagraphs text={project.approach} />
              </section>

              {project.pipeline && (
                <section className="pt-2">
                  <h2 className="font-mono-tech font-extrabold text-xl sm:text-[24px] uppercase tracking-[0.05em] text-white leading-[1.08] mb-3.5 whitespace-pre-line">
                    {project.pipelineTitle || 'PIPELINE TÉCNICO\nE SOLUÇÕES CRIATIVAS'}
                  </h2>
                  <FormattedParagraphs text={project.pipeline} />
                </section>
              )}

              <section className="pt-2">
                <h2 className="font-mono-tech font-extrabold text-xl sm:text-[24px] uppercase tracking-[0.05em] text-white leading-[1.08] mb-3.5">
                  ENTREGÁVEIS
                </h2>
                <FormattedParagraphs text={project.outcome} />
              </section>
            </motion.div>

            {/* COLUNA DIREITA (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.06 }}
              className="lg:col-span-7 flex flex-col gap-4"
            >
              {blocks.map((block, bIdx) => {
                if (block.type === 'wide') {
                  const altText = block.alt || block.captionBelow || project.title;
                  return (
                    <div key={`block-${bIdx}`}>
                      <button
                        type="button"
                        onClick={() => openImageFullscreen(block.image, altText)}
                        aria-label={`Ampliar imagem: ${altText}`}
                        className={`group relative w-full block rounded-[10px] overflow-hidden cursor-zoom-in shadow-md ${
                          block.bgClass || 'bg-[#AC7067]'
                        } ${block.heightClass || 'h-[240px] sm:h-[299px]'}`}
                      >
                        <img
                          src={block.image}
                          alt={altText}
                          className={`w-full h-full ${
                            block.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                          } ${
                            block.objectPosition || 'object-center'
                          } transition-transform duration-500 group-hover:scale-[1.02]`}
                        />
                        <span className="absolute top-3 right-3 p-2 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </button>

                      {block.captionBelow && (
                        <p className="font-sans font-bold text-lg sm:text-[20px] text-white mt-1.5 pl-1">
                          {block.captionBelow}
                        </p>
                      )}
                    </div>
                  );
                }

                if (block.type === 'pair') {
                  return (
                    <div
                      key={`block-${bIdx}`}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {block.items.map((item, iIdx) => {
                        const altText = item.overlayNote || item.alt || project.title;
                        return (
                          <button
                            key={`pair-${bIdx}-${iIdx}`}
                            type="button"
                            onClick={() => openImageFullscreen(item.image, altText)}
                            aria-label={`Ampliar imagem: ${altText}`}
                            className={`group relative w-full text-left rounded-[10px] overflow-hidden cursor-zoom-in shadow-md ${
                              item.bgClass || 'bg-[#AC7067]'
                            } ${block.heightClass || 'h-[195px] sm:h-[218px]'}`}
                          >
                            <img
                              src={item.image}
                              alt={altText}
                              className={`w-full h-full object-cover ${
                                item.objectPosition || 'object-center'
                              } transition-transform duration-500 group-hover:scale-[1.03]`}
                            />

                            {item.overlayNote && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                                <div className="absolute bottom-3 left-3.5 right-3.5">
                                  <p className="text-xs sm:text-[14px] text-white/95 leading-snug drop-shadow">
                                    {item.overlayNote}
                                  </p>
                                </div>
                              </>
                            )}

                            <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  );
                }

                if (block.type === 'triple') {
                  return (
                    <div
                      key={`block-${bIdx}`}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                      {block.items.map((item, iIdx) => {
                        const altText = item.alt || project.title;
                        return (
                          <button
                            key={`triple-${bIdx}-${iIdx}`}
                            type="button"
                            onClick={() => openImageFullscreen(item.image, altText)}
                            aria-label={`Ampliar imagem: ${altText}`}
                            className={`group relative w-full text-left rounded-[10px] overflow-hidden cursor-zoom-in bg-[#1C1CF5] shadow-md ${
                              block.heightClass || 'h-[205px] sm:h-[218px]'
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={altText}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  );
                }

                if (block.type === 'quad-bento') {
                  return (
                    <div key={`block-${bIdx}`}>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            openImageFullscreen(
                              block.left.image,
                              block.left.alt || block.captionBelow
                            )
                          }
                          aria-label={`Ampliar ${block.left.alt || 'Concept Art 1'}`}
                          className="group relative sm:col-span-4 rounded-[10px] overflow-hidden bg-white h-[230px] sm:h-[258px] p-1.5 cursor-zoom-in shadow-md"
                        >
                          <img
                            src={block.left.image}
                            alt={block.left.alt || 'Concept Art'}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <span className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </button>

                        <div className="sm:col-span-4 flex flex-col gap-2.5">
                          <button
                            type="button"
                            onClick={() =>
                              openImageFullscreen(
                                block.midTop.image,
                                block.midTop.alt || block.captionBelow
                              )
                            }
                            aria-label={`Ampliar ${block.midTop.alt || 'Concept Art 2'}`}
                            className="group relative rounded-[10px] overflow-hidden bg-white h-[124px] p-1.5 cursor-zoom-in shadow-md"
                          >
                            <img
                              src={block.midTop.image}
                              alt={block.midTop.alt || 'Concept Art'}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <span className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-3 h-3" />
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              openImageFullscreen(
                                block.midBottom.image,
                                block.midBottom.alt || block.captionBelow
                              )
                            }
                            aria-label={`Ampliar ${block.midBottom.alt || 'Concept Art 3'}`}
                            className="group relative rounded-[10px] overflow-hidden bg-white h-[124px] p-1.5 cursor-zoom-in shadow-md"
                          >
                            <img
                              src={block.midBottom.image}
                              alt={block.midBottom.alt || 'Concept Art'}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <span className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-3 h-3" />
                            </span>
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            openImageFullscreen(
                              block.right.image,
                              block.right.alt || block.captionBelow
                            )
                          }
                          aria-label={`Ampliar ${block.right.alt || 'Concept Art 4'}`}
                          className="group relative sm:col-span-4 rounded-[10px] overflow-hidden bg-white h-[230px] sm:h-[258px] p-1.5 cursor-zoom-in shadow-md"
                        >
                          <img
                            src={block.right.image}
                            alt={block.right.alt || 'Concept Art'}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <span className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </button>
                      </div>

                      {block.captionBelow && (
                        <p className="font-sans font-bold text-lg sm:text-[20px] text-white mt-1.5 pl-1">
                          {block.captionBelow}
                        </p>
                      )}
                    </div>
                  );
                }

                if (block.type === 'video') {
                  return (
                    <VideoBlockPlayer
                      key={`${project.slug}-video-${bIdx}`}
                      poster={block.poster}
                      title={block.title}
                      ctaLabel={block.ctaLabel}
                      playingHeightClass={block.playingHeightClass}
                      videoUrl={block.videoUrl}
                      fallbackExternalUrl={block.fallbackExternalUrl || project.behanceUrl}
                    />
                  );
                }

                if (block.type === 'external-preview') {
                  return (
                    <a
                      key={`${project.slug}-preview-${bIdx}`}
                      href={block.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative w-full rounded-[10px] overflow-hidden bg-[#0D1326] h-[200px] sm:h-[235px] shadow-xl block"
                    >
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover object-top opacity-45 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />

                      <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between">
                        <div>
                          <span className="font-mono-tech font-extrabold text-xs uppercase tracking-[0.1em] text-[#D8A266]">
                            AMBIENTE NAVEGÁVEL
                          </span>
                          <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-white mt-1 leading-tight">
                            {block.title}
                          </h3>
                          {block.subtitle && (
                            <p className="text-xs sm:text-sm text-white/85 mt-1.5 max-w-md leading-relaxed">
                              {block.subtitle}
                            </p>
                          )}
                        </div>

                        <div>
                          <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-[18px] bg-[#D8A266] text-black font-mono-tech font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 group-hover:translate-x-1">
                            <span>{block.buttonLabel}</span>
                            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                }

                return null;
              })}
            </motion.div>
          </div>
        )}

        {/* =================================================================
            RODAPÉ: OUTROS PROJETOS (3 projetos sorteados aleatoriamente)
           ================================================================= */}
        <section className="mt-16 pt-4">
          <h2 className="font-mono-tech font-extrabold text-xl sm:text-[25px] uppercase tracking-[0.05em] text-white mb-5">
            OUTROS PROJETOS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-10">
            {randomOtherProjects.map((other) => (
              <Link
                key={other.id}
                to={`/projetos/${other.slug}`}
                className="group relative rounded-[10px] overflow-hidden bg-[#AC7067] h-[165px] sm:h-[170px] shadow-lg block transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={other.coverImage}
                  alt={other.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <span className="block font-mono-tech text-[10px] uppercase tracking-wider text-white/80 truncate">
                      {other.tags.join(' / ')}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-white leading-tight truncate">
                      {other.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#D8A266] shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* =================================================================
          MODAL FULLSCREEN (LIGHTBOX) AO CLICAR EM QUALQUER IMAGEM
         ================================================================= */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização em tela cheia"
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between text-white z-10">
              <span className="font-mono-tech text-xs sm:text-sm text-white/80">
                {lightboxIndex + 1} / {lightboxItems.length}
              </span>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Fechar tela cheia"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/12 hover:bg-white/25 text-white text-xs sm:text-sm font-mono-tech uppercase cursor-pointer transition-colors"
              >
                <span>Fechar</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {lightboxItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length
                    );
                  }}
                  aria-label="Imagem anterior"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/12 hover:bg-white/25 text-white cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((lightboxIndex + 1) % lightboxItems.length);
                  }}
                  aria-label="Próxima imagem"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/12 hover:bg-white/25 text-white cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.img
              key={activeLightboxItem.src}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={activeLightboxItem.src}
              alt={activeLightboxItem.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[82vh] object-contain rounded-lg shadow-2xl select-none"
            />

            {activeLightboxItem.alt && (
              <p
                onClick={(e) => e.stopPropagation()}
                className="mt-4 text-center text-xs sm:text-sm text-white/85 max-w-2xl px-4"
              >
                {activeLightboxItem.alt}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
