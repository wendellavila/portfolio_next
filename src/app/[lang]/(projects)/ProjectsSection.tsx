'use client';
import { useTranslations } from 'next-intl';

import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectItem } from './ProjectItem';

export function ProjectsSection(props: SectionProps) {
  const { componentRef, items } = props;

  const i18n = useTranslations('sections.projects');
  const count = parseInt(i18n('count')) || 0;

  return (
    <section
      ref={componentRef}
      id="projects"
      className="min-h-screen flex flex-row bg-white"
    >
      <div className="grow pt-2 pb-6 px-6 md:pl-12">
        <SectionHeader decorationClassName="bg-silver">
          {i18n('title').toLocaleUpperCase()}
        </SectionHeader>
        <div className="flex flex-row flex-wrap gap-8 justify-center px-8">
          {[...Array(count)].map((_, index) => (
            <ProjectItem
              key={`project-item-${index}`}
              title={i18n(`${index}.title`)}
              image={i18n(`${index}.image`)}
              url={i18n(`${index}.url`)}
              description={i18n(`${index}.description`) ?? undefined}
            />
          ))}
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
