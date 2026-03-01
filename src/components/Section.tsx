import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`mb-12 text-sm font-medium uppercase tracking-widest text-ink-muted ${className}`}>
      {children}
    </h2>
  );
}
