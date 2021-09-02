import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RecipeDetails} from '../../../Api/types';
import {Slider} from '../components/Slider';
import {useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../../../redux/favorites/action';

interface DetailsIngredientsScreenViewProps {
  recipe: RecipeDetails;
  isLoading: boolean;
  reviews: number[];
  isFavorite: (recipe: RecipeDetails) => boolean;
}
export const DetailsIngredientsScreenView: React.FC<DetailsIngredientsScreenViewProps> =
  ({recipe, isLoading, isFavorite, reviews}) => {
    const dispatch = useDispatch();
    console.log(isLoading);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerName}>{recipe.name}</Text>
          <TouchableOpacity
            onPress={() => {
              isFavorite(recipe)
                ? dispatch(removeFavorite(recipe))
                : dispatch(addFavorite(recipe));
            }}>
            {isLoading ? (
              <ActivityIndicator color={'#000'} />
            ) : (
              <MaterialIcons
                name="favorite"
                size={30}
                style={
                  isFavorite(recipe)
                    ? styles.headerFavoriteIcon
                    : styles.headerNotFavoriteIcon
                }
              />
            )}
          </TouchableOpacity>
        </View>
        <Slider images={recipe.images} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{recipe.description}</Text>
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
                    recipe.difficulty > index
                      ? {color: '#99B7B0'}
                      : {color: '#2F2B2B'}
                  }
                />
              );
            })}
          </View>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionText}>Instruction:</Text>
            <Text style={styles.instructionDescription}>
              {recipe.instructions}
            </Text>
          </View>
          <Text style={styles.recommendedText}>Recommended:</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedContainer}>
            {recipe.similar?.map((item, index) => {
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
