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
  const inView = useInView(componentRef);

  // Animate on first view
  useEffect(() => {
    if (inView && !animate) setAnimate(true);
  }, [inView]);

  return (
    <section
      ref={componentRef}
      id="about"
      className="min-h-screen flex flex-row bg-cream"
    >
      <VerticalNav
        id="about-nav"
        items={items}
        position="left"
        color="latte"
        textColor="coffee"
        backgroundColor="cream"
      />
      <div id="about-body" className="grow flex flex-col pt-2 pb-10">
        <SectionHeader
          decorationClassName="bg-blueprint"
          className="ml-6 md:ml-0"
        >
          {i18n('title')}
        </SectionHeader>
        <div
          className={`flex items-center gap-8 grow 
          md:flex-row md:justify-evenly
          flex-col`}
        >
          <div
            id="about-profile"
            className={`flex flex-col items-center px-4 animate-fade-right
            ${animate ? 'visible' : 'hidden'}`}
          >
            <Avatar className="mb-4" src="/profile.png" size={200} alt="WA" />
            <LinkList />
          </div>
          <div id="about-content" className={animate ? 'visible' : 'hidden'}>
            <article className="md:px-12 px-6 max-w-[1200px] animate-fade-left">
              {i18n('content')
                .split('\n')
                .map((line, index) => (
                  <p
                    className="text-md pb-4 text-justify"
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
