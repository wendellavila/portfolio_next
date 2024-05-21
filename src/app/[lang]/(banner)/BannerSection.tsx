'use client';
import { useTranslations } from 'next-intl';

import { Iconify } from '@/components/Iconify';
import { TypingText } from '@/components/TypingText';
import { VerticalNav } from '@/components/VerticalNav';
import { StarrySky } from './StarrySky';

import {
  email,
  githubUrl,
  linkedinUrl,
  montserrat,
  projectTitle,
} from '@/utils/constants';
import { SectionProps } from '@/typing/props';

export function BannerSection(props: SectionProps) {
  const i18n = useTranslations('sections.banner');
  const subtitle = i18n('subtitle');
  const stylizedSubtitle = `__${subtitle.replaceAll(' ', '_')}__`;

  return (
    <section
      id="banner"
      ref={props.componentRef}
      className="min-h-screen flex relative text-white/95 pt-8 pb-4 lg:pt-12 px-8 lg:px-16"
    >
      <StarrySky />
      <div
        id="color-filter"
        className="bg-black/25 w-full h-full absolute top-0 left-0 z-0"
      ></div>
      <div className="flex flex-col z-10">
        <h1
          className={`text-7xl mb-1 font-bold ${montserrat.className} hyphens-manual`}
        >
          {projectTitle.toLocaleUpperCase()}
        </h1>
        <TypingText
          ariaLabel={subtitle}
          className={`text-3xl mb-4 ${montserrat.className} break-all`}
        >
          {stylizedSubtitle}
        </TypingText>
        <div className="flex flex-row gap-3 mt-4">
          <a href={linkedinUrl} target="_blank" aria-label="LinkedIn">
            <Iconify
              aria-label="LinkedIn Logo"
              icon="mdi:linkedin"
              width={45}
              className={`text-white opacity-80
              hover:cursor-pointer hover:opacity-100 hover:scale-105`}
            />
          </a>
          <a href={githubUrl} target="_blank" aria-label="GitHub">
            <Iconify
              icon="mdi:github"
              width={45}
              className={`text-white opacity-80
              hover:cursor-pointer hover:opacity-100 hover:scale-105`}
            />
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            aria-label={i18n('email')}
          >
            <Iconify
              icon="basil:gmail-solid"
              width={45}
              className={`text-white opacity-80
              hover:cursor-pointer hover:opacity-100 hover:scale-105`}
            />
          </a>
        </div>
      </div>
      <VerticalNav
        gap={true}
        expandAll={true}
        showOnSmall={true}
        languageSelector={true}
        items={props.items}
        position="right"
        color="white"
        textColor="white"
        className="absolute right-0 bottom-0 h-full"
      />
    </section>
  );
}
