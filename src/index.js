import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView, ActivityIndicator } from 'react-native';

import api from './services/api';
import apiTv from './services/apiTv';


import {
  Container,
  TextContainer,
  PageText,
  FilmsList,
  PosterImage,
  SectionContainer,
  SectionText,
} from './styles'


function App () {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const { data } = await api.get('/results'); 
      setFilms(data);
    }
    loadFilms();
  }, []);

  const [tv, setTv] = useState([]);

  useEffect(() => {
    async function loadTv() {
      const { data } = await apiTv.get('/results');
      setTv(data);
    }
    loadTv();
  }, [])

  const url = 'https://image.tmdb.org/t/p/w500';

  return(
    <Container>
      <StatusBar barStyle='light-content' />
      <TextContainer>
        <PageText>TRENDINGS</PageText>
      </TextContainer>
      <ScrollView>
        <SectionContainer>
          <SectionText>movies</SectionText>
        </SectionContainer>
        <FilmsList
          data={films}
          keyExtractor={(item) => item.id}
          directionalLockEnabled='true'
          horizontal={true}
          renderItem={({item}) => (
            <PosterImage source={{uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path}} />
          )
        }
        />
        <SectionContainer>
          <SectionText>tv shows</SectionText>
        </SectionContainer>
        <FilmsList
          data={tv}
          keyExtractor={(item) => item.id}
          directionalLockEnabled='true'
          horizontal={true}
          renderItem={({item}) => (
            <PosterImage source={{uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path}} />
          )
        }
        />
      </ScrollView>
      
    </Container>
  );
};
      
export default App;