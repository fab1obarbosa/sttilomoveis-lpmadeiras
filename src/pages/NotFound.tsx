import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="premium-card-soft w-full max-w-xl rounded-[2rem] p-8 text-center md:p-10">
        <p className="section-eyebrow justify-center">Pagina nao encontrada</p>
        <h1 className="mt-5 text-5xl font-semibold text-white md:text-6xl">404</h1>
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
          O endereco acessado nao existe ou foi alterado. Volte para a pagina inicial da Sttilo Moveis para continuar navegando.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:bg-primary/90"
          >
            Voltar para a pagina inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
