import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";

//1. declarar el tipado de las pantallas con sus parametros
export type TabsParamList ={
    ProfileScreen: undefined,
    SettingsScreen: undefined,
    HomeTab: {email:string},
};

//2. crear el TabsNavigation encargado de manejar la navegacion
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el navegador por tabs
export default function TabsNavigation(){
    return(
        <Tab.Navigator initialRouteName="HomeTab">
            <Tab.Screen name="ProfileScreen" component={Profile}/>
            <Tab.Screen name="SettingsScreen" component={Settings}/>
        </Tab.Navigator>

    );

}