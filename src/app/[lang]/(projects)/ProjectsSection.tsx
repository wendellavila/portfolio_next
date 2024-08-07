'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { projectData } from '@/utils/constants';
import { VerticalNav } from '@/components/VerticalNav';
import { SectionProps } from '@/typing/props';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectItem } from './ProjectItem';

import { useInView } from '@/utils/hooks';

export function ProjectsSection(props: SectionProps) {
  const { componentRef, items } = props;

  const i18n = useTranslations('sections.projects');

  const [animate, setAnimate] = useState(false);
  const inView = useInView(componentRef, 10);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [animate, inView]);

  return (
    <section
      ref={componentRef}
      id="projects"
      className="min-h-dvh flex flex-row bg-white"
    >
      <div
        id="projects-body"
        className="grow pt-2 pb-16 px-6 lg:pr-0 flex flex-col"
      >
        <SectionHeader decorationClassName="bg-silver">
          {i18n('title').toLocaleUpperCase()}
        </SectionHeader>
        <div className="grow flex flex-row flex-wrap gap-8 justify-center px-8">
          {projectData.map((project) => (
            <ProjectItem
              id={`projects-item-${project.title}`}
              key={`projects-item-${project.title}`}
              title={project.title}
              image={project.image}
              repoUrl={project.repoUrl}
              deployUrl={project.deployUrl}
              description={i18n(`${project.title}.description`)}
              className={animate ? 'animate-fade' : ''}
            />
          ))}
        </div>
      </div>
      <VerticalNav
        id="projects-nav"
        items={items}
        position="right"
        color="silver"
        textColor="slate-500"
        backgroundColor="white"
      />
    </section>
  );
}
