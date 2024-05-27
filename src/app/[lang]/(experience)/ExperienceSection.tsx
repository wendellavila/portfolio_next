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
      <div
        className="grow pt-2 pb-6 px-6 md:pl-12 md:pr-0
        inline-grid gap-x-24 lg:grid-cols-2"
      >
        <CvSection i18nNamespace="education" className="order-1" />
        <CvSection i18nNamespace="experience" className="order-2 lg:order-3" />
        <CvSection
          i18nNamespace="publications"
          className="order-3 lg:order-2"
        />
        <CvSection i18nNamespace="courses" className="order-4 lg:order-4" />
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
