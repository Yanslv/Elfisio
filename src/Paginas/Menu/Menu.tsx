import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextBold} from '../../../styleGlobal';

export const Menu = () => {
  const navigation = useNavigation();

  const Alunos = [];

  const cadastraAluno = () => {};

  return (
    <View style={{backgroundColor: '#003b14', flex: 1}}>
      <View
        style={{
          backgroundColor: '#009933',
          borderRadius: 4,
          width: '100%',
          height: 120,
          padding: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextBold>CADASTRO DE ALUNOS</TextBold>
      </View>
      <View
        style={{
          margin: 16,
          elevation: 10,
          shadowColor:"#1fb344",
          backgroundColor: '#94ff88',
          flex: 1,
          borderRadius: 4,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
        }}>
        <View
          style={{
            backgroundColor: '#fafafa',
            width: '100%',
            elevation: 10,
            borderWidth:2,
            borderColor:"#1fb344",
            shadowColor:"#1fb344",
            height: 120,
            borderRadius: 4,
          }}></View>
      </View>
    </View>
  );
};
