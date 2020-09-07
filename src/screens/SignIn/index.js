import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import { UserContext } from '../../contexts/UserContext'

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingUpMessageButton,
    SingUpMessageButtonText,
    SingUpMessageButtonTextBold

} from './styles'

import TextInput from '../../components/TextInput'

import Api from '../../Api'

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

export default ({navigation}) => {
    const {dispatch: userDispatch  } = useContext(UserContext)
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{ name:'SignUp' }]
        }) 
    }

    const handleSignCLick = async () => {
        if(emailField === '1') {
            navigation.reset({
                routes:[{ name:'MainTab' }]
            })

        } else {
            if(emailField && passwordField) {
                let res = await Api.signIn(emailField, passwordField)
                if(res.token){
                    alert("uhul")
                    /*
                    
                    await AsyncStorage.setItem('token', res.token)

                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });

                    */
                    navigation.reset({
                        routes:[{ name:'MainTab' }]
                    }) 

                }else {
                    alert("E-mail ou Senha incorretos!")
                }
            } else {
                alert("Preencha os campos!")
            }
        }
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>
            <InputArea>
                <TextInput 
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={text => setEmailField(text)}
                    IconSvg={EmailIcon}/>
                <TextInput 
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={text => setPasswordField(text)}
                    secret={true}
                    IconSvg={LockIcon}/>
                
                <CustomButton onPress={handleSignCLick}>
                    <CustomButtonText> LOGIN </CustomButtonText>
                </CustomButton>
            </InputArea>
            
            <SingUpMessageButton onPress={handleMessageButtonClick}>
                <SingUpMessageButtonText> Ainda não possui uma conta? </SingUpMessageButtonText>
                <SingUpMessageButtonTextBold>Cadastre-se</SingUpMessageButtonTextBold>
            </SingUpMessageButton>
        </Container>
    ) 
}