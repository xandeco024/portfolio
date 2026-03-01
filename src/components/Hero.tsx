import { Container } from "./Container";

export function Hero() {
  return (
    <header className="pb-20 pt-32 md:pb-32 md:pt-48">
      <Container>
        <p className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          Gabriel Bravo
        </p>
        <h1 className="mt-4 text-5xl font-medium tracking-tight text-ink md:text-7xl">
          Xand
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft md:text-xl">
          Crio coisas que funcionam - digitais ou fisicas
          <br />
          <span className="text-ink-muted"> Menos, mas com propósito</span>
        </p>
      </Container>
    </header>
  );
}
