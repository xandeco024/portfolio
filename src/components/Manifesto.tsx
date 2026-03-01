import { Container } from "./Container";
import { Section } from "./Section";

export function Manifesto() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl space-y-6 text-base leading-relaxed text-ink-soft md:text-lg md:leading-relaxed">
          <p>
            Antes de escrever código ou cortar madeira, observo o contexto.
            Entendo o que funciona, o que atrapalha e como simplificar. Prefiro
            entregar menos coisas bem-feitas do que muitas pela metade. Cada
            projeto nasce de um problema real e da vontade de resolvê-lo de
            forma elegante.
          </p>
        </div>
      </Container>
    </Section>
  );
}
