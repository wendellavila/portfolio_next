'use client';
import { useEffect, useState } from 'react';
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
  const inView = useInView(componentRef, 10);
  const [animate, setAnimate] = useState(false);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [animate, inView]);

  return (
    <section
      ref={componentRef}
      id="skills"
      className="min-h-dvh flex flex-row bg-blueprint text-slate-50"
    >
      <VerticalNav
        id="skills-nav"
        items={items}
        position="left"
        color="sky-100"
        textColor="slate-100"
        backgroundColor="blueprint"
      />
      <div
        id="skills-body"
        className="grow pt-2 pb-16 px-6 lg:pr-12 lg:pl-0 flex flex-col"
      >
        <SectionHeader decorationClassName="bg-cream">
          {i18n('title')}
        </SectionHeader>
        <div
          className="grow flex flex-row gap-x-0 md:gap-x-24 gap-y-8
          flex-wrap items-center justify-evenly"
        >
          {skillsData.map((category) => (
            <div
              id={`skills-${category.id}`}
              key={`skills-${category.id}`}
              className="w-full lg:w-[800px]"
            >
              <h3 className="font-semibold mb-2">{i18n(category.id)}</h3>

              {category.data.map((skillItem) => (
                <PercentageBar
                  key={`skills-${category.id}-${skillItem.id}`}
                  percentage={skillItem.percentage}
                  animate={animate}
                >
                  {skillItem.icon && (
                    <Iconify
                      icon={skillItem.icon}
                      aria-hidden
                      className="flex-shrink-0"
                    />
                  )}
                  <span>
                    {skillItem.title ?? i18n(`${skillItem.id}.title`)}
                  </span>
                </PercentageBar>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
