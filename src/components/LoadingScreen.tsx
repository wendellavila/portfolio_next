import { Iconify } from './Iconify';
import { ComponentProps } from '@/typing/props';
import { i18nConfig } from '@/utils/constants';
import { useRouter } from 'next/navigation';

interface Props extends ComponentProps {
  imageSrc?: string;
}

export function LoadingScreen(props: Props) {
  const { className, id } = props;
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.replace(`/${i18nConfig.defaultLocale}`);
  };

  return (
    <section
      id={id}
      className={`
			relative min-h-dvh flex flex-col items-center justify-center
			bg-blueprint text-white ${className ?? ''}
			`}
    >
      <div className="flex flex-col items-center">
        <span className="text-xl hyphens-manual">Loading</span>
        <Iconify
          icon="svg-spinners:3-dots-fade"
          width={40}
          className="text-white"
        />
      </div>
      <p className="text-sm absolute bottom-3 animate-fade animate-delay-1000">
        Not redirected?{' '}
        <a href="/en" className="underline" onClick={handleClick}>
          Click here
        </a>{' '}
        to go to the front page.
      </p>
    </section>
  );
}
