import React from 'react';
import {Text, View, FlatList} from 'react-native';

import {MealPlaceholder} from '../../Commons/MealPlaceholder';
import {PlaceholderModal} from '../../Commons/PlaceholderModal';
import {Searchbox} from '../../Commons/Searchbox';
import {Pages} from '../../navigation/Pages';
import {
  RootNavigationProp,
  RootParamterScreensList,
} from '../../navigation/Route/interface';
import {HomeScreenComponent} from './component';
import {styles} from './style';

interface HomeScreenProps {
  navigation: RootNavigationProp<RootParamterScreensList.home>;
}
export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dummyData: any[] = [
    {
      id: 1,
      title: 'Caramelized French Onion Dip',
      description: 'Yummy home made meat loaf, great for left lovers.',
      date: '01.05.2018',
      url: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: 2,
      title: 'Caramelized French Onion Dip',
      description: 'Yummy home made meat loaf, great for left lovers.',
      date: '01.05.2018',
      url: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: 3,
      title: 'Caramelized French Onion Dip',
      description: 'Yummy home made meat loaf, great for left lovers.',
      date: '01.05.2018',
      url: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: 4,
      title: 'Caramelized French Onion Dip',
      description: 'Yummy home made meat loaf, great for left lovers.',
      date: '01.05.2018',
      url: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: 5,
      title: 'Caramelized French Onion Dip',
      description: 'Yummy home made meat loaf, great for left lovers.',
      date: '01.05.2018',
      url: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: 6,
      title: 'Caramelized French Onion Dip',
      description: 'Yummy home made meat loaf, great for left lovers.',
      date: '01.05.2018',
      url: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];
  const onPressComponent = () => {
    navigation.navigate(Pages.Root.ingredientDetails);
  };
  const renderItem = ({item}) => (
    <HomeScreenComponent {...item} onPress={onPressComponent} />
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Recipes</Text>
        <Searchbox />
      </View>
      <FlatList
        contentContainerStyle={{marginBottom: 12}}
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <PlaceholderModal outputCount={5} children={<MealPlaceholder />} />
        }
      />
    </View>
  );
};
