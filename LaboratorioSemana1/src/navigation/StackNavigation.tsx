import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import TabsNavigation from "./TabsNavigation";

//1. declarar el tipado de las pantallas con sus parametros
export type RootStackParamList ={
    LoginScreen: undefined,
    HomeScreen: {email: string },
    RegisterScreen: undefined,
    UserTabs: undefined
};

//2. crear el StackNavigation encargado de manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

//3. utilizar el stack de navegacion
export default function StackNavigation (){
    return(
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={Login}/>
            <Stack.Screen name="HomeScreen" component={Home}/>
            <Stack.Screen name="RegisterScreen" component={Register}/>
            <Stack.Screen name="UserTabs" component={TabsNavigation}/>
        </Stack.Navigator>
    );

}