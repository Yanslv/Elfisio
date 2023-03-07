import React from "react";
import { Text, View } from "react-native";
import { TextCustom } from "../../../styleGlobal";
import { Container } from "./stylePerfil";

export const Perfil = () => {   
    return (
        <>
        <View style={{ flex:1, backgroundColor:"#209", top:0, position:"absolute", width:"100%", height:60}}></View>
            <Container>
                <TextCustom>
                    Perfil
                </TextCustom>
            </Container>
        <Container/>
        </>
)
}