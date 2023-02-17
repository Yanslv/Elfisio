import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2b961f',
        justifyContent: 'space-evenly',
      }}>
        <View style={{ justifyContent:"center", alignItems:"center" }}>
            <Text>
                LOGOTIPO
            </Text>
        </View>
      <View style={{justifyContent: 'space-around'}}>
        <View style={{margin: 24, justifyContent: 'space-around'}}>
          <TextInput
            style={{backgroundColor: '#ffff', borderRadius: 4}}
            placeholder="Digite seu nome"></TextInput>
        </View>
        <View style={{margin: 24, justifyContent: 'space-around'}}>
          <TextInput
            style={{backgroundColor: '#ffff', borderRadius: 4}}
            placeholder="Digite sua senha"></TextInput>
        </View>
        <View style={{margin: 24}}>
          <Button title="ENTRAR"></Button>
        </View>
      </View>
    </View>
  );
};
