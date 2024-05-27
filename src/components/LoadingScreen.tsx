import { Iconify } from '@/components/Iconify';
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
			min-h-screen flex flex-col items-center justify-center
			bg-blueprint text-white ${className ?? ''}
			`}
    >
      <div className="grow-[2]"></div>
      <span className="text-xl hyphens-manual">Loading</span>
      <Iconify
        icon="svg-spinners:3-dots-fade"
        width={40}
        className="text-white"
      />
      <div className="grow-[3]"></div>
    </section>
  );
}
