import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View} from 'react-native'
import { TextCustom } from "../../../styleGlobal";

export const Menu = () => {

    const navigation = useNavigation()

    return(
    <View>
        <TextCustom>
            Teste
        </TextCustom>
    </View>
 )
}