import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewLogin } from './src/Paginas/Login/NewUser/NewLogin';
import { Home } from './src/Paginas/Home/Home'
import { Perfil } from './src/Paginas/Perfil/Perfil';
import { Menu } from './src/Paginas/Menu/Menu';


const Stack = createNativeStackNavigator()

function App(){
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="NewLogin" component={NewLogin} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
