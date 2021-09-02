import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f6f6f6',
    paddingVertical: 24,
  },
  headerName: {
    width: '70%',
    fontSize: 18,
    letterSpacing: 1.5,
  },

  headerFavoriteIcon: {
    alignSelf: 'center',
    color: 'red',
  },
  headerNotFavoriteIcon: {
    alignSelf: 'center',
    color: '#D0D0D0',
  },
  descriptionContainer: {
    paddingBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    letterSpacing: 0.6,
    lineHeight: 25,
    color: '#9C9C9C',
  },
  difficultyContainer: {
    paddingBottom: 18,
  },
  difficultyText: {
    fontSize: 18,
    paddingBottom: 5,
  },
  difficultyIcons: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  instructionsContainer: {
    paddingBottom: 20,
  },
  instructionText: {
    color: '#4A4A4A',
    fontSize: 21,
    paddingBottom: 8,
  },
  instructionDescription: {
    fontSize: 13,
    color: '#9C9C9C',
  },
  recommendedContainer: {
    marginBottom: 18,
  },
  recommendedText: {
    paddingBottom: 10,
    fontSize: 20,
  },
  recommendedPic: {
    width: 189,
    marginRight: 6,
    borderRadius: 8,
    height: 190,
  },
});
