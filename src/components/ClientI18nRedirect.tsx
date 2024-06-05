'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { i18nConfig } from '@/utils/constants';
import { getBrowserPreferredLanguage } from '@/utils/functions';
import { LoadingScreen } from '@/components/LoadingScreen';

/**
 * Gets preferred language from either localStorage or navigator.languages
 * and redirects to the first supported locale.
 */
export function ClientI18nRedirect() {
  const router = useRouter();

  useEffect(() => {
    const localStorageLocale = localStorage.getItem('lang') ?? '';
    if (localStorageLocale && i18nConfig.locales.includes(localStorageLocale)) {
      const locale = localStorageLocale;
      router.replace(`/${locale}`);
    } else {
      const locale = getBrowserPreferredLanguage(true);
      router.replace(`/${locale}`);
    }
  }, [router]);

  return (
    <main>
      <LoadingScreen id="locale-loading" />
    </main>
  );
}
