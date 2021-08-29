import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

export const InputMask = ({password}) => {
  return [1, 2, 3, 4].map(number => (
    <View
      key={number}
      style={
        password?.length >= number
          ? styles.PasswordMaskBlack
          : styles.PasswordMask
      }
    />
  ));
};
