import { Iconify } from './Iconify';
import { ComponentProps } from '@/typing/props';

interface Props extends ComponentProps {
  imageSrc?: string;
}

export function LoadingScreen(props: Props) {
  const { className, id } = props;
  return (
    <section
      id={id}
      className={`
			min-h-dvh flex flex-col items-center justify-center
			bg-blueprint text-white ${className ?? ''}
			`}
    >
      <span className="text-xl hyphens-manual">Loading</span>
      <Iconify
        icon="svg-spinners:3-dots-fade"
        width={40}
        className="text-white"
      />
    </section>
  );
}
