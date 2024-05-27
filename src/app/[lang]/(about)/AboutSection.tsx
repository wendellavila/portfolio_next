'use client';
import { SectionProps } from '@/typing/props';
import { VerticalNav } from '@/components/VerticalNav';
import { Avatar } from './Avatar';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/SectionTitle';
import { LinkList } from './LinkList';

export function AboutSection(props: SectionProps) {
  const { componentRef, items } = props;
  const i18n = useTranslations('sections.about');

  return (
    <section
      ref={componentRef}
      id="about"
      className="min-h-screen flex flex-row bg-cream"
    >
      <VerticalNav
        items={items}
        position="left"
        color="latte"
        textColor="coffee"
        backgroundColor="cream"
      />
      <div className="grow flex flex-col pt-2 pb-6">
        <SectionTitle
          decorationClassName="bg-blueprint"
          className="ml-6 md:ml-0"
        >
          {i18n('title')}
        </SectionTitle>
        <div
          className={`flex items-center gap-8 grow 
          md:flex-row md:justify-evenly
          flex-col`}
        >
          <div className="flex flex-col items-center px-4">
            <Avatar className="mb-4" src="/profile.png" size={200} alt="WA" />
            <LinkList />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="md:px-12 px-6 max-w-[1200px]">
              {i18n('content')
                .split('\n')
                .map((line, index) => (
                  <p
                    className="text-md mb-4 text-justify"
                    key={`about-paragraph-${index + 1}`}
                  >
                    {line}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
