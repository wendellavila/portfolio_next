'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { TypingText } from '@/components/TypingText';
import { VerticalNav } from '@/components/VerticalNav';
import { StarrySky } from './StarrySky';

import { montserrat, projectTitle } from '@/utils/constants';
import { SectionProps } from '@/typing/props';
import { IconLinkList } from './IconLinkList';

import { useInView, useRefDimensions } from '@/utils/hooks';
import { Iconify } from '@/components/Iconify';
import { GoDownLink } from './GoDownLink';

interface Props extends SectionProps {
  aboutRef: React.RefObject<HTMLElement>;
}

export function BannerSection(props: Props) {
  const { componentRef, items, aboutRef } = props;
  const i18n = useTranslations('sections.banner');
  const subtitle = i18n('subtitle');
  const stylizedSubtitle = `__${subtitle.replaceAll(' ', '_')}__`;

  const inView = useInView(componentRef, 10);
  const [animate, setAnimate] = useState(false);

  const threshold = 50; // Rerender StarrySky only when layout changes 50px in width or height
  const [width, height] = useRefDimensions(componentRef, threshold);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [animate, inView]);

  return (
    <section
      id="banner"
      ref={componentRef}
      className="min-h-dvh flex relative text-white/95 pt-8 pb-4 lg:pt-12 px-8 lg:px-16"
    >
      <StarrySky width={width} height={height} />
      <div
        id="banner-color-filter"
        aria-hidden
        className="bg-black/25 w-full h-full absolute top-0 left-0 z-0"
      ></div>
      <div id="banner-body" className="flex flex-col z-10 grow">
        <div className="grow">
          <h1
            className={`text-7xl mb-1 font-bold ${montserrat.className} hyphens-manual`}
          >
            {projectTitle.toLocaleUpperCase()}
          </h1>
          <TypingText
            ariaLabel={subtitle}
            className={`text-3xl mb-4 ${montserrat.className} break-all`}
            animate={animate}
          >
            {stylizedSubtitle}
          </TypingText>
          <IconLinkList className={animate ? 'animate-fade ' : ''} />
        </div>
        <GoDownLink linkRef={aboutRef} />
      </div>
      <VerticalNav
        id="banner-nav"
        gap
        expandAll
        showOnSmall
        hideHome
        languageSelector
        items={items}
        position="right"
        color="white"
        textColor="white"
        className="absolute right-0 bottom-0 h-full"
      />
    </section>
  );
}
