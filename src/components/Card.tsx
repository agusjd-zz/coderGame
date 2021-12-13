import React from "react";
import {View,StyleSheet,Text,Button} from "react-native"
import { Colors } from "../constants/Colors";
import Input from "./Input";


export default function Card(props:any){
    return(
        <View style = {styles.container}>
            <Text>Elija un Numero</Text>
            <Input/>

          <View>
           <Button title={"Limpiar"} onPress={()=>{}} color={Colors.accet} />
           <Button title={"Confirmar"} onPress={()=>{}} color={Colors.primary} />
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: 300,
        height:300,
        shadowRadius:6,
        elevation:5,
        shadowColor:"black",
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:"gray",
        alignItems:"center"
    }
})