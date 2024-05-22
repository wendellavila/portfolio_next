'use client';

import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';

export function SkillsSection(props: SectionProps) {
  const { componentRef, items } = props;
  return (
    <section
      ref={componentRef}
      id="skills"
      className="min-h-screen flex flex-row bg-blueprint"
    >
      <VerticalNav
        items={items}
        position="left"
        color="sky-100"
        textColor="slate-100"
        backgroundColor="blueprint"
      />
      <div className="grow pt-2 pb-6 pr-4"></div>
    </section>
  );
}
