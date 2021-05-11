import React from 'react';
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
    const { itemId } = route.params;
    const films = useSelector(({details}) => details);

    // console.log(films)
    // console.log(itemId)
  

    return(
        <Container>
            <PosterImage source={{uri: 'https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg'}} />
            <ScrollView>
                <TextContainer>
                    <TextTitle>Nome do Filme</TextTitle>
                    <TextOriginalTitle>Nome original</TextOriginalTitle>
                    <TextOverviewTitle>Sinopse:</TextOverviewTitle>
                    <TextOverview>Ipsum loresum ahiucnve naiuhdiuf iuhcinjovn ushgiewbek nsbyugfiufnm ndiubcinjkcno duhbuifbinc  ibviubineo  vbybiheow ibefiubuohoiw ibubuiesvbono bfiubauibiub</TextOverview>
                    <TextRating>Rating: 5.4</TextRating>
                </TextContainer>
            </ScrollView>
        </Container>
    )
}

export default Details;