'use client';

import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';
import { CvSection } from './CvSection';

export function ExperienceSection(props: SectionProps) {
  const { componentRef, items } = props;

  return (
    <section
      ref={componentRef}
      id="education-experience"
      className="min-h-screen flex flex-row bg-white"
    >
      <div className={`grow pt-2 pb-6 pl-6 md:pl-12 pr-6 md:pr-0`}>
        <CvSection i18nNamespace="education" />
        <CvSection i18nNamespace="experience" />
        <CvSection i18nNamespace="courses" />
        <CvSection i18nNamespace="publications" />
      </div>
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
