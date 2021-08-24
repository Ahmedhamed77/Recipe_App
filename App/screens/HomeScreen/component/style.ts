import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  rightContent: {
    width: '50%',
  },
  headerText: {
    fontSize: 22,
    color: '#4A4A4A',
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  descriptionText: {
    fontSize: 13,
    paddingBottom: 4,
    color: '#9C9C9C',
  },
  dateText: {
    fontSize: 13,
    color: '#9C9C9C',
  },
  leftContent: {
    width: '50%',
    marginLeft: 8,
  },
  imageStyle: {
    width: '100%',
    height: 140,
  },
});
