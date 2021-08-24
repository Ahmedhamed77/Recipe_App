import React from 'react';
import {View, TextInput, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './style';

interface SearchInputProps {
  onSearch: () => void;
  value: string;
  onTextChange: (text: string) => void;
  onClear?: () => void;
}

export const Searchbox: React.FC<SearchInputProps> = ({
  onSearch,
  value,
  onTextChange,
  onClear,
}) => {
  return (
    <View style={styles.searchBar}>
      {onClear ? (
        value.length > 0 && (
          <Pressable onPress={onClear}>
            {({pressed}) => (
              <FontAwesome name={'close'} color={'#1A5CAA'} size={30} />
            )}
          </Pressable>
        )
      ) : (
        <Pressable style={styles.searchInput} onPress={onSearch}>
          <Feather name={'search'} size={30} color={'#000'} />
        </Pressable>
      )}
      <TextInput
        style={{}}
        value={value}
        onChangeText={onTextChange}
        onSubmitEditing={onSearch}
        placeholder={'Search'}
      />
    </View>
  );
};
