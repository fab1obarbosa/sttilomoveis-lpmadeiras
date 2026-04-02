import {
  BadgeCheck,
  Fence,
  GalleryVerticalEnd,
  Hammer,
  Home,
  Landmark,
  Leaf,
  MapPinned,
  Palette,
  PanelsTopLeft,
  ShieldCheck,
  Trees,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

export const whatsappPhone = "5547991190524";

export const socialLinks = {
  instagram: "https://www.instagram.com/sttilo.moveis/",
  facebook: "https://www.facebook.com/sttilomoveismdf",
};

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "Pergolados",
    description:
      "Estruturas elegantes para valorizar \u00e1reas gourmet, jardins e espa\u00e7os de conviv\u00eancia.",
    icon: PanelsTopLeft,
  },
  {
    title: "Decks",
    description:
      "Projetos para piscinas, sacadas e \u00e1reas de lazer com acabamento t\u00e9cnico e visual premium.",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Cercas e Port\u00f5es",
    description:
      "Solu\u00e7\u00f5es que combinam seguran\u00e7a, presen\u00e7a arquitet\u00f4nica e durabilidade no dia a dia.",
    icon: Fence,
  },
  {
    title: "Acabamento de Spas e Banheiras",
    description:
      "Revestimentos e acabamentos planejados para spas e banheiras com visual sofisticado, resist\u00eancia e acabamento profissional.",
    icon: Waves,
  },
  {
    title: "Projetos Personalizados",
    description:
      "Execu\u00e7\u00f5es sob medida para resid\u00eancias, com\u00e9rcios e espa\u00e7os que pedem solu\u00e7\u00e3o exclusiva.",
    icon: Hammer,
  },
  {
    title: "Ripados Internos e Externos",
    description:
      "Ripados sob medida para ambientes internos e externos, valorizando paredes, fachadas e detalhes decorativos com eleg\u00e2ncia.",
    icon: Home,
  },
];

type GalleryImage = { title: string; image: string };
type GalleryCategory = { id: string; label: string; images: GalleryImage[] };

export const galleryCategories: GalleryCategory[] = [
  {
    id: "pergolados",
    label: "Pergolados",
    images: [
      { title: "Pergolado 01", image: `${assetBase}photos_uploads/1.JPG` },
      { title: "Pergolado 02", image: `${assetBase}photos_uploads/2.JPG` },
      { title: "Pergolado 03", image: `${assetBase}photos_uploads/3.png` },
      { title: "Pergolado 04", image: `${assetBase}photos_uploads/4.JPG` },
    ],
  },
  {
    id: "decks",
    label: "Decks",
    images: [
      { title: "Deck 01", image: `${assetBase}photos_uploads/5.png` },
      { title: "Deck 02", image: `${assetBase}photos_uploads/6.JPG` },
      { title: "Deck 03", image: `${assetBase}photos_uploads/7.jpg` },
      { title: "Deck 04", image: `${assetBase}photos_uploads/8.jpg` },
    ],
  },
  {
    id: "cercas",
    label: "Cercas",
    images: [
      { title: "Cerca 01", image: `${assetBase}photos_uploads/9.JPG` },
      { title: "Cerca 02", image: `${assetBase}photos_uploads/10.JPG` },
      { title: "Cerca 03", image: `${assetBase}photos_uploads/11.JPG` },
      { title: "Cerca 04", image: `${assetBase}photos_uploads/12.JPG` },
    ],
  },
  {
    id: "spas",
    label: "Acabamentos para Spas",
    images: [
      { title: "Spa 01", image: `${assetBase}photos_uploads/13.jpg` },
      { title: "Spa 02", image: `${assetBase}photos_uploads/14.jpg` },
      { title: "Spa 03", image: `${assetBase}photos_uploads/15.jpg` },
      { title: "Spa 04", image: `${assetBase}photos_uploads/16.JPG` },
    ],
  },
  {
    id: "ripados",
    label: "Ripados",
    images: [
      { title: "Ripado 01", image: `${assetBase}photos_uploads/19.jpg` },
      { title: "Ripado 02", image: `${assetBase}photos_uploads/21.jpg` },
      { title: "Ripado 03", image: `${assetBase}photos_uploads/22.jpg` },
      { title: "Ripado 04", image: `${assetBase}photos_uploads/23.jpg` },
    ],
  },
  {
    id: "personalizados",
    label: "Projetos Personalizados",
    images: [
      { title: "Projeto Personalizado 01", image: `${assetBase}photos_uploads/17.png` },
      { title: "Projeto Personalizado 02", image: `${assetBase}photos_uploads/18.png` },
      { title: "Projeto Personalizado 03", image: `${assetBase}photos_uploads/24.jpg` },
      { title: "Projeto Personalizado 04", image: `${assetBase}photos_uploads/20.jfif` },
    ],
  },
];

type MaterialItem = {
  id: string;
  name: string;
  icon: LucideIcon;
  indication: string;
  levelLabel: string;
  levelValue: number;
  description: string;
  durability: string;
  maintenance: string;
  warranty: string;
};

export const woodTypes: MaterialItem[] = [
  {
    id: "pinus",
    name: "Pinus Tratado",
    icon: Trees,
    indication: "Principalmente externo",
    levelLabel: "Entrada",
    levelValue: 24,
    description:
      "Alternativa econ\u00f4mica para projetos externos que pedem boa apresenta\u00e7\u00e3o e custo inicial mais acess\u00edvel.",
    durability: "Boa durabilidade com tratamento adequado e uso correto.",
    maintenance:
      "Pede manuten\u00e7\u00e3o preventiva peri\u00f3dica para preservar apar\u00eancia e desempenho.",
    warranty: "A garantia varia conforme o tipo de projeto e acabamento aplicado.",
  },
  {
    id: "angelin",
    name: "Angelin Pedra",
    icon: Landmark,
    indication: "Interno e externo",
    levelLabel: "Intermedi\u00e1rio",
    levelValue: 52,
    description:
      "Madeira natural conhecida pela resist\u00eancia, muito usada quando o projeto exige mais robustez e presen\u00e7a visual.",
    durability: "Alta resist\u00eancia estrutural e \u00f3timo comportamento em \u00e1reas externas.",
    maintenance:
      "Recomend\u00e1vel manuten\u00e7\u00e3o peri\u00f3dica para preservar cor e prote\u00e7\u00e3o de superf\u00edcie.",
    warranty: "Aplicada conforme especifica\u00e7\u00e3o do projeto e condi\u00e7\u00f5es de uso.",
  },
  {
    id: "grapia",
    name: "Grapia",
    icon: ShieldCheck,
    indication: "Interno e externo",
    levelLabel: "Premium",
    levelValue: 78,
    description:
      "Madeira de lei com visual sofisticado e excelente performance para projetos que priorizam durabilidade e acabamento refinado.",
    durability: "Muito alta, inclusive em aplica\u00e7\u00f5es exigentes.",
    maintenance:
      "Baixa a moderada, dependendo da exposi\u00e7\u00e3o e do acabamento escolhido.",
    warranty:
      "Definida conforme o escopo e a solu\u00e7\u00e3o t\u00e9cnica adotada no projeto.",
  },
  {
    id: "ecologica",
    name: "Madeira Ecol\u00f3gica",
    icon: Leaf,
    indication: "Interno e externo",
    levelLabel: "Premium",
    levelValue: 88,
    description:
      "Op\u00e7\u00e3o moderna com excelente custo-benef\u00edcio ao longo do tempo, ideal para quem quer durabilidade com baixa manuten\u00e7\u00e3o.",
    durability: "Durabilidade fornecida pela f\u00e1brica de at\u00e9 50 anos.",
    maintenance:
      "Manuten\u00e7\u00e3o quase zero, sem necessidade de lixar ou envernizar, com alta resist\u00eancia \u00e0 temperatura e ao tempo.",
    warranty:
      "Garantia de 10 anos fornecida pela f\u00e1brica para projetos com madeira ecol\u00f3gica.",
  },
];

export const testimonials = [
  {
    name: "Marina Azevedo",
    role: "Cliente residencial",
    content:
      "A Sttilo conduziu todo o projeto com muito cuidado. O resultado ficou sofisticado, funcional e exatamente como imagin\u00e1vamos.",
    rating: 5,
    avatar: "MA",
  },
  {
    name: "Carlos Henrique",
    role: "Propriet\u00e1rio de \u00e1rea de lazer",
    content:
      "O acabamento do deck e da estrutura externa surpreendeu. Atendimento claro, execu\u00e7\u00e3o organizada e entrega muito confi\u00e1vel.",
    rating: 5,
    avatar: "CH",
  },
  {
    name: "Renata Lopes",
    role: "Arquiteta parceira",
    content:
      "Fizeram a entrega do meu pergolado no dia com muito profissionalismo e cuidado e ficou simplemente lindo com a telha que recomendaram",
    rating: 5,
    avatar: "RL",
  },
];

export const benefits = [
  {
    icon: BadgeCheck,
    title: "Qualidade dos materiais",
    description:
      "Indicamos o material mais adequado para cada ambiente, pensando em est\u00e9tica, resist\u00eancia e durabilidade.",
  },
  {
    icon: Palette,
    title: "Acabamento profissional",
    description:
      "Cada projeto recebe aten\u00e7\u00e3o especial em pagina\u00e7\u00e3o, tonalidade, montagem e apresenta\u00e7\u00e3o final.",
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    description:
      "Escutamos o seu espa\u00e7o, a sua rotina e o seu objetivo para propor a melhor solu\u00e7\u00e3o poss\u00edvel.",
  },
  {
    icon: Hammer,
    title: "Projetos sob medida",
    description:
      "Nada engessado: desenvolvemos estruturas adaptadas ao estilo e \u00e0s medidas do seu ambiente.",
  },
  {
    icon: ShieldCheck,
    title: "Equipe especializada",
    description:
      "Trabalhamos com vis\u00e3o t\u00e9cnica e experi\u00eancia pr\u00e1tica para orientar desde a escolha at\u00e9 a entrega.",
  },
  {
    icon: MapPinned,
    title: "Entrega confi\u00e1vel",
    description:
      "Processo organizado, comunica\u00e7\u00e3o clara e compromisso com prazos e qualidade de execu\u00e7\u00e3o.",
  },
];

export const varnishOptions = [
  { name: "Preto", hex: "#1a1a1a" },
  { name: "Branco", hex: "#f2efe8" },
  { name: "Cedro", hex: "#9e5d32" },
  { name: "Ip\u00ea", hex: "#6d4527" },
  { name: "Mogno", hex: "#7a3b29" },
  { name: "Imb\u00faia", hex: "#5b3a27" },
  { name: "Castanheira", hex: "#8b5a34" },
  { name: "Canela", hex: "#a36a3f" },
  { name: "UV Gold / Semitransparente", hex: "#d4aa63" },
];



