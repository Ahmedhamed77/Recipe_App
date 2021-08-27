import {Alert} from 'react-native';
import {Platform, ToastAndroid} from 'react-native';

export const showToast = (text: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(text, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  } else {
    Alert.alert(text);
  }
};
