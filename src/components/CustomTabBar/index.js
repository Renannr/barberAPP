import React from 'react'
import { TabArea, TabItem, TabItemCenter } from './styles'

import HomeIcon from '../../assets/home.svg'
import Searchcon from '../../assets/search.svg'
import TodayIcon from '../../assets/today.svg'
import FavoriteIcon from '../../assets/favorite.svg'
import AccountIcon from '../../assets/account.svg'

export default ({state, navigation}) => {
    const goTo = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5}} width="24" height="24" fill="#FFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <Searchcon style={{opacity: state.index === 1 ? 1 : 0.5}} width="24" height="24" fill="#FFF"/>
            </TabItem>
            <TabItemCenter onPress={() => goTo('Today')}>
                <TodayIcon width="32" height="32" fill="#4EADBE"/>
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index === 3 ? 1 : 0.5}} width="24" height="24" fill="#FFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5}} width="24" height="24" fill="#FFF"/>
            </TabItem>
        </TabArea>
    )
}