import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import {
    Container,
    PosterImage,
    TextContainer,
    TextTitle,
    TextOriginalTitle,
    TextOverviewTitle,
    TextOverview,
    TextRating,
} from './styles'


function Details ({ route }) {
    const urlBackdrop = 'https://image.tmdb.org/t/p/w500'
    const { itemId } = route.params;
    const films = useSelector(({details}) => details);
    const filmSelected = films.find((film) => film.id == itemId);
    
    function formatValue(value) {
        const rating = value.toFixed(1)
        return `Rating: ${rating}`
    }

    return(
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
            <PosterImage source={{uri: urlBackdrop+filmSelected.backdrop_path}} />
            <ScrollView>
                <TextContainer>
                    <TextTitle>{filmSelected.title}{filmSelected.name}</TextTitle>
                    <TextOverviewTitle>Overview:</TextOverviewTitle>
                    <TextOverview>{filmSelected.overview}</TextOverview>
                    <TextRating>{formatValue(filmSelected.vote_average)}</TextRating>
                </TextContainer>
            </ScrollView>
        </Container>
    )
}

export default Details;