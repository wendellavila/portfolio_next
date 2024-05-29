'use client';
import { useTranslations } from 'next-intl';
import { Iconify } from '@/components/Iconify';

import { email, githubUrl, linkedinUrl } from '@/utils/constants';
import { ComponentProps } from '@/typing/props';

export function IconLinkList(props: ComponentProps) {
  const { className } = props;
  const i18n = useTranslations('sections.banner');

  const linkData = [
    {
      url: linkedinUrl,
      icon: 'mdi:linkedin',
      ariaLabel: 'LinkedIn',
      animationDuration: 'animate-duration-[1000ms]',
    },
    {
      url: githubUrl,
      icon: 'mdi:github',
      title: 'GitHub',
      animationDuration: 'animate-duration-[1500ms]',
    },
    {
      url: email,
      icon: 'basil:gmail-solid',
      title: i18n('email'),
      animationDuration: 'animate-duration-[2000ms]',
    },
  ];

  return (
    <nav className={`flex flex-row gap-3 mt-4 ${className}`}>
      {linkData.map(item => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          aria-label={item.ariaLabel}
          className=""
        >
          <Iconify
            aria-label="LinkedIn Logo"
            icon={item.icon}
            width={45}
            className={`text-white opacity-80 animate-fade ${item.animationDuration}
            hover:cursor-pointer hover:opacity-100
            hover:scale-105`}
          />
        </a>
      ))}
    </nav>
  );
}
