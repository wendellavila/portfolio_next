'use client';
import { Icon, IconProps as Props } from '@iconify/react';

/**
 * Client wrapper for using Iconify icons inside server components.
 * @param {Props} props
 * @returns Iconify Icon Component
 */
export function Iconify(props: Props) {
  return <Icon {...props} />;
}
