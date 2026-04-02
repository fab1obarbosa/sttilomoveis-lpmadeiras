import { useEffect, useState } from "react";
import { ExternalLink, Instagram } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { galleryCategories, socialLinks } from "@/data/siteContent";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0]);

  useEffect(() => {
    const seen = new Set<string>();

    galleryCategories.forEach((category) => {
      category.images.forEach((item) => {
        if (seen.has(item.image)) return;
        seen.add(item.image);
        const image = new Image();
        image.src = item.image;
      });
    });
  }, []);

  return (
    <section className="section-shell section-deep pt-10 md:pt-12" id="projetos">
      <div className="container">
        <SectionIntro
          eyebrow="Portfólio"
          title="Alguns de Nossos Trabalhos"
          description="Explore alguns dos projetos que já transformaram espaços de nossos clientes."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                activeCategory.id === category.id
                  ? "border-primary bg-primary text-slate-950 shadow-[0_12px_28px_-16px_hsl(25_100%_55%_/_0.75)]"
                  : "border-white/10 bg-white/6 text-slate-200 hover:border-primary/35 hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {activeCategory.images.map((item, index) => (
            <article
              key={`${activeCategory.id}-${item.title}`}
              className="group animate-fade-in overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/6 shadow-[0_12px_35px_-24px_rgba(0,0,0,0.7)]"
              style={{ animationDelay: `${index * 20}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="premium-card-soft mt-10 flex flex-col gap-5 rounded-[1.9rem] p-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-2xl font-semibold text-foreground">Deseja ver mais opções de projetos?</p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">
              Acompanhe novas entregas nas redes sociais ou fale com a nossa equipe para receber referências e ideias
              para o seu espaço.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#ffffff1f] bg-[linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)] px-6 text-white shadow-[0_12px_30px_-18px_rgba(252,175,69,0.7)] transition-all duration-300 hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
            >
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#ffffff1f] bg-[#1877F2] px-6 text-white shadow-[0_12px_30px_-18px_rgba(24,119,242,0.75)] transition-all duration-300 hover:border-sky-300 hover:bg-sky-300 hover:text-slate-950"
            >
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Facebook
              </a>
            </Button>
            <WhatsAppButton variant="primary" message={`Olá! Gostaria de ver mais referências de projetos da categoria ${activeCategory.label}.`}>
              WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};
