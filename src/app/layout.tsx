import './globals.css';
import { getTranslations } from '@/utils/functions';
import { projectTitle } from '@/utils/constants';

export async function generateMetadata() {
  const i18n = await getTranslations('en', 'sections.about');
  return {
    title: projectTitle,
    description: (i18n('description') as string).replaceAll('\n', ' '),
    icons: {
      icon: `/assets/img/favicon.png`,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
