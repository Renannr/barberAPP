import React, {useEffect, useContext} from 'react';
import { Container,  LoadingIcon} from './styles'

import { UserContext } from '../../contexts/UserContext'

import AsyncStorage from '@react-native-community/async-storage'

import BarberLogo from '../../assets/barber.svg'

import Api from '../../Api'

export default ({ navigation }) => {
    const {dispatch: userDispatch  } = useContext(UserContext)

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token){
                res = await Api.checkToken(token)

                if(res.token) {
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
                    navigation.navigate('SignIn')
                }

            } else {
                navigation.navigate('SignIn')
            }
        }
        
        setTimeout(() => {
            navigation.navigate('SignIn')
        }, 2000)
    }, [])

    return (
        <Container>
           <BarberLogo width="100%" height="160"/>
           <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    ) 
}