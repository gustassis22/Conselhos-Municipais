import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';

export default function Login({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


function HandleCadastro(){
    navigation.navigate("Cadastro")
}

 function HandleLogin (){
      
     if (email === 'admin@gmail.com'){
         if(password === '12345'){
             Alert.alert("Seja Bem Vindo!");

             navigation.navigate("Menu");

         }else{
             Alert.alert("Ops! A senha informada não confere!");
         }
     }else{
           Alert.alert("Ops! O email informado não está cadastrado!")
     }
 }

    return(



        <View>
            <View style={styles.Logo}>

                           <Image source={require("../../assets/images/ouro-branco.png")}/>

            </View>
            <View style={styles.Content}>

                            <TextInput 
                                placeholder="Email"
                                autoCorrect={false}
                                onChangeText={text => {setEmail(text)}}
                                style={styles.Input}
                                value={email}
                                
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
                            <TouchableOpacity> 
                                <Text style={styles.ForgotPassword}>Esqueci minha senha</Text>
                                </TouchableOpacity>
            </View>

            <View style={styles.Footer}>

                            <TouchableOpacity style ={styles.Button} onPress={HandleLogin}>
                            <Text style={styles.TextButton}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={HandleCadastro}>
                                <Text style={styles.LinkCadastro}>Cadastre-se</Text>
                            </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    Logo:{
        marginStart:80,
        marginTop:20,
        height:"33%"
    },

    Content:{
      marginStart:10,
      height:"33%"
    },

    Input:{
          
        height:45,
        width:290,
        borderBottomWidth:0.8,
        marginTop:30,
        borderRadius:10,
        marginStart:35,

    },

    Footer:{
      height:"30%"
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

    LinkCadastro:{
        color:'#cc9814',
        fontSize:20,
        textAlign:"center",
        marginTop:19,
        fontWeight:"bold",
        textDecorationLine:"underline"
},

    ForgotPassword:{
      color:"#cc9814",
      textAlign:"center",
      marginTop:15,
      fontSize:13,
    }

    
});