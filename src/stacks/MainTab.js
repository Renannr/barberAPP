import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import CustomTabBar from '../components/CustomTabBar'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Today from '../screens/Today'
import Favorites from '../screens/Favorites'
import Profile from '../screens/Profile'

export default () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Today" component={Today}/>
            <Tab.Screen name="Favorites" component={Favorites}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}