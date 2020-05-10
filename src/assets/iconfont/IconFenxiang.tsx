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

const IconFenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.8 549.9136v294.7584A128.0768 128.0768 0 0 1 844.8 972.8H179.2a128 128 0 0 1-128-128V179.2c0-70.7328 57.1904-128 127.872-128h202.3168a25.6 25.6 0 0 0 0-51.2H179.072A179.072 179.072 0 0 0 0 179.2v665.6a179.2 179.2 0 0 0 179.2 179.2h665.6c98.944 0 179.2-80.2816 179.2-179.328V549.9136a25.6 25.6 0 0 0-51.2 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M960 128c-353.4592 0-640 286.5408-640 640a25.6 25.6 0 0 0 51.2 0c0-325.1968 263.6032-588.8 588.8-588.8a25.6 25.6 0 0 0 0-51.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M720.1024 62.1568l256 102.4a25.6 25.6 0 0 0 18.9952-47.5136l-256-102.4a25.6 25.6 0 0 0-18.9952 47.5136z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M808.8064 348.4672l194.6368-189.312a25.6 25.6 0 1 0-35.6864-36.7104L773.12 311.7568a25.6 25.6 0 1 0 35.6864 36.7104z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IconFenxiang.defaultProps = {
  size: 18,
};

export default IconFenxiang;
