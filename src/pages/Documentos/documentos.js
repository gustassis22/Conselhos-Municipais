import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';

export default function Documentos(){

       return (
            <View>

                <View style={styles.Header}>
                        <TouchableOpacity style={styles.ItemContainer}>
                            <Image source={require("./../../../assets/images/add.png")} style={styles.Icon2}/>
                            <Text style={styles.Name}>Anexar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ItemContainer}>
                            <Image source={require("./../../../assets/images/search.png")} style={styles.Icon2}/>
                            <Text style={styles.Name}>Buscar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ItemContainer}>
                            <Image source={require("./../../../assets/images/delete.png")} style={styles.Icon2}/>
                            <Text style={styles.Name}>Excluir</Text>
                        </TouchableOpacity>
                </View>

            <Text style={styles.Title}>  Anexos Salvos </Text>

                 <ScrollView style={styles.Content}>
                     <View style={styles.Line}>

                     <TouchableOpacity>
                       <Image source={require("./../../../assets/images/pdf.png")} style={styles.Icon}/>
                       <Text>Anexo01</Text>
                     </TouchableOpacity>

                     <TouchableOpacity>
                       <Image source={require("./../../../assets/images/pdf.png")} style={styles.Icon}/>
                       <Text>Anexo02</Text>
                     </TouchableOpacity>

                     <TouchableOpacity>
                       <Image source={require("./../../../assets/images/pdf.png")} style={styles.Icon}/>
                       <Text>Anexo03</Text>
                     </TouchableOpacity>

                     </View>

                     <View style={styles.Line}>

                        <TouchableOpacity>
                        <Image source={require("./../../../assets/images/pdf.png")} style={styles.Icon}/>
                        <Text>AtaInfo01</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Image source={require("./../../../assets/images/pdf.png")} style={styles.Icon}/>
                        <Text>Relatório01</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Image source={require("./../../../assets/images/pdf.png")} style={styles.Icon}/>
                        <Text>AtaInfo02</Text>
                        </TouchableOpacity>

                        </View>
                 </ScrollView>
            </View>
       );
}

const styles = StyleSheet.create({
    Header:{
        height:"30%",
        flexDirection:"row",
        marginStart:15,
        marginTop:20,
        justifyContent:"space-between",
        width:"85%"
    },
      Content:{
          height:"70%"
      },

      Line:{
          flexDirection:"row",
          justifyContent:"space-between",
          width:"85%",
          marginStart:25,
          marginTop:30
      },

      Title:{
          fontWeight:"bold",
          marginStart:10,
          fontSize:16
      },
      
    Icon:{
          height:80,
          width:80
     },

     Icon2:{
        height:60,
        width:58
   },

     Name:{
          textAlign:"center",
          fontSize:12,
          marginTop:7,
          fontWeight:"bold"
     },

     ItemContainer:{
        marginTop:15,
        marginStart:15,
        backgroundColor:"#ffff",
        width:80,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#000",
    
        borderTopEndRadius:8,
        borderTopStartRadius:8,
        borderBottomStartRadius:8,
        borderBottomEndRadius:8,
        shadowColor: "#000",
    
     shadowOffset: {
       width: 7,
       height: 7,
     },
     shadowOpacity: 0.11,
     shadowRadius: 3.84,
     
     elevation: 5,
    },
});