import { ArrowRight } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const assetBase = import.meta.env.BASE_URL;
const heroImage = `${assetBase}photos_uploads/mainimage.jpg`;
const logoImage = `${assetBase}photos_uploads/logomain.png`;

export const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden pb-14 pt-20 md:pb-18 md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,145,77,0.14),transparent_24%)]" />
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-fade-in text-center lg:text-left">
            <img src={logoImage} alt="Logo da Sttilo Móveis" className="mx-auto block h-auto w-[7.5rem] lg:mx-0" />
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:mx-0 lg:text-6xl">
              Projetos em Madeira <span className="text-primary">Sob Medida</span> para Transformar{" "}
              <span className="text-primary">Seu Espaço</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Soluções completas para áreas internas e externas com qualidade, durabilidade e acabamento profissional.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
              <WhatsAppButton
                variant="hero"
                size="lg"
                message="Olá! Quero solicitar um orçamento para um projeto em madeira sob medida com a Sttilo Móveis."
              />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/15 bg-white/5 px-8 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <a href="#projetos">
                  Ver Projetos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-slide-in lg:mx-0 lg:max-w-none">
            <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-full border border-primary/20 lg:block" />
            <div className="absolute -bottom-10 right-12 hidden h-44 w-44 rounded-full bg-primary/12 blur-3xl lg:block" />
            <div className="premium-card-soft relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={heroImage}
                alt="Projeto em madeira para área externa"
                className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[520px]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/10 bg-slate-950/58 p-5 text-center backdrop-blur-md sm:inset-x-8 sm:bottom-8 lg:text-left">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">Projeto real</p>
                <p className="mt-2 text-xl font-medium text-white">Estruturas premium para valorizar ambientes internos e externos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
