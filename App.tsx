import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Navigation/Home';
import { Login } from './src/Navigation/Login';

const Stack = createNativeStackNavigator()

function App(){
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
