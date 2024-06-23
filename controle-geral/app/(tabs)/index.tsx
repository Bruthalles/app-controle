import React from 'react'; 
import { View,ScrollView, StyleSheet, StatusBar, Text, TextInput,TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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

const styles = StyleSheet.create({
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