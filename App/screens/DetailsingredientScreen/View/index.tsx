import React from 'react';
import {View, SafeAreaView, Text, Image, ScrollView} from 'react-native';
import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SimilarProps} from '../../../Api/types';

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
    uuid,
    name,
    images,
    lastUpdated,
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
        <View style={{backgroundColor: '#99B7B0', paddingBottom: 20}}>
          <Text>image slider will be here.</Text>
        </View>
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
                <Image
                  key={index}
                  style={styles.recommendedPic}
                  source={{uri: item.image}}
                  resizeMode={'cover'}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
