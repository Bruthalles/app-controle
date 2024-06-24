import React from 'react'; 
import { View,ScrollView, StyleSheet, StatusBar, Text, TextInput,TouchableOpacity, } from 'react-native';
import Produtos from './produtos/produtos';
import GerarProds from './GerarProds';
import DrawerNavigator from '../navigation/drawer';

export default function App() {
  return (
    <View>
      <StatusBar 
        hidden={true}
        barStyle={'light-content'}
        backgroundColor={'#000'}/>

        <DrawerNavigator/>

      

      </View>
  )

}
