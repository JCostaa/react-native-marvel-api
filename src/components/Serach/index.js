import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const Input = props => {
  return (
    <View style={styles.inputSearch}>
      <Icon name="search1" size={18} color="#fff" />
      <TextInput
        style={styles.textSearch}
        autoCorrect={false}
        placeholder="Busque por um herói"
        placeholderTextColor="#fff"
        returnKeyType="search"
        selectTextOnFocus
        {...props}
      />
    </View>
  );
};

export default Input;
