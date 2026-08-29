'use client';

/**
 * This is a generated file. If you modify it manually, your changes will be lost!
 * This file was generated from packages/generator-react-native-vector-icons/src/app/templates
 * If you're contributing to react-native-vector-icons, make the change there; otherwise it'll be lost
 *
 * PhosphorIcons icon set component.
 * Usage: <PhosphorIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@react-native-vector-icons/common';

import glyphMap from '../glyphmaps/PhosphorIcons.json';
import type { ComponentProps } from 'react';

 const RegularIcon = createIconSet(glyphMap, {
  postScriptName: 'PhosphorIcons',
  fontFileName: 'PhosphorIcons.ttf',
});
 const FillIcon = createIconSet(glyphMap, {
  postScriptName: 'PhosphorIcons',
  fontFileName: 'PhosphorIcons.ttf',
});

type Props =
  | ({ weight: 'regular' } & ComponentProps<typeof RegularIcon>)
  | ({ weight: 'fill' } & ComponentProps<typeof FillIcon>)
  | ({ weight?: never } & ComponentProps<typeof RegularIcon>);

export const PhosphorIcon = (props: Props) => {
  const { weight } = props;

  switch (weight) {
    case 'fill':
      return <FillIcon {...props} />;
    case 'regular':
      return <RegularIcon {...props} />;
    default:
      console.warn(`noSuchIconTypeName: '${weight}' icon type does not exist for PhosphorIcon`);
      return <RegularIcon {...(props as ComponentProps<typeof RegularIcon>)} />;
  }
};

export type PhosphorIconsIconName = keyof typeof glyphMap;

/** @alias */
export default PhosphorIcon;
