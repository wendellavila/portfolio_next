import { Iconify } from '@/components/Iconify';
import { SectionHeader } from '@/components/SectionHeader';
import { ComponentProps } from '@/typing/props';
import { useLocale, useTranslations } from 'next-intl';

export function DownloadCV(props: ComponentProps) {
  const { className } = props;
  const i18n = useTranslations('sections.cv');
  const lang = useLocale();

  const basePath =
    'https://raw.githubusercontent.com/wendellavila/wendellavila/main/assets/files';

  return (
    <article className={`flex flex-col items-center ${className}`}>
      <div className="w-full max-w-[800px]">
        <SectionHeader
          component="span"
          className="text-base"
          decorationClassName="bg-gray-800"
        >
          {i18n('downloadPDF')}
        </SectionHeader>
        <a
          role="button"
          download={`Wendell_Avila_CV_${lang}`}
          href={`${basePath}/CV_${lang}.pdf`}
          target="_blank"
          className="flex flex-row"
        >
          <div
            className="py-1 inline-flex flex-row items-center justify-center
          font-sm hover:underline"
          >
            <Iconify
              icon="ph:file-pdf-light"
              width={20}
              className="mr-1 font-bold"
            />
            {i18n('download')}
          </div>
        </a>
      </div>
    </article>
  );
}
