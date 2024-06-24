import React from 'react'; 
import { View,ScrollView, StyleSheet, StatusBar, Text, TextInput,TouchableOpacity, } from 'react-native';
import Produtos from '../(tabs)/produtos/produtos';
import GerarProds from '../(tabs)/GerarProds';
import Home from '../(tabs)/home/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Home'
                component={<Home/>}/>

            <Drawer.Screen
                name='GerarProds'
                component={<GerarProds/>}/>

            <Drawer.Screen
                name='Produtos'
                component={<Produtos/>}/>


        </Drawer.Navigator>
    );
}

export default DrawerNavigator;