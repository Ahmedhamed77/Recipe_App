import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './style';

export const NumberButton = ({password, setPassword}) => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
    <TouchableOpacity
      key={number}
      style={styles.PasswordNumber}
      onPress={() =>
        password?.length < 4 && setPassword([...password, number])
      }>
      <Text style={styles.PasswordNumberText}>{number}</Text>
    </TouchableOpacity>
  ));
};
