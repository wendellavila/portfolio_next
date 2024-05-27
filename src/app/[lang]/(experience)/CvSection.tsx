import { SectionHeader } from '@/components/SectionHeader';
import { CvItem } from './CvItem';
import { useTranslations } from 'next-intl';
import { ComponentProps } from '@/typing/props';

interface Props extends ComponentProps {
  i18nNamespace: string;
}

export function CvSection(props: Props) {
  const { className, i18nNamespace } = props;
  const i18n = useTranslations(`sections.educationExperience.${i18nNamespace}`);
  const count = parseInt(i18n('count')) || 0;

  return (
    <section className={`max-w-[800px] w-full ${className ?? ''}`}>
      <SectionHeader decorationClassName="bg-silver">
        {i18n('title').toLocaleUpperCase()}
      </SectionHeader>
      {[...Array(count)].map((_, index) => (
        <CvItem
          key={`education-item-${index}`}
          title={i18n(`${index}.title`)}
          institution={i18n(`${index}.institution`)}
          titleUrl={i18n(`${index}.titleUrl`) ?? undefined}
          institutionUrl={i18n(`${index}.institutionUrl`) ?? undefined}
          years={i18n(`${index}.years`)}
          description={i18n(`${index}.description`)}
        ></CvItem>
      ))}
    </section>
  );
}
