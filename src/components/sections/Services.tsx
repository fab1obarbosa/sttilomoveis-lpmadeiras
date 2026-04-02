import { SectionIntro } from "@/components/SectionIntro";
import { services } from "@/data/siteContent";

export const Services = () => {
  return (
    <section className="section-shell section-soft pb-10 md:pb-12" id="especialidades">
      <div className="container">
        <SectionIntro
          eyebrow="Especialidades"
          title={
            <>
              Projetos pensados para valorizar o <span className="text-primary">seu espaço</span>
            </>
          }
          description="Atuamos com estruturas em madeira para áreas internas e externas, equilibrando estética, funcionalidade e execução de alto padrão."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="premium-card-soft group rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/18">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
