import axios from 'axios';
import {Alert} from 'react-native';

import {showToast} from '../../Commons/ShowToast';

export const errorHandler = (error: any) => {
  if (axios.isAxiosError(error)) {
    showToast(error.response?.data?.error);
  }

  if (error?.data?.name && error?.data?.message) {
    Alert.alert(error?.data?.name, error?.data?.message);
  }

  if (error?.data?.error) {
    showToast(error?.data?.error);
  }

  if (error instanceof Error) {
    showToast(error.message);
  }
};
