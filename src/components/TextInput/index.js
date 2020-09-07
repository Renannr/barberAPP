import React from 'react'
import { TextInput, Container } from './styles'

export default ({IconSvg, placeholder, value, onChangeText, secret}) => {
    return(
        <Container>
            <IconSvg width="24" height="24" fill="#268596"/>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secret}
            />
        </Container>

    )
}