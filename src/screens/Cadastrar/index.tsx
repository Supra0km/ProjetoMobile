import React from 'react';
import { View, Text, KeyboardAvoidingView } from "react-native"
import { ComponentButtonInterface } from '../../components';
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';

export function Cadastrar({navigation}:LoginTypes) {
    return (

        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastre-se</Text>
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

                <View style={styles.formRow}>
                <Ionicons name="key" style={styles.icon} />
                <TextInput
                    placeholder="Confirmar senha"
                    placeholderTextColor={colors.third}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.input}
                />
                </View>
                <ComponentButtonInterface 
                title="Salvar" 
                type="primary" 
                onPressI={()=> navigation.navigate('Drawer')} />
                <ComponentButtonInterface 
                title="Voltar" 
                type="secondary" 
                onPressI={()=> navigation.navigate('Login')} />
            </KeyboardAvoidingView>

            <Text>Insira seu e-mail e senha para se cadastrar...</Text>

        </View>

    )
}