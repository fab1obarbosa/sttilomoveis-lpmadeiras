import { ArrowRight } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export const FinalCTA = () => {
  return (
    <section className="section-shell section-soft">
      <div className="container">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(24,42,78,0.82),rgba(16,30,58,0.78))] px-8 py-14 shadow-[0_26px_70px_-40px_rgba(0,0,0,0.72)] backdrop-blur-xl md:px-12 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-eyebrow justify-center">Vamos conversar</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              {"Seu espaço pode ganhar "}
              <span className="text-primary">{"mais presença, conforto e valor"}</span>
              {" com o projeto certo"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              {"Fale com a Sttilo Móveis e receba uma proposta pensada para o seu ambiente, com atendimento próximo, orientação técnica e uma execução que transmite segurança do início ao fim."}
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                variant="final"
                size="lg"
                className="h-auto max-w-[15rem] whitespace-normal px-6 py-4 text-center leading-5 sm:max-w-none sm:px-10"
                message={"Olá! Quero solicitar um orçamento agora para transformar meu espaço com a Sttilo Móveis."}
              >
                {"Solicitar orçamento agora"}
                <ArrowRight className="h-4 w-4" />
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
