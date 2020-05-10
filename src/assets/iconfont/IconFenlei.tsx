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

const IconFenlei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M575.68 736a160.32 160.32 0 1 0 160.32-160.32H599.893333c-13.461333 0-24.192 10.752-24.192 24.192V736zM736 533.333333A202.666667 202.666667 0 1 1 533.333333 736V599.893333A66.432 66.432 0 0 1 599.872 533.333333H736zM490.666667 736a202.666667 202.666667 0 1 1-202.666667-202.666667h136.128A66.432 66.432 0 0 1 490.666667 599.872V736z m-202.666667-160.32a160.32 160.32 0 1 0 160.32 160.32V599.893333c0-13.44-10.730667-24.192-24.192-24.192H288zM533.333333 287.978667A202.666667 202.666667 0 1 1 736 490.666667H599.893333A66.432 66.432 0 0 1 533.333333 424.128V288z m202.666667 160.341333a160.32 160.32 0 1 0-160.32-160.32v136.128c0 13.44 10.730667 24.192 24.192 24.192H736zM448.32 288a160.32 160.32 0 1 0-160.32 160.32h136.128c13.461333 0 24.192-10.752 24.192-24.192V288zM288 490.666667A202.666667 202.666667 0 1 1 490.666667 288v136.128A66.432 66.432 0 0 1 424.128 490.666667H288z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFenlei.defaultProps = {
  size: 18,
};

export default IconFenlei;
