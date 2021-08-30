import React, {useState} from 'react';
import {Text, ScrollView, View, Image, NativeScrollEvent} from 'react-native';
import {styles} from './style';

interface SliderProps {
  images: string[];
}
export const Slider: React.FC<SliderProps> = ({images}) => {
  const [activePic, setActivePic] = useState(0);
  const changeActive = (nativeEvent: NativeScrollEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activePic) {
      setActivePic(slide);
    }
  };
  return (
    <View>
      {images.length > 1 ? (
        <>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator
            onScroll={({nativeEvent}) => changeActive(nativeEvent)}>
            {images.map(image => {
              return (
                <View>
                  <Image
                    style={{}}
                    source={{uri: image}}
                    resizeMode={'cover'}
                  />
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.imagesContainer}>
            {images.map((e, index) => {
              console.log('index', index);
              return (
                <Text
                  style={
                    activePic === index ? styles.activeDot : styles.notActiveDot
                  }
                  key={`${e}+${index}`}>
                  ⬤
                </Text>
              );
            })}
          </View>
        </>
      ) : (
        <>
          {images.map(image => {
            console.log('image', image);
            return (
              <View>
                <Text>aaa</Text>
                <Image style={{}} source={{uri: image}} resizeMode={'cover'} />
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};
