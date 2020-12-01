import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';


export default function Sessoes({navigation}){

    function HandleNovaSessao(){
        navigation.navigate("NovaSessao");
    }
       return (
           <View>
               <View style={styles.Header}>
                          <TouchableOpacity style={styles.ItemContainer} onPress={HandleNovaSessao}>
                            <Image source={require("./../../../assets/images/sessao.png")} style={styles.Icon}/>
                            <Text style={styles.ItemName}>Criar Sessão</Text>
                            </TouchableOpacity>

                          
                            <TouchableOpacity style={styles.ItemContainer}>
                            <Image source={require("./../../../assets/images/historico.png")} style={styles.Icon}/>
                            <Text style={styles.ItemName}>Histórico de Sessões</Text>
                            </TouchableOpacity>
             </View>
             <View style={styles.Content}>
             <Text style={styles.Title}>Sessões em Aberto</Text>
                 <ScrollView>
                 <TouchableOpacity style={styles.EnqueteContainer}>
                     <View style={{ marginRight:40}}>
                     <Text style={styles.enqTitle}>Sessão 0001 de Votação - CMDA</Text>
                     <Text></Text>
                       <Text>1) Lorem Ipsum</Text>
                       <Text>2) Lorem Ipsum</Text>
                       <Text>3) Lorem Ipsum</Text>
                     </View>
                     <View style={styles.CheckArea}>
                          <TouchableOpacity>
                          <Text style={styles.ClickText}>Votar Sessão</Text>
                          </TouchableOpacity>
                         
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.EnqueteContainer}>
                     <View style={{ marginRight:40}}>
                     <Text style={styles.enqTitle}>Sessão 0002 de Votação - CMDA</Text>
                     <Text></Text>
                       <Text>1) Lorem Ipsum</Text>
                       <Text>2) Lorem Ipsum</Text>
                       <Text>3) Lorem Ipsum</Text>
                     </View>
                     <View style={styles.CheckArea}>
                          <TouchableOpacity>
                          <Text style={styles.ClickText}>Votar Sessão</Text>
                          </TouchableOpacity>
                         
                        </View>
                     </TouchableOpacity>
                 </ScrollView>
                
             </View>
           </View>
       );
}

const styles = StyleSheet.create({
       Header:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        height:"30%",
        marginTop:20,
        marginStart:30,
       },

       ItemContainer:{
        marginTop:15,
        marginStart:15,
        backgroundColor:"#ffff",
        width:100,
        height:130,
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

    Icon:{
       height:"54%",
       width:"70%",
    },

    ItemName:{

        textAlign:"center",
        marginTop:13,
        fontFamily:"Helvetica",
        fontSize:13
    },

       Content:{
           height:"70%"
       },

       Title:{
        fontSize:20,
        marginTop:20,
        textAlign:"center"
    },

    enqTitle:{
        fontSize:15,
        
        fontWeight:"bold"
       
    },

    EnqueteContainer:{
        marginTop:25,
        marginStart:15,
        backgroundColor:"#ffff",
        width:345,
        height:135,
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
     
       ClickText:{
         color:"#0b5d66",
         fontWeight:"bold",
         fontSize:15,
         fontFamily:"Trebuchet MS"
       },

    CheckArea:{
        width:"40%",
        marginStart:210,
        
     }
 
});