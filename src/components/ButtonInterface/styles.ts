import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';


export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.roxo,
        borderRadius: 5,
        margin: 10,
    },
    buttonSecondary: {
        backgroundColor: colors.black,
        borderRadius: 5,
        margin: 10,
    },
    buttonThird: {
        backgroundColor: colors.third,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        fontSize:18,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        color: colors.white
    }
})