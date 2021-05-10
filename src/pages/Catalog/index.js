import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


import api from '../../services/api';
import apiTv from '../../services/apiTv';


import {
  Container,
  TextContainer,
  PageText,
  FilmsList,
  PosterImage,
  SectionContainer,
  SectionText,
} from './styles'


function Catalog () {
  const navigation = useNavigation();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const { data } = await api.get('/results'); 
      const dataFilms = data['results']
      setFilms(dataFilms);
     
    }
    loadFilms();
  }, []);

  const [tv, setTv] = useState([]);

  useEffect(() => {
    async function loadTv() {
      const { data } = await apiTv.get('/results');
      const dataTv = data['results']
      setTv(dataTv);

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
            <TouchableOpacity onPress={() => {navigation.navigate('Details')}}> 
              <PosterImage source={{uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path}} />
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => {navigation.navigate('Details')}}> 
              <PosterImage source={{uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path}} />
            </TouchableOpacity>
          )
        }
        />
      </ScrollView>
      
    </Container>
  );
};
      
export default Catalog;