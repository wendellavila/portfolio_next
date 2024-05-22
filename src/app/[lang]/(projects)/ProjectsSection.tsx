'use client';

import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';

export function ProjectsSection(props: SectionProps) {
  const { componentRef, items } = props;

  return (
    <section
      ref={componentRef}
      id="projects"
      className="min-h-screen flex flex-row bg-white"
    >
      <div className="grow pt-2 pb-6 pl-4"></div>
      <VerticalNav
        items={items}
        position="right"
        color="silver"
        textColor="slate-500"
        backgroundColor="white"
      />
    </section>
  );
}
