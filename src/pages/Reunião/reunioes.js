import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';


export default function Reunioes({navigation}){

  function HandleAgendarNovaReuniao(){

     navigation.navigate("Agendar");

  }

     return (
         <View>
             <View style={styles.Header}>
                          <TouchableOpacity style={styles.ItemContainer} onPress={HandleAgendarNovaReuniao}>
                            <Image source={require("./../../../assets/images/agendar.png")} style={styles.Icon}/>
                            <Text style={styles.ItemName}>Agendar Reunião</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.ItemContainer}>
                            <Image source={require("./../../../assets/images/ata.png")} style={styles.Icon}/>
                            <Text style={styles.ItemName}>Atas Divulgadas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.ItemContainer}>
                            <Image source={require("./../../../assets/images/historico.png")} style={styles.Icon}/>
                            <Text style={styles.ItemName}>Histórico de Reuniões</Text>
                            </TouchableOpacity>
             </View>
             <View style={styles.Content}>
                <Text style={styles.Title}>Próximas Reuniões</Text>
                  <ScrollView>
                      <TouchableOpacity style={styles.ReuniaoContainer}>
                         <View style={{marginTop:10, marginStart:20}}>
                        <Text style={styles.Titulo}>Reunião CMDCA</Text>
                        <Text style={styles.Data}>Data: 02/11/2020 - 14H</Text>
                        <Text style={styles.Local}>Local: Câmara Municipal</Text>
                        </View>
                        <View style={styles.CheckArea}>
                          <TouchableOpacity>
                          <Image source={require("./../../../assets/images/positivo.png")} style={styles.Check}/>
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <Image source={require("./../../../assets/images/wrong.png")} style={styles.Check}/>
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.ReuniaoContainer}>
                         <View style={{marginTop:10, marginStart:20}}>
                        <Text style={styles.Titulo}>Reunião CMDCA</Text>
                        <Text style={styles.Data}>Data: 09/11/2020 - 15H</Text>
                        <Text style={styles.Local}>Local: Câmara Municipal</Text>
                        </View>

                        <View style={styles.CheckArea}>

                          <TouchableOpacity>
                          <Image source={require("./../../../assets/images/positivo.png")} style={styles.Check}/>
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <Image source={require("./../../../assets/images/wrong.png")} style={styles.Check}/>
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
         width:"97%",
         height:"30%",
         marginTop:30
      },

      Content:{
         height:"70%"
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

    Title:{
        fontSize:20,
        marginTop:20,
        textAlign:"center"
    },

    ReuniaoContainer:{
        marginTop:25,
        marginStart:15,
        backgroundColor:"#ffff",
        width:345,
        height:125,
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

    Titulo:{
        marginRight:185,
        fontSize:16,
        fontWeight:"bold"

    },

    Data:{
        marginRight:140,
        marginTop:10,
        fontSize:15,
    },

    Local:{
        marginRight:140,
        marginTop:5,
    },

    Check:{
        height:30,
        width:30
    },

    CheckArea:{
       flexDirection:"row",
       justifyContent:"space-between",
       width:"24%",
       marginStart:220,
       marginBottom:10

    }

});