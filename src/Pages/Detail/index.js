/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator, Text} from 'react-native';
import Button from '../../components/Buttons';
import styles from './styles';
import api from '../../services/api';
import {getApiParams} from '../../services/marvel';

export default function Detail({route, navigation}) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = route.params.id;

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  console.log(character);
  async function fetchCharacter() {
    const param = {
      params: {
        ...getApiParams(),
      },
    };
    const response = await api.get(`characters/${id}`, param);
    const [person] = response.data.data.results;
    setCharacter(person);
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="red" />
      </View>
    );
  }
  const [detail, wiki, comics] = character.urls;

  return (
    <View style={styles.containerDetail}>
      <ImageBackground
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
        resizeMode="cover"
        style={styles.characterWrapper}>
        <View style={styles.characterInfo}>
          <View style={styles.characterContainerInfo}>
            <Text style={styles.characterName}>{character.name}</Text>
          </View>
          <View style={styles.containerButton}>
            <Button
              icon="contacts"
              onPress={() =>
                navigation.navigate('ViewWiki', {link: detail.url})
              }>
              Perfil
            </Button>
            <Button
              icon="barschart"
              style={styles.buttonInfo}
              onPress={() => navigation.navigate('ViewWiki', {link: wiki.url})}>
              Wiki
            </Button>
            <Button
              icon="book"
              onPress={() =>
                navigation.navigate('ViewWiki', {link: comics.url})
              }>
              Comics
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
