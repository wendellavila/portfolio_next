'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { skillsData } from '@/utils/constants';
import { SectionHeader } from '@/components/SectionHeader';
import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';
import { PercentageBar } from './PercentageBar';
import { useInView } from '@/utils/hooks';
import { Iconify } from '@/components/Iconify';

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
          {skillsData.map(category => (
            <div
              key={`skills-${category.id}`}
              className="w-full max-w-[800px] mb-12"
            >
              <h3 className="font-semibold mb-2">{i18n(category.id)}</h3>

              {category.data.map(skillItem => (
                <PercentageBar
                  key={`skills-${category.id}-${skillItem.title}`}
                  percentage={skillItem.percentage}
                  animate={animate}
                >
                  <Iconify icon={skillItem.icon} aria-hidden />
                  {skillItem.title}
                </PercentageBar>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
