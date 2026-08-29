import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {Text, StyleSheet, TextInput, View, KeyboardTypeOptions, TouchableOpacity} from 'react-native';

type CustomInputProps = {
    onChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    type?: "default" | "email" | "password" | "number";

}

export default function CustomInput ({ onChangeText, value, placeholder, type= "default" }: 
    CustomInputProps) {

        const [isSecureText, setIsSecureText] = useState(type === "password")

        const isPasswordField = type === "password";

        const IconName: (typeof MaterialIcons)["name"] | undefined = 
        type === "password" ? "lock" :
        type === "email" ? "alternate-email" : undefined;

        const keyboardType: KeyboardTypeOptions = 
        type === "email" ? "email-address" :
        type === "number" ? "number-pad":
        "default";

        const getError = () =>{
        if(type === "email" && !value.includes("@")){
            return "Correo invalido";
        }
        if(type === "password" && value.length < 4){
            return "Contraseña invalida";
        }
        return undefined;
        };
        const error = getError();

    return(
        <View style={styles.wrapper}>
            <View style={[styles.inputContainer, error && styles.inputError]}>
            <MaterialIcons name={IconName as any} size={22} />

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={isSecureText}
        />
        {isPasswordField && <TouchableOpacity
        onPress={() => {
            setIsSecureText(!isSecureText);
        }}>
        <Ionicons name="eye" size={22} />
        </TouchableOpacity>}
        </View>
        {error && <Text style={styles.inputError}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
        wrapper:{
        marginBottom: 10,
        },
        inputContainer:{
            backgroundColor: 'lightgray',
            //distribucion de los elementos con flexbox
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            borderRadius: 9,
            borderColor: "gray",
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,

        },
        inputError:{
            color: 'red',
            borderColor: 'red',
            marginTop: 5,
            marginLeft: 5,
        },
        input:{
            width: '80%',
        }
    })