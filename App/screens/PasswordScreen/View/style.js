import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  PasswordScroll: {
    backgroundColor: '#fff',
    height: '100%',
  },
  PasswordContainer: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  PasswordLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeHolderLogo: {
    alignSelf: 'center',
    width: 165,
    height: 160,
    borderRadius: 100,
  },
  PasswordLogo: {
    // fontWeight: '500',
    // fontSize: 24,
  },
  PasswordGroup: {
    width: 320,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  PasswordNumber: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: '#FFD56C',
    borderRadius: 72,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  PasswordNumberText: {
    fontSize: 32,
    lineHeight: 39,
    fontWeight: '200',
    color: '#f6f6f6',
  },
  PasswordMaskBlack: {
    backgroundColor: '#3A3A3A',
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  PasswordMask: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginHorizontal: 3,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#f6f6f6',
  },
  MaskedPassBlock: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  PasswordGroupBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  PasswordGroupBottomItem: {
    width: 65,
    height: 65,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinCodeText: {
    color: '#F6F6F6',
    paddingTop: 20,
    fontSize: 24,
  },
  existText: {
    fontSize: 14,
    color: '#fff',
    paddingTop: 30,
  },
});
