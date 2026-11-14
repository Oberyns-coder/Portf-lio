import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SoftwareBadges } from './ProjectsPage';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = portfolioData;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    return <Navigate to="/projetos" replace />;
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen w-full bg-[#241616] text-white relative overflow-x-hidden pt-[92px] md:pt-[104px] pb-14 px-4 sm:px-7 lg:px-10">
      {/* Atmosfera sutil da capa do projeto ao fundo */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-20">
        <img
          src={project.coverImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-2xl scale-110"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* COLUNA ESQUERDA: Título, Ano, Softwares e narrativa estruturada do Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 space-y-6"
          >
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/75 hover:text-[#DBAB73] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Projetos</span>
            </Link>

            <div>
              <p className="text-sm text-white/80 tracking-wide mb-2">
                {project.tags.join('  /  ')}
              </p>

              <h1 className="font-sans font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.02]">
                {project.title}
              </h1>

              <p className="text-lg text-white/85 mt-2">{project.year}</p>

              <p className="text-base font-medium text-white/85 mt-3">{project.subtitle}</p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <SoftwareBadges tools={project.tools} size="md" />

                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DBAB73] text-[#171717] font-display font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all"
                  >
                    <span>Ver no Behance</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-white/65">
                {project.clientOrContext} • {project.role}
              </p>
            </div>

            {/* Indicadores Rápidos do Projeto */}
            <div className="grid grid-cols-3 gap-2.5">
              {project.highlights.map((hl) => (
                <div
                  key={hl.label}
                  className="rounded-xl bg-black/35 border border-white/12 p-3"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DBAB73]">
                    {hl.label}
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-white mt-1 leading-snug">
                    {hl.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Blocos Editoriais do Case Study */}
            <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-white/85 pt-1">
              <section className="rounded-2xl bg-black/30 border border-white/12 p-5">
                <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-[#DBAB73] mb-2">
                  O Desafio
                </h2>
                <p>{project.challenge}</p>
              </section>

              <section className="rounded-2xl bg-black/30 border border-white/12 p-5">
                <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-[#8A9E88] mb-2">
                  Processo & Solução
                </h2>
                <p>{project.approach}</p>
              </section>

              <section className="rounded-2xl bg-black/30 border border-white/12 p-5">
                <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-[#E0C45B] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Entregáveis & Resultado
                </h2>
                <p>{project.outcome}</p>
              </section>
            </div>
          </motion.div>

          {/* COLUNA DIREITA: Painel Visual amplo + Pranchas do Projeto */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.08 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative rounded-[16px] overflow-hidden border border-white/15 shadow-2xl bg-black/40">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-[320px] sm:h-[440px] lg:h-[520px] object-cover object-top"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.galleryCaptions.map((item, idx) => {
                const imgSrc = item.image ?? project.coverImage;
                const isCustomBoard = Boolean(item.image && item.image !== project.coverImage);

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl overflow-hidden border border-white/12 bg-black/30 flex flex-col"
                  >
                    <div className="h-56 overflow-hidden relative bg-black/40">
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                          isCustomBoard
                            ? 'object-top'
                            : idx === 0
                              ? 'object-left-top scale-115'
                              : 'object-right-bottom scale-115'
                        }`}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/70 mt-1 leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Próximo Projeto */}
            <Link
              to={`/projetos/${nextProject.slug}`}
              className="group block rounded-2xl border border-white/15 bg-black/30 hover:border-[#DBAB73] p-5 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                    Próximo Projeto →
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-white group-hover:text-[#DBAB73] transition-colors mt-1">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-0.5">{nextProject.subtitle}</p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#DBAB73] text-[#171717] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
