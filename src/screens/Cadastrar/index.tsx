import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Alert } from "react-native"
import { ComponentButtonInterface } from '../../components';
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';
import { IRegister } from "../../services/data/User"
import { ComponentLoading } from '..';
import { apiUser } from '../../services/data'
import { AxiosError } from 'axios';
export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}


export function Cadastrar({navigation}:LoginTypes) {
    const [data, setData] = useState<IRegister>()
    const [isLoading, setIsloading] = useState(true)
    async function handleRegister(){
        try{
            setIsloading(true)
            if(data?.name && data.email && data.password){
                const response = await apiUser.register
                Alert.alert(`response.data.name) sucesso!`)
                navigation.navigate('Login')
            } else {
                Alert.alert("Preencha todos os campos!")
            }
        } catch (error) {
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            let message = ""
            if(errData){
                for (const iterator of errData.errors){
                    message = `${message} ${iterator.message} \n`
            }
        }
        } finally {
            setIsloading(false)
        }
    }
    function handleChange(item:IRegister) {
        setData({ ...data, ...item})
    }
    useEffect(()=>{
        setTimeout(()=>{
            setIsloading(false)   
        },2500);
    }, [])
    
    return (
        <>
        {isLoading ? (
            <ComponentLoading />
        ):(
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
                    onChangeText={(i) => handleChange({ email: i})}
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
                    onChangeText={(i) => handleChange({ password: i})}
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
                    onChangeText={(i) => handleChange({ password: i})}
                />
                </View>
                <ComponentButtonInterface 
                title="Salvar" 
                type="primary" 
                onPressI={handleRegister} />
                <ComponentButtonInterface 
                title="Voltar" 
                type="secondary" 
                onPressI={()=> navigation.navigate('Login')} />
            </KeyboardAvoidingView>
    
            <Text>Insira seu e-mail e senha para se cadastrar...</Text>
    
        </View>
        )}
        </>
    );
}