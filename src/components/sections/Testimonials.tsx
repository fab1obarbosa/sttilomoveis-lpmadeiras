import { ExternalLink, Star } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/siteContent";

const googleReviewsLink = "https://share.google/Ljv70RYQXYyWvO5hY";

export const Testimonials = () => {
  return (
    <section className="section-shell section-contrast">
      <div className="container">
        <SectionIntro
          eyebrow="Clientes satisfeitos"
          title={
            <>
              Quem escolhe a Sttilo <span className="text-primary">percebe a diferença</span>
            </>
          }
          description="Avaliações de clientes que confiaram na Sttilo Móveis para criar peças e projetos em diferentes tipos de madeira."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="premium-card animate-fade-in flex h-full flex-col rounded-[1.75rem] p-6 md:p-7"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="mt-6 flex-1 text-base leading-7 text-muted-foreground">
                "{testimonial.content}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="premium-card-soft mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] p-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-2xl font-semibold text-white">
              Quer ver mais pessoas que confiaram no nosso serviço?
            </p>
            <p className="mt-2 text-base leading-7 text-slate-300">
              Acesse nosso perfil do Google para conferir mais avaliações e experiências reais.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/30 bg-primary/10 px-7 text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-slate-950"
          >
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
              Ver perfil no Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
