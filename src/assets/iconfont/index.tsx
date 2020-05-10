/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconFenxiang from './IconFenxiang';
import IconFanhui from './IconFanhui';
import IconBofang from './IconBofang';
import IconQuanping from './IconQuanping';
import IconZanting from './IconZanting';
import IconShoucang from './IconShoucang';
import IconJiantouyou from './IconJiantouyou';
import IconJiantouxia from './IconJiantouxia';
import IconWode from './IconWode';
import IconShouye from './IconShouye';
import IconFenlei from './IconFenlei';
import IconXiaoxi from './IconXiaoxi';
import IconFaxian from './IconFaxian';
import IconSousuo from './IconSousuo';
import IconCainixihuan from './IconCainixihuan';
import IconHuanyihuan from './IconHuanyihuan';

export type IconNames = 'icon-fenxiang' | 'icon-fanhui' | 'icon-bofang' | 'icon-quanping' | 'icon-zanting' | 'icon-shoucang' | 'icon-jiantouyou' | 'icon-jiantouxia' | 'icon-wode' | 'icon-shouye' | 'icon-fenlei' | 'icon-xiaoxi' | 'icon-faxian' | 'icon-sousuo' | 'icon-cainixihuan' | 'icon-huanyihuan';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-fenxiang':
      return <IconFenxiang {...rest} />;
    case 'icon-fanhui':
      return <IconFanhui {...rest} />;
    case 'icon-bofang':
      return <IconBofang {...rest} />;
    case 'icon-quanping':
      return <IconQuanping {...rest} />;
    case 'icon-zanting':
      return <IconZanting {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang {...rest} />;
    case 'icon-jiantouyou':
      return <IconJiantouyou {...rest} />;
    case 'icon-jiantouxia':
      return <IconJiantouxia {...rest} />;
    case 'icon-wode':
      return <IconWode {...rest} />;
    case 'icon-shouye':
      return <IconShouye {...rest} />;
    case 'icon-fenlei':
      return <IconFenlei {...rest} />;
    case 'icon-xiaoxi':
      return <IconXiaoxi {...rest} />;
    case 'icon-faxian':
      return <IconFaxian {...rest} />;
    case 'icon-sousuo':
      return <IconSousuo {...rest} />;
    case 'icon-cainixihuan':
      return <IconCainixihuan {...rest} />;
    case 'icon-huanyihuan':
      return <IconHuanyihuan {...rest} />;
  }

  return null;
};

export default IconFont;
