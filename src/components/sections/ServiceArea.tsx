import type { CSSProperties } from "react";
import { MapPin } from "lucide-react";

import { SectionIntro } from "@/components/SectionIntro";

const mapImage = "/photos_uploads/mapa.png";

const serviceCities = [
  "Porto Belo",
  "Itapema",
  "Bombinhas",
  "Tijucas",
  "Balneário Camboriú",
  "Camboriú",
  "Itajaí",
  "Brusque",
  "Canelinha",
  "São João Batista",
  "Nova Trento",
  "Florianópolis",
  "São José",
  "Palhoça",
  "Biguaçu",
];

const cityPins = [
  { name: "Porto Belo", className: "left-[49%] top-[24%]", labelClass: "map-pill map-pill-primary", motionClass: "map-drift-a", delay: "0s" },
  { name: "Itapema", className: "left-[61%] top-[47%]", labelClass: "map-pill", motionClass: "map-drift-b", delay: "1.1s" },
  { name: "Bombinhas", className: "left-[48%] top-[64%]", labelClass: "map-pill", motionClass: "map-drift-c", delay: "2s" },
  { name: "Tijucas", className: "left-[28%] top-[47%]", labelClass: "map-pill", motionClass: "map-drift-a", delay: "0.7s" },
  { name: "Balneário Camboriú", className: "left-[42%] top-[74%]", labelClass: "map-pill", motionClass: "map-drift-b", delay: "1.6s" },
  { name: "Camboriú", className: "left-[34%] top-[31%]", labelClass: "map-pill", motionClass: "map-drift-c", delay: "2.3s" },
  { name: "Itajaí", className: "left-[20%] top-[43%]", labelClass: "map-pill", motionClass: "map-drift-b", delay: "0.4s" },
  { name: "Brusque", className: "left-[39%] top-[20%]", labelClass: "map-pill", motionClass: "map-drift-a", delay: "1.9s" },
  { name: "Canelinha", className: "left-[66%] top-[28%]", labelClass: "map-pill", motionClass: "map-drift-c", delay: "1.3s" },
  { name: "São João Batista", className: "left-[60%] top-[12%]", labelClass: "map-pill", motionClass: "map-drift-b", delay: "2.5s" },
  { name: "Nova Trento", className: "left-[66%] top-[61%]", labelClass: "map-pill", motionClass: "map-drift-a", delay: "1.2s" },
  { name: "Florianópolis", className: "left-[75%] top-[52%]", labelClass: "map-pill", motionClass: "map-drift-c", delay: "2.1s" },
  { name: "São José", className: "left-[57%] top-[83%]", labelClass: "map-pill", motionClass: "map-drift-b", delay: "0.9s" },
  { name: "Palhoça", className: "left-[14%] top-[72%]", labelClass: "map-pill", motionClass: "map-drift-a", delay: "1.7s" },
  { name: "Biguaçu", className: "left-[16%] top-[16%]", labelClass: "map-pill", motionClass: "map-drift-c", delay: "2.8s" },
];

export const ServiceArea = () => {
  return (
    <section className="section-shell section-soft" id="atendimento">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="order-2 premium-card-soft relative overflow-hidden rounded-[2rem] p-6 md:p-8 lg:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_76%_68%,rgba(255,145,77,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_34%)]" />

            <div className="relative z-10 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,32,60,0.78),rgba(10,20,42,0.9))] p-4 sm:p-5 md:p-6">
              <div className="absolute inset-4 rounded-[1.25rem] border border-white/6 sm:inset-5 md:inset-6 md:rounded-[1.4rem]" />

              <div className="relative mx-auto h-[240px] w-full max-w-[340px] rounded-[1.25rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)] sm:h-[300px] sm:max-w-[420px] md:h-[380px] md:max-w-[520px]">
                <img
                  src={mapImage}
                  alt="Mapa de atendimento da Sttilo"
                  className="h-full w-full object-contain opacity-[0.98] drop-shadow-[0_30px_56px_rgba(0,0,0,0.45)]"
                />
              </div>

              <div className="relative mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden">
                {serviceCities.slice(0, 8).map((city) => (
                  <span key={city} className="map-pill justify-center text-center">
                    <MapPin className="h-4 w-4" />
                    {city}
                  </span>
                ))}
              </div>

              <div className="relative mt-4 md:hidden">
                <p className="text-center text-xs leading-6 text-slate-300">
                  {"Atendemos diversas cidades da região. Fale com a equipe para confirmar disponibilidade no seu endereço."}
                </p>
              </div>

              <div className="hidden md:block">
                {cityPins.map((city) => (
                  <div
                    key={city.name}
                    className={`absolute ${city.className} ${city.motionClass} will-change-transform`}
                    style={{ animationDelay: city.delay } as CSSProperties}
                  >
                    <span className={city.labelClass}>
                      <MapPin className="h-4 w-4" />
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <SectionIntro
              eyebrow="Mapa de atendimento"
              title={
                <>
                  {"Atendemos Porto Belo e uma "}
                  <span className="text-primary">{"ampla região"}</span>
                  {" de Santa Catarina"}
                </>
              }
              description={
                "Levamos nossos projetos com qualidade e compromisso para diferentes cidades da região, sempre com atendimento próximo e acompanhamento em cada etapa."
              }
              mobileCenter
            />

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {serviceCities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm text-primary shadow-[0_12px_28px_-24px_rgba(255,145,77,0.55)] backdrop-blur-sm"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted-foreground lg:mx-0">
              Mora em outra cidade? Entre em contato e veja a disponibilidade de atendimento para sua casa!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
