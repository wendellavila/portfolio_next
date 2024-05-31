import { ComponentProps } from '@/typing/props';

interface Props extends ComponentProps {
  title: string;
  institution: string;
  titleUrl?: string;
  institutionUrl?: string;
  years?: string;
  description?: string;
  urlTarget?: 'name' | 'institution';
}

export function CvItem(props: Props) {
  const { title, institution, description, titleUrl, institutionUrl, years } =
    props;
  const descriptionLines = (description ?? '').split('\n');

  return (
    <article className="pb-6">
      <div className="flex flex-row items-center justify-between mb-2 gap-3">
        <div>
          <h4 className="text-md font-semibold">
            {titleUrl ? (
              <a className="hover:underline" href={titleUrl} target="_blank">
                {title}
              </a>
            ) : (
              title
            )}
          </h4>
          <p className="text-md">
            {institutionUrl ? (
              <a
                className="hover:underline"
                href={institutionUrl}
                target="_blank"
              >
                {institution}
              </a>
            ) : (
              institution
            )}
          </p>
        </div>
        <span className="text-sm italic">{years}</span>
      </div>
      {descriptionLines.length <= 1 ? (
        <p className="ml-5">{descriptionLines[0]}</p>
      ) : (
        <ul className="list-[square] ml-5 marker:text-blueprint">
          {descriptionLines.map(
            (line, lineIndex) =>
              line != '' && (
                <li className="list-inside" key={`${line}-${lineIndex}`}>
                  {line}
                </li>
              )
          )}
        </ul>
      )}
    </article>
  );
}
