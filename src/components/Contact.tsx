import { Container } from './Container';
import { Section, SectionTitle } from './Section';

export function Contact() {
  return (
    <Section id="contato">
      <Container>
        <SectionTitle>Contato</SectionTitle>
        <div className="max-w-xl">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Se voce tem um projeto em mente ou quer conversar sobre ideias,
            entre em contato.
          </p>
          <a
            href="mailto:contato@xand.dev"
            className="group mt-8 inline-flex items-center gap-3 text-lg text-ink"
          >
            <span className="relative">
              contato@xand.dev
              <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}
