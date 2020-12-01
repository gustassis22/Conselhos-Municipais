import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function NovaSessao(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [encerramento,setEncerramento] = useState('');
    
    return (
        <View>
                <View style={styles.Header}>
                     
                </View>

                <View style={styles.Content}>
                            <TextInput 
                                placeholder="Título da Sessao"
                                autoCorrect={false}
                                onChangeText={text => {setTitulo(text)}}
                                style={styles.Input}
                                
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Descrição"
                                autoCorrect={false}
                                onChangeText={text => {setDescricao(text)}}
                                style={styles.Input}
                                multiline={true}
                                
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Opção de Voto 1"
                                autoCorrect={false}
                                onChangeText={text => {setTitulo(text)}}
                                style={styles.Input}
                                
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Opção de Voto 2"
                                autoCorrect={false}
                                onChangeText={text => {setTitulo(text)}}
                                style={styles.Input}
                                
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Opção de Voto 3"
                                autoCorrect={false}
                                onChangeText={text => {setTitulo(text)}}
                                style={styles.Input}
                                
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Data de Encerramento"
                                autoCorrect={false}
                                onChangeText={text => {setEncerramento(text)}}
                                style={styles.TinyInput}
                                
                            >
                            </TextInput>
                        
                        

                           

                           
                           

                           
                </View>

                <View style={styles.Footer}>
                           <TouchableOpacity style ={styles.Button}>
                            <Text style={styles.TextButton}>Criar Enquete</Text>
                            </TouchableOpacity>
                </View>

        </View>
    );
}

const styles = StyleSheet.create({

       Header:{
          height:"2%"
       },

       Content:{
          height:"74%"
       },

       Footer:{
         height:"30%"
       },

       Input:{
          
        height:45,
        width:290,
        borderBottomWidth:0.8,
        marginTop:30,
        borderRadius:10,
        marginStart:35,

    },

    TinyInput:{
          
        height:45,
        width:170,
        borderBottomWidth:0.8,
        marginTop:30,
        borderRadius:10,
        marginStart:35,

    },

    Button:{
        backgroundColor:"#0b5d66",
        height:"25%",
        width:"70%",
        marginStart:55,
        marginTop:40,
        borderRadius:6,
        shadowOffset: {
         width: 7,
         height: 7,
       },
       shadowOpacity: 0.11,
       shadowRadius: 3.84,
       
       elevation: 5,
      
    
     },
 
     TextButton:{
         textAlign:"center",
         color:"#FFF",
         fontSize:18,
         marginTop:10
     },

     Button2:{
        backgroundColor:"#82898c",
        height:"10%",
        width:"50%",
        marginStart:36,
        marginTop:30,
        borderRadius:6,
        shadowOffset: {
         width: 7,
         height: 7,
       },
       shadowOpacity: 0.11,
       shadowRadius: 3.84,
       
       elevation: 5,
      
    
     },

});