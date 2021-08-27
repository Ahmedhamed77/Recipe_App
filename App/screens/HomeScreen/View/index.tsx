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
  onPressComponent: () => void;
}
export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  data,
  isLoading,
  onPressComponent,
}) => {
  const renderItem = ({item}: {item: Recipe}) => (
    <HomeScreenComponent {...item} onPress={onPressComponent} />
  );

  return (
    <View style={{flex: 1, width: '100%'}}>
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
        keyExtractor={item => `${item.uuid}${item.difficulty}`}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <PlaceholderModal outputCount={5} children={<MealPlaceholder />} />
        }
      />
    </View>
  );
};
