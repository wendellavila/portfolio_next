'use client';
import { Icon, IconProps as Props } from '@iconify/react';
import { Map } from '@/typing/types';

import { MdiGithub } from './MdiGithub';
import { MdiLinkedin } from './MdiLinkedin';
import { MdiGmail } from './MdiGmail';
import { CarbonExecutableProgram } from './CarbonExecutableProgram';
import { FlagpackBr } from './FlagpackBr';
import { FlagpackUs } from './FlagpackUs';
import { MaterialSymbolsLanguage } from './MaterialSymbolsLanguage';
import { MdiChevronDown } from './MdiChevronDown';
import { BasilGmailSolid } from './BasilGmailSolid';
import { SvgSpinners3DotsFade } from './SvgSpinners3DotsFade';
import { FormkitDownload } from './FormkitDownload';
import { PhCaretDownLight } from './PhCaretDownLight';
/**
 * Client wrapper for using Iconify icons inside server components.
 * @param {Props} props
 * @returns Iconify Icon Component
 */

export function Iconify(props: Props) {
  const icon = props.icon as string;
  // Fallback icons
  switch (icon) {
    case 'mdi:github':
      return <MdiGithub {...props} />;
    case 'mdi:linkedin':
      return <MdiLinkedin {...props} />;
    case 'mdi:gmail':
      return <MdiGmail {...props} />;
    case 'mdi:chevron-down':
      return <MdiChevronDown {...props} />;
    case 'carbon:executable-program':
      return <CarbonExecutableProgram {...props} />;
    case 'flagpack:us':
      return <FlagpackUs {...props} />;
    case 'flagpack:br':
      return <FlagpackBr {...props} />;
    case 'material-symbols:language':
      return <MaterialSymbolsLanguage {...props} />;
    case 'basil:gmail-solid':
      return <BasilGmailSolid {...props} />;
    case 'svg-spinners:3-dots-fade':
      return <SvgSpinners3DotsFade {...props} />;
    case 'formkit:download':
      return <FormkitDownload {...props} />;
    case 'ph:caret-down-light':
      return <PhCaretDownLight {...props} />;
  }
  return <Icon {...props} />;
}
