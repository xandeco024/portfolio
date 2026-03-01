import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'gabriel-pastel',
    title: 'Gabriel Pastel',
    subtitle: 'Plataforma web de pedidos para lanchonete 100% vegana',
    description: 'Aplicacao full-stack que une tecnologia moderna com proposito social. Sistema completo de pedidos personalizado para lanchonete 100% vegana, com ingredientes organicos, precos acessiveis e rastreamento individual de impacto ambiental positivo.',
    category: 'digital',
    featured: true,
    images: [
      '/projects/gabriel-pastel-hero.png',
    ],
    problem: 'Lanchonetes veganas precisam de sistemas que comuniquem seus valores alem de apenas vender. Plataformas genericas nao contam a historia nem engajam clientes com o proposito ambiental e animal.',
    construction: 'Desenvolvi uma aplicacao completa com Next.js 15 e React 19. O banco PostgreSQL via Prisma gerencia pedidos, usuarios e ingredientes. Sistema "Monte seu Pastel" permite personalizacao total. Internacionalizacao em tres idiomas com next-intl. Pagina Nossa Historia com timeline interativa, parallax e contador de impacto individual.',
    decisions: 'Autenticacao propria com NextAuth.js e JWT para controle total. Design system customizado com paleta vegana (vegGreen, vegYellow, vegBrown). Dashboard mostra estatisticas de impacto: animais salvos, recursos economizados. Painel admin completo para gestao de pedidos e ingredientes.',
    result: 'Sistema completo de pedidos funcionando. Usuarios acompanham seu impacto individual. A pagina Nossa Historia comunica os valores de compaixao, sustentabilidade e sabor de forma imersiva.',
    tools: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'Tailwind CSS', 'next-intl'],
    links: {
      github: 'https://github.com/xandeco024/gabriel-pastel',
      live: 'https://gabriel-pastel.vercel.app',
    },
    logo: '/projects/gabriel-pastel-logo.png',
    bgColor: '#fff8e8',
  },
  {
    slug: 'modelando-o-futuro',
    title: 'Modelando o Futuro',
    subtitle: 'Recicladora de PET para filamento 3D',
    description: 'Recicladora que transforma garrafas PET descartadas em filamento para impressao 3D. Hardware, programacao e sustentabilidade em um sistema desenvolvido no TechLab da Fatec Carapicuiba sob orientacao da Prof. Magali Rossi.',
    category: 'digital',
    featured: true,
    images: [
      '/projects/mf6.jpg',
      '/projects/mf5.jpg',
      '/projects/mf4.mp4',
      '/projects/mf3.mp4',
      '/projects/mf2.jpg',
      '/projects/mf1.jpg',
    ],
    problem: 'Bilhoes de garrafas PET sao descartadas anualmente enquanto filamento para impressao 3D e caro e de origem petroquimica. Como transformar lixo plastico em recurso tecnologico acessivel e util?',
    construction: 'Garrafa PET triturada entra no hotend onde uma resistencia aquece o material. Um termistor monitora a temperatura em tempo real. Motor de passo NEMA 17 controla a extrusao do filamento. Sistema Arduino com controle PID ajusta automaticamente a velocidade conforme temperatura real. Display OLED permite ajustes manuais via potenciometro. Pecas criticas da maquina foram impressas com o proprio filamento reciclado, fechando o ciclo de economia circular.',
    decisions: 'Controle termico preciso via PID foi essencial para qualidade do filamento. Limitacoes de hardware exigiram otimizacao profunda do codigo Arduino. Design fisico compacto e modular, 70% mais leve que modelos comerciais. Decisao de imprimir as proprias pecas com filamento reciclado validou o conceito na pratica.',
    result: 'Sistema funcional produzindo filamento de qualidade comparavel ao comercial. Projeto demonstra integracao completa entre software, hardware e sustentabilidade. Validacao do conceito de economia circular: lixo virando ferramenta de criacao. Capacidade comprovada de executar projetos complexos do digital ao fisico.',
    tools: ['Arduino', 'C++', 'PID', 'Motor de passo NEMA 17', 'Hotend', 'Termistor', 'Display OLED', 'Impressao 3D', 'Design mecanico', 'Eletronica aplicada', 'Prototipagem rapida'],
    links: {},
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}
