'use client';
import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';

export function ExperienceSection(props: SectionProps) {
  return (
    <section
      ref={props.componentRef}
      id="education-experience"
      className="min-h-screen flex flex-row bg-white"
    >
      <div className="grow pt-2 pb-6 pl-4"></div>
      <VerticalNav
        items={props.items}
        position="right"
        color="silver"
        textColor="slate-500"
      />
    </section>
  );
}
