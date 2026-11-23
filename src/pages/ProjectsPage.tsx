import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const TOOL_SHORT_CODES: Record<string, string> = {
  Photoshop: 'Ps',
  Illustrator: 'Ai',
  Premiere: 'Pr',
  'After Effects': 'Ae',
  InDesign: 'Id',
  Figma: 'Fg',
  Blender: '3D',
  Audacity: 'Au',
  Procreate: 'Pr',
  Lightroom: 'Lr',
  Duda: 'Du',
  Canva: 'Cv',
  CapCut: 'Cc',
};

export function getToolShortCode(tool: string): string {
  return TOOL_SHORT_CODES[tool] ?? tool.slice(0, 2);
}

export function SoftwareBadges({
  tools,
  size = 'md',
}: {
  tools: string[];
  size?: 'sm' | 'md';
}) {
  const boxClass =
    size === 'sm'
      ? 'w-[26px] h-[26px] rounded-[6px] text-[11px]'
      : 'w-[35px] h-[35px] rounded-[8px] text-[13px]';

  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      {tools.map((tool) => (
        <span
          key={tool}
          title={tool}
          className={`${boxClass} bg-white text-[#171717] font-sans font-extrabold inline-flex items-center justify-center shadow-md select-none shrink-0`}
        >
          {getToolShortCode(tool)}
        </span>
      ))}
    </div>
  );
}

function CardArrowSquare({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 109 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="108.029" height="107" rx="20.5769" fill="#171717" />
      <path
        d="M25.1904 74.4252C23.2396 76.3796 23.2425 79.5454 25.197 81.4962C27.1514 83.447 30.3173 83.444 32.2681 81.4896L28.7292 77.9574L25.1904 74.4252ZM78.2929 28.3007L74.754 24.7685L25.1904 74.4252L28.7292 77.9574L32.2681 81.4896L81.8317 31.8329L78.2929 28.3007ZM83.2929 28.296C83.2903 25.5346 81.0496 23.2981 78.2882 23.3007L33.2882 23.3429C30.5268 23.3455 28.2903 25.5861 28.2929 28.3476C28.2955 31.109 30.5362 33.3455 33.2976 33.3429L73.2976 33.3054L73.3351 73.3053C73.3377 76.0668 75.5783 78.3032 78.3397 78.3007C81.1012 78.2981 83.3376 76.0574 83.3351 73.296L83.2929 28.296Z"
        fill="#D8A266"
      />
    </svg>
  );
}

export function ProjectsPage() {
  const { projects } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const activeProject = projects[activeIndex];
  const badgesOnLeft = activeIndex >= projects.length - 2;

  // Navegação via teclado (← → e Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
      } else if (e.key === 'Enter') {
        navigate(`/projetos/${activeProject.slug}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject.slug, navigate, projects.length]);

  return (
    <main className="min-h-dvh md:h-dvh md:max-h-dvh w-full bg-[#1C1212] text-white relative overflow-x-hidden md:overflow-hidden pt-[76px] pb-8 md:pt-[74px] md:pb-5 px-4 sm:px-7 lg:px-10 flex flex-col">
      {/* IMAGEM DE CAPA DO PROJETO EM ALTA RESOLUÇÃO AO FUNDO */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#1C1212]">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeProject.id}
            src={activeProject.coverImage}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Vinheta cinematográfica direcional */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(20,12,12,0.88) 0%, rgba(20,12,12,0.52) 45%, rgba(20,12,12,0.16) 100%), linear-gradient(180deg, rgba(20,12,12,0.38) 0%, rgba(20,12,12,0.10) 46%, rgba(20,12,12,0.86) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] flex-1 min-h-0 flex flex-col justify-between">
        {/* =====================================================================
            VERSÃO MOBILE (< md)
           ===================================================================== */}
        <div className="md:hidden space-y-4">
          {/* Card Hero Mobile do projeto ativo */}
          <div className="relative rounded-[15px] overflow-hidden border border-white/20 bg-black/45 backdrop-blur-sm shadow-2xl">
            <div className="relative min-h-[246px] w-full p-4 flex flex-col justify-between">
              <div>
                <p className="font-mono-tech text-[11px] font-normal text-white/90 tracking-wide">
                  {activeProject.tags.join('  /  ')}
                </p>

                <div className="flex items-baseline gap-2.5 mt-1.5 flex-wrap">
                  <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-none">
                    {activeProject.title}
                  </h1>
                  <span className="font-mono-tech text-xs text-white/85">
                    {activeProject.year}
                  </span>
                </div>

                <p className="text-xs text-white/90 mt-2.5 max-w-[300px] leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Barra inferior do Hero Mobile: botão Ver Projeto ↗ + ícones de software */}
              <div className="flex items-center justify-between gap-2 pt-4">
                <Link
                  to={`/projetos/${activeProject.slug}`}
                  className="inline-flex items-center justify-between gap-4 px-4 py-2.5 rounded-[12px] bg-[#D8A266] text-[#171717] font-medium text-sm shadow-md active:scale-95 transition-transform"
                >
                  <span>Ver Projeto</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </Link>

                <SoftwareBadges tools={activeProject.tools} size="sm" />
              </div>
            </div>
          </div>

          {/* Grade 2x2 de cards no Mobile */}
          <div className="grid grid-cols-2 gap-3">
            {projects.map((proj, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => {
                    if (isSelected) {
                      navigate(`/projetos/${proj.slug}`);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  className={`group text-left relative rounded-[10px] overflow-hidden h-[190px] border transition-all ${
                    isSelected
                      ? 'border-[#D8A266] ring-2 ring-[#D8A266]/65 shadow-lg'
                      : 'border-white/15 opacity-85 hover:opacity-100'
                  }`}
                >
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-lg font-medium text-white leading-tight line-clamp-2">
                      {proj.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            VERSÃO DESKTOP (md+) — Fiel ao frame "desktop projetos" do Figma
           ===================================================================== */}
        <div className="hidden md:flex md:flex-col justify-between flex-1 min-h-0 pt-3 lg:pt-5">
          {/* BLOCO SUPERIOR ESQUERDO (Tags mono + Título Syne Uppercase + Ano mono + Resumo) */}
          <div className="shrink-0 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <p className="font-mono-tech text-sm lg:text-[18px] text-white/90 tracking-wide drop-shadow-sm">
                  {activeProject.tags.join('  /  ')}
                </p>

                <div className="flex items-baseline gap-4 mt-1.5 flex-wrap">
                  <h1 className="font-display font-bold uppercase text-[clamp(2.35rem,6.2vh,4.6rem)] tracking-tight text-white leading-[0.98] drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
                    {activeProject.title}
                  </h1>
                  <span className="font-mono-tech text-base lg:text-[20px] text-white/90 font-normal drop-shadow-sm">
                    {activeProject.year}
                  </span>
                </div>

                <p className="text-sm lg:text-[18px] text-white/90 mt-2.5 max-w-[560px] leading-relaxed drop-shadow-sm">
                  {activeProject.summary}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ÁREA INFERIOR DE CARDS + ÍCONES DE SOFTWARE */}
          <div className="relative flex-1 min-h-0 flex flex-col justify-end mt-4">
            <div className="relative w-full h-[min(46vh,395px)] min-h-[250px] flex items-end gap-3.5 lg:gap-4">
              {/* Ícones brancos de softwares (Ps, Ai, Pr, 3D, Au...) */}
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                className={`absolute top-2 z-20 ${badgesOnLeft ? 'left-1' : 'right-1'}`}
              >
                <SoftwareBadges tools={activeProject.tools} size="md" />
              </motion.div>

              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => {
                      if (isActive) {
                        navigate(`/projetos/${project.slug}`);
                      } else {
                        setActiveIndex(idx);
                      }
                    }}
                    style={{
                      flex: isActive ? '2.35 1 0%' : '1 1 0%',
                    }}
                    className={`group relative cursor-pointer select-none flex flex-col ${
                      isActive ? 'h-full' : 'h-[calc(100%-64px)]'
                    }`}
                  >
                    {/* Aba superior âmbar "Ver Projeto [↗]" acoplada ao card ativo */}
                    {isActive && (
                      <Link
                        to={`/projetos/${project.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="h-[64px] shrink-0 rounded-t-[10px] bg-[#D8A266] px-5 lg:px-6 flex items-center justify-between text-black hover:brightness-105 transition-all"
                      >
                        <span className="relative z-10 text-2xl lg:text-[32px] font-normal tracking-tight">
                          Ver Projeto
                        </span>
                        <CardArrowSquare className="relative z-10 w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] shrink-0 transition-transform group-hover:scale-105" />
                      </Link>
                    )}

                    {/* Corpo visual do card */}
                    <div
                      className={`relative flex-1 min-h-0 w-full overflow-hidden bg-[#2A2020] border transition-all ${
                        isActive
                          ? 'rounded-b-[10px] border-[#D8A266]/45 border-t-0 shadow-[0_20px_50px_rgba(0,0,0,0.65)]'
                          : 'rounded-[10px] border-white/18 opacity-85 hover:opacity-100 hover:border-white/40 shadow-xl'
                      }`}
                    >
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div
                        className={`absolute inset-0 ${
                          isActive
                            ? 'bg-gradient-to-t from-black/80 via-black/15 to-transparent'
                            : 'bg-gradient-to-t from-black/85 via-black/35 to-black/15'
                        }`}
                      />

                      {isActive ? (
                        <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                          <h2 className="font-sans font-normal text-[clamp(1.85rem,4.4vh,3.25rem)] text-white leading-none tracking-tight truncate drop-shadow-md">
                            {project.title}
                          </h2>
                        </div>
                      ) : (
                        <div className="absolute inset-y-4 right-3 flex items-end justify-end pointer-events-none">
                          <h3
                            style={{
                              writingMode: 'vertical-rl',
                              transform: 'rotate(180deg)',
                            }}
                            className="font-sans font-normal text-[clamp(1.2rem,2.7vh,1.85rem)] text-white/95 leading-none tracking-tight max-h-full truncate drop-shadow-md"
                          >
                            {project.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
