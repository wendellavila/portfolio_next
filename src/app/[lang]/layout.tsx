import { archivo } from '@/utils/constants';
import { getTranslationMessages } from '@/utils/functions';
export { generateStaticParams, generateMetadata } from '@/utils/functions';

import { timezone } from '@/utils/constants';
import { NextIntlClientProvider } from 'next-intl';

export default async function InternationalizedLayout({
  children, params: {lang}
}: {
  children: React.ReactNode,
  params : {lang: string},
}) {
  const messages = await getTranslationMessages(lang);
  return (
    <html lang={lang}>
      <body className={`${archivo.className}`}>
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
