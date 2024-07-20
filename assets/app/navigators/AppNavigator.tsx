import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'app/screens/LoginScreen';
import HomeScreen from 'app/screens/HomeScreen';
import PacienteScreen from 'app/screens/PacienteScreen';
import ConsultaScreen from 'app/screens/ConsultaScreen';
import ProntuarioScreen from 'app/screens/ProntuarioScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Paciente" component={PacienteScreen} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} />
        <Stack.Screen name="Prontuario" component={ProntuarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
