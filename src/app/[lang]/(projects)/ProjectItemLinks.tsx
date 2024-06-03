import { Iconify } from '@/components/Iconify';
import { ComponentProps } from '@/typing/props';
import { useTranslations } from 'next-intl';

interface Props extends ComponentProps {
  repoUrl: string;
  deployUrl?: string;
}

export function ProjectItemLinks(props: Props) {
  const { className, repoUrl, deployUrl } = props;
  const i18n = useTranslations('sections.projects');

  const linkInfo = [
    { icon: 'mdi:github', href: repoUrl, text: i18n('githubRepo') },
    {
      icon: 'carbon:executable-program',
      href: deployUrl,
      text: i18n('liveProject'),
    },
  ];

  return (
    <div
      className={`absolute top-0 left-0 m-4 w-[300px] h-[200px] -rotate-3  z-30
      bg-white/15 backdrop-blur-sm text-gray-500
      flex flex-row justify-evenly items-center ${className ?? ''}`}
    >
      {linkInfo.map(item =>
        item.href ? (
          <a
            key={`project-item-link-${item.href}`}
            href={item.href}
            target="_blank"
            className="flex flex-col items-center text-sm hover:underline"
          >
            <Iconify
              icon={item.icon}
              width={50}
              aria-hidden
              className="drop-shadow-sm"
            />
            {item.text}
          </a>
        ) : undefined
      )}
    </div>
  );
}
