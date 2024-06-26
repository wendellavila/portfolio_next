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
      url: `mailto:${email}`,
      icon: 'basil:gmail-solid',
      title: i18n('email'),
      animationDuration: 'animate-duration-[2000ms]',
    },
  ];

  return (
    <nav className={`flex flex-row gap-3 mt-4`}>
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
            className={`text-white/85 
            hover:cursor-pointer hover:text-white hover:scale-105
            ${item.animationDuration} ${className}`}
          />
        </a>
      ))}
    </nav>
  );
}
