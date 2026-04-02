const aboutImage = `${import.meta.env.BASE_URL}photos_uploads/aboutyou.png`;

export const AboutBrand = () => {
  return (
    <section className="section-shell section-deep py-12 md:py-16" id="sobre">
      <div className="container">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="text-center lg:col-start-1 lg:text-left">
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:mx-0">
              {"Conhecendo a "}
              <span className="text-primary">{"Sttilo Móveis"}</span>
            </h2>
          </div>

          <div className="relative order-2 lg:order-none lg:col-start-2 lg:row-span-2 lg:justify-self-stretch">
            <div className="premium-card-soft relative mx-auto w-full max-w-[42rem] overflow-hidden rounded-[2rem] p-3 md:p-4 lg:max-w-none">
              <div className="rounded-[1.6rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-2">
                <img
                  src={aboutImage}
                  alt="Projeto Sttilo Móveis em execução"
                  className="h-[440px] w-full rounded-[1.35rem] object-cover object-[center_18%] md:h-[620px] lg:h-[700px]"
                />
              </div>

              <div className="absolute right-0 top-6 rounded-l-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),rgba(16,24,40,0.55))] px-5 py-4 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.78)] backdrop-blur-xl md:top-8 md:px-7 md:py-5">
                <p className="text-3xl font-semibold text-primary md:text-4xl">15+</p>
                <p className="mt-1 text-sm text-slate-100 md:text-base">{"Anos de experiência"}</p>
              </div>
            </div>
          </div>

          <div className="order-3 text-center lg:order-none lg:col-start-1 lg:text-left">
            <div className="space-y-7 text-lg leading-9 text-slate-300">
              <p>
                {"Na Sttilo Móveis, cada projeto em madeira é planejado para durar, valorizar o ambiente e entregar um acabamento profissional para áreas internas e externas."}
              </p>
              <p>
                {"Atuamos com soluções sob medida para pergolados, cercas, decks, spas, portões e projetos personalizados, sempre com leitura técnica e execução alinhada ao espaço de cada cliente."}
              </p>
              <p>
                {"Sediada em Porto Belo, a empresa atende a região com proximidade, compromisso e uma proposta de trabalho que une durabilidade, estética e segurança na entrega."}
              </p>
              <p>
                {"Oferecemos um serviço completo: entendemos a necessidade, levantamos medidas, orientamos a melhor solução, desenvolvemos o projeto e realizamos a instalação com cuidado em cada etapa."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
