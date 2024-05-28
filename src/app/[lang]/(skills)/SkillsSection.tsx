'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { SectionHeader } from '@/components/SectionHeader';
import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';
import { PercentageBar } from './PercentageBar';
import { useInView } from '@/utils/hooks';

export function SkillsSection(props: SectionProps) {
  const { componentRef, items } = props;

  const i18n = useTranslations('sections.skills');
  const isInView = useInView(componentRef);
  const [animate, setAnimate] = useState(false);

  // Animate progress bars on first view
  if (isInView && !animate) setAnimate(true);

  return (
    <section
      ref={componentRef}
      id="skills"
      className="min-h-screen flex flex-row bg-blueprint text-slate-50"
    >
      <VerticalNav
        items={items}
        position="left"
        color="sky-100"
        textColor="slate-100"
        backgroundColor="blueprint"
      />
      <div className="grow py-2 px-6 md:pl-0 flex flex-col">
        <SectionHeader className="" decorationClassName="bg-cream">
          {i18n('title')}
        </SectionHeader>
        <div
          className="grow flex flex-col
           items-center justify-center"
        >
          <div className="w-full max-w-[800px] mb-12">
            <h3 className="font-semibold mb-2">Subtitle</h3>
            <PercentageBar percentage={80} animate={animate}>
              Test 1
            </PercentageBar>
            <PercentageBar percentage={70} animate={animate}>
              Test test test
            </PercentageBar>
            <PercentageBar percentage={50} animate={animate}>
              Test
            </PercentageBar>
            <PercentageBar percentage={20} animate={animate}>
              Test
            </PercentageBar>
          </div>
          <div className="w-full max-w-[800px] mb-12">
            <h3 className="font-semibold mb-2">Subtitle</h3>

            <PercentageBar percentage={90} animate={animate}>
              Test 1
            </PercentageBar>
            <PercentageBar percentage={80} animate={animate}>
              Test test test
            </PercentageBar>
            <PercentageBar percentage={65} animate={animate}>
              Test
            </PercentageBar>
            <PercentageBar percentage={30} animate={animate}>
              Test
            </PercentageBar>
          </div>
          <div className="w-full max-w-[800px] mb-12">
            <h3 className="font-semibold mb-2">Subtitle</h3>
            <PercentageBar percentage={80} animate={animate}>
              Test 1
            </PercentageBar>
            <PercentageBar percentage={70} animate={animate}>
              Test test test
            </PercentageBar>
            <PercentageBar percentage={50} animate={animate}>
              Test
            </PercentageBar>
            <PercentageBar percentage={20} animate={animate}>
              Test
            </PercentageBar>
          </div>
        </div>
      </div>
    </section>
  );
}
