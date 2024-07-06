'use client';
import { useEffect, useState } from 'react';

import { SectionProps } from '@/typing/props';
import { VerticalNav } from '@/components/VerticalNav';
import { CvSubSection } from './CvSubSection';
import { useInView } from '@/utils/hooks';
import { DownloadCV } from './DownloadCV';

export function CvSection(props: SectionProps) {
  const { componentRef, items } = props;

  const inView = useInView(componentRef, 10);
  const [animate, setAnimate] = useState(false);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [animate, inView]);

  return (
    <section
      ref={componentRef}
      id="cv"
      className="min-h-dvh flex flex-row bg-white"
    >
      <div
        id="cv-body"
        className="grow flex flex-col justify-center pt-2 pb-10 px-6 md:pr-0"
      >
        <div className="inline-grid gap-y-4 gap-x-20 lg:grid-cols-2">
          <CvSubSection
            subsection="education"
            className={`order-1 ${animate ? 'animate-fade-right ' : ''}`}
          />
          <CvSubSection
            subsection="experience"
            className={`order-2 lg:order-3 ${animate ? 'animate-fade-left ' : ''}`}
          />
          <CvSubSection
            subsection="publications"
            className={`order-3 lg:order-2 ${animate ? 'animate-fade-right ' : ''}`}
          />
          <CvSubSection
            subsection="courses"
            className={`order-4 ${animate ? 'animate-fade-left ' : ''}`}
          />
          <DownloadCV
            id="cv-download"
            className={`order-5 ${animate ? 'animate-fade-right ' : ''}`}
          />
        </div>
      </div>
      <VerticalNav
        id="cv-nav"
        items={items}
        position="right"
        color="silver"
        textColor="slate-500"
        backgroundColor="white"
      />
    </section>
  );
}
