import { SectionHeader } from '@/components/SectionHeader';
import { CvItem } from './CvItem';
import { useTranslations } from 'next-intl';
import { ComponentProps } from '@/typing/props';
import { cvData } from '@/utils/constants';

interface Props extends ComponentProps {
  subsection: string;
}

export function CvSubSection(props: Props) {
  const { className, subsection } = props;
  const i18n = useTranslations(`sections.${subsection}`);
  const subsectionInfo = cvData.filter(item => item.id === subsection)[0];
  const subsectionData = subsectionInfo.data;

  return (
    <section className="flex flex-col items-center">
      <div className={`max-w-[800px] w-full ${className ?? ''}`}>
        <SectionHeader decorationClassName="bg-silver">
          {i18n('title').toLocaleUpperCase()}
        </SectionHeader>
        {subsectionData.map(item => (
          <CvItem
            key={`${subsection}-item-${item.id}`}
            title={i18n(`${item.id}.title`)}
            institution={item.institution ?? i18n(`${item.id}.institution`)}
            titleUrl={item.titleUrl}
            institutionUrl={item.institutionUrl}
            years={item.years ?? i18n(`${item.id}.years`)}
            description={
              subsectionInfo.id !== 'publications'
                ? i18n(`${item.id}.description`)
                : undefined
            }
          ></CvItem>
        ))}
      </div>
    </section>
  );
}
