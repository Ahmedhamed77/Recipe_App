import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SimilarProps} from '../../../Api/types';
import {Slider} from '../components/Slider';

interface DetailsIngredientsScreenViewProps {
  uuid: string;
  name: string;
  images: string[];
  lastUpdated: number;
  description: string;
  instructions: string;
  difficulty: number;
  similar: SimilarProps[];
  isLoading: boolean;
  reviews: number[];
}
export const DetailsIngredientsScreenView: React.FC<DetailsIngredientsScreenViewProps> =
  ({
    name,
    images,
    description,
    instructions,
    difficulty,
    similar,
    isLoading,
    reviews,
  }) => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerName}>{name}</Text>
          <MaterialIcons name="favorite" size={30} style={styles.headerIcon} />
        </View>
        <Slider images={images} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.difficultyContainer}>
          <Text style={styles.difficultyText}>Difficulty:</Text>
          <View style={styles.difficultyIcons}>
            {reviews.map((item, index) => {
              return (
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={25}
                  key={`${index}+1`}
                  style={
                    difficulty > index ? {color: '#99B7B0'} : {color: '#2F2B2B'}
                  }
                />
              );
            })}
          </View>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionText}>Instruction:</Text>
            <Text style={styles.instructionDescription}>{instructions}</Text>
          </View>
          <Text style={{paddingBottom: 10, fontSize: 20}}>Recommended:</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedContainer}>
            {similar?.map((item, index) => {
              return (
                <FastImage
                  key={index}
                  style={styles.recommendedPic}
                  source={{uri: item.image}}
                  resizeMode={FastImage.resizeMode.cover}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
