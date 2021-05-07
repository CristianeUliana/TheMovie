import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';

import api from './services/api';

import {
  Container,
  TextContainer,
  TextPage,
  FilmsList,
  PosterImage,
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


  const url = 'https://image.tmdb.org/t/p/w500';

  return(
    <Container>
      <TextContainer>
        <TextPage>THE MOVIE</TextPage>
      </TextContainer>
      <FilmsList
        data={films}
        keyExtractor={(item) => item.id}
        
        renderItem={({item}) => (
          <PosterImage source={{uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path}} />
        )
      }
      />    
    </Container>
  );
};
      
export default App;