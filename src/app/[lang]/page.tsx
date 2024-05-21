'use client';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

import { NavigationItem } from '@/typing/types';
import { BannerSection } from './(banner)/BannerSection';
import { AboutSection } from './(about)/AboutSection';
import { ExperienceSection } from './(experience)/ExperienceSection';
import { SkillsSection } from './(skills)/SkillsSection';
import { ProjectsSection } from './(projects)/ProjectsSection';
import { Footer } from './(footer)/Footer';

export default function MainPage() {
  const bannerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const i18n = useTranslations('sections');

  const linkItems: NavigationItem[] = [
    {
      id: 'home',
      text: i18n('banner.title'),
      ref: bannerRef,
    },
    {
      id: 'about',
      text: 'About Me',
      ref: aboutRef,
    },
    {
      id: 'education-experience',
      text: i18n('educationExperience.title'),
      ref: experienceRef,
    },
    {
      id: 'skills',
      text: i18n('skills.title'),
      ref: skillsRef,
    },
    {
      id: 'projects',
      text: i18n('projects.title'),
      ref: projectsRef,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <BannerSection componentRef={bannerRef} items={linkItems} />
      <AboutSection componentRef={aboutRef} items={linkItems} />
      <ExperienceSection componentRef={experienceRef} items={linkItems} />
      <SkillsSection componentRef={skillsRef} items={linkItems} />
      <ProjectsSection componentRef={projectsRef} items={linkItems} />
      <Footer />
    </div>
  );
}
