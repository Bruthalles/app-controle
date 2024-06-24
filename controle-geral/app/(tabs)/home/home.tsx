import React from 'react'; 
import { View,ScrollView, StyleSheet, StatusBar, Text, TextInput,TouchableOpacity, } from 'react-native';


export default function Home() {
  return (
    <View>
      <StatusBar 
        hidden={true}
        barStyle={'light-content'}
        backgroundColor={'#000'}/>

        <TouchableOpacity>Meus produtos</TouchableOpacity>

        <TouchableOpacity>Funcionários</TouchableOpacity>

        

        

      

      </View>
  )

}
