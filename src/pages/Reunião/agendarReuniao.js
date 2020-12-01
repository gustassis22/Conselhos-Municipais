import * as React from 'react';
import {useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image,  StyleSheet, TextInput, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function AgendarReuniao(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [date, setDate] = useState(new Date());
    const [local, setLocal] = useState();

    return (
        <View>
                <View style={styles.Header}>
                     
                </View>

                <View style={styles.Content}>
                            <TextInput 
                                placeholder="Título da Reunião"
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
                                placeholder="Data e Hora"
                                autoCorrect={false}
                                onChangeText={text => {setDescricao(text)}}
                                style={styles.Input}
                             
                                
                            >
                            </TextInput>

                            <DropDownPicker
                                    items={[
                                        {label: 'Camara Municipal', value: 'camara', icon: () => <Icon name="flag" size={18} color="#900" />},
                                        {label: 'Associação dos Aposentados', value: 'associacao', icon: () => <Icon name="flag" size={18} color="#900" />},
                                    ]}
                                    defaultValue={local}
                                    containerStyle={{height: 50, width:320, marginTop:40}}
                                    placeholder="Local da Reunião"
                                    style={{backgroundColor: '#f4f4f4',  marginStart:36}}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{backgroundColor: '#fafafa'}}
                                    onChangeItem={item => setLocal(item.value)}
                                />

                            <TouchableOpacity style ={styles.Button2}>
                            <Text style={styles.TextButton}>Anexar Pauta</Text>
                            </TouchableOpacity>
                           

                           
                </View>

                <View style={styles.Footer}>
                           <TouchableOpacity style ={styles.Button}>
                            <Text style={styles.TextButton}>Agendar Reunião</Text>
                            </TouchableOpacity>
                </View>

        </View>
    );
}

const styles = StyleSheet.create({

       Header:{
          height:"10%"
       },

       Content:{
          height:"65%"
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