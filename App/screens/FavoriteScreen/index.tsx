import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {Store} from '../../redux/store/types';

export const FavoriteScreen = () => {
  const favorites = useSelector((state: Store) => state.Favorites.favorites);
  const reviews = [...Array(5)];

  const SliderImages = ({url}: {url: string}) => (
    <View>
      <FastImage
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginHorizontal: 6,
        }}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#FFF'}}>
      {favorites.map((item, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 8,
              marginVertical: 5,
              paddingHorizontal: 8,
              backgroundColor: '#F6F6F6',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            key={index}>
            <SliderImages url={item?.images[0]} />
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 14, paddingBottom: 12}}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                {reviews.map((review, index) => {
                  return (
                    <MaterialIcons
                      name="star"
                      size={14}
                      key={`${index}+1`}
                      style={
                        item.difficulty > index
                          ? {color: '#FF8C00'}
                          : {color: '#2F2B2B'}
                      }
                    />
                  );
                })}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
