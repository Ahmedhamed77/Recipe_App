import React, {useMemo} from 'react';
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
  onPress: (uuid: string) => void;
}
export const HomeScreenComponent: React.FC<HomeScreenComponentProps> = ({
  uuid,
  name,
  description,
  lastUpdated,
  images,
  onPress,
}) => {
  //getting only one image from the imagesArray
  const imagesSlice = useMemo(() => images?.slice(0, 1), [images]);
  const time = new Date(lastUpdated).toLocaleDateString('en-US');
  return (
    <TouchableOpacity
      onPress={() => onPress(uuid)}
      style={styles.componentContainer}>
      <View style={styles.rightContent}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <Text style={styles.dateText}>{time}</Text>
      </View>
      <View style={styles.leftContent}>
        {imagesSlice.map(url => {
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
