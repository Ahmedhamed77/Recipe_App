import React, {useState} from 'react';
import {Text, ScrollView, View, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = (width * 100) / 180;

export const index = () => {
  const [active, setActive] = useState(0);
  const images = [
    'https://images.pexels.com/photos/9166412/pexels-photo-9166412.jpeg?cs=srgb&dl=pexels-lisa-9166412.jpg&fm=jpg',
    'https://images.pexels.com/photos/54283/pexels-photo-54283.jpeg?cs=srgb&dl=pexels-kaboompics-com-54283.jpg&fm=jpg',
    'https://images.pexels.com/photos/9166412/pexels-photo-9166412.jpeg?cs=srgb&dl=pexels-lisa-9166412.jpg&fm=jpg',
  ];
  const changeActive = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      //   setActive({active: slide});
    }
  };
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator
        onScroll={NativeEvent => changeActive(NativeEvent)}>
        {images.map(image => {
          return (
            <View>
              <Image
                style={{width, height}}
                source={{uri: image}}
                resizeMode={'cover'}
              />
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {images.map((e, index) => {
          return (
            <Text
              key={e}
              style={
                index === active
                  ? {color: 'white', margin: 3}
                  : {color: 'red', margin: 3}
              }>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};
