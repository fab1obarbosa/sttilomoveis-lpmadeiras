import { useMemo, useState } from "react";

import { SectionIntro } from "@/components/SectionIntro";
import { woodTypes } from "@/data/siteContent";

export const WoodTypes = () => {
  const [activeMaterialId, setActiveMaterialId] = useState(woodTypes[0].id);

  const activeMaterial = useMemo(
    () => woodTypes.find((material) => material.id === activeMaterialId) ?? woodTypes[0],
    [activeMaterialId],
  );

  const ActiveIcon = activeMaterial.icon;

  return (
    <section className="section-shell section-soft" id="materiais">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Materiais"
              title={
                <>
                  Tipos de madeira para <span className="text-primary">diferentes objetivos</span>
                </>
              }
              description="Escolha o material ideal conforme o nivel de investimento, o ambiente de uso e a rotina de manutencao desejada."
              mobileCenter
            />

            <div className="mt-7 grid gap-3">
              {woodTypes.map((material) => {
                const Icon = material.icon;
                const isActive = material.id === activeMaterial.id;

                return (
                  <button
                    key={material.id}
                    type="button"
                    onClick={() => setActiveMaterialId(material.id)}
                    className={`flex items-center justify-between rounded-[1.35rem] border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary/35 bg-primary/10 shadow-[0_18px_40px_-26px_hsl(25_100%_55%_/_0.75)]"
                        : "border-white/10 bg-white/5 hover:border-primary/25 hover:bg-white/8"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${isActive ? "bg-primary text-slate-950" : "bg-white/6 text-primary"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground">{material.name}</p>
                        <p className="text-sm text-muted-foreground">{material.indication}</p>
                      </div>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isActive ? "bg-primary text-slate-950" : "bg-white/6 text-slate-300"}`}>
                      {material.levelLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex h-full items-center">
            <div key={activeMaterial.id} className="premium-card-soft animate-fade-in w-full rounded-[2rem] p-8 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="section-eyebrow">Material selecionado</p>
                  <h3 className="mt-3 flex items-center gap-3 text-3xl font-semibold text-foreground">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-slate-950">
                      <ActiveIcon className="h-6 w-6" />
                    </span>
                    {activeMaterial.name}
                  </h3>
                </div>
                <div className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Indicacao: {activeMaterial.indication}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Nivel</span>
                  <span>{activeMaterial.levelLabel}</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary/70 via-primary to-orange-300 transition-all duration-500"
                    style={{ width: `${activeMaterial.levelValue}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs uppercase tracking-[0.22em] text-slate-400">
                  <span>Entrada</span>
                  <span>Premium</span>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">{"DESCRI\u00c7\u00c3O"}</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{activeMaterial.description}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">DURABILIDADE</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{activeMaterial.durability}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">{"MANUTEN\u00c7\u00c3O"}</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{activeMaterial.maintenance}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">GARANTIA</p>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{activeMaterial.warranty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
