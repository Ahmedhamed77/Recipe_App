import React, {useState} from 'react';
import {Text, ScrollView, View, NativeScrollEvent} from 'react-native';
import FastImage from 'react-native-fast-image';

import {styles} from './style';

interface SliderProps {
  images: string[];
}
export const Slider: React.FC<SliderProps> = ({images}) => {
  const [activePic, setActivePic] = useState(0);

  // change color of active image[index].
  const changeActive = (nativeEvent: NativeScrollEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activePic) {
      setActivePic(slide);
    }
  };

  // for loading image fast.
  const SliderImages = ({url}: {url: string}) => (
    <View style={styles.containerPic}>
      <FastImage
        style={styles.image}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );

  return (
    <View>
      {images?.length > 1 ? (
        <>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator
            onScroll={({nativeEvent}) => changeActive(nativeEvent)}>
            {images?.map(image => {
              return <SliderImages url={image} />;
            })}
          </ScrollView>
          <View style={styles.dotsContainer}>
            {images?.map((e, index) => {
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
          {images?.map(image => {
            console.log('image', image);
            return <SliderImages url={image} />;
          })}
        </>
      )}
    </View>
  );
};
