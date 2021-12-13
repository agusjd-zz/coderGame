import React, { useState } from "react";
import { TextInput,StyleSheet } from "react-native";

export default function Input(){
    const [value,setValue] = useState("")
    const handlerInput = (text:string) =>{
        setValue(text.replace(/[^0-9]/g,""))
    }
    return(
        <TextInput
        style={style.container}
        value = {value}
        onChangeText={handlerInput}
        keyboardType={"numeric"}
        maxLength={2}
        />
    )
}

const style =  StyleSheet.create({
    container:{
        marginVertical:20,
        width:80,
        height:40,
        borderBottomColor:"gray",
        borderBottomWidth:2,
        textAlign:"center"
    }

})