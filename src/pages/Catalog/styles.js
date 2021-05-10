import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #000000;
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

export const PageText = styled.Text`
    color: #F8F8FF;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 3px;
    font-style: italic;
`;

export const SectionContainer = styled.View`
    width: 90%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px
`;

export const SectionText = styled.Text`
    color: #F8F8FF;
    font-size: 18px;
    font-weight: 800;
    margin-top: 10px;
`;

export const FilmsList = styled(FlatList).attrs({
})`
    flex: 0.4;
`;

export const PosterImage = styled.Image`
    align-self: center;
    width: 130px;
    height: 200px;
    margin: 5px;
    border-radius: 20px;
`;