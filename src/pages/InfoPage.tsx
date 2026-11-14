import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Check,
  Copy,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function InfoPage() {
  const { profile, experiences, education, skills } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.contact.email}`;
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#272727] pt-[88px] md:pt-[102px] pb-14 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1260px] space-y-6">
        {/* TOPO: Crachá Completo (#F1E3D8) + Contato Rápido (#BB5A4B) */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Card Identificação / Bio */}
          <div className="lg:col-span-8 figma-card-texture rounded-[25px] bg-[#F1E3D8] text-[#202523] p-6 sm:p-8 shadow-xl">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-black">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-none uppercase">
                    {profile.firstName}
                  </h1>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-none uppercase">
                    {profile.lastName}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-black/10 text-[#202523]">
                  <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
                  {profile.availability}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-base sm:text-lg font-extrabold text-[#202523]">
                  {profile.roleSubtitle}
                </p>
                <p className="text-sm sm:text-[15px] text-[#202523]/85 mt-3.5 leading-relaxed">
                  {profile.fullBio}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-black flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                  <MapPin className="w-4 h-4 text-[#BB5A4B]" />
                  <span>{profile.location}</span>
                </div>

                <a
                  href={profile.cvUrl}
                  download="Bruno-Viana-Curriculo.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] text-[#F1E3D8] font-display font-bold text-sm hover:bg-[#BB5A4B] hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Currículo (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card Contato Rápido */}
          <div className="lg:col-span-4 figma-card-texture rounded-[25px] bg-[#BB5A4B] text-[#FFF8F5] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-white/85">
                Redes & Contato
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold mt-2 leading-tight uppercase">
                Vamos criar algo juntos?
              </h2>
            </div>

            <div className="relative z-10 mt-6 space-y-2.5">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full rounded-xl bg-[#171717] text-white px-4 py-3 text-left flex items-center justify-between hover:bg-black transition-colors cursor-pointer"
              >
                <div className="min-w-0">
                  <span className="block text-[10px] font-semibold text-[#E0C45B] uppercase tracking-wider">
                    {copied ? 'E-mail copiado!' : 'E-mail (clique para copiar)'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold truncate block">
                    {profile.contact.email}
                  </span>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-white/70 shrink-0" />
                )}
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {[
                  { label: `Be • ${profile.socials.behanceHandle}`, href: profile.socials.behanceUrl },
                  { label: `in • ${profile.socials.linkedinHandle}`, href: profile.socials.linkedinUrl },
                  { label: `WhatsApp • ${profile.contact.phone}`, href: profile.contact.whatsapp },
                  { label: 'Baixar CV (PDF)', href: profile.cvUrl },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-[#171717]/35 hover:bg-[#171717]/60 border border-black/30 px-3 py-2.5 text-xs font-bold flex items-center justify-between gap-1 transition-colors"
                  >
                    <span className="truncate">{social.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-85 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* BENTO GRID EQUILIBRADO:
            Coluna Esquerda (5 cols): EDUCAÇÃO (#8A9E88) + SKILLS & FERRAMENTAS (#DBAB73) empilhados
            Coluna Direita (7 cols): EXPERIÊNCIAS (#E0C45B) com histórico completo sem gerar vazio ao lado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* COLUNA ESQUERDA: EDUCAÇÃO + SKILLS & FERRAMENTAS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* EDUCAÇÃO */}
            <motion.section
              id="educacao"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="figma-card-texture rounded-[25px] bg-[#8A9E88] text-[#202523] p-6 sm:p-7 shadow-xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 pb-3 border-b border-black">
                  <GraduationCap className="w-6 h-6" />
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                    Educação
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="border border-black bg-[#839482]/90">
                      <div className="px-4 py-2 border-b border-black flex items-center justify-between gap-2">
                        <span className="font-mono-tech font-extrabold text-xs sm:text-sm tracking-[0.06em] text-black">
                          {edu.institution}
                        </span>
                        <span className="font-mono-tech font-extrabold text-xs sm:text-sm tracking-[0.06em] text-black shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-base sm:text-lg text-[#202523]">{edu.degree}</h3>
                        <p className="text-xs sm:text-sm text-[#202523]/85 mt-1.5 leading-relaxed">
                          {edu.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* SKILLS & FERRAMENTAS — Preenche a coluna esquerda equilibrando com Experiências */}
            <motion.section
              id="skills"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex-1 figma-card-texture rounded-[25px] bg-[#DBAB73] text-[#202523] p-6 sm:p-7 shadow-xl flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 pb-3 border-b border-black">
                  <Sparkles className="w-5 h-5" />
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                    Skills & Ferramentas
                  </h2>
                </div>

                <div className="mt-5 space-y-3.5">
                  {skills.map((group) => (
                    <div key={group.category} className="border border-black bg-[#C99B64]/85">
                      <div className="px-3.5 py-1.5 border-b border-black">
                        <h3 className="font-mono-tech font-extrabold text-xs sm:text-sm uppercase tracking-[0.08em] text-black">
                          {group.category}
                        </h3>
                      </div>

                      <div className="p-3 flex flex-wrap gap-1.5">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#171717] text-[#F1E3D8]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* COLUNA DIREITA: EXPERIÊNCIAS (#E0C45B) */}
          <motion.section
            id="experiencia"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.09 }}
            className="lg:col-span-7 figma-card-texture rounded-[25px] bg-[#E0C45B] text-[#202523] p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 pb-3 border-b border-black">
                <Briefcase className="w-6 h-6" />
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  Experiências
                </h2>
              </div>

              <div className="mt-5 space-y-3.5">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border border-black bg-[#C5AC4F]/90">
                    <div className="px-4 py-1.5 border-b border-black flex items-center justify-between gap-2">
                      <span className="font-mono-tech font-extrabold text-xs sm:text-sm tracking-[0.08em] text-black">
                        {exp.company}
                      </span>
                      <span className="font-mono-tech font-extrabold text-xs sm:text-sm tracking-[0.08em] text-black shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="p-3.5">
                      <p className="font-bold text-sm sm:text-base text-[#202523]">{exp.role}</p>
                      <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-[#202523]/90 leading-relaxed list-disc pl-4">
                        {exp.highlights.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
