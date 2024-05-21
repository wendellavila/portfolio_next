import { ClientI18nRedirect } from '@/components/ClientI18nRedirect';
import { montserrat } from '@/utils/constants';

export default function RootPage() {
  return (
    <html>
      <body className={montserrat.className}>
        <ClientI18nRedirect />
      </body>
    </html>
  );
}
