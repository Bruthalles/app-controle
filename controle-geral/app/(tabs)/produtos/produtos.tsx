import React from 'react'; 
import { View,ScrollView, StyleSheet, StatusBar, Text, TextInput,TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '@/app/styles/styles';

/*dependencias:
  npm install --save react-native-vector-icons

*/

export default function Produtos() {
  return (
    <View>
      <StatusBar 
        hidden={true}
        barStyle={'light-content'}
        backgroundColor={'#000'}/>

      <View style={styles.viewbase}>
        <TouchableOpacity style={styles.btnMenu}>
          <Icon 
            name='menu-unfold'
            style={styles.iconMenu}
          />
        </TouchableOpacity>
        <View style={{width:1,height:'80%',backgroundColor:'black',alignSelf:'center', }}/>
        <Text style={styles.titulo}>Controle Geral</Text>
        
      </View>

      <View>
        <TouchableOpacity style={styles.btNewProd}>
          <Text style={styles.textNewProd}>+ Adicionar novo Produto</Text>
        </TouchableOpacity>
        
        <Text style={styles.prods}>Produtos</Text>

        <ScrollView>

        </ScrollView>
        
      </View>


      </View>
  )

}