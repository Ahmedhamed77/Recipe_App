import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  image: {
    width: width,
    height: height * 0.25,
    borderRadius: 12,
    flex: 1,
  },
  activeDot: {
    marginHorizontal: 6,
    color: 'grey',
  },
  notActiveDot: {
    marginHorizontal: 6,
    color: 'black',
  },
});
