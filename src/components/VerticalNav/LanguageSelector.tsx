import { Fragment } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Iconify } from '@/components/Iconify';
import { i18nConfig } from '@/utils/constants';
import { Map } from '@/typing/types';

import { LanguageSelectorTooltipProps } from '@/typing/props';

export function LanguageSelector(props: LanguageSelectorTooltipProps) {
  const router = useRouter();
  const locale = useLocale();
  let pathname = usePathname();
  const i18n = useTranslations('sections.banner');

  const { isOpen } = props;

  const languagesInfo: Map<{ flag: string; name?: string }> = {
    en: {
      flag: 'flagpack:us',
      name: 'English',
    },
    pt: {
      flag: 'flagpack:br',
      name: 'Português',
    },
  };

  const handleRouting = (lang: string) => {
    if (locale !== lang) {
      pathname = `/${lang}/${pathname.substring(4)}`;
      localStorage.setItem('lang', lang);
      router.push(pathname);
    }
  };

  return (
    <div className="flex flex-col backdrop-blur-sm">
      <button
        className={`h-8 flex flex-row items-center hover:cursor-pointer border
      border-white/50 ${isOpen ? 'bg-white/10' : 'group-hover:bg-white/10'}`}
        aria-label={i18n('showLanguageOptions')}
      >
        <div aria-hidden className="px-1.5 py-0.5">
          <Iconify
            icon="material-symbols:language"
            width={22}
            className="inline text-white/85"
          ></Iconify>
        </div>
        <div className="border-l border-inherit w-1 h-full"></div>
        <div
          className="flex flex-row items-center justify-center bg-transparent
					"
          aria-label={`${i18n('currentLanguage')}: ${
            languagesInfo[locale].name
          }`}
        >
          <span className="inline-flex flex-row items-center px-0.5">
            <Iconify
              icon={languagesInfo[locale].flag}
              width={22}
              className="inline mr-1"
            ></Iconify>
            {locale.toLocaleUpperCase()}
          </span>
          <Iconify
            icon="mdi:chevron-down"
            width={22}
            className={`inline transition-all transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          ></Iconify>
        </div>
      </button>
      {isOpen && (
        <div className="flex flex-col items-center">
          {i18nConfig.locales.map(lang => {
            return (
              <Fragment key={`option-${lang}`}>
                {lang !== locale && (
                  <button
                    className="h-8 flex flex-row items-center justify-center w-full py-0.5
                border-x border-b border-white/50
                hover:cursor-pointer hover:underline"
                    aria-label={`${i18n('switchTo')} ${
                      languagesInfo[lang].name
                    }`}
                    onClick={() => handleRouting(lang)}
                  >
                    <Iconify
                      icon={languagesInfo[lang].flag}
                      width={22}
                      className="mr-1 inline"
                    ></Iconify>
                    {lang.toLocaleUpperCase()}
                  </button>
                )}
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
