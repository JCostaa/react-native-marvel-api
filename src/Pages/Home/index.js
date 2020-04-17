/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, View, Text } from 'react-native';
import Input from '../../components/Serach';
import Hero from '../../components/Heroes';
import styles from './styles';
import api from '../../services/api';
import { getApiParams } from '../../services/marvel';

export default function Home({ navigation }) {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [search, setSearch] = useState('');
  const flatCharRef = useRef(null);
  console.log(getApiParams())
  async function loadCharacteres(reset = false) {
    if (loading) {
      return;
    }
    if (!reset) {
      setLoadingMore(true);
    }

    const newPage = reset ? 1 : page + 1;

    const param = {
      params: {
        ...getApiParams(),
        limit: 8,
        offset: (newPage - 1) * 8,
      },
    };
    if (search) {

      param.params.nameStartsWith = search;
    }
    const response = await api.get('/characters', param);
    console.log(response.data.data.results);
    setPage(newPage);
    setCharacter(
      reset
        ? response.data.data.results
        : [...characters, ...response.data.data.results],
    );

    setLoading(false);
    setLoadingMore(false);
  }

  function onRefresh() {
    setCharacter([]);
    loadCharacteres(true);
  }

  function onEndReached() {
    if (loading || characters.length < 8) { return; }
    loadCharacteres();
  }

  useEffect(() => {
    loadCharacteres();
  }, []);

  if (loading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color="red" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerArea}>
      <Input
        onChangeText={setSearch}

        value={search}
        onFocus={() => {
          flatCharRef.current.scrollToIndex({ index: 0, animated: true });
        }}
        onSubmitEditing={() => loadCharacteres(true)}
      />
      <FlatList
        style={styles.containerHeroes}
        data={characters}
        ref={flatCharRef}
        onRefresh={onRefresh}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        onEndThreshold={0}
        renderItem={({ item }) => <Hero navigation={navigation} item={item} />}
        ListFooterComponent={() => {
          if (!loadingMore) {
            return null;
          }
          return (
            <ActivityIndicator
              style={styles.loadBottom}
              size={24}
              color="red"
            />
          );
        }}
        ListEmptyComponent={() => {
          if (loading) {
            return null;
          }
          return (
            <Text
              style={styles.loading}>
              Nenhum resultado encontrado
            </Text>
          );
        }}
      />
    </SafeAreaView>
  );
}
