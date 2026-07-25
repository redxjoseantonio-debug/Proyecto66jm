import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {useState} from 'react';
import {TextInput, StyleSheet, KeyboardTypeOptions, View, TouchableOpacity, Text } from 'react-native';



type CustomInputProps = {
    onChageText: (text: string) => void;
    value: string;
    placeholder: string;
    type?: "default" | "password" | "email" | "number";

}

export default function CustomInput({onChageText, value, placeholder, type="default"}: CustomInputProps){
    

    const [isSecureText, setIsSecureText] = useState(type==="password");

    const isPasswordField = type === "password";

    const iconName: (typeof MaterialIcons)["name"] | undefined =
        type === "password" ? "lock" :
        type === "email" ? "alternate-email" : undefined

    const keyboardType: KeyboardTypeOptions =
    type === "email" ? "email-address" :
    type === "number" ? "number-pad" :
    "default";

     
    const getError = ()=> {
    if (type === "email" && !value.includes("@")) {
        return "Correo inválido";
    }

    if (type === "password" && value.length < 4) {
     return "La contraseña es débil";
    }
    return undefined;
    };

    const error = getError();

    return(
        <View style={styles.wrapper}>
            <View style={[styles.inputcontainer, error && styles.Err]}>
                <MaterialIcons name={iconName as any} size={22}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChageText}
                        value={value}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={isSecureText}
                    />
                    
                { isPasswordField && <TouchableOpacity
                    onPress={()=>{
                        setIsSecureText(! isSecureText);
                    }}>
                    <Ionicons name="eye" size={22}/>
                </TouchableOpacity>}
                <View>
                  {error && <Text style={styles.Err}>{error}</Text>}  
                </View>
                
            </View> 
        </View>
    );     
}  

const styles = StyleSheet.create({
    wrapper:{
        marginBottom: 10
    },
    input: {
        width: '80%',
    },
    inputcontainer: {
        backgroundColor: 'lightgray',
        //distribucion de componentes con flex
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 9,
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    Err:{
        color: "red",
        borderColor: "red",
        marginTop: 5,
        marginLeft: 5,
    }
})




