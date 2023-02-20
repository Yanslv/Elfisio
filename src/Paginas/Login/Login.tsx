
import { signInWithEmailAndPassword } from 'firebase/auth';
import React ,{ useState,useEffect } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";
// import auth from '../../config/firebase';


export const Login = () => {
    const [email, setName] = useState("");
    const [pass, setPass] = useState("");

    const [errorLogin, seteErrorLogin] = useState(0);

    // const loginFirebase = () => {
    //   signInWithEmailAndPassword(auth, email, pass)
    //   .then((userCredential) => {
    //     const user = userCredential.user; 
    //     return user;
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.error(errorMessage)
    // });
    // }
  
    useEffect(() => {
      return () => {
        setTimeout(() => {
          seteErrorLogin(0)
        },5000)
      };
    }, [errorLogin])


    function validaErro(){
      return seteErrorLogin(1)
  }

    return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#0e380a',
            justifyContent: 'space-evenly',
          }}>
            <View style={{ justifyContent:"center", alignItems:"center" }}>
                <Text style={{ fontSize:54, fontWeight:'bold', color:"#00ff73"  }}>
                    ELFISIO
                </Text>
            </View>
          <View style={{justifyContent: 'space-around'}}>
            <View style={{margin: 24, justifyContent: 'space-around'}}>
              <TextInput
                style={{backgroundColor: '#ffff', borderRadius: 4}}
                placeholder="Digite seu nome"
                onChangeText={(text) => {
                  setName(text)
                  if(text.length === 0)
                  validaErro()
                }}
                value={email}
                ></TextInput>
            </View>
            <View style={{margin: 24, justifyContent: 'space-around'}}>
              <TextInput
                secureTextEntry={true}
                style={{backgroundColor: '#ffff', borderRadius: 4}}
                placeholder="Digite sua senha"
                onChangeText={(text) => {
                  setPass(text)
                    if(text.length === 0)
                    validaErro()
                  }}
                value={pass}
                ></TextInput>
            </View>
            <View style={{margin: 24}}>
              <TouchableOpacity 
              style={{ 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius:4, 
              marginTop: 20,
              padding:10, 
              borderBottomColor:'#12ca40',
              borderBottomWidth:4,
              borderTopColor:'#12ca40',
              borderTopWidth:4
            }}
              onPress={()=> {
                // loginFirebase()
                 if(email.length === 0 || pass.length === 0){
                   validaErro()
                  }
              }}>
                <Text style={{ fontWeight:"bold", fontSize:24, color:"#fff"}}>
                    ENTRAR 
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {errorLogin === 1 ? 
          <View style={{ backgroundColor:"#000000", position:"absolute", top:0, width:"100%", alignItems:'center', padding:4 }}>
            <Text style={{ fontSize:24, fontWeight:'bold', color:"#fff"}}>
              O mano cê ta fazendo coisa errada!
            </Text>
          </View>
          :
            <View/>
          }
        </View>
      );
}


