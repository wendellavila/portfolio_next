import { SectionHeader } from '@/components/SectionHeader';
import { CvItem } from './CvItem';
import { useTranslations } from 'next-intl';

interface Props {
  i18nNamespace: string;
}

export function CvSection(props: Props) {
  const { i18nNamespace } = props;
  const i18n = useTranslations(`sections.educationExperience.${i18nNamespace}`);
  const count = parseInt(i18n('count')) || 0;

  return (
    <section>
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
