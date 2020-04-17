import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
const Hero = ({item, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.heroes}
        onPress={() => navigation.navigate('Detail', {id: item.id})}>
        <Image
          style={styles.heroesWrapper}
          resizeMode="cover"
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <View style={styles.heroesBox}>
          <View>
            <Text style={styles.heroesName}>{item.name}</Text>
            <Text style={styles.heroesInfo}>
              {item.comics.items.length} quadrinhos |{' '}
              {item.stories.items.length} histórias
            </Text>
          </View>
          <View>
            <Text style={styles.heroesDescription} numberOfLines={3}>
              {item.description
                ? item.description
                : 'Personagem ainda não tem descrição'}
            </Text>
          </View>
          <Text style={styles.heroesViewMore}>Ver mais</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Hero;
