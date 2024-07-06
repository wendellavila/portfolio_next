import { createTranslator } from 'next-intl';
import { i18nConfig } from '@/utils/constants';
import { I18n } from '@/typing/types';
import { projectTitle } from '@/utils/constants';

/**
 * Returns a random integer bigger than or equal to {min} and smaller than {max}.
 * @param {number} min - An integer used as the lower bound of possible randomly generated integers (Inclusive)
 * @param {number} max - An integer used as the upper bound of possible randomly generated integers (Exclusive)
 * @param {number} seed - An integer used as seed for the pseudorandom number generator.
 */
export function getRandomInt(min: number, max: number, seed?: number): number {
  const randomWithSeed = (seed: number): number => {
    // Forcing int
    seed = Math.round(seed);
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  let randomNumber = Math.random();
  if (seed !== undefined) randomNumber = randomWithSeed(seed);
  return Math.floor(randomNumber * (max - min)) + min;
}

/**
 * Returns the preferred language among supported languages in config/i18nConfig
 * @param {boolean} ignoreRegion - If true, will use only the primary language subtag,
 * e.g. 'en' instead of 'en-US'
 */
export function getBrowserPreferredLanguage(ignoreRegion?: boolean): string {
  const languages = typeof window !== 'undefined' ? navigator.languages : [];

  for (const language of languages) {
    const lang = ignoreRegion === true ? language.substring(0, 2) : language;
    if (i18nConfig.locales.includes(lang)) {
      return lang;
    }
  }
  return i18nConfig.defaultLocale;
}

/**
 * Loads JSON files containing translations to be used for Internationalization.
 * @param {string} locale - The locale of the language to be loaded.
 */
export async function getTranslationMessages(locale: string) {
  return (await import(`@/i18n/translations_${locale}.json`)).default;
}

/**
 * Creates a next-intl translator to be used outside of client components.
 * @param {string} locale - The locale of the language to be loaded.
 */
export async function getTranslations(
  locale?: string,
  namespace?: string
): Promise<I18n> {
  if (!locale) locale = i18nConfig.defaultLocale;
  const translator = createTranslator({
    locale,
    messages: await getTranslationMessages(locale),
    namespace: namespace,
  });
  return translator.raw;
}

/**
 * Generates Next.js SSG Static Params using the locales defined in i18nConfig.
 */
export async function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ lang: locale }));
}
