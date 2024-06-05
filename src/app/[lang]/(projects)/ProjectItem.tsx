import { ComponentProps } from '@/typing/props';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { ProjectItemLinks } from './ProjectItemLinks';

interface Props extends ComponentProps {
  title: string;
  image: string;
  repoUrl: string;
  deployUrl?: string;
  description?: string;
}

export function ProjectItem(props: Props) {
  const { className, title, image, repoUrl, deployUrl, description } = props;
  const i18n = useTranslations('sections.projects');

  return (
    <article
      className={`flex flex-col w-96 text-center mb-2 ${className ?? ''}`}
    >
      <button
        className="z-10
        group flex flex-col items-center gap-4"
      >
        <div
          className={`bg-cream flex rotate-3 transition duration-75
          group-hover:scale-[1.02]`}
        >
          <div className="p-3 -rotate-3 bg-blueprint">
            <div className="p-3 shadow-md bg-white">
              <div className="relative">
                <Image
                  src={image}
                  width={300}
                  height={200}
                  alt={`${title} - ${i18n('screenshot')}`}
                  className="w-[300px] h-[200px] bg-white border-white"
                ></Image>
                <ProjectItemLinks repoUrl={repoUrl} deployUrl={deployUrl} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="bg-cream mb-1 px-2 text-lg leading-relaxed">
            {title}
          </span>
        </div>
      </button>
      {description && <p className="text-md mt-1">{description}</p>}
    </article>
  );
}
