'use client';
import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { TypingText } from '@/components/TypingText';
import { VerticalNav } from '@/components/VerticalNav';
import { StarrySky } from './StarrySky';

import { montserrat, projectTitle } from '@/utils/constants';
import { SectionProps } from '@/typing/props';
import { IconLinkList } from './IconLinkList';

import { useInView, useRefDimensions } from '@/utils/hooks';

export function BannerSection(props: SectionProps) {
  const { componentRef, items } = props;
  const i18n = useTranslations('sections.banner');
  const subtitle = i18n('subtitle');
  const stylizedSubtitle = `__${subtitle.replaceAll(' ', '_')}__`;

  const inView = useInView(componentRef);
  const [animate, setAnimate] = useState(false);

  const threshold = 50; // Rerender StarrySky only when layout changes 50px in width or height
  const [width, height] = useRefDimensions(componentRef, threshold);

  const memoizedStarrySky = useMemo(
    () => <StarrySky width={width} height={height} />,
    [width, height]
  );

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
      {memoizedStarrySky}
      <div
        id="banner-color-filter"
        aria-hidden
        className="bg-black/25 w-full h-full absolute top-0 left-0 z-0"
      ></div>
      <div id="banner-body" className="flex flex-col z-10">
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
        <IconLinkList className={animate ? 'visible' : 'hidden'} />
      </div>
      <VerticalNav
        id="banner-nav"
        gap={true}
        expandAll={true}
        showOnSmall={true}
        languageSelector={true}
        items={items}
        position="right"
        color="white"
        textColor="white"
        className="absolute right-0 bottom-0 h-full"
      />
    </section>
  );
}
