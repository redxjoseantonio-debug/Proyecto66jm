import React from "react";
import { BackHandler, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import App from "../../../App";


export default function Profile(){
    
    return(
        <View>
            <CustomButton title="Cerrar Sesion" onPress={()=>{}}/>
            <CustomButton title="Ir Atras" onPress={()=>{}}/>
        </View>
    );

}