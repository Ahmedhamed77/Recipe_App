import React, {useCallback, useState} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
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
  const [searchValue, setSearchValue] = useState('');
  const [filterData, setFilterData] = useState(data);

  const searchFilter = useCallback(
    text => {
      if (text) {
        const newData = data.filter(item => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });

        setFilterData(newData);
        setSearchValue(text);
      } else {
        setFilterData(data);
        setSearchValue(text);
      }
    },
    [data],
  );
  const renderItem = ({item}: {item: Recipe}) => {
    return (
      <HomeScreenComponent
        key={item.uuid}
        {...item}
        onPress={onPressComponent}
      />
    );
  };

  console.log(filterData, 'filterData');
  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      contentContainerStyle={[
        styles.screenContainer,
        {marginBottom: 12, paddingHorizontal: 12},
      ]}
      data={filterData}
      ListHeaderComponent={() => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Recipes</Text>
            <Searchbox
              value={searchValue}
              onTextChange={text => setSearchValue(text)}
              onSearch={() => searchFilter(searchValue)}
            />
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
  );
};
