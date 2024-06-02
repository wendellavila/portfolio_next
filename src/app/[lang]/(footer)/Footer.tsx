'use client';
import { useTranslations } from 'next-intl';
import { deployUrl, projectTitle, repoUrl } from '@/utils/constants';

export function Footer() {
  const i18n = useTranslations('sections.footer');
  const currentTime = new Date();
  return (
    <footer
      id="footer"
      className="flex flex-row py-3 px-5 justify-between flex-wrap
      gap-y-2 bg-neutral-800"
    >
      <div
        id="footer-copyright"
        className="text-gray-100 flex flex-col gap-y-1"
      >
        <a
          href={deployUrl}
          className="hover:underline font-bold text-sm hyphens-manual"
        >
          {projectTitle}
        </a>{' '}
        <span className="mr-1 text-xs">© {currentTime.getFullYear()}</span>
      </div>
      <span id="footer-source" className="text-xs text-gray-300">
        {i18n('madeWith')}{' '}
        <a href="https://nextjs.org/" className="underline">
          Next.js
        </a>
        . {i18n('sourceCodeAvailableOn')}{' '}
        <a href={repoUrl} className="underline">
          GitHub
        </a>
        .
      </span>
    </footer>
  );
}
