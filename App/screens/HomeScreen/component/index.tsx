import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, Image} from 'react-native';
import {styles} from './style';

export interface HomeScreenComponentProps {
  title: string;
  description: string;
  date: string;
  url: string;
  onPress: () => void;
}
export const HomeScreenComponent: React.FC<HomeScreenComponentProps> = ({
  title,
  description,
  date,
  url,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.componentContainer}>
      <View style={styles.rightContent}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.leftContent}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: url,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
