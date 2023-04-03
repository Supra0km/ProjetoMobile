import React from 'react';
import { View, Text, KeyboardAvoidingView } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../styles/colors';

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
            </KeyboardAvoidingView>

            <Text>Oi</Text>

        </View>

    )
}