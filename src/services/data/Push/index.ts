import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import {Alert, Platform} from 'react-native';
import Constants from "expo-constants";
import { apiUser} from '../';
export interface IExtra{
    eas:{
        projectId: string
    }
}
export async function registerForPushNotificationsAsync() {
    let token;
    if (Platform.OS === 'android'){
        await Notifications.setNotificationChannelAsync('default',
        {
            name: 'deafult',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
    if (Device.isDevice){
        const{ status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted'){
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status;

        }
        if (finalStatus !== 'granted'){
            Alert.alert('falha ao obter envio do token para envio de mensagens push')

        }
        const extra = Constants.expoConfig?.extra as IExtra
        token = (await Notifications.getExpoPushTokenAsync({
            projectId: extra.eas.projectId,

        }));
        await apiUser.updateToken(token.data)
    } else {
        Alert.alert('voce deve user um dispositivo fisico para receber notificaçoes push')
    }

   return token; 
}