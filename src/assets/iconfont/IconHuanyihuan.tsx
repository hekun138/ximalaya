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

const IconHuanyihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M838.695385 374.153846A354.619077 354.619077 0 0 0 512 157.538462a354.461538 354.461538 0 1 0 0 708.923076 354.579692 354.579692 0 0 0 330.161231-225.20123 39.384615 39.384615 0 1 1 73.334154 28.750769A433.309538 433.309538 0 0 1 512 945.230769C272.738462 945.230769 78.769231 751.261538 78.769231 512S272.738462 78.769231 512 78.769231c144.423385 0 275.140923 71.286154 354.461538 183.965538V177.230769a39.384615 39.384615 0 0 1 78.769231 0v236.307693a39.266462 39.266462 0 0 1-39.384615 39.384615h-196.923077a39.384615 39.384615 0 0 1 0-78.769231h129.772308z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHuanyihuan.defaultProps = {
  size: 18,
};

export default IconHuanyihuan;
