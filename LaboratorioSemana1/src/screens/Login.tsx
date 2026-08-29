import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from 'react';


export default function Login ({navigation} : any) {
    //definicion de variable en estado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
      navigation.navigate('HomeScreen', {email})
    }

    //asignacion de nuevo valor a variable
    // setEmail("maria@unitec.edu")

    return(
        <View style={styles.container}>
              <Text>Bienvenido a Login</Text>
        
              <CustomInput onChangeText={setEmail} value={email} placeholder={'Ingrese su Correo'} type='email' />
              <CustomInput onChangeText={setPassword} value={password} placeholder={'Ingrese su contraseña'} type='password' />
        
              <CustomButton title ="Iniciar Secion" onPress={handleLogin}/> 
    
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});