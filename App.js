import * as React from 'react';
import { View, Text, Button, LogoTitle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/pages/login";
import Menu from "./src/pages/home";
import Cadastro from "./src/pages/cadastro";
import Reunioes from "./src/pages/Reunião/reunioes";
import Agendar from "./src/pages/Reunião/agendarReuniao";
import Documentos from "./src/pages/Documentos/documentos";
import Enquetes from "./src/pages/Enquetes/enquetes";
import NovaEnquete from "./src/pages/Enquetes/novaEnquete";
import Sessoes from "./src/pages/Sessoes/sessoes";
import NovaSessao from "./src/pages/Sessoes/novaSessao";
import Info from "./src/pages/Informações/Info";

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />

        <Stack.Screen 
            name="Menu" 
            component={Menu}
            options={{
              title: "Menu",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />

         <Stack.Screen 
            name="Cadastro" 
            component={Cadastro}
            options={{
              title: "Cadastro",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />  
           <Stack.Screen 
            name="Reunioes" 
            component={Reunioes}
            options={{
              title: "Reuniões",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />  


            <Stack.Screen 
            name="Agendar" 
            component={Agendar}
            options={{
              title: "Agendar",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        /> 

           <Stack.Screen 
            name="Documentos" 
            component={Documentos}
            options={{
              title: "Documentos",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />  


          <Stack.Screen 
            name="Enquetes" 
            component={Enquetes}
            options={{
              title: "Enquetes",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />   

         <Stack.Screen 
            name="NovaEnquete" 
            component={NovaEnquete}
            options={{
              title: "Criar Enquete",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />   

        
<Stack.Screen 
            name="Sessoes" 
            component={Sessoes}
            options={{
              title: "Sessões",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />   

         <Stack.Screen 
            name="NovaSessao" 
            component={NovaSessao}
            options={{
              title: "Criar Sessão",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        />   

         <Stack.Screen 
            name="Info" 
            component={Info}
            options={{
              title: "Informações",
              headerStyle: {
                backgroundColor: '#0b5d66',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }}
        /> 
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 