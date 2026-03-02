import { SecondaryProject } from "@/types";

export const secondaryProjects: SecondaryProject[] = [
  {
    slug: "estante-plantas",
    title: "Estante de Plantas",
    description:
      "Minha primeira marcenaria pratica: uma estante para organizar plantas espalhadas e apertadas. Feita com ripas de Pinus e Saligna, resolvi espaco e estetica ao mesmo tempo, aprendendo bastante no processo.",
    category: "agroforest",
    tools: ["Pinus", "Saligna", "Marcenaria basica"],
    images: [
      "/secondary/e8.jpg",
      "/secondary/e7.jpg",
      "/secondary/e6.jpg",
      "/secondary/e5.jpg",
      "/secondary/e4.jpg",
      "/secondary/e3.jpg",
      "/secondary/e2.jpg",
      "/secondary/e1.jpg",
    ],
    status: "completo",
  },
  {
    slug: "bancada-plantas",
    title: "Bancada para Plantas",
    description:
      "Construi uma bancada grande para mexer nas minhas plantas de pe, resolvendo dores nas costas. Feita com ripas de Pinus e Saligna, serra circular e quase nenhuma experiencia previa, foi um projeto de aprendizado intenso e super bem-sucedido.",
    category: "agroforest",
    tools: ["Pinus", "Saligna", "Serra circular"],
    images: [
      "/secondary/m5.jpg",
      "/secondary/m4.jpg",
      "/secondary/m3.jpg",
      "/secondary/m2.jpg",
      "/secondary/m1.jpg",
    ],
    status: "completo",
  },
  {
    slug: "arranhador-gatos",
    title: "Arranhador para Gatos",
    description:
      "Arranhador artesanal para meus gatos, feito majoritariamente com materiais que seriam descartados mas foram reutilizados. Um projeto que une funcionalidade, sustentabilidade e o bem-estar dos bichanos de casa.",
    category: "woodwork",
    tools: ["Marcenaria", "Sisal", "Reutilizacao", "Amor felino"],
    images: ["/secondary/a3.jpg", "/secondary/a2.jpg", "/secondary/a1.jpg"],
    status: "completo",
  },
  {
    slug: "miniagrofloresta",
    title: "Miniagrofloresta",
    description:
      "Uma horta baseada em diversidade, simbiose e o sonho da autossuficiência. Um pequeno sistema vivo voltado para equilibrio, saude e autonomia. Cultivar me ensinou algo simples: sistemas funcionam melhor quando cooperam.",
    category: "agroforest",
    tools: ["Design agroflorestal", "Compostagem", "Consorcio de especies"],
    images: ["/secondary/ho1.jpg"],
    status: "em-progresso",
  },
  {
    slug: "cama-armario",
    title: "Cama-Armario",
    description:
      "Movel multifuncional sob medida unindo cama e armario. Criei este movel para liberar espaco para yoga no quarto. Estrutura em Saligna para resistencia, Pinus nas partes visiveis para estetica, acabamento em verniz acetinado. Mais do que um movel: experiencia pratica em design, engenharia e otimizacao de espaco.",
    category: "woodwork",
    tools: ["Marcenaria", "Saligna", "Pinus", "Verniz acetinado"],
    images: ["/secondary/sc1.jpg"],
    status: "em-progresso",
  },
];
