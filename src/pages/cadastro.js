import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert, CheckBox} from 'react-native';

export default function Cadastro(){

      const [name, setName] = useState("");
      const [cpf, setCpf] = useState("");
      const [email, setEmail] = useState("");
      const [type, setType] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] =  useState("");
      const [isSelected, setSelection] = useState(false);

      return(

          <View>
             <View style={styles.Content}>
                            <TextInput 
                                placeholder="Nome Completo"
                                autoCorrect={false}
                                onChangeText={text => {setName(text)}}
                                style={styles.Input}
                                value={name}
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Endereço Email"
                                autoCorrect={false}
                                onChangeText={text => {setEmail(text)}}
                                style={styles.Input}
                                value={email}
                                keyboardType={"email-address"}
                                textContentType={"emailAddress"}
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="CPF"
                                autoCorrect={false}
                                onChangeText={text => {setCpf(text)}}
                                style={styles.Input}
                                value={cpf}
                                keyboardType={"numeric"}
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Profissão/Função"
                                autoCorrect={false}
                                onChangeText={text => {setName(text)}}
                                style={styles.Input}
                                value={name}
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Senha"
                                autoCorrect={false}
                                onChangeText={text => {setPassword(text)}}

                                style={styles.Input}
                                textContentType={"password"}
                                secureTextEntry={true}
                                value={password}
                            >
                            </TextInput>

                            <TextInput 
                                placeholder="Confirmar Senha"
                                autoCorrect={false}
                                onChangeText={text => {setConfirmPassword(text)}}
                                style={styles.Input}
                                textContentType={"password"}
                                secureTextEntry={true}
                                value={confirmPassword}
                            >
                            </TextInput>
             </View>

             <View style={styles.Footer}>
                                              

                            <TouchableOpacity style ={styles.Button}>
                            <Text style={styles.TextButton}>Cadastre-se</Text>
                            </TouchableOpacity>
             </View>

          </View>

      );
};

const styles = StyleSheet.create({

    Content:{
         marginTop:10,
         height:"70%"
    },

    Input:{
          
        height:45,
        width:290,
        borderBottomWidth:0.8,
        marginTop:30,
        borderRadius:10,
        marginStart:35,

    },

    Button:{
        backgroundColor:"#0b5d66",
        height:"25%",
        width:"60%",
        marginStart:70,
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

     Footer:{
         height:"30%",
         marginTop:20,
     },
     
  

});