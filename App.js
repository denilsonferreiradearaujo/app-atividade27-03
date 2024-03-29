import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Cadastrar from './src/pages/Cadastrar';
import ExibirRegistros from './src/pages/ExibirRegistros';
// import PesquisarRegistros from './src/pages/PesquisarRegistros';

// Abra ou crie o banco de dados SQLite
// const db = new DatabaseConnection.getConnection; // 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Página Home',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            },
            // headerShown:false
          }}
        />

        <Stack.Screen
          name='Cadastrar'
          component={Cadastrar}
          options={{
            title: 'Cadastrar',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            }
          }}
        />

        <Stack.Screen
          name='ExibirRegistros'
          component={ExibirRegistros}
          options={{
            title: 'Exibir registros',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            }
          }}
        />

        {/* <Stack.Screen
          name='PesquisarRegistros'
          component={PesquisarRegistros}
          options={{
            title: 'Pesquisar registros',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#969'
            }
          }}
        /> */}
        
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
