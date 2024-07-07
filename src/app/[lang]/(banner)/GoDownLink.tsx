import { Iconify } from '@/components/Iconify';

interface Props {
  linkRef: React.RefObject<HTMLElement>;
}

export function GoDownLink(props: Props) {
  const { linkRef } = props;

  return (
    <div className="flex flex-col items-center">
      <a
        href="#about"
        onClick={(event) => {
          event.preventDefault();
          if (!linkRef.current) return;
          linkRef.current!.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Iconify
          icon="ph:caret-down-light"
          className="animate-pulse"
          width={30}
        />
      </a>
    </div>
  );
}
