import React from 'react';
import { View, Text, KeyboardAvoidingView } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components';

export function Login() {
    return (

        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor={colors.third}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                />
                </View>

                <View style={styles.formRow}>
                <Ionicons name="key" style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={colors.third}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.input}
                />
                </View>
                <ComponentButtonInterface title="Entrar" type="primary" onPressI={()=>{console.log("Login")}} />
            </KeyboardAvoidingView>

            <Text>Insira seu e-mail e senha para login...</Text>

        </View>

    )
}