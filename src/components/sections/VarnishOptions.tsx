import { SectionIntro } from "@/components/SectionIntro";
import { varnishOptions } from "@/data/siteContent";

export const VarnishOptions = () => {
  const duplicatedOptions = [...varnishOptions, ...varnishOptions];

  return (
    <section className="section-shell">
      <div className="container">
        <SectionIntro
          eyebrow="Acabamentos"
          title={
            <>
              {"Opções de verniz para compor o "}
              <span className="text-primary">{"visual ideal"}</span>
            </>
          }
          description="Escolha tonalidades que conversem com a arquitetura do ambiente e reforcem a proposta estética do seu projeto."
          align="center"
        />

        <div className="varnish-marquee mt-12 md:hidden">
          <div className="varnish-row varnish-row-forward">
            {duplicatedOptions.map((option, index) => (
              <div
                key={`${option.name}-forward-${index}`}
                className="varnish-card relative overflow-hidden rounded-[1.35rem] border border-white/10 p-2"
              >
                <div
                  className="h-24 rounded-[1rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                  style={{ backgroundColor: option.hex }}
                />
                <div className="mt-2 rounded-[0.95rem] bg-slate-950/78 px-3 py-2 text-center text-xs font-medium text-white backdrop-blur">
                  {option.name}
                </div>
              </div>
            ))}
          </div>

          <div className="varnish-row varnish-row-reverse mt-4">
            {duplicatedOptions.map((option, index) => (
              <div
                key={`${option.name}-reverse-${index}`}
                className="varnish-card relative overflow-hidden rounded-[1.35rem] border border-white/10 p-2"
              >
                <div
                  className="h-24 rounded-[1rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                  style={{ backgroundColor: option.hex }}
                />
                <div className="mt-2 rounded-[0.95rem] bg-slate-950/78 px-3 py-2 text-center text-xs font-medium text-white backdrop-blur">
                  {option.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid lg:grid-cols-5 xl:grid-cols-9">
          {varnishOptions.map((option) => (
            <div
              key={option.name}
              className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div
                className="h-28 rounded-[1rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-[1.04]"
                style={{ backgroundColor: option.hex }}
              />

              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[0.95rem] bg-slate-950/78 px-3 py-2 text-center text-xs font-medium text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                {option.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
