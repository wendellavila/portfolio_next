import { ComponentProps } from '@/typing/props';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface Props extends ComponentProps {
  title: string;
  image: string;
  url: string;
  description?: string;
}

export function ProjectItem(props: Props) {
  const { className, title, image, url, description } = props;
  const i18n = useTranslations('sections.projects');
  return (
    <article
      className={`relative flex flex-col items-center
      text-center mb-2 animate-fade-down ${className ?? ''}`}
    >
      <a
        className="z-10 hover:cursor-pointer hover:underline
        group flex flex-col items-center gap-4"
        href={url}
      >
        <div className="bg-cream z-10 flex justify-center rotate-3 group-hover:scale-[1.02]">
          <div
            aria-hidden
            className="absolute z-0 bg-blueprint w-full h-full -rotate-3"
          ></div>
          <Image
            src={`/${image}`}
            width={200}
            height={200}
            alt={`${title} - ${i18n('screenshot')}`}
            className="w-[300px] h-[200px] m-4 bg-white shadow-md border-8 z-10
            border-white -rotate-3"
          />
        </div>
        <div>
          <span className="bg-cream mb-1 px-2 text-lg leading-relaxed">
            {title}
          </span>
        </div>
      </a>
      {description && <p className="text-md mt-1">{description}</p>}
    </article>
  );
}
