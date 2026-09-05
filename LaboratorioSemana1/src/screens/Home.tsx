import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigation";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabsParamList } from "../navigation/TabsNavigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import CustomButton from "../components/CustomButton";
import { navigationRef } from "../navigation/NavigationService";

//type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

type NestedProps = CompositeScreenProps<
    BottomTabScreenProps<TabsParamList, 'HomeTab'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function Home({route, navigation}: NestedProps){
    //extraccion de propiedad de parametros de ruta por medio de destructuring
    const {email} = route.params;

    const handleSetting = () => {
      navigation.navigate('SettingsScreen')
    };

    const handleLoguot = () => {
      if (navigationRef.isReady()){
        navigationRef.reset({
            //es un arreglo para cual cada objeto representa una ruta en navigation
            routes: [
                {name: 'LoginScreen'}
            ],
            index: 0,
        })
      }
    };

    const handleNavigate = () => {
        navigation.navigate('LoginScreen');
    };


    return(
        <View>
            <Text>Bienvenido, {email} </Text>

            <CustomButton title="Ir a Preferencias de Usuario" onPress={handleSetting}/>

            <CustomButton title="Cerrar Sesion" onPress={handleLoguot}/>
            
            <CustomButton title="Ir Atras" onPress={handleNavigate}/>
        </View>

    );

}