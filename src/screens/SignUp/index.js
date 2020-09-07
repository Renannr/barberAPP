import React,{useState, useContext} from 'react';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingUpMessageButton,
    SingUpMessageButtonText,
    SingUpMessageButtonTextBold

} from './styles'

import { UserContext } from '../../contexts/UserContext'

import TextInput from '../../components/TextInput'

import Api from '../../Api'

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import PersonIcon from '../../assets/person.svg'

export default ({navigation}) => {
    const {dispatch: userDispatch  } = useContext(UserContext)
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [nameField, setNameField] = useState('')

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{ name:'SignIn' }]
        }) 
    }

    const handleSignCLick = async () => {
        if(nameField && emailField && passwordField) {
            let res = await Api.signUp(nameField, emailField, passwordField)
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
            } else {
                alert("Erro")
            }

        } else {
            alert("Preencha os campos!")
        }
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160"/>
            <InputArea>
                <TextInput 
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={text => setNameField(text)}
                    IconSvg={PersonIcon}/>
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
                    <CustomButtonText> CADASTRAR </CustomButtonText>
                </CustomButton>
            </InputArea>
            
            <SingUpMessageButton onPress={handleMessageButtonClick}>
                <SingUpMessageButtonText> Já possui uma conta? </SingUpMessageButtonText>
                <SingUpMessageButtonTextBold>Voltar</SingUpMessageButtonTextBold>
            </SingUpMessageButton>
        </Container>
    ) 
}