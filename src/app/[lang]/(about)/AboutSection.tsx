'use client';
import { SectionProps } from '@/typing/props';
import { VerticalNav } from '@/components/VerticalNav';
import { Avatar } from './Avatar';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/SectionHeader';
import { LinkList } from './LinkList';
import { useEffect, useState } from 'react';
import { useInView } from '@/utils/hooks';

export function AboutSection(props: SectionProps) {
  const { componentRef, items } = props;
  const i18n = useTranslations('sections.about');

  const [animate, setAnimate] = useState(false);
  const inView = useInView(componentRef, 10);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [animate, inView]);

  return (
    <section
      ref={componentRef}
      id="about"
      className="min-h-dvh flex flex-row bg-cream"
    >
      <VerticalNav
        id="about-nav"
        items={items}
        position="left"
        color="latte"
        textColor="coffee"
        backgroundColor="cream"
      />
      <div
        id="about-body"
        className="grow flex flex-col pt-2 pb-10 px-6 md:px-12 lg:pl-0"
      >
        <SectionHeader
          decorationClassName="bg-blueprint"
          className="ml-6 md:ml-0"
        >
          {i18n('title')}
        </SectionHeader>
        <div
          className={`grow flex items-center gap-8  
          justify-evenly flex-col xl:flex-row `}
        >
          <div
            id="about-profile"
            className={`flex flex-col items-center px-4
            ${animate ? 'animate-fade-right' : ''}`}
          >
            <Avatar
              className="mb-4"
              src="/assets/img/profile.jpg"
              size={200}
              alt="WA"
            />
            <LinkList animate={animate} />
          </div>
          <div id="about-content">
            <article
              className={` max-w-[1200px]
              ${animate ? 'animate-fade-left' : ''}`}
            >
              {i18n('description')
                .split('\n')
                .map((line, index) => (
                  <p
                    className="text-lg pb-4 text-justify"
                    key={`about-paragraph-${index + 1}`}
                  >
                    {line}
                  </p>
                ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
