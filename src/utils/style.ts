// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Appearance,
  type ColorSchemeName,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from 'react-native';
import { baseTheme, type ITheme } from '../styles/themeStyle';
import { isNullish } from './validators';

export const DynamicStyleSheet = {
  create: <T extends NamedStyles<T> | NamedStyles<any>>(
    styles: Styles<T>,
  ): T => {
    const cache = new Map<ColorSchemeName, T>();
    const theme = Appearance.getColorScheme();
    const stylesObject = getStyles(
      styles,
      baseTheme,
    );

    cache.set(theme, stylesObject);

    const dynamicStyles: {
      [key: string]: ViewStyle | TextStyle | ImageStyle;
    } = {};

    for (const key in stylesObject) {
      Object.defineProperty(dynamicStyles, key, {
        enumerable: true,
        get() {
          const _theme = Appearance.getColorScheme();

          if (!cache.has(_theme)) {
            cache.set(
              _theme,
              getStyles(styles, baseTheme),
            );
          }
          const styleObject = cache.get(_theme);

          if (isNullish(styleObject)) {
            throw new Error(
              `Could not get styleObject from cache ${JSON.stringify(cache)}`,
            );
          }

          return styleObject ? styleObject[key] : null;
        },
      });
    }

    return dynamicStyles as T;
  },
};

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type Styles<T extends NamedStyles<T>> = ((theme: ITheme) => T) | T;

function getStyles<T extends NamedStyles<T>>(
  styles: Styles<T>,
  theme: ITheme,
): T {
  return StyleSheet.create(
    typeof styles === 'function' ? styles(theme) : styles,
  );
}

export const Colors = (color?: IColor): IColor => {
  return {
    primary: color?.primary ?? "#C44040",
    secondary: color?.secondary ?? "#1A1A1A",
    black: color?.black ?? "#000",
    white: color?.white ?? "#FFF",
    greyLight: color?.greyLight ?? "#B2B2B2",
    lighter: color?.lighter ?? "#FFFFFF",
    disabled: color?.disabled ?? "#E3E3E3",
    success: color?.success ?? "#00FF00",
    error: color?.error ?? "#FF0000",
    errorBackground: color?.errorBackground ?? "#FFD7D7",
  }
};
