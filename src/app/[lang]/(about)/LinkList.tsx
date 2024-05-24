import { email, githubUrl, linkedinUrl } from '@/utils/constants';
import { Iconify } from '@/components/Iconify';

export function LinkList() {
  const linkData = [
    { url: linkedinUrl, icon: 'mdi:linkedin', text: linkedinUrl.substring(8) },
    { url: githubUrl, icon: 'mdi:github', text: githubUrl.substring(8) },
    { url: `mailto:${email}`, icon: 'mdi:gmail', text: email },
  ];

  return (
    <div className="py-4 text-coffee">
      {linkData.map(item => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          className="flex items-center justify-center gap-1 text-sm hover:underline py-0.5"
        >
          <Iconify icon={item.icon} width={18} className="" />
          {item.text ?? item.url}
        </a>
      ))}
    </div>
  );
}