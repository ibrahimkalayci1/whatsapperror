import React from 'react';
import { Image } from 'react-native';
import { TabIconProps } from '../../models/ui/tabIconProps';
import { CALLS, CAMERA, CHATS, SETTINGS, STATUS } from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({ size,  route }) => {
  switch (route?.name) {
    case STATUS:
      return (
        <Image
          source={require('../../assets/icons/statusOutline.png')}
          style={{
            width: size,
            height: size,
            resizeMode: 'contain',
          }}
        />
      );
    case CALLS:
      return (
        <Image
          source={require('../../assets/icons/callIcon.png')}
          style={{
            width: size,
            height: size,
            resizeMode: 'contain',
          }}
        />
      );
    case CAMERA:
      return (
        <Image
          source={require('../../assets/icons/cameraIcon.png')}
          style={{
            width: size,
            height: size,
            resizeMode: 'contain',
          }}
        />
      );
    case CHATS:
      return (
        <Image
          source={require('../../assets/icons/chatEmpty.png')}
          style={{
            width: size,
            height: size,
            resizeMode: 'contain',
          }}
        />
      );
    case SETTINGS:
      return (
        <Image
          source={require('../../assets/icons/settingsIcon.png')}
          style={{
            width: size,
            height: size,
            resizeMode: 'contain',
          }}
        />
      );

    default:
      <Image
        source={require('../../assets/icons/statusOutline.png')}
        style={{
          width: size,
          height: size,
        }}
      />;
  }
};

export default TabIcon;
