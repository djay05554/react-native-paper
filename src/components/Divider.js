/* @flow */

import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import withTheme from '../core/withTheme';
import type { Theme } from '../types';
import { black, white } from '../styles/colors';

type Props = {
  /**
   *  Whether divider has a left inset.
   */
  inset?: boolean,
  style?: any,
  /**
   * @optional
   */
  theme: Theme,
};

/**
 * A divider is a thin, lightweight rule that groups content in lists and page layouts.
 *
 * ## Usage
 * ```js
 * const MyComponent = () => (
 *   <View>
 *     <Text>Apple</Text>
 *     <Divider />
 *     <Text>Orange</Text>
 *     <Divider />
 *   </View>
 * );
 * ```
 */
const Divider = (props: Props) => {
  const { inset, style, theme } = props;
  const { dark: isDarkTheme } = theme;
  return (
    <View
      {...props}
      style={[
        isDarkTheme ? styles.dividerDarkTheme : styles.dividerDefaultTheme,
        inset && styles.inset,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dividerDefaultTheme: {
    backgroundColor: color(black)
      .alpha(0.12)
      .rgb()
      .string(),
    height: StyleSheet.hairlineWidth,
  },
  dividerDarkTheme: {
    backgroundColor: color(white)
      .alpha(0.12)
      .rgb()
      .string(),
    height: StyleSheet.hairlineWidth,
  },
  inset: {
    marginLeft: 72,
  },
});

export default withTheme(Divider);
