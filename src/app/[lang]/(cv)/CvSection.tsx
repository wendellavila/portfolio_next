'use client';
import { useEffect, useState } from 'react';

import { SectionProps } from '@/typing/props';
import { VerticalNav } from '@/components/VerticalNav';
import { CvSubSection } from './CvSubSection';
import { useInView } from '@/utils/hooks';
import { DownloadCV } from './DownloadCV';

export function CvSection(props: SectionProps) {
  const { componentRef, items } = props;

  const inView = useInView(componentRef);
  const [animate, setAnimate] = useState(false);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [inView]);

  return (
    <section
      ref={componentRef}
      id="education-experience"
      className="min-h-screen flex flex-row bg-white"
    >
      <div className="grow flex flex-col pt-2 pb-10 px-6 md:pr-0">
        <div
          className={`inline-grid gap-24 mb-24 lg:grid-cols-2
          ${animate ? 'visible' : 'hidden'}`}
        >
          <CvSubSection
            subsection="education"
            className="order-1 animate-fade-right"
          />
          <CvSubSection
            subsection="experience"
            className="order-2 lg:order-3 animate-fade-left"
          />
          <CvSubSection
            subsection="publications"
            className="order-3 lg:order-2 animate-fade-right"
          />
          <CvSubSection
            subsection="courses"
            className="order-4 animate-fade-left"
          />
        </div>
        <div className="flex flex-col 2xl:items-center">
          <DownloadCV
            className={`animate-fade-right ${animate ? 'visible' : 'hidden'}`}
          />
        </div>
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
