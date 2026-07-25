import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  CustomButton  from './src/components/CustomButton'
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';



export default function App() {
  //definicion de variable en estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //asignacion de nuevo valor a variable
  // setEmail("maria@unitec.edu")

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <CustomInput onChageText={setEmail} value={email} placeholder={'Ingrese su Correo'} type='email' />
      <CustomInput onChageText={setPassword} value={password} placeholder={'Ingrese su contraseña'} type='password' />

      <CustomButton title ="Mi Boton 1" onPress={()=>{console.log("1")}}/> 

      <StatusBar style="auto" />
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
