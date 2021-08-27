import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, Image} from 'react-native';
import {styles} from './style';

export interface HomeScreenComponentProps {
  // title: string;
  // description: string;
  // date: string;
  // url: string;
  uuid: string;
  name: string;
  images: string[];
  lastUpdated: number;
  description: string;
  instructions: string;
  difficulty: number;
  onPress: () => void;
}
export const HomeScreenComponent: React.FC<HomeScreenComponentProps> = ({
  name,
  description,
  lastUpdated,
  images,
  onPress,
}) => {
  console.log(images);
  return (
    <TouchableOpacity onPress={onPress} style={styles.componentContainer}>
      <View style={styles.rightContent}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <Text style={styles.dateText}>{lastUpdated}</Text>
      </View>
      <View style={styles.leftContent}>
        {images.map(url => {
          return (
            <Image
              style={styles.imageStyle}
              source={{
                uri: url,
              }}
            />
          );
        })}
      </View>
    </TouchableOpacity>
  );
};
