import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

function BehanceBadge({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[7px] bg-[#000B1D] text-white font-sans font-extrabold tracking-tight select-none shrink-0 ${className}`}
    >
      Be
    </span>
  );
}

function LinkedInBadge({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[7px] bg-[#000B1D] text-white font-sans font-extrabold tracking-tight select-none shrink-0 ${className}`}
    >
      in
    </span>
  );
}

function ProjectsArrowBox({ className = 'w-20 h-20' }: { className?: string }) {
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
        fill="#DBAB73"
      />
    </svg>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const { profile, education, experiences, projects } = portfolioData;

  return (
    <main className="h-dvh max-h-dvh w-full overflow-hidden bg-[#272727] px-3 py-2.5 sm:px-5 sm:py-4 lg:px-7 lg:py-5 flex flex-col">
      <div className="w-full max-w-[1320px] mx-auto flex-1 min-h-0 flex flex-col">
        {/* =====================================================================
            HOME MOBILE (< md) — Fiel ao frame "mobile página inicial" do Figma
            Travada em 100dvh sem precisar rolar
           ===================================================================== */}
        <div className="flex-1 min-h-0 flex flex-col gap-2.5 md:hidden">
          {/* LINHA 1: Card INFO (#F1E3D8) à esquerda + Card IMG (#BB5A4B) com ilustração vazando */}
          <div className="grid grid-cols-12 gap-2.5 pt-4 shrink-0">
            {/* INFO MOBILE */}
            <div
              role="link"
              tabIndex={0}
              onClick={() => navigate('/informacoes')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') navigate('/informacoes');
              }}
              className="col-span-7 figma-card-texture rounded-[12px] bg-[#F1E3D8] text-[#202523] p-2.5 flex flex-col justify-between cursor-pointer active:scale-[0.99] transition-transform relative z-10"
            >
              <div className="relative z-10">
                <h1 className="font-display font-extrabold text-[22px] leading-none uppercase tracking-tight text-[#202523]">
                  {profile.firstName}
                </h1>
                <p className="text-[8.8px] font-extrabold text-[#202523] mt-1 leading-tight tracking-tight">
                  {profile.roleSubtitle}
                </p>

                {/* Tabela conectada LOCALIZAÇÃO + REDES */}
                <div className="mt-1.5 border border-black text-[#202523]">
                  <div className="px-1.5 py-1 border-b border-black">
                    <span className="block font-mono-tech font-extrabold text-[7.5px] tracking-[0.11em] uppercase text-[#BB5A4B] leading-none">
                      LOCALIZAÇÃO
                    </span>
                    <span className="block text-[9px] font-medium leading-tight mt-0.5">
                      {profile.location}
                    </span>
                  </div>

                  <div className="px-1.5 py-1">
                    <span className="block font-mono-tech font-extrabold text-[7.5px] tracking-[0.11em] uppercase text-[#BB5A4B] leading-none">
                      REDES
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <a
                        href={profile.socials.behanceUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 hover:opacity-80"
                      >
                        <BehanceBadge className="w-[19px] h-[19px] text-[9px] rounded-[4px]" />
                        <span className="text-[7.5px] font-medium truncate">
                          {profile.socials.behanceHandle}
                        </span>
                      </a>

                      <a
                        href={profile.socials.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 hover:opacity-80"
                      >
                        <LinkedInBadge className="w-[19px] h-[19px] text-[9px] rounded-[4px]" />
                        <span className="text-[7.5px] font-medium truncate">
                          {profile.socials.linkedinHandle}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-1.5 flex items-center justify-between font-mono-tech text-[6.5px] tracking-[0.04em] text-black uppercase">
                <span>CURRÍCULO, SKILLS & CONTATO</span>
                <span className="font-semibold shrink-0">ABRIR INFO →</span>
              </div>
            </div>

            {/* IMG MOBILE — Ilustração autoral saindo pelo topo e lateral */}
            <Link
              to="/informacoes"
              aria-label="Sobre Bruno Viana"
              className="col-span-5 relative rounded-[12px] bg-[#BB5A4B] min-h-[144px] figma-card-texture overflow-visible group"
            >
              {/* Camada com recorte apenas na base arredondada, deixando o topo/esquerda livres */}
              <div className="absolute -top-8 -left-3 -right-1 bottom-0 rounded-b-[12px] overflow-hidden z-20 pointer-events-none flex items-end justify-center">
                <img
                  src={profile.mobileIllustration}
                  alt="Ilustração autoral de Bruno Viana"
                  className="w-[118%] max-w-none h-[122%] object-contain object-bottom transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </div>

          {/* LINHA 2: Card PROJETOS Mobile (#DBAB73) */}
          <Link
            to="/projetos"
            className="shrink-0 figma-card-texture rounded-[12px] bg-[#DBAB73] text-[#202523] p-3 block active:scale-[0.99] transition-transform"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h2 className="font-display font-extrabold text-[27px] leading-none uppercase tracking-tight text-[#202523]">
                    PROJETOS
                  </h2>
                  <p className="text-[9.5px] font-extrabold text-[#202523] mt-1 leading-[1.12] max-w-[215px]">
                    {profile.projectsSubtitle}
                  </p>
                </div>

                <ProjectsArrowBox className="w-[52px] h-[52px] shrink-0" />
              </div>

              <div className="my-2 border-t border-black" />

              {/* 6 Miniaturas sobrepostas de projetos (estilo Figma) */}
              <div className="flex items-center -space-x-1.5">
                {projects.slice(0, 6).map((proj) => (
                  <div
                    key={proj.id}
                    className="w-[44px] h-[44px] rounded-[9px] bg-[#171717] p-[2px] overflow-hidden shadow-sm border border-black/40 shrink-0"
                  >
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover rounded-[7px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Link>

          {/* LINHA 3: EDUCAÇÃO (#8A9E88) + EXPERIÊNCIAS (#E0C45B) com recorte diagonal do Figma */}
          <div className="flex-1 min-h-0 flex flex-col">
            {/* EDUCAÇÃO MOBILE (Verde #8A9E88 no topo) */}
            <Link
              to="/informacoes#educacao"
              className="flex-1 min-h-0 mobile-edu-slant figma-card-texture rounded-t-[12px] rounded-b-[10px] bg-[#8A9E88] text-[#202523] px-3 pt-2.5 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10 shrink-0">
                <h2 className="font-display font-extrabold text-[15px] uppercase leading-none text-[#202523]">
                  EDUCAÇÃO
                </h2>
                <div className="mt-1 w-[55%] border-t border-black" />
              </div>

              <div className="relative z-10 my-auto space-y-1.5 py-1">
                {education.map((edu) => (
                  <div key={edu.id} className="border border-black bg-[#839482]/90">
                    <div className="px-2 py-0.5 border-b border-black flex items-center justify-between gap-2">
                      <span className="font-mono-tech font-extrabold text-[7.5px] tracking-[0.08em] text-black truncate">
                        {edu.institution}
                      </span>
                      <span className="font-mono-tech font-extrabold text-[7.5px] tracking-[0.08em] text-black shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="px-2 py-1 text-[9px] font-medium text-[#202523] leading-tight truncate">
                      {edu.degree}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex items-center gap-3 font-mono-tech text-[6.8px] tracking-[0.05em] text-black uppercase origin-bottom-left -rotate-[2.5deg]">
                <span>FORMAÇÃO ACADÊMICA</span>
                <span className="font-semibold">VER MAIS →</span>
              </div>
            </Link>

            {/* EXPERIÊNCIAS MOBILE (Amarelo #E0C45B na base, título à direita sob a diagonal) */}
            <Link
              to="/informacoes#experiencia"
              className="flex-[1.15] min-h-0 mobile-exp-slant figma-card-texture rounded-b-[12px] rounded-t-[10px] bg-[#E0C45B] text-[#202523] px-3 pb-2 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-end shrink-0">
                <h2 className="font-display font-extrabold text-[15px] uppercase leading-none text-[#202523]">
                  EXPERIÊNCIAS
                </h2>
                <div className="mt-1 w-[62%] border-t border-black" />
              </div>

              <div className="relative z-10 my-auto space-y-1 py-1">
                {experiences.slice(0, 3).map((exp) => (
                  <div key={exp.id} className="border border-black bg-[#C5AC4F]/90">
                    <div className="px-2 py-0.5 border-b border-black flex items-center justify-between gap-2">
                      <span className="font-mono-tech font-extrabold text-[7.5px] tracking-[0.1em] text-black truncate">
                        {exp.company}
                      </span>
                      <span className="font-mono-tech font-extrabold text-[7.5px] tracking-[0.1em] text-black shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="px-2 py-0.5 text-[8.8px] font-medium text-[#202523] leading-tight truncate">
                      {exp.role}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex items-center justify-between font-mono-tech text-[6.8px] tracking-[0.05em] text-black uppercase shrink-0">
                <span>HISTÓRICO PROFISSIONAL COMPLETO</span>
                <span className="font-semibold">VER MAIS →</span>
              </div>
            </Link>
          </div>
        </div>

        {/* =====================================================================
            HOME DESKTOP (md+) — Fiel ao frame "desktop página inicial" do Figma
            100% contida em 100dvh sem precisar rolar
           ===================================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 lg:gap-5 flex-1 min-h-0">
          {/* COLUNA ESQUERDA (4 cols): INFO (#F1E3D8) no topo + IMG (#BB5A4B) com cabelo sobrepondo */}
          <div className="md:col-span-4 min-h-0 grid grid-rows-[auto_minmax(0,1fr)] gap-3 lg:gap-3.5 relative">
            {/* CARD INFO DESKTOP */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative z-10"
            >
              <div
                role="link"
                tabIndex={0}
                onClick={() => navigate('/informacoes')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate('/informacoes');
                }}
                className="group figma-card-texture rounded-[25px] bg-[#F1E3D8] text-[#202523] px-5 pt-4 pb-3 lg:px-6 lg:pt-5 lg:pb-3.5 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="relative z-10">
                  {/* BRUNO VIANA */}
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <h1 className="font-display font-extrabold text-[clamp(1.65rem,3.1vh,2.15rem)] leading-none uppercase text-[#202523] tracking-tight">
                      {profile.firstName}
                    </h1>
                    <span className="font-display font-extrabold text-[clamp(1.1rem,2.1vh,1.42rem)] leading-none uppercase text-[#202523] tracking-tight">
                      {profile.lastName}
                    </span>
                  </div>

                  {/* Subtítulo */}
                  <p className="text-[13px] lg:text-[15.5px] font-extrabold text-[#202523] mt-1.5 leading-tight tracking-tight">
                    {profile.roleSubtitle}
                  </p>

                  {/* Tabela conectada de 1px preta: LOCALIZAÇÃO + REDES */}
                  <div className="mt-2.5 border border-black">
                    {/* Caixa 1: LOCALIZAÇÃO */}
                    <div className="px-3 py-1.5 lg:py-2 border-b border-black">
                      <span className="block font-mono-tech font-extrabold text-[11px] lg:text-[13px] tracking-[0.11em] uppercase text-[#BB5A4B] leading-none">
                        LOCALIZAÇÃO
                      </span>
                      <span className="block text-xs lg:text-[15.5px] font-medium text-[#202523] leading-tight mt-1">
                        {profile.location}
                      </span>
                    </div>

                    {/* Caixa 2: REDES */}
                    <div className="px-3 py-1.5 lg:py-2">
                      <span className="block font-mono-tech font-extrabold text-[11px] lg:text-[13px] tracking-[0.11em] uppercase text-[#BB5A4B] leading-none">
                        REDES
                      </span>

                      <div className="mt-1.5 flex items-center gap-5 lg:gap-7 flex-wrap">
                        <a
                          href={profile.socials.behanceUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 hover:opacity-75 transition-opacity"
                        >
                          <BehanceBadge className="w-7 h-7 lg:w-[34px] lg:h-[34px] text-sm lg:text-base" />
                          <span className="text-[11px] lg:text-xs font-medium text-[#202523]">
                            {profile.socials.behanceHandle}
                          </span>
                        </a>

                        <a
                          href={profile.socials.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 hover:opacity-75 transition-opacity"
                        >
                          <LinkedInBadge className="w-7 h-7 lg:w-[34px] lg:h-[34px] text-sm lg:text-base" />
                          <span className="text-[11px] lg:text-xs font-medium text-[#202523]">
                            {profile.socials.linkedinHandle}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Rodapé CURRÍCULO, SKILLS & CONTATO | ABRIR INFO → */}
                  <div className="mt-2.5 flex items-center justify-between font-mono-tech text-[10px] lg:text-[11.5px] tracking-[0.05em] text-black uppercase">
                    <span>CURRÍCULO, SKILLS & CONTATO</span>
                    <span className="group-hover:translate-x-0.5 transition-transform shrink-0">
                      ABRIR INFO →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD IMG DESKTOP (#BB5A4B) com o topo do cabelo vazando sobre o gap/Info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="relative min-h-0 z-20"
            >
              <Link
                to="/informacoes"
                aria-label="Ver informações completas de Bruno Viana"
                className="group block relative w-full h-full min-h-0 rounded-[25px] bg-[#BB5A4B] figma-card-texture overflow-visible"
              >
                {/* Wrapper que recorta perfeitamente a base e lateral direita em 25px, mas permite o cabelo sair 38px acima do topo! */}
                <div className="absolute -top-[36px] inset-x-0 bottom-0 rounded-b-[25px] overflow-hidden z-20 pointer-events-none">
                  <img
                    src={profile.desktopIllustration}
                    alt="Ilustração autoral de Bruno Viana"
                    className="absolute right-0 top-0 h-[116%] w-auto max-w-none object-contain object-right-top transition-transform duration-500 group-hover:scale-[1.025] origin-bottom-right"
                  />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* COLUNA DIREITA (8 cols): PROJETOS (43%) no topo + EDUCAÇÃO & EXPERIÊNCIAS (57%) embaixo */}
          <div className="md:col-span-8 min-h-0 grid grid-rows-[minmax(0,43fr)_minmax(0,57fr)] gap-4 lg:gap-5">
            {/* CARD PROJETOS DESKTOP (#DBAB73) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.04 }}
              className="min-h-0 flex"
            >
              <Link
                to="/projetos"
                className="group w-full h-full min-h-0 figma-card-texture rounded-[25px] bg-[#DBAB73] text-[#202523] px-6 py-5 lg:px-8 lg:py-6 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h2 className="font-display font-extrabold text-[clamp(2.15rem,5.2vh,3.25rem)] leading-[1.02] uppercase tracking-wide text-[#202523]">
                      PROJETOS
                    </h2>
                    <p className="text-sm lg:text-[17px] font-extrabold text-[#202523] mt-2 lg:mt-3 max-w-[390px] leading-[1.12]">
                      {profile.projectsSubtitle}
                    </p>
                  </div>

                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ProjectsArrowBox className="w-[74px] h-[74px] lg:w-[98px] lg:h-[96px]" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-3">
                  <div className="border-t border-black mb-3 lg:mb-4" />

                  {/* Fileira de 6 miniaturas quadradas sobrepostas (fiel ao Figma) */}
                  <div className="flex items-center -space-x-2">
                    {projects.slice(0, 6).map((proj) => (
                      <div
                        key={proj.id}
                        title={proj.title}
                        className="w-[52px] h-[52px] lg:w-[63px] lg:h-[62px] rounded-[12px] bg-[#171717] p-[2.5px] overflow-hidden shadow-md border border-black/50 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 hover:!scale-110 hover:z-20"
                      >
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          className="w-full h-full object-cover rounded-[9.5px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* LINHA INFERIOR DIREITA: EDUCAÇÃO (#8A9E88 à esquerda) + EXPERIÊNCIAS (#E0C45B à direita) */}
            <div className="min-h-0 grid grid-cols-12 gap-4 lg:gap-5">
              {/* CARD EDUCAÇÃO DESKTOP (6 cols — Verde #8A9E88) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.09 }}
                className="col-span-6 min-h-0 flex"
              >
                <Link
                  to="/informacoes#educacao"
                  className="group w-full h-full min-h-0 figma-card-texture rounded-[25px] bg-[#8A9E88] text-[#202523] flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="relative z-10 px-5 pt-5 lg:px-6 lg:pt-6 shrink-0">
                    <h2 className="font-display font-extrabold text-[clamp(1.25rem,2.7vh,1.62rem)] uppercase leading-tight text-[#202523]">
                      EDUCAÇÃO
                    </h2>
                    <div className="mt-2 border-t border-black w-[92%]" />
                  </div>

                  <div className="relative z-10 px-4 lg:px-5 my-auto py-2 flex flex-col justify-evenly gap-2.5 flex-1 min-h-0">
                    {education.map((edu) => (
                      <div
                        key={edu.id}
                        className="border border-black bg-[#839482]/85 transition-colors group-hover:bg-[#839482]"
                      >
                        <div className="px-3 py-1.5 border-b border-black flex items-end justify-between gap-2">
                          <span className="font-mono-tech font-extrabold text-[11px] lg:text-[13.5px] leading-[1.08] tracking-[0.09em] text-black">
                            {edu.institutionLines ? (
                              <>
                                {edu.institutionLines[0]}
                                <br />
                                {edu.institutionLines[1]}
                              </>
                            ) : (
                              edu.institution
                            )}
                          </span>
                          <span className="font-mono-tech font-extrabold text-[11px] lg:text-[13.5px] leading-none tracking-[0.09em] text-black shrink-0">
                            {edu.period}
                          </span>
                        </div>
                        <div className="px-3 py-2 lg:py-2.5 text-xs lg:text-[15.5px] font-medium text-[#202523] leading-snug">
                          {edu.degree}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Linha sangrada + VER MAIS → à direita */}
                  <div className="relative z-10 border-t border-black px-5 py-2 lg:px-6 lg:py-2.5 flex items-center justify-end font-mono-tech text-[11px] lg:text-xs tracking-[0.05em] text-black uppercase shrink-0">
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      VER MAIS →
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* CARD EXPERIÊNCIAS DESKTOP (6 cols — Amarelo #E0C45B) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.13 }}
                className="col-span-6 min-h-0 flex"
              >
                <Link
                  to="/informacoes#experiencia"
                  className="group w-full h-full min-h-0 figma-card-texture rounded-[25px] bg-[#E0C45B] text-[#202523] flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="relative z-10 px-5 pt-5 lg:px-6 lg:pt-6 shrink-0">
                    <h2 className="font-display font-extrabold text-[clamp(1.25rem,2.7vh,1.62rem)] uppercase leading-tight text-[#202523]">
                      EXPERIÊNCIAS
                    </h2>
                    <div className="mt-2 border-t border-black w-[92%]" />
                  </div>

                  <div className="relative z-10 px-4 lg:px-5 my-auto py-2 flex flex-col justify-evenly gap-2 flex-1 min-h-0">
                    {experiences.slice(0, 3).map((exp) => (
                      <div
                        key={exp.id}
                        className="border border-black bg-[#C5AC4F]/85 transition-colors group-hover:bg-[#C5AC4F]"
                      >
                        <div className="px-3 py-1 border-b border-black flex items-center justify-between gap-2">
                          <span className="font-mono-tech font-extrabold text-[11px] lg:text-[13.5px] leading-none tracking-[0.1em] text-black truncate">
                            {exp.company}
                          </span>
                          <span className="font-mono-tech font-extrabold text-[11px] lg:text-[13.5px] leading-none tracking-[0.1em] text-black shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <div className="px-3 py-1.5 text-xs lg:text-[15px] font-medium text-[#202523] leading-tight truncate">
                          {exp.role}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Linha sangrada + HISTÓRICO PROFISSIONAL COMPLETO | VER MAIS → */}
                  <div className="relative z-10 border-t border-black px-5 py-2 lg:px-6 lg:py-2.5 flex items-center justify-between gap-2 font-mono-tech text-[10px] lg:text-[11.5px] tracking-[0.04em] text-black uppercase shrink-0">
                    <span className="truncate">HISTÓRICO PROFISSIONAL COMPLETO</span>
                    <span className="group-hover:translate-x-0.5 transition-transform shrink-0">
                      VER MAIS →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
