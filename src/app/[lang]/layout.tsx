import { NextIntlClientProvider } from 'next-intl';

import { montserrat, timezone } from '@/utils/constants';
import { getTranslations, getTranslationMessages } from '@/utils/functions';
import { projectTitle } from '@/utils/constants';

export { generateStaticParams } from '@/utils/functions';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const i18n = await getTranslations(lang, 'sections.about');
  return {
    title: projectTitle,
    description: (i18n('description') as string).replaceAll('\n', ' '),
    icons: {
      icon: `/assets/img/favicon.png`,
    },
  };
}

export default async function InternationalizedLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const messages = await getTranslationMessages(lang);
  return (
    <html lang={lang}>
      <body className={`${montserrat.className} box-border`}>
        <NextIntlClientProvider
          locale={lang}
          messages={messages}
          // timezone and now must be set when using output: export
          timeZone={timezone}
          now={new Date()}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
