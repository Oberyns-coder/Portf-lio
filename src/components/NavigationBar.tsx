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
    <header className="fixed top-0 left-0 right-0 z-50 h-[62px] md:h-[74px] bg-[#B98952] border-b border-black/25 shadow-md">
      <nav
        aria-label="Navegação principal"
        className="relative z-10 mx-auto max-w-[1380px] h-full px-4 sm:px-8 lg:px-14 flex items-center justify-between text-black font-mono-tech uppercase"
      >
        {/* Esquerda: PÁGINA INICIAL */}
        <Link
          to="/"
          className="text-sm sm:text-base md:text-[21px] font-normal tracking-wide text-black hover:opacity-70 transition-opacity"
        >
          PÁGINA INICIAL
        </Link>

        {/* Direita: PROJETOS + INFORMAÇÕES */}
        <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
          <Link
            to="/projetos"
            className={`relative py-1 text-sm sm:text-base md:text-[21px] tracking-wide transition-opacity ${
              isProjetos
                ? 'font-bold text-black underline decoration-2 underline-offset-8'
                : 'font-normal text-black/85 hover:text-black'
            }`}
          >
            PROJETOS
          </Link>

          <Link
            to="/informacoes"
            className={`relative py-1 text-sm sm:text-base md:text-[21px] tracking-wide transition-opacity ${
              isInfo
                ? 'font-bold text-black underline decoration-2 underline-offset-8'
                : 'font-normal text-black/85 hover:text-black'
            }`}
          >
            INFORMAÇÕES
          </Link>
        </div>
      </nav>
    </header>
  );
}
