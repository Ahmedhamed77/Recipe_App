import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  containerPic: {
    marginRight: 10,
    paddingBottom: 8,
  },
  image: {
    width: width - 25,
    height: height * 0.25,
    borderRadius: 12,
  },
  activeDot: {
    marginHorizontal: 6,
    color: '#fff',
  },
  notActiveDot: {
    marginHorizontal: 6,
    color: '#979797',
  },
});
