'use client';
import { SectionProps } from '@/typing/props';
import { VerticalNav } from '@/components/VerticalNav';

export function AboutSection(props: SectionProps) {
  return (
    <section
      ref={props.componentRef}
      id="about"
      className="min-h-screen flex flex-row bg-cream"
    >
      <VerticalNav
        items={props.items}
        position="left"
        color="latte"
        textColor="coffee"
      />
      <div className="grow pt-2 pb-6 pr-4"></div>
    </section>
  );
}
