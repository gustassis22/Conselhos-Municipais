import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';


export default function Home({navigation}){

    function HandleReunioes(){
        navigation.navigate("Reunioes")
    }

    function HandleDocumentos(){
      navigation.navigate("Documentos")
  }

  function HandleEnquetes(){
     navigation.navigate("Enquetes");
  }

  function HandleSessoes(){
   navigation.navigate("Sessoes");
}

function HandleInfo(){
   navigation.navigate("Info");
}

    return (

        <ScrollView> 
              

              <View style={styles.Content}>
                  <View style={styles.Line}>
                    <TouchableOpacity style={styles.ItemContainer} onPress={HandleReunioes}>
                       <Image source={require("./../../assets/images/reuniao.png")} style={styles.Icon}/>
                       <Text style={styles.ItemName}>Reuniões</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ItemContainer}onPress={HandleSessoes}>
                       <Image source={require("./../../assets/images/session.png")} style={styles.Icon}/>
                       <Text style={styles.ItemName}>Sessões</Text>
                    </TouchableOpacity>

                    </View>

                    <View style={styles.Line}>
                    <TouchableOpacity style={styles.ItemContainer} onPress={HandleEnquetes}>
                       <Image source={require("./../../assets/images/enquete.png")} style={styles.Icon}/>
                       <Text style={styles.ItemName}>Enquetes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ItemContainer} onPress={HandleDocumentos}>
                       <Image source={require("./../../assets/images/documentos.png")} style={styles.Icon}/>
                       <Text style={styles.ItemName}>Documentos</Text>
                    </TouchableOpacity>

                    </View>

                    <View style={styles.Line}>
                    <TouchableOpacity style={styles.ItemContainer} onPress={HandleInfo}>
                       <Image source={require("./../../assets/images/info.png")} style={styles.Icon}/>
                       <Text style={styles.ItemName}>Informações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ItemContainer}>
                       <Image source={require("./../../assets/images/contact.png")} style={styles.Icon}/>
                       <Text style={styles.ItemName}>Contato</Text>
                    </TouchableOpacity>

                    </View>
              </View>

              <View style={styles.Footer}>

              </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({

  
      Content:{
       marginTop:10
      },

      Line: {
           flexDirection:"row",
           justifyContent:"space-between",
           width:"80%",
           marginStart:25,
           marginTop:20
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
        fontSize:15
    },

      Footer:{
       
      }
});