/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconXiaoxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 161.536a330.666667 330.666667 0 0 1 298.666667 329.130667h-0.341334c0.213333 1.493333 0.341333 2.986667 0.341334 4.565333v219.434667h39.68a32 32 0 0 1 0 64h-212.053334a160 160 0 0 1-316.586666 0H141.909333a32 32 0 1 1 0-64h39.424v-219.434667c0-1.578667 0.128-3.072 0.341334-4.565333H181.333333a330.666667 330.666667 0 0 1 298.666667-329.130667V128a32 32 0 1 1 64 0v33.536z m-298.666667 553.130667h533.333334v-219.434667c0-1.578667 0.128-3.072 0.341333-4.565333h-0.341333a266.666667 266.666667 0 1 0-533.333334 0h-0.341333c0.213333 1.493333 0.341333 2.986667 0.341333 4.565333v219.434667z m359.765334 64H418.901333a96 96 0 0 0 186.197334 0z"
        fill={getIconColor(color, 0, '#111111')}
      />
    </Svg>
  );
};

IconXiaoxi.defaultProps = {
  size: 18,
};

export default IconXiaoxi;
