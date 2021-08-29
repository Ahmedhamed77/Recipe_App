import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Recipe} from '../../../api/types';

import {MealPlaceholder} from '../../../Commons/MealPlaceholder';
import {PlaceholderModal} from '../../../Commons/PlaceholderModal';
import {Searchbox} from '../../../Commons/Searchbox';
import {HomeScreenComponent} from '../component';
import {styles} from './style';

interface HomeScreenViewProps {
  data: Recipe[];
  isLoading: boolean;
  onPressComponent: (uuid: string) => void;
}
export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  data,
  isLoading,
  onPressComponent,
}) => {
  const renderItem = ({item}: {item: Recipe}) => {
    return (
      <HomeScreenComponent
        key={item.uuid}
        {...item}
        onPress={onPressComponent}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={[styles.screenContainer, {marginBottom: 12}]}
        data={data}
        ListHeaderComponent={() => {
          return (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Recipes</Text>
              <Searchbox />
            </View>
          );
        }}
        onEndReachedThreshold={0.7}
        refreshing={isLoading}
        renderItem={renderItem}
        keyExtractor={item => `${item.uuid}${item.lastUpdated}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <PlaceholderModal outputCount={5} children={<MealPlaceholder />} />
        }
      />
    </View>
  );
};
