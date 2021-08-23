import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

export const HomeScreen = () => {
  return (
    <View>
      <Icon name="directions-transit" />
      <Placeholder Animation={Fade} Left={PlaceholderMedia}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine
          width={12}
          height={30}
          style={{backgroundColor: 'red', borderRadius: 45}}
        />
        <PlaceholderLine width={30} />
      </Placeholder>
    </View>
  );
};
