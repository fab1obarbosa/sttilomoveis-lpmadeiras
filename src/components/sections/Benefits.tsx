import { ArrowRight } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { benefits } from "@/data/siteContent";

export const Benefits = () => {
  return (
    <section className="section-shell section-deep">
      <div className="container">
        <SectionIntro
          eyebrow="Diferenciais"
          title={
            <>
              {"Por que escolher a "}
              <span className="text-primary">{"Sttilo M\u00f3veis"}</span>
            </>
          }
          description={
            "Nossa atua\u00e7\u00e3o combina leitura t\u00e9cnica, cuidado est\u00e9tico e compromisso com a melhor entrega para cada cliente."
          }
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.045] p-5 shadow-[0_18px_36px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/[0.07]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <div className="premium-card-soft mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] p-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-2xl font-semibold text-white">Seu projeto merece uma execução à altura.</p>
            <p className="mt-2 text-base leading-7 text-slate-300">
              Fale com a nossa equipe e receba uma orientação clara para tirar sua ideia do papel com mais segurança,
              presença e acabamento profissional.
            </p>
          </div>

          <WhatsAppButton
            variant="primary"
            className="px-8"
            message="Olá! Quero falar com a Sttilo Móveis sobre um projeto em madeira sob medida."
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
