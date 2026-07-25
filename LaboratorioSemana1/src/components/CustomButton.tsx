import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps ={
    title: string;
    onPress: ()=>void;
    variante?: "primary"| "secondary"| "tertiary";
}

export default function CustomButton({title, onPress, variante='primary'}: CustomButtonProps){
    const styles = getStyles(variante);

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.ButtonTitle}> {title} </Text>
        </TouchableOpacity>
    );
}

const getStyles = (variante: "primary"| "secondary"| "tertiary") => {
return StyleSheet.create({
        button:{
            backgroundColor: variante === "primary" ? 'navy' : 
                                variante === "secondary" ? 'lightblue': '#fff',
            borderRadius: variante === "primary" ? 5 : 
                                variante === "secondary" ? 1 : 3,
            width: 150,
            height: 50,
            margin: 10,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: variante === "tertiary" ? 1 : 0
        },
        ButtonTitle:{
            color: variante === "primary" ? 'white' : 
                                variante === "secondary" ? 'black': 'black',
            textAlign: 'center',
            fontSize: 20,
        }
    })
}

