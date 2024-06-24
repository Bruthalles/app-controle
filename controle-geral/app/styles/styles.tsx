import React from "react";
import { StyleSheet} from "react-native";


const styles = StyleSheet.create ({
    viewbase:{
        flex:1,
        shadowRadius:10,
        flexDirection:'row',
        height:'10%',
        width:'100%',
        backgroundColor:'lightblue',},
    
      titulo:{
        alignSelf:'center',
        fontSize:40,
        fontWeight:'bold',
        padding:10,},
    
      btnMenu:{
        alignSelf:'center',
        padding:20,},
    
      iconMenu:{
        fontSize:50,},
    
      btNewProd:{
        height:80,
        width:'95%',
        alignSelf:'center',
        alignContent:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:2,
        borderRadius:5,
        marginTop:20,
        marginBottom:20},
    
        textNewProd:{
          alignSelf:'center',
          fontWeight:'bold'},
    
        prods:{
          alignSelf:'center',
          fontSize:25,
          marginBottom:5,
          },
    
})


export default styles