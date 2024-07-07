'use client';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

import { NavigationItem } from '@/typing/types';
import { BannerSection } from './(banner)/BannerSection';
import { AboutSection } from './(about)/AboutSection';
import { CvSection } from './(cv)/CvSection';
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

  const navItems: NavigationItem[] = [
    {
      id: 'banner',
      text: i18n('banner.title'),
      ref: bannerRef,
    },
    {
      id: 'about',
      text: i18n('about.title'),
      ref: aboutRef,
    },
    {
      id: 'cv',
      text: i18n('cv.title'),
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
    <div className="flex flex-col overflow-x-hidden">
      <BannerSection
        componentRef={bannerRef}
        items={navItems}
        aboutRef={aboutRef}
      />
      <AboutSection componentRef={aboutRef} items={navItems} />
      <CvSection componentRef={experienceRef} items={navItems} />
      <SkillsSection componentRef={skillsRef} items={navItems} />
      <ProjectsSection componentRef={projectsRef} items={navItems} />
      <Footer />
    </div>
  );
}
