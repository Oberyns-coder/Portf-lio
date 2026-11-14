import { Link, useLocation } from 'react-router-dom';

export function NavigationBar() {
  const { pathname } = useLocation();

  // Na Home (Página Inicial), o próprio Bento Grid ocupa 100% da tela sem barra superior
  if (pathname === '/') {
    return null;
  }

  const isProjetos = pathname.startsWith('/projetos');
  const isInfo = pathname.startsWith('/informacoes');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[62px] md:h-[74px] bg-[#DBAB73] figma-card-texture border-b border-black/25 shadow-md">
      <nav
        aria-label="Navegação principal"
        className="relative z-10 mx-auto max-w-[1380px] h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between text-[#171717]"
      >
        {/* Esquerda: Página Inicial */}
        <Link
          to="/"
          className="text-sm sm:text-base md:text-[20px] font-medium tracking-tight text-[#171717] hover:opacity-70 transition-opacity"
        >
          Página Inicial
        </Link>

        {/* Direita: Projetos + Informações */}
        <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
          <Link
            to="/projetos"
            className={`relative py-1 text-sm sm:text-base md:text-[20px] tracking-tight transition-opacity ${
              isProjetos
                ? 'font-bold text-[#171717] underline decoration-2 underline-offset-8'
                : 'font-medium text-[#171717]/85 hover:text-[#171717]'
            }`}
          >
            Projetos
          </Link>

          <Link
            to="/informacoes"
            className={`relative py-1 text-sm sm:text-base md:text-[20px] tracking-tight transition-opacity ${
              isInfo
                ? 'font-bold text-[#171717] underline decoration-2 underline-offset-8'
                : 'font-medium text-[#171717]/85 hover:text-[#171717]'
            }`}
          >
            Informações
          </Link>
        </div>
      </nav>
    </header>
  );
}
