'use client';
import { useTranslations } from 'next-intl';
import { deployUrl, projectTitle, repoUrl } from '@/utils/constants';

export function Footer() {
  const i18n = useTranslations('sections.footer');
  const currentTime = new Date();
  return (
    <footer className="bg-neutral-800 py-3 px-5 flex flex-row justify-between flex-wrap">
      <div className="text-gray-100 flex flex-col">
        <a
          href={deployUrl}
          className="hover:underline font-bold text-sm hyphens-manual"
        >
          {projectTitle}
        </a>{' '}
        <span className="mr-1 text-xs">© {currentTime.getFullYear()}</span>
      </div>
      <span className="text-xs text-gray-300">
        {i18n('madeWith')}{' '}
        <a href="https://nextjs.org/" className="underline">
          Next.js
        </a>
        . {i18n('sourceCodeAvailableOn')}{' '}
        <a href={repoUrl} className="underline">
          Github
        </a>
        .
      </span>
    </footer>
  );
}
