'use client';
import { SectionProps } from '@/typing/props';
import { VerticalNav } from '@/components/VerticalNav';

export function AboutSection(props: SectionProps) {
  const { componentRef, items } = props;

  return (
    <section
      ref={componentRef}
      id="about"
      className="min-h-screen flex flex-row bg-cream"
    >
      <VerticalNav
        items={items}
        position="left"
        color="latte"
        textColor="coffee"
        backgroundColor="cream"
      />
      <div className="grow pt-2 pb-6 pr-4"></div>
    </section>
  );
}
