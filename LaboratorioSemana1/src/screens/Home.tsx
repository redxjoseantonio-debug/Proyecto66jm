import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigation";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabsParamList } from "../navigation/TabsNavigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import CustomButton from "../components/CustomButton";

//type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

type NestedProps = CompositeScreenProps<
    BottomTabScreenProps<TabsParamList, 'HomeTab'>,
    NativeStackScreenProps<RootStackParamList>
>;

export default function Home({route, navigation}: NestedProps){
    //extraccion de propiedad de parametros de ruta por medio de destructuring
    const {email} = route.params;

    const handleLogin = () => {
      navigation.navigate('SettingsScreen')
    }
    return(
        <View>
            <Text>Bienvenido, {email} </Text>

            <CustomButton title="Ir a Preferencias de Usuario" onPress={handleLogin}/>
        </View>

    );

}