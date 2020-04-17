import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      resizeMode="cover"
      source={require('../../images/logo.png')}
    />
  );
};

export default Logo;
