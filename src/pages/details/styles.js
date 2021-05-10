import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #000000;
`;

export const PosterImage = styled.Image`
    width: auto;
    height: 30%px;
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