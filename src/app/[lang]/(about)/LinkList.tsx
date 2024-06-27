import { email, githubUrl, linkedinUrl } from '@/utils/constants';
import { Iconify } from '@/components/Iconify';

interface Props {
  animate?: boolean;
}

export function LinkList(props: Props) {
  const { animate } = props;
  const linkData = [
    {
      url: linkedinUrl,
      icon: 'mdi:linkedin',
      text: linkedinUrl.substring(8),
    },
    {
      url: githubUrl,
      icon: 'mdi:github',
      text: githubUrl.substring(8),
    },
    {
      url: `mailto:${email}`,
      icon: 'mdi:gmail',
      text: email,
    },
  ];

  return (
    <nav className="py-4 text-coffee">
      {linkData.map((item, index) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          className={`flex items-center justify-center gap-1
          text-sm hover:underline py-0.5
          ${animate ? (index % 2 == 0 ? 'animate-fade-right ' : 'animate-fade-left ') : ''}`}
        >
          <Iconify icon={item.icon} width={18} />
          {item.text ?? item.url}
        </a>
      ))}
    </nav>
  );
}
