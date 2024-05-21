import { Iconify } from '@/components/Iconify';
import { LoadingScreenProps } from '@/typing/props';

export function LoadingScreen(props: LoadingScreenProps) {
  return (
    <section
      id={props.id}
      className={`
			min-h-screen flex flex-col items-center justify-center
			bg-blueprint text-white ${props.className ?? ''}
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
