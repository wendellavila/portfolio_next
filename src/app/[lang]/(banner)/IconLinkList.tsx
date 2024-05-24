'use client';
import { useTranslations } from 'next-intl';
import { Iconify } from '@/components/Iconify';

import { email, githubUrl, linkedinUrl } from '@/utils/constants';

export function IconLinkList() {
  const i18n = useTranslations('sections.banner');

  const linkData = [
    { url: linkedinUrl, icon: 'mdi:linkedin', ariaLabel: 'LinkedIn' },
    { url: githubUrl, icon: 'mdi:github', title: 'GitHub' },
    { url: email, icon: 'basil:gmail-solid', title: i18n('email') },
  ];

  return (
    <div className="flex flex-row gap-3 mt-4">
      {linkData.map(item => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          aria-label={item.ariaLabel}
        >
          <Iconify
            aria-label="LinkedIn Logo"
            icon={item.icon}
            width={45}
            className={`text-white opacity-80
            hover:cursor-pointer hover:opacity-100
            hover:scale-105`}
          />
        </a>
      ))}
    </div>
  );
}
