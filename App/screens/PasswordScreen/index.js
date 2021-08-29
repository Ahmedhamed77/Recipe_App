import React, {useState} from 'react';

import {PasswordScreenView} from './View';

export const PasswordScreen = () => {
  const [password, setPassword] = useState([]);
  const [localPassword, setLocalPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [biometryType, setBiometryType] = useState([]);

  //  Authenticate with touchID/faceID
  const clickHandler = () => {
    // TouchID.isSupported()
    //   .then(() => {
    //     authenticate();
    //   })
    //   .catch(error => {
    //     Alert.alert('TouchID not supported');
    //   });
    console.log('clickHandler');
  };

  // checking the password || create new password then navigate to MainScreen
  const handleLogout = () => {
    // dispatch(logoutUser());
    // setTimeout(() => {
    //   navigation.navigate('AutorizationScreen');
    // }, 200);
    console.log('handleLogout');
  };

  const deleteLastPassword = () => {
    setPassword(password.slice(0, password.length - 1));
  };

  return (
    <PasswordScreenView
      handleLogout={handleLogout}
      deleteLastPassword={deleteLastPassword}
      clickHandler={clickHandler}
      Password={password}
      setPassword={setPassword}
      localPassword={localPassword}
      newPassword={newPassword}
    />
  );
};
