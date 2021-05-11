import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #000000;
`;

export const PosterImage = styled.Image`
    width: 100%;
    height: 35%;
`;

export const TextContainer = styled.View`
    margin-top: 20px;
    width: 90%;
    height: auto;
`;

export const TextTitle = styled.Text`
    color: #F8F8FF;
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-top: 10px
`;

export const TextOriginalTitle = styled.Text`
    color: #777;
    font-size: 14px;
    font-style: italic;
    margin-top: 10px
`;


export const TextOverviewTitle = styled.Text`
    color: #F8F8FF;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px
`;

export const TextOverview = styled.Text`
    color: #777;
    font-size: 19px;
    margin-top: 10px;
    text-align: justify;

`;

export const TextRating = styled.Text`
    color: #F8F8FF;
    font-size: 15px;
    font-style: italic;
    margin-top: 30px
`;