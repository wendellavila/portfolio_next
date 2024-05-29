'use client';
import { useTranslations } from 'next-intl';

import { projectData } from '@/utils/constants';
import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectItem } from './ProjectItem';

export function ProjectsSection(props: SectionProps) {
  const { componentRef, items } = props;
  const i18n = useTranslations('sections.projects');

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
          {projectData.map(project => (
            <ProjectItem
              key={`project-item-${project.id}`}
              title={project.title}
              image={project.image}
              url={project.url}
              description={i18n(`${project.id}.description`) ?? undefined}
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
