import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #363636;
`;

export const TextContainer = styled.View`
    background-color: red;
    margin-top: 20px;
    min-width: 90%;
    min-height: 8%;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const TextPage = styled.Text`
    color: #F8F8FF;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 3px;
    font-style: italic;
`;

export const FilmsList = styled(FlatList).attrs({
    numColumns: 2,
})`
    flex: 1;
    
    padding: 20px;
`;

export const PosterImage = styled.Image`
    align-self: center;
    width: 130px;
    height: 220px;
`;