import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function Info({navigation}){

      return(

          <View>
               <View style={styles.Header}>
                   <TouchableOpacity style={styles.Edit}>
                   <Image source={require("../../../assets/images/edit.png")} style={styles.Icon}/>
                   </TouchableOpacity>

                   <Text style={styles.Title}>CMMA</Text>
                   <Text style={styles.Subtitle}>Conselho Municipal de Meio Ambiente</Text>

               </View>

               <ScrollView style={styles.Content}>
                <Text style={styles.TextContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
           

               <Text style={styles.TextContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Image source={require("../../../assets/images/media_meio_ambiente.png")} style={styles.Image}/>
                    </ScrollView>
               
          </View>

      );
}

const styles = StyleSheet.create({

         Header:{
            height:"20%",
         },

         Content:{
            height:"80%",
         },

         Footer:{
           height:"10%",
         },

         Title:{
             fontSize:27,
             marginTop:10,
             textAlign:"center",
             fontWeight:"bold"
         
         },

         Subtitle:{
            fontSize:16,
            color:"#25454d",
            textAlign:"center",
            fontWeight:"bold"
        
        },

         TextContent:{
             marginStart:12,
             fontSize:15      ,
             marginTop:10
           },

           Icon:{
             height:30,
             width:30,
            },

            Edit:{
               marginTop:20,
               marginStart:330
            },

            Image:{
                height:"80%",
                width:"69%",
                marginStart:50,
                marginTop:30
            }

});