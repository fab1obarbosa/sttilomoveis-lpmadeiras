import { socialLinks } from "@/data/siteContent";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container py-8">
        <div className="grid gap-5 text-sm text-slate-300 md:grid-cols-2 md:items-end">
          <div className="space-y-1.5">
            <p>Sttilo Móveis LTDA | 58.389.282/0001-40</p>
            <p>Rua Antonio Francisco Gomes, 141 Apt 402 | Perequê - Porto Belo-SC | 88210-000</p>
          </div>

          <div className="space-y-1.5 md:text-right">
            <p>+55 47 99119-0524 | sttilomoveis@gmail.com</p>
            <p>{`Porto Belo - SC | ${socialLinks.instagram.replace("https://www.instagram.com/", "@").replace(/\/$/, "")}`}</p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-500">
          © 2026 Sttilo Móveis. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
