import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import {InputMask} from '../components/InputMask';
import {NumberButton} from '../components/NumberButton';
import {styles} from './style';

export const PasswordScreenView = ({
  localPassword,
  newPassword,
  clickHandler,
  password,
  setPassword,
  deleteLastPassword,
  handleLogout,
}) => {
  return (
    <View>
      <View style={styles.PasswordContainer}>
        <View style={styles.PasswordLogoContainer}>
          <Placeholder Animation={Fade}>
            <PlaceholderMedia style={styles.placeHolderLogo} />
          </Placeholder>
          <Text style={styles.pinCodeText}>Пинкод</Text>
        </View>
        <View style={styles.MaskedPassBlock}>
          <InputMask password={password} />
        </View>
        <View style={styles.PasswordGroup}>
          <NumberButton password={password} setPassword={setPassword} />
          <View style={styles.PasswordGroupBottom}>
            <TouchableOpacity
              style={styles.PasswordGroupBottomItem}
              onPress={() => clickHandler()}>
              <PlaceholderLine style={{width: 50, height: 40}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.PasswordNumber, styles.PasswordGroupBottomItem]}
              onPress={() =>
                password?.length < 4 && setPassword([...password, 0])
              }>
              <Text style={styles.PasswordNumberText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.PasswordGroupBottomItem}
              onPress={() => deleteLastPassword()}>
              <PlaceholderLine style={{width: 50, height: 40}} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.existText}>Выход</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
