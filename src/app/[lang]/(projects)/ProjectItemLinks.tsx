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
      className={`absolute top-0 left-0 m-6 w-[284px] h-[184px] -rotate-3  z-30
      bg-blueprint/45 backdrop-blur-md text-white/85 hover:text-white
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
