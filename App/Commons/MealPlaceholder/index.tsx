import React from 'react';
import {View} from 'react-native';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';

import {styles} from './style';

interface MealPlaceholderProps {}
export const MealPlaceholder: React.FC<MealPlaceholderProps> = () => {
  return (
    <View style={styles.containerPlaceholder}>
      <Placeholder
        Animation={Fade}
        Right={() => <PlaceholderMedia style={styles.mediaPlaceholder} />}>
        <PlaceholderLine width={80} />
        <PlaceholderLine width={60} />
        <PlaceholderLine width={50} />
        <PlaceholderLine width={40} />
      </Placeholder>
    </View>
  );
};
