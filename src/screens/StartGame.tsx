import React from "react";
import {View,StyleSheet,Text} from "react-native"

export default function StartGame(props:any){
    return(
        <View style={style.container}>
            <Text style={style.title}>Comenzar Juego</Text>
            {props.children}
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:9,
        alignItems:"center"
    },
    title:{
        marginVertical:10,
        fontSize:16
    }
})