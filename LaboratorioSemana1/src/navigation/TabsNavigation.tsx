import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import Home from "../screens/Home";

//1. declarar el tipado de las pantallas con sus parametros
export type TabsParamList ={
    ProfileScreen: undefined,
    SettingsScreen: undefined,
    HomeTab: {email:string}
};

//2. crear el TabsNavigation encargado de manejar la navegacion
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el navegador por tabs
export default function TabsNavigation(){
    return(
        <Tab.Navigator initialRouteName="HomeTab">
            <Tab.Screen name="ProfileScreen" component={Profile} options={{ tabBarIcon: () => (<Image source={require('../../assets/User.png')} style={{ width: 36, height: 36 }} />)}} />
            <Tab.Screen name="SettingsScreen" component={Settings} options={{ tabBarIcon: () => (<Image source={require('../../assets/settings.png')} style={{ width: 36, height: 36 }} />)}}/>
            <Tab.Screen name="HomeTab" component={Home} initialParams={{email:"Usuario"}} options={{ tabBarIcon: () => (<Image source={require('../../assets/Home.png')} style={{ width: 36, height: 36 }} />)}}/>
        </Tab.Navigator>

    );

}