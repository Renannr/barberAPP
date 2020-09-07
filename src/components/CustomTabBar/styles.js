import React from 'react'
import styled from 'styled-components/native'

export const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    margin-top: -20px
`;
