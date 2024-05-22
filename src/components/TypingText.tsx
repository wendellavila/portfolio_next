'use client';
import { useEffect, useState } from 'react';
import { ComponentProps } from '@/typing/props';

interface TypingTextProps extends ComponentProps {
  component?: TextComponent;
  ariaLabel?: string;
  children: string;
}
type TextComponent = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * A text component with typing animation.
 * @param {object} props
 * @param {string} props.component The html tag used for the component.
 * @param {string} props.ariaLabel Text used for screen readers.
 */
export function TypingText(props: TypingTextProps) {
  const { ariaLabel, children, className, component } = props;
  const caret = 'ꕯ';
  const ComponentWrapper = component ?? 'span';
  const [displayText, setDisplayText] = useState<string>(caret);
  let timeoutIds: ReturnType<typeof setTimeout>[] = [];

  useEffect(() => {
    timeoutIds.push(
      setTimeout(() => {
        setDisplayText('|');
      }, 0)
    );
    for (let i = 0; i < children.length; i++) {
      timeoutIds.push(
        setTimeout(() => {
          setDisplayText(
            previousText =>
              `${previousText.slice(0, previousText.length - 1)}${children[i]}|`
          );
        }, 100 * (i + 1))
      );
    }
    timeoutIds.push(
      setTimeout(() => {
        setDisplayText(previousText =>
          previousText.slice(0, previousText.length - 1)
        );
      }, 100 * (children.length + 2))
    );
    return () => {
      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    };
  }, [children, setDisplayText]);

  return (
    <ComponentWrapper className={className} aria-label={ariaLabel}>
      {displayText}
    </ComponentWrapper>
  );
}
