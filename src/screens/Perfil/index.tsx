import React from "react"
import { View, Text } from "react-native"
import { ComponentButtonInterface } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"

export function Perfil({navigation}:TabTypes) {
    function handleVoltar() {

        const tab = navigation.getParent()
        tab?.goBack()

    }
    return(
        <View style={styles.container}>

            <Text>Perfil</Text>
            <ComponentButtonInterface title="Voltar" type="primary" onPressI={handleVoltar} />

        </View>
    )
}